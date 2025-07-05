import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Proj from '@/models/Projects'


export async function GET(){
    await dbConnect();
    const allProjs = await Proj.find();
    return NextResponse.json(allProjs);
}


export async function POST(req){
    try{
        await dbConnect();
        console.log('✅ Connected to MongoDB'); 
        const projData = await req.json();
        const created = await Proj.create(projData);
        return NextResponse.json(created, { status: 201 });


    }
    catch (err) {
        return NextResponse.json({error: 'Server error', details: err.message}, {status: 500});
    }
}