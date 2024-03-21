import mongoose from "mongoose";
const URI = "mongodb+srv://ankitjha:ankitjha@cluster0.hmkgosd.mongodb.net/OYO?retryWrites=true&w=majority&appName=Cluster0"
const connectDb = async()=>{
await mongoose.connect(URI);
console.log("Database Connected Successfully");
}


export default connectDb;