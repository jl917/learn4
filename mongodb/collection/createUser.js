const { MongoClient } = require("mongodb");

const uri ="mongodb://localhost:27017";
const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();
    const db = client.db('coll');
    await db.createCollection('user', {
      validationLevel: 'strict',
      validator: {
        $jsonSchema: {
          bsonType: 'object',
          required: ['username', 'password'],
          properties: {
            username: {
              bsonType: 'string',
              description: 'username은 필수',
            },
            password: {
              bsonType: 'string',
              description: 'password는 필수',
            }
          }
        }
      }
    })
    console.log('db생성 완료')
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);