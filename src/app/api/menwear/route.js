import { NextResponse } from "next/server"
import { Menwear } from "../data"

export function GET(req){
    return NextResponse.json(Menwear)
}