const url = require("../.env")
const { MongoClient } = require("mongodb")
let client = new MongoClient(url, {
  family: 4,
  serverSelectionTimeoutMS: 15000
}); // this is for i am using personal hotspot if wifi use normal
// let client = new MongoClient(url)
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

  //* const result=await collection.insertMany([{firstname:"sdaf"},{firstname:'dfsa' },{firstname:'fdsa'}]))
  // console.log(result)
  // let user_data = [{
  //   firstname: "rohan",
  //   lastname: "sharma",
  //   phoneNumber:722025555,
  //   address: "moti nagar",
  // },
  // {
  //   firstname: "ravi",
  //   lastname: "sharma",
  //   phoneNumber: 9856321470,
  //   address: "karampura",
  // },
  // {
  //   firstname: "roshan",
  //   lastname: "kumar",
  //   phoneNumber: 9856321470,
  //   address: "basai",
  // }]
  // console.log(await collection.insertMany(user_data));

  // &  update

  //* const updateResult = await collection.updateOne({ firstname: 'rohit'},{ $set:  { lastname: "kohli" }})
  // console.log('Updated documents =>', updateResult);

  // todo read all user

  //* const Oneuser = await collection.find({ firstname: 'rohit' }).toArray();
  const user = await collection.find({}).toArray();
  console.log("All Users : ");
  console.log(user);

  // ! delete user

  // const deleteResult = await collection.deleteMany({name: "Keshav"});
  // console.log('Deleted documents =>', deleteResult);

  // ~ Count Document
  // const result = await collection.countDocuments({ lastname: 'sharma' });
  // console.log("total count result : " + result);

  // @replace
  const result = await collection.replaceOne({ firstname: 'fdsa' }, { firstname: "mohan", lastname: "khan", phoneNumber: 7418529333, address: "kirti nagar" });
  console.log("total count result : " + result);



  return 'done.';
}

main().then(console.log).catch(console.error).finally(() => client.close());