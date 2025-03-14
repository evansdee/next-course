import mongoose from "mongoose";


const connection = {};
export async function connectToDb() {
  
  try {
    if (!process.env.MONGO) {
      console.log("MONGO ENV VARIABLE:", process.env.MONGO);
        throw new Error("MONGO environment variable is missing");
      }
    if (connection.isConnected) {
      console.log("using existing connection");

      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    // const db = await mongoose.connect(process.env.MONGO, {
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // });

    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
    throw new Error(`Error connecting to db: ${error}`);
  }
}
