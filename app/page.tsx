'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '../supabaseClient';
import { useInView } from 'react-intersection-observer'

const saveMessage = async (role: 'user' | 'assistant', content: string, sessionId: string) => {
    const { data, error } = await supabase.from('messages').insert([{ role, content, session_id: sessionId }]).select()
        if (error) {
        console.error('❌ Supabase 保存失败:', JSON.stringify(error, null, 2))
    } else {
        console.log('✅ Supabase 保存成功:', data)
    }
}

const loadMessages = async (setMessages: Function, sessionId: string) => {
    const { data, error } = await supabase
        .from('messages')
        .select('*')
        .eq('session_id', sessionId)
        .order('created_at', { ascending: true })

    if (!data) {
        console.error('⚠️ 没有从 Supabase 获取到数据')
        return
    }

    if (error) {
        console.error('❌ 加载消息失败:', error)
    } else {
        setMessages(data.map(({ role, content }) => ({ role, content })))
    }
}

const deleteAllMessages = async (setMessages: Function, sessionId: string) => {
    const { error } = await supabase.from('messages').delete().eq('session_id', sessionId)
    if (!error) {
        console.log('✅ 当前会话已清除')
        setMessages([])
    }
}


interface ChatMessage {
    role: 'user' | 'assistant'
    content: string
}

export default function AboutPage() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);
    const [startTyping, setStartTyping] = useState(false)
    const { ref, inView } = useInView({ triggerOnce: true })

    useEffect(() => {
        if (inView) setStartTyping(true)
        }, [inView])


    useEffect(() => {
        fetch("/api/hello")
        .then(res => res.json())
        .then(data => console.log("✅ 来自 FastAPI 的数据:", data))
        .catch(err => console.error("❌ 请求失败:", err));
    }, []);

    const [messages, setMessages] = useState<ChatMessage[]>([])
    const [input, setInput] = useState('')
    const [loading, setLoading] = useState(false)
    
    const startNewSession = () => {
        const newId = crypto.randomUUID()
        setSessionId(newId)
        setMessages([])
    
        const scrollContainer = document.querySelector('.chat-scroll-container')
        scrollContainer?.scrollTo({ top: 0, behavior: 'smooth' })
    }
    
    const [sessionId, setSessionId] = useState(() => crypto.randomUUID())
    
    useEffect(() => {
        loadMessages(setMessages, sessionId)
    }, [sessionId])
    
    const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }
    
    const handleSend = async () => {
        if (!input.trim()) return
    
        const newMessage: ChatMessage = { role: 'user', content: input }
        setMessages((prev) => [...prev, newMessage])
        await saveMessage('user', input, sessionId)
        setInput('')
        setLoading(true)
     
      try {
          const res = await fetch('/api/generate', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ input })
          })
          const data = await res.json()
          setMessages((prev) => [...prev, { role: 'assistant', content: data.response }])
          await saveMessage('assistant', data.response, sessionId)
      } catch (err) {
          setMessages((prev) => [...prev, { role: 'assistant', content: '❌ GPT 请求失败' }])
      } finally {
          setLoading(false)
      }
    }

    const navItems = [
        { label: 'Home', path: '/' },
        { label: 'About Us', path: '/about' },
        { label: 'Tutorial', path: '/tutorial' },
        { label: 'Prompts', path: '/prompts' },
        { label: 'Resources', path: '/resources' },
        { label: 'Contact Us', path: '/contact' },
    ];

    return (
        <main className="min-h-screen bg-[#F0FBE4] text-gray-900 font-sans">
            <header className="w-full bg-[#FFE9C9] py-3 px-6 flex items-center justify-between shadow-sm sticky top-0 z-10">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <Image
                        src="/The Borgen Project Logo.png"
                        alt="Logo"
                        width={60}
                        height={60}
                        className="rounded-full shadow-md"
                    />

                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden ml-auto text-3xl focus:outline-none"
                    >
                        ☰
                    </button>
                </div>

                <nav
                    className={`${
                        menuOpen ? 'block' : 'hidden'
                    } md:flex flex-col md:flex-row md:space-x-6 mt-4 md:mt-0 text-sm md:text-base font-medium w-full md:w-auto transition-all duration-300`}
                >
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path} onClick={() => setMenuOpen(false)}>
                            <span
                                className={`block py-2 md:py-0 ${
                                    pathname === item.path
                                        ? 'text-gray-900 text-base'
                                        : 'text-gray-500 hover:text-gray-800 hover:scale-105 text-sm'
                                } transition duration-200 ease-in-out`}
                            >
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </nav>
            </header>

            <section className="min-h-screen bg-[#F0FBE4] text-gray-900 font-sans flex flex-col items-center justify-center px-4 py-12">

                <motion.section
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                    className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center"
                    style={{ backgroundImage: "url('/wordcloud.png')" }}
                >
                    <div className="absolute inset-0 bg-[#F0FBE4]/75" />

                     {/* 内容容器 */}
                    <div className="relative z-10 max-w-4xl w-full flex flex-col items-center justify-center px-4 py-12 text-center">
    
                     {/* 标题文字 */}
                        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-[#333] drop-shadow-lg">
                            🤖 Ask me about global development!
                        </h1>

                     {/* 聊天消息框 */}
                        <div className="w-full max-w-2xl flex flex-col gap-4 bg-[#FFE9C9] p-6 rounded-xl border-2 border-black shadow-md mb-6">
                            <div className="chat-scroll-container overflow-y-auto max-h-[500px] p-4 bg-[#FFE9C9] rounded-xl">
                                {messages.map((msg, idx) => (
                                    <div
                                        key={idx}
                                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[70%] px-4 py-2 rounded-2xl whitespace-pre-wrap ${
                                                msg.role === 'user'
                                                    ? 'bg-green-200 text-right rounded-br-none'
                                                    : 'bg-gray-200 text-left rounded-bl-none'
                                            }`}
                                        >
                                            {msg.content}
                                        </div>
                                    </div>
                                ))}

                                {loading && (
                                    <div className="flex justify-start">
                                        <div className="px-4 py-2 bg-gray-100 rounded-2xl italic text-sm animate-pulse">
                                            Thinking...
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* 输入框 + 按钮 */}
                        <div className="w-full max-w-2xl flex gap-2">
                            <textarea
                                onKeyDown={handleKeyDown}
                                rows={2}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder="Please enter your question..."
                                className="flex-1 p-3 border rounded-lg resize-none"
                            />
                            <button
                                onClick={handleSend}
                                disabled={loading}
                                className={`px-6 py-2 rounded-xl font-semibold transition ${
                                    loading
                                        ? 'bg-gray-400 text-white cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700 text-white'
                                }`}
                            >
                                {loading ? 'generating...' : 'send'}
                            </button>

                            <button
                                onClick={startNewSession}
                                disabled={loading}
                                className={`px-6 py-2 rounded-xl font-semibold transition ${
                                    loading
                                        ? 'bg-gray-400 text-white cursor-not-allowed'
                                        : 'bg-green-600 hover:bg-green-700 text-white'
                                 }`}
                            >
                                + new
                            </button>
                        </div>

                    </div>
                </motion.section>

                <div ref={ref}>
                <h1
                    className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-black text-black/50 text-center px-4 leading-snug break-words ${
                    startTyping ? 'typing-effect' : ''
                    }`}
                >
                    What are people in international development concerned about?
                </h1>

                    {startTyping && (
                        <p className="text-sm text-black text-black/50 text-center mt-2 animate-fade-in">
                            Resource: Reddit r/InternationalDev
                        </p>
                    )}
                </div>

            </section>
        </main>
    );
}
