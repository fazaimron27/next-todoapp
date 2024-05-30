// Import necessary modules
import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/client";

// define interface Params
interface Params {
  id: string;
}

// export the GET, PUT, and DELETE functions
export async function PUT(
  request: NextRequest,
  { params }: { params: Params }
) {
  const id = params.id;
  const { text } = await request.json();

  const taks = await prisma.task.update({
    where: {
      id,
    },
    data: {
      text: text,
      updatedAt: new Date(),
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Data Task Updated!",
      data: taks,
    },
    {
      status: 200,
    }
  );
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Params }
) {
  const id = params.id;

  await prisma.task.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Data Task Deleted!",
    },
    {
      status: 200,
    }
  );
}
