const { MongoClient } = require('mongodb');

const url = 'mongodb://Eric-Brito:<SENHA>@cluster0-shard-00-00.tdusj.mongodb.net:27017,cluster0-shard-00-01.tdusj.mongodb.net:27017,cluster0-shard-00-02.tdusj.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-vmzxmt-shard-0&authSource=admin&retryWrites=true&w=majority';
const client = new MongoClient(url);

const dbName = 'ifsp';

async function main() {
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('contatos');

  console.log("Aluno: Eric Brito");
  const findResult = await collection.find({}).toArray();
  console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());
