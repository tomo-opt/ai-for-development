'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

interface CardData {
    title: string
    description: string
    image?: string
    link?: string
}

const sampleCards: CardData[] = [
    {
        title: 'Chapter 1 AI Basics',
        description: 'What AI is and how to learn it as a beginner for capacity building',
        link: '/tutorial/chapter1'
    },
    {
        title: 'Chapter 2 AI Office Assistant',
        description: 'Learn automating office tasks, grammar checking & content generation with AI',
        link: '/tutorial/chapter2'
    },
    {
        title: 'Chapter 3 AI Image Magic Show',
        description: 'Learn AI image recognition, editing, and ethical considerations',
        link: '/tutorial/chapter3'
    },
    {
        title: 'Chapter 4 Fun with AI Video',
        description: 'Learn AI video editing, automatic subtitles, and creative effects',
        link: '/tutorial/chapter4'
    },
    {
        title: 'Chapter 5 The Charm of AI Voice',
        description: 'Learn AI text-to-speech, voice cloning, and AI assistants',
        link: '/tutorial/chapter5'
    },
    {
        title: 'Chapter 6 AI Shopping Expert',
        description: 'Learn AI-powered product recommendations, price tracking and analysis',
        link: '/tutorial/chapter6'
    },
    {
        title: 'Chapter 7 AI Data Analysis',
        description: 'Learn Data analysis, visualization, and ethical considerations',
        link: '/tutorial/chapter7'
    },
    {
        title: 'Chapter 8 AI Education Assistant',
        description: 'Learn AI tools for teachers and students, personalized learning',
        link: '/tutorial/chapter8'
    },
    {
        title: 'Chapter 9 AI Social Networking Trend',
        description: 'Learn AI-powered content creation for social media and community engagement',
        link: '/tutorial/chapter9'
    },
    {
        title: 'Chapter 10 Introductory AI Programming',
        description: 'Learn basic AI programming concepts and prompts',
        link: '/tutorial/chapter10'
    },
    {
        title: 'Chapter 11 Advanced AI Programming',
        description: 'Learn advanced AI programming prompts and applications',
        link: '/tutorial/chapter11'
    },
    {
        title: 'Chapter 12 Summary and Outreach',
        description: 'You are now equipped with AI capacity building skills',
        link: '/tutorial/chapter12'
    }
]

export default function TutorialPage() {
    const pathname = usePathname()
    const [menuOpen, setMenuOpen] = useState(false)
    const [colors, setColors] = useState<string[]>([])
  
    const navItems = [
      { label: 'Home', path: '/' },
      { label: 'About Us', path: '/about' },
      { label: 'Tutorial', path: '/tutorial' },
      { label: 'Prompts', path: '/prompts' },
      { label: 'Resources', path: '/resources' },
      { label: 'Contact Us', path: '/contact' },
    ]

  useEffect(() => {
    const newColors = sampleCards.map(() => {
        const palette = ['#FFE9C9', '#DCFCE7', '#E0F2FE', '#FEF9C3', '#EDE9FE']
        return palette[Math.floor(Math.random() * palette.length)]
    })
    setColors(newColors)
  }, [])

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

            <section className="relative h-[400px] md:h-[500px] overflow-hidden">
                <Image
                    src="/introduction_about.png"
                    alt="AI for Development"
                    fill
                    className="object-cover"
                    priority
                />
            </section>            
      
        <h1 className="text-4xl md:text-5xl font-bold text-center mt-6 mb-2">
            AI TUTORIALS FOR DEVELOPMENT
        </h1>

        <p className="text-center text-gray-700 max-w-2xl mx-auto px-4 mb-8">
            Below is an introductory AI tutorial designed for freshmen. It’s quite comprehensive, covering fundamental AI concepts and common applications, hands-on practice, ethical considerations, and AI applications across various fields such as daily work, image processing, video production, education, e-commerce, and social networking. It can be used as reference material for individual capacity building and community AI training.
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 pb-12">
            {sampleCards.map((card, index) => (
                <motion.a
                    key={index}
                    href={card.link}
                    whileHover={{ scale: 1.05 }}
                    className="rounded-2xl shadow-md transition overflow-hidden"
                    style={{ backgroundColor: colors[index] || '#ffffff' }}
                >
            {card.image && (
                <div className="p-4 pb-0">
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={48}
                        height={48}
                        className="rounded-xl"
                    />
                </div>
            )}
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{card.title}</h3>
                <p className="text-sm text-gray-800">{card.description}</p>
            </div>
            </motion.a>
        ))}
      </section>
    </main>
  )
}
