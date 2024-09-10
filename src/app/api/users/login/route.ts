import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
//to get data from NEXT server
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

//Connecting Database from dbConfig file...Direct function call before anything
connect();

//standar NEXT SERVER function - POST method
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json()
    const {email, password} = reqBody

    console.log(reqBody)

    const user = await User.findOne({email})
    if(!user){
      return NextResponse.json({ error: 'user not exists' }, { status: 400 });  
    }
    console.log('user exists')
    const validPassword = await bcryptjs.compare(password, user.password)
    if(!validPassword){
      return NextResponse.json({ error: 'Wrong Password' }, { status: 400 });
    }

    //json web token 
    const tokenData = {
      id: user._id,
      username: user.username,
      email : user.email
    }

    const token = await jwt.sign(tokenData, process.env.SECRET_KEY!, {expiresIn : '1d'})
    const response = NextResponse.json({
      message : 'Logged in',
      status : 400,
      success : true
    })

    response.cookies.set("token", token, {httpOnly: true})
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
