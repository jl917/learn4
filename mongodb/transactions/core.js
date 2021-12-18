const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://julong:524wK8ZDZ9Kqxbmf@cluster0.eterj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function commitWithRetry(session) {
  try {
    await session.commitTransaction();
    console.log('Transaction committed.');
  } catch (error) {
    if (error.hasErrorLabel('UnknownTransactionCommitResult')) {
      console.log('UnknownTransactionCommitResult, retrying commit operation ...');
      await commitWithRetry(session);
    } else {
      console.log('Error during commit ...');
      throw error;
    }
  }
}

async function runTransactionWithRetry(txnFunc, client, session) {
  try {
    await txnFunc(client, session);
  } catch (error) {
    console.log('Transaction aborted. Caught exception during transaction.');
    // If transient error, retry the whole transaction
    if (error.hasErrorLabel('TransientTransactionError')) {
      console.log('TransientTransactionError, retrying transaction ...');
      await runTransactionWithRetry(txnFunc, client, session);
    } else {
      throw error;
    }
  }
}

async function run() {
  await client.connect();
  const db = client.db('coll');
  const updateInfo = async () => {
    // Step 1: Start a Client Session
    const session = client.startSession();
    // Step 2: Optional. Define options to use for the transaction
    const transactionOptions = {
      readPreference: 'primary',
      readConcern: { level: 'local' },
      writeConcern: { w: 'majority' }
    };

    const user = db.collection('user');
    const email = db.collection('email');

    session.startTransaction(transactionOptions);
    await user.insertOne({ username: 'dao', password: '123123123' }, { session })
    await email.insertOne({ userId: 'dao', email: 'a@ad.com' }, { session })

    try {
      await commitWithRetry(session);
    } catch (error) {
      await session.abortTransaction();
      console.log(error)
    } finally {
      await client.close();
    }
  }

  return client.withSession(session =>
    runTransactionWithRetry(updateInfo, client, session)
  );
}

run().catch(console.dir);