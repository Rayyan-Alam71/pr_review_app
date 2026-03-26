import { NextRequest } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const { name } = await req.json();

    if (!name || name.trim() === "") {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
      },
    });

    return Response.json({ user }, { status: 201 });
  } catch (error) {
    console.error("Error creating user:", error);
    return Response.json({ error: "Failed to create user" }, { status: 500 });
  }
}