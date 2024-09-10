import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/user.model";
//to get data from NEXT server
import { NextResponse, NextRequest } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

//Connecting Database from dbConfig file...Direct function call before anything
connect();


export async function POST(request:NextRequest){
    try {
        const reqBody = await request.json();
        const {token} = reqBody;
        console.log(token)

        const user = await User.findOne({verifyToken : token, verifyTokenExpiry:{$gt:Date.now()}})

        if(!user){
            return NextResponse.json({ error: 'Invalid Token' }, { status: 400 });
            
        }

        user.isVerified = true
        user.verifyToken = undefined
        user.verifyTokenExpiry = undefined

        await user.save();

        return NextResponse.json(
            {
                message : 'User Verified Successfully',
                success : true,

            }, {status : 500}
        );
        
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}