const { MongoClient } = require("mongodb");

const uri = "mongodb+srv://julong:524wK8ZDZ9Kqxbmf@cluster0.eterj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri);

async function run() {
  await client.connect();
  const db = client.db('coll');
  // Step 1: Start a Client Session
  const session = client.startSession();
  // Step 2: Optional. Define options to use for the transaction
  const transactionOptions = {
    readPreference: 'primary',
    readConcern: { level: 'local' },
    writeConcern: { w: 'majority' }
  };
  try {
    await session.withTransaction(async () => {
      const user = db.collection('user');
      const email = db.collection('email');
      // 성공 케이스
      await user.insertOne({ username: 'dao', password: '123123123' }, { session })
      await email.insertOne({ userId: 'dao', email: 'a@ad.com' }, { session })
    }, transactionOptions)

  } catch (error) {
    console.log(error)
  } finally {
    await session.endSession();
    await client.close();
  }
}
run().catch(console.dir);