import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { getJwtSecretKey } from "./app/lib/auth";


export const middleware=async(request:NextRequest)=>{
    const token=request.cookies.get("user-token")?.value
    const {pathname,origin}=request.nextUrl
    
    try{
        if(pathname === "/Login"){

            if(token) 
            return NextResponse.redirect(`${origin}`)
            return NextResponse.next()
            
        }

        if(!token){
            return NextResponse.redirect("my-quiz-eight.vercel.app/Login")

        }

        
       

        


        const verifyToken=await jwtVerify(
            token,
            new TextEncoder().encode(getJwtSecretKey())
        )

        console.log("JWT auth:",verifyToken)

        if(verifyToken){
            return NextResponse.next()

        }
        return NextResponse.json({
                error:{Message: "Authentication required"}},{status:401
       })
        

    }
    catch(error){
        console.log(error)

    }
}
export const config={
    matcher:["/","/Login","/protected"]
}