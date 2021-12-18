const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

const SOURCE = 'sample';
const TARGET = 'sample_210722';
const collections = [
  'comments',
  'companies',
  'grades',
  'inspections',
  'listingsAndReviews',
  'movies',
  'posts',
  'routes',
  'sales',
  'shipwrecks',
  'stories',
  'theaters',
  'trips',
  'tweets',
  'users',
  'weatherdata',
  'zips',
]

async function run() {
  try {
    await client.connect();

    const database = client.db(SOURCE);
    const database2 = client.db(TARGET);

    for (let i = 0; i < collections.length; i++) {

      const info = `[${i + 1}/${collections.length}] ${collections[i]}`;
      const datas = database.collection(collections[i]);
      // projection
      const data = await (await datas.find({}, {projection: {
        _id: 0
      }}).toArray())
      console.log(`${info} 가져오기 완료`);
      const datas2 = database2.collection(collections[i]);
      datas2.insertMany(data, { ordered: false });
      console.log(`${info} insert 완료`);

    }
    console.log('jes')
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);