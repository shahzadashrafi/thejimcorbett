import { connect } from "@/dbConfig/dbConfig";
import Enquiry from "@/models/enquiry.model"
//to get data from NEXT server
import { NextResponse, NextRequest } from "next/server";

//Connecting Database from dbConfig file...Direct function call before anything
connect();

//standar NEXT SERVER function - POST method
export async function POST(request: NextRequest) {
  try {
    //convert body items to json first - the post data
    const reqBody = await request.json();
    //only three properties send to request body of following types
    const { name, email, mobile, date } = reqBody;

    console.log(reqBody);

    //find user by email if exist using User Model
    const enquiry = await Enquiry.findOne({ email });
    //if exist then already exist
    if (enquiry) {
      return NextResponse.json(
        { error: "Your Enquiry is already submitted" },
        { status: 400 }
      );
    }
    
    const newEnquiry = new Enquiry({name, email, mobile, date});
    //savind user into database
    const savedEnquiry = await newEnquiry.save();
    console.log(savedEnquiry);

    
    //return registration message
    return NextResponse.json({
      message: "Enquiry Submitted Successfully",
      success: true,
      savedEnquiry,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
