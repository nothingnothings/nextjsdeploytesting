import { MongoClient } from 'mongodb'; ///antes disso, instalar pacote 'npm install mongodb'...

export const connectDatabase = async (url) => {
  const client = await MongoClient.connect(url);
  return client;
};





export const insertContact = async (client, document, collection) => {
    const db = client.db();
  
    const result = await db.collection(collection).insertOne(document);
  
  
    return result;
  };
  