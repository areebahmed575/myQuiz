import { jwtVerify } from "jose";
import { NextRequest, NextResponse } from "next/server";
import { getJwtSecretKey } from "./app/lib/auth";


export const middleware=async(request:NextRequest)=>{
    const token=request.cookies.get("user-token")?.value
    const {pathname,origin}=request.nextUrl
    console.log(token)
    try{
        if(pathname === "/Login"){

            if(token) 
            return NextResponse.redirect(`${origin}`)
            return NextResponse.next()
            
        }

        if(!token){
            return NextResponse.redirect("http://localhost:3000/Login")

        }

        if(token){
            if (request.nextUrl.pathname.startsWith('/Login')) {
                return NextResponse.rewrite(new URL('/', request.url))
              }
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