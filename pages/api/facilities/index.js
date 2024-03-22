import connectDb from "../../../db"
import Hotel from "@/models/hotel-model"; 
export default async function handler(req, res) {

  if (req.method === "GET") {
    connectDb();

    const facilities = await Hotel.find({}).distinct("facilities.name");
    res.status(200).json({ msg: "list of facilities !", facilities });
  }
}