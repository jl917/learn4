const { MongoClient } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('test');
    const datas = db.collection('chengji');
    // console.log(await datas.find({}).toArray())

    const agg = await datas.aggregate([
      {
        $set: {
          total: {
            $add: ['$shuxue', '$hanyu', '$yingyu'],
          },
          avg: {
            $avg: ['$shuxue', '$hanyu', '$yingyu'],
          }
        }
      },
      // {
      //   $bucket: {
      //     groupBy: '$total',
      //     boundaries: [220, 230, 240, 250],
      //     default: '不及格',
      //     output: {
      //       names: {
      //         $push: {
      //           name: '$name',
      //           total: '$total'
      //         }
      //       }

      //     }
      //   }
      // }
    ]).toArray()
    console.log(JSON.stringify(agg, null, 2))

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);