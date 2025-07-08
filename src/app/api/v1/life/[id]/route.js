import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import event from '@/models/LifeEvent'



export async function GET(req, { params }) {
  await dbConnect();

  const events = await event.findOne({ id: params.id });

  if (!events) {
    return NextResponse.json({ error: 'Event not found' }, { status: 404 });
  }

  return NextResponse.json(events);
}
