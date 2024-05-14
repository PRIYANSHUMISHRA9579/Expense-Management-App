import mongoose from "mongoose";
import colors from "colors";

const connectDb=async()=>{
  try{
    await mongoose.connect(process.env.MONGO_URL)
    console.log(`Server Running on ${mongoose.connection.host}`.bgCyan.white);
  }catch(error)
  {
    console.log(`${error}`.bgRed);
  }
};
export default connectDb;