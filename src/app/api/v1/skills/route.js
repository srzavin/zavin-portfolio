import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Skill from '@/models/Skill';

// GET
export async function GET() {
  await dbConnect();
  const allSkills = await Skill.find(); 
  return NextResponse.json(allSkills);
}

// POST
export async function POST(req) {
  try {
    await dbConnect();
    console.log('✅ Connected to MongoDB'); // <--- add this

    const data = await req.json();
    const created = await Skill.create(data);

    return NextResponse.json(created, { status: 201 });
  } catch (err) {
    console.error('❌ MongoDB error:', err.message);
    return NextResponse.json({ error: 'Server error', details: err.message }, { status: 500 });
  }
}

// PUT
export async function PUT(req) {
  await dbConnect();
  const { name, usage } = await req.json();



    const skill = await Skill.findOneAndUpdate(
    { name: name },
    { usage: usage },
    { new: true }
  );

  return NextResponse.json(skill);
}

// DELETE
export async function DELETE(req) {
  await dbConnect();
  const { name } = await req.json();

  const result = await Skill.findOneAndDelete({name: name});

  if(!result){
    return NextResponse.json({ error: 'Skill not found' }, { status: 404 });
  }

  return NextResponse.json({ message: `Delete success ${result.name}` }, {status:201});
}
