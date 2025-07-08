import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import Proj from '@/models/Projects'



export async function GET(req, { params }) {
  await dbConnect();

const project = await Proj.findOne({ id: params.id });

  if (!project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }

  return NextResponse.json(project);
}
