import os
from dotenv import load_dotenv
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI

load_dotenv()
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

app = FastAPI()

# 跨域配置（让前端可以访问这个 API）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 你也可以写成 ['http://localhost:3000']
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# 示例数据模型
class Message(BaseModel):
    text: str

# 示例接口：GET
@app.get("/api/hello")
def hello():
    return {"message": "Hello from FastAPI backend!"}

# Chat 接口（支持知识库拓展）
@app.post("/api/generate")
def generate(msg: Message):
    try:
        user_input = msg.text

        # ✅ 知识库接口预留区（未来你可在此调用向量数据库或全文搜索系统）
        # 示例知识片段作为 context 占位
        context = (
            "The United Nations' Sustainable Development Goals (SDGs) are a set of 17 "
            "interconnected goals adopted in 2015, aiming to eradicate poverty, reduce "
            "inequality, and promote sustainable growth by 2030."
        )

        messages = [
            {
                "role": "system",
                "content": (
                    "You are a highly experienced expert in international development, combining academic insight with field-based expertise. Your task is to analyze user questions from both scholarly and practical perspectives, and provide clear, well-informed, and solution-oriented answers."
                )
            },
            {
                "role": "user",
                "content": f"{context}\n\nUser question: {user_input}"
            }
        ]

        completion = client.chat.completions.create(
            model="gpt-4o",
            messages=messages
        )
        reply = completion.choices[0].message.content
        return {"response": reply}

    except Exception as e:
        return {"response": f"❌ GPT failed:\n\n{str(e)}"}