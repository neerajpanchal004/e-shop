import { NextResponse } from "next/server"
import {Sports } from "../../data"
export function GET (req,{params}) {
    const {id}= params
    return NextResponse.json(Sports.find(m => m.id === parseInt(id))  || 'Not Found')
}