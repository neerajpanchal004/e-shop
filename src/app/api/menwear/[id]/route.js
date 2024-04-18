import { NextResponse } from "next/server"
import {Menwear } from "../../data"
export function GET (req,{params}) {
    const {id}= params
    return NextResponse.json(Menwear.find(m => m.id === parseInt(id))  || 'Not Found')
}