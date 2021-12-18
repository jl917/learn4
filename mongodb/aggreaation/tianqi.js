const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('test');
    const datas = db.collection('tianqi');
    // console.log(await datas.find({}).toArray())

    const agg = await datas.aggregate([
      {
        $bucket: {
          groupBy: '$type',
          boundaries: ['1', '2', '3', '4'],
          default: "dddd",
          output: {
            count: { $sum: 1 },
            result: {
              $push: {
                date: '$date',
                value: '$value'
              }
            }
          }
        }

      }
    ]).toArray()
    console.log(JSON.stringify(agg, null, 2))

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);