import { NextResponse } from "next/server";
import { z } from "zod";

const admissionSchema = z.object({
  parentName: z.string().min(2),
  childName: z.string().min(2),
  age: z.number().min(2.5),
  phone: z.string().min(10)
});

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const parsed = admissionSchema.safeParse({
      ...body,
      age: Number(body.age)
    });

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data" },
        { status: 400 }
      );
    }

    // TODO: integrate DB / email service here

    return NextResponse.json({
      message: "Admission enquiry submitted successfully"
    });
  } catch {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}