import { connect } from "@/dbConfig/dbConfig";
//to get data from NEXT server
import { NextResponse, NextRequest } from "next/server";


//Connecting Database from dbConfig file...Direct function call before anything
connect();

//standar NEXT SERVER function - POST method
export async function GET(request: NextRequest) {
  try {
    const response = NextResponse.json({
      message : 'Logged Out',
      status : 400,
      success : true
    })

    response.cookies.set("token", "", {httpOnly: true, expires: new Date(0)})
    return response
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
