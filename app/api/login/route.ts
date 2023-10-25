import { NextRequest, NextResponse } from "next/server";
import {SignJWT} from 'jose'

import {cookies} from 'next/headers'
import { getJwtSecretKey } from "@/app/lib/auth";

export const POST=async(request:NextRequest)=>{
    const body=await request.json()
    if(body.username  && body.password){
    const jwt=await new SignJWT({
        username : body.username,
        role: "admin"
    }).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("1m").sign(new TextEncoder().encode(getJwtSecretKey()))
    console.log(jwt)
    cookies().set("user-token",jwt,{
        httpOnly:true
    })
    return NextResponse.json(
        {accessToken: jwt},{status : 200}
    )
    }
    return NextResponse.json(
        {message : "Failed to create token"},
        {status : 401}
        
    )
    
    
}   

