// mongodb+srv://<db_username>:WCrf6AyI0z0h36wV@cluster0.kotxlfd.mongodb.net/
// fitnessfreak7gym_db_user
// WCrf6AyI0z0h36wV


let url = "mongodb+srv://fitnessfreak7gym_db_user:WCrf6AyI0z0h36wV@cluster0.kotxlfd.mongodb.net/"
const { MongoClient } = require("mongodb")
// let client = new MongoClient(url, {
//   family: 4,
//   serverSelectionTimeoutMS: 15000
// }); // this is for i am using personal hotspot if wifi use normal
let client=new MongoClient(url) 
let dbName = "myData";

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('user');

  // collection.
  // ^ Insert one
  // let mds={
  //   name: "Keshav",
  //   age: 22,
  //   createdAt: new Date()
  // }

  //* const result = await collection.insertOne(mds);
  // console.log("Inserted document ID:", result.insertedId);

  // ^ insert many 

  //* console.log(await collection.insertMany([{firstname:"sdaf"},{firstname:'dfsa' },{firstname:'fdsa'}]))

  // &  update

  //* const updateResult = await collection.updateOne({ firstname: 'rohit'},{ $set:  { lastname: "kohli" }})
  // console.log('Updated documents =>', updateResult);

  // todo read all user
  //* const Oneuser = await collection.find({ firstname: 'rohit' }).toArray();

  const user = await collection.find({}).toArray();
  console.log("All Users : ");
  console.log(user);

  // ! delete user

  const deleteResult = await collection.deleteMany({ createdAt: '2026-10-19T12:14:39.002' },{firstname:'fdsa'})
  console.log('Deleted documents =>', deleteResult);

  return 'done.';
}

main().then(console.log).catch(console.error).finally(() => client.close());