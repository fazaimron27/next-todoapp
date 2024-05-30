// import nesesary modules
import { NextResponse } from "next/server";
import prisma from "../../../../prisma/client";

// export the GET and POST functions
export async function GET() {
  const tasks = await prisma.task.findMany();

  return NextResponse.json(
    {
      sucess: true,
      message: "List Data Taks",
      data: tasks,
    },
    {
      status: 200,
    }
  );
}

export async function POST(request: Request) {
  const { text } = await request.json();

  const taks = await prisma.task.create({
    data: {
      text: text,
    },
  });

  return NextResponse.json(
    {
      success: true,
      message: "Task Created Successfully!",
      data: taks,
    },
    {
      status: 201,
    }
  );
}
