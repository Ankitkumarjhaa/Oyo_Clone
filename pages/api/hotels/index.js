import connectDb from "../../../db";
import Hotel from "../../../models/hotel-model";
export default async function handler(req, res) {
     if (req.method === "POST") {
      connectDb()

         const newHotel = new Hotel(req.body);
         const result = await newHotel.save();
         res.status(201).json({ msg: "Hotel added !", result });
       }
       if (req.method === "GET") {
        connectDb()

        console.log(req.query.city)
        const hotels = await Hotel.find({ location: req.query.city });
        if (hotels.length > 0) {
          return res.status(200).json({ msg: "Good", hotels });
        }
        const allhotels = await Hotel.find({});
        return res.status(200).json({ msg: "Good", allhotels });
      }
  }