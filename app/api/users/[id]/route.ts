import { connectToDB } from "@/app/utils/database/database";
import User from "@/app/utils/database/user_schema";
import { NextApiRequest, NextApiResponse } from "next";

// Update User
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    connectToDB();
    const { fullName, email, password, image } = req.body;
    const updateData = { fullName, email, password, image };
    if (req.method === "PUT") {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { email },
            { $set: updateData },
            { new: true },
          );
          res.status(200).json({updatedUser})
        } catch (error) {
          res.status(500).json({ error });
        }
    } else if (req.method === "GET"){
        try {
            const user = await User.findOne({ email });
            res.status(200).json({user})

        } catch (error) {
            res.status(500).json({ error });
        }
    }
  };

//   export default handler;