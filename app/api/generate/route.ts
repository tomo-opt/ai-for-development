// app/api/generate/route.ts

// ✅ 明确标记为模块
export {}

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { input } = await req.json()

  const apiKey = process.env.OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API Key' }, { status: 500 })
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: input }],
        temperature: 0.7,
      }),
    })

    const data = await response.json()

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 })
    }

    return NextResponse.json({ result: data.choices[0].message.content })
  } catch (err) {
    return NextResponse.json({ error: "OpenAI request failed" }, { status: 500 })
  }
}
