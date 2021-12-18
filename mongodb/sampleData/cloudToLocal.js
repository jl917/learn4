const { MongoClient } = require("mongodb");
const uri ="url";
const client = new MongoClient(uri);

const uri2 ="mongodb://localhost:27017";
const client2 = new MongoClient(uri2);

async function run() {
  try {
    await client.connect();
    const database = client.db('sample_training');
    const datas = database.collection('zips');
    const data = await datas.find().toArray();
    console.log('가져오기 완료');

    await client2.connect();
    const database2 = client2.db('sample');
    const datas2 = database2.collection('zips');
    datas2.insertMany(data, {ordered: false});
    console.log('insert 완료');
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);