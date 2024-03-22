import connectDB from "@/db";
import Razorpay from "razorpay";
import shortid from "shortid";
import Hotel from "@/models/hotel-model";

export default async function handler(req, res) {
  if (req.method === "POST") {
    connectDB(); // Connect to the database

    try {
      // Retrieve the hotel ID from the request body
      const { id } = req.body;

      // Find the hotel in the database by its ID
      const hotel = await Hotel.findById(id);

      // If the hotel is found, proceed to create a Razorpay order
      if (hotel) {
        const amount = hotel.price * 100; // Convert price to smallest currency unit (in paise for INR)

        // Options for creating the Razorpay order
        const options = {
          amount: amount.toString(),
          currency: "INR",
          receipt: shortid.generate(),
          payment_capture: 1,
        };

        // Initialize Razorpay instance with your API credentials
        const razorpay = new Razorpay({
          key_id: process.env.RAZORPAY_KEY,
          key_secret: process.env.RAZORPAY_SECRET,
        });

        // Create the Razorpay order
        const order = await razorpay.orders.create(options);

        // Return the order details as JSON response
        return res.status(201).json({
          id: order.id,
          currency: order.currency,
          amount: order.amount,
        });
      } else {
        // If the hotel is not found, return a 404 error
        return res.status(404).json({ error: "Hotel not found" });
      }
    } catch (error) {
      // Handle any errors that occur during the process
      console.error("Error creating Razorpay order:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Handle requests other than POST method
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}
