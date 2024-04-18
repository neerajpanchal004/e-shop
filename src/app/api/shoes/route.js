import { NextResponse } from "next/server"
import { Shoes } from "../data"

export function GET(req){
    return NextResponse.json(Shoes)
}