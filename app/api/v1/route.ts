import { NextRequest } from "next/server";

export function GET(req : NextRequest){
    return Response.json({message : "working fine"})
}