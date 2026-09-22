import { neon } from "@neondatabase/serverless";

export async function GET() {
  const sql = neon(process.env.DATABASE_URL);
  const result = await sql`SELECT NOW()`;
  return Response.json({ success: true, time: result[0] });
}