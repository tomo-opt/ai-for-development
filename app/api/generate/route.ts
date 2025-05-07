// app/api/generate/route.ts

// ✅ 明确标记为模块
export {}

import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { input } = await req.json()

  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY
  if (!apiKey) {
    return NextResponse.json({ error: 'Missing API Key' }, { status: 500 })
  }

  try {
    const messages = [
        {
          role: "system",
          content:
            "You are a highly experienced expert in international development, combining academic insight with field-based expertise. Your task is to analyze user questions from both scholarly and practical perspectives, and provide clear, well-informed, and solution-oriented answers."
        },
        {
          role: "user",
          content: input,
        }
      ]
    
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages,
        temperature: 0.7,
      }),
    })

    const data = await response.json()
    console.log("✅ OpenAI 返回内容：", JSON.stringify(data, null, 2))

    if (data.error) {
      return NextResponse.json({ error: data.error.message }, { status: 500 })
    }

    return NextResponse.json({ result: data.choices[0].message.content })
  } catch (err: any) {
    console.error('❌ OpenAI 报错信息:', err)  // <-- 打印真实报错
    return NextResponse.json({ error: err?.message || "Unknown error" }, { status: 500 })
  }
}
