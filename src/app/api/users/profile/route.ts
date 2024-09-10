import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
//to get data from NEXT server
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import Enquiry from "@/models/enquiry.model";

//Connecting Database from dbConfig file...Direct function call before anything
connect();

//standar NEXT SERVER function - POST method
export async function POST(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request)
    const user = await User.findOne({_id:userId}).select("-password")
    if(!user){
        return NextResponse.json({error : 'User not found'})
    }
    
    const userData = await Enquiry.find({userId})
    
    return NextResponse.json({
        message : 'User Found',
        data : User
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
