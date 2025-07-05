import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Edu from '@/models/Education';
import Wok from '@/models/Work';

//GET FUNCTION
export async function GET(){
    await dbConnect();
    const educations = await Edu.find();
    const works = await Wok.find();

   return NextResponse.json({
  educations,
  works
});


} 

export async function POST(req) {
  try {
    await dbConnect();
    console.log('✅ Connected to MongoDB');

    const data = await req.json();

    // Check if data is an array
    if (Array.isArray(data)) {
      const workItems = data.filter(item => item.category === "Work");
      const eduItems = data.filter(item => item.category === "Education");

      const insertedWork = workItems.length > 0 ? await Wok.insertMany(workItems) : [];
      const insertedEdu = eduItems.length > 0 ? await Edu.insertMany(eduItems) : [];

      return NextResponse.json(
        { insertedWork, insertedEdu },
        { status: 201 }
      );
    }

    // Handle single object
    if (data.category === "Work") {
      const created = await Wok.create(data);
      return NextResponse.json(created, { status: 201 });
    }

    if (data.category === "Education") {
      const created = await Edu.create(data);
      return NextResponse.json(created, { status: 201 });
    }

    return NextResponse.json({ error: 'Invalid category' }, { status: 400 });

  } catch (err) {
    console.error('❌ MongoDB error:', err.message);
    return NextResponse.json({ error: 'Server error', details: err.message }, { status: 500 });
  }
}
