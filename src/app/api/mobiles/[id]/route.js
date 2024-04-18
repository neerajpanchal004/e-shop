import { NextResponse } from "next/server"
import { Mobiles } from "../../data"
export function GET (req,{params}) {
    const {id}= params
    return NextResponse.json(Mobiles.find(m => m.id === parseInt(id))  || 'Not Found')
}