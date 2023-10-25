export const getJwtSecretKey=()=>{
    const secret=process.env.JWT_SECRET_KEY
    if(!secret || secret.length === 0){
        throw  new Error("secret is not set in jwt")
    }
    return secret
}