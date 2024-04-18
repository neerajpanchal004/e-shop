import { NextResponse } from "next/server"
import { Shoes } from "../../data"
export function GET (req,{params}) {
    const {id}= params
    return NextResponse.json(Shoes.find(m => m.id === parseInt(id))  || 'Not Found')
}