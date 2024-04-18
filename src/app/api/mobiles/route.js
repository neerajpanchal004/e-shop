import { NextResponse } from "next/server"
import { Mobiles } from "../data"

export function GET(req){
    return NextResponse.json(Mobiles)
}