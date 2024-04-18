import { NextResponse } from "next/server"
import { Sports } from "../data"

export function GET(req){
    return NextResponse.json(Sports)
}