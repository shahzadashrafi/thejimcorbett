import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
//to get data from NEXT server
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

//Connecting Database from dbConfig file...Direct function call before anything
connect();

//standar NEXT SERVER function - POST method
export async function POST(request: NextRequest) {
  try {
    //convert body items to json first - the post data
    const reqBody = await request.json();
    //only three properties send to request body of following types
    const { username, email, password } = reqBody;

    console.log(reqBody);

    //find user by email if exist using User Model
    const user = await User.findOne({ email });
    //if exist then already exist
    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }
    //creating salt
    const salt = await bcryptjs.genSalt(10);
    //creating hashed password
    const hashedPassword = await bcryptjs.hash(password, salt);
    //creating new user with hashed password
    const newUser = new User({ username, email, password: hashedPassword });
    //savind user into database
    const savedUser = await newUser.save();
    console.log(savedUser);

    //sending verification email to user's email address
    await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });
    //return registration message
    return NextResponse.json({
      message: "User Registered Successfully",
      success: true,
      savedUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
