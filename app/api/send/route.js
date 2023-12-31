import { NextResponse } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "../../components/Email";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { email, subject, content } = await request.json();

  const data = await resend.emails.send({
    from: "tiara@mutiaraayun.site",
    to: ["mutiara.ayun19@gmail.com"],
    subject: subject,
    react: EmailTemplate({ email, subject, content }),
  });

  return NextResponse.json({ data, error: null }, { status: 200 });
}
