import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import LifeEvent from '@/models/LifeEvent'


export async function GET(){
    await dbConnect();
    const allEvent = await LifeEvent.find();
    return NextResponse.json(allEvent);
}


export async function POST(req){
    try{
        await dbConnect();
        console.log('✅ Connected to MongoDB'); 
        const eventData = await req.json();
        const created = await LifeEvent.create(eventData);
        return NextResponse.json(created, { status: 201 });


    }
    catch (err) {
        return NextResponse.json({error: 'Server error', details: err.message}, {status: 500});
    }
}