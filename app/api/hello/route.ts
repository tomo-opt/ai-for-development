// app/api/hello/route.ts

// ✅ 同样标记为模块
export {}

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ message: "Hello from Next.js API!" })
}
