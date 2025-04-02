'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

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
      
        <section style={{ backgroundColor: '#F0FBE4', padding: '40px 20px', fontFamily: 'Inter, sans-serif', color: '#111' }}>
            <div style={{ margin: '24px 0 16px 0' }}>
                <Link href="/tutorial">
                    <span
                        style={{
                            display: 'inline-block',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            marginLeft: '24px',
                            padding: '4px 8px',
                            backgroundColor: 'transparent',
                            color: '#111',
                            cursor: 'pointer',
                        }}
                    >
                        &laquo; Back
                    </span>
                </Link>
            </div>      
            
            <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        
                <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>
                    Chapter 11 Advanced AI Programming 
                </h1>
            
                {/* Section 1 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px', textAlign: 'center' }}>
                    Coming soon...
                </h2>
               
            </div>

            <div style={{ marginTop: '48px', marginBottom: '32px', textAlign: 'center' }}>
                <Link href="/tutorial">
                    <span
                            style={{
                            display: 'inline-block',
                            fontWeight: 'bold',
                            fontSize: '18px',
                            padding: '4px 8px',
                            backgroundColor: 'transparent',
                            color: '#111',
                            cursor: 'pointer',
                        }}
                    >
                        &laquo; Back
                    </span>
                </Link>
            </div>

        </section>

    </main>
  )
}