import { connectToDB } from "@/app/utils/database/database";
import User from "@/app/utils/database/user_schema";
import { NextRequest, NextResponse } from "next/server";

// Get all cart items of a single user by id
export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  await connectToDB();
  try {
    const user = await User.findById(params.id).exec();
    const { cart } = user;
    return new NextResponse(JSON.stringify({ cart }), { status: 200 });
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }));
  }
};

// Update Items in user cart
export const PUT = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
    let data = await request.json();
    console.log(data[0])
  await connectToDB();
  try {
    const user = await User.findOneAndUpdate(
      { email: params.id },
      { $set: { cart: data[0]._id } },
      { new: true }
    );
    const { cart } = user
    return new NextResponse(JSON.stringify({ cart }), { status: 200 }); 
  } catch (error) {
    return new NextResponse(JSON.stringify({ error }));
  }
};
