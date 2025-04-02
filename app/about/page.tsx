'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';

export default function AboutPage() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

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
                ABOUT US
            </h1>

            <p className="text-center text-gray-700 max-w-2xl mx-auto px-4 mb-8">
                About "AI for Development" Program
            </p>
            
            <section style={{ backgroundColor: '#F0FBE4', padding: '40px 20px', fontFamily: 'Inter, sans-serif', color: '#111' }}>
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Artificial Intelligence (AI) </strong>is transforming the way we understand and address global development challenges. In academia, researchers are using AI to analyze complex development data, identify patterns in poverty and inequality, and evaluate policy impacts with greater precision. In the field, development professionals are leveraging AI tools to optimize resource allocation, improve program design, and enhance real-time decision-making.<br /><br />

                    To help more people benefit from this transformation, the <strong> AI for Development program </strong> is created — a free, open-access AI platform designed specifically for the global development community.<br /><br />

                    <strong> · </strong> On the <strong> Home </strong> page, you'll find a live-updated word cloud generated from Reddit’s r/InternationalDev forum. It reveals the key issues practitioners and scholars in global development are talking about. You’ll also find a chatbot trained to think like a global development expert — ask it anything about development.<br /><br />

                    <strong> · </strong> The<strong> Tutorial </strong>page offers beginner-friendly courses designed to introduce the basics of AI. Even if you have no prior experience, you can quickly learn how AI works and how to apply it in your life and work. This reflects our mission: to reduce inequalities by making technology more accessible.<br /><br />

                    <strong> · </strong> The <strong>Prompts</strong> and <strong>Resources</strong> sections provide curated AI prompts and tools tailored for global development scenarios — from policy design and field research to report writing and community engagement. Whether you're a development professional or someone simply curious about using AI for social good, we hope you'll find value here.

                    This site is still under construction. If you have feedback or suggestions, please reach out to the creator at renopt9@gmail.com
                    </p>
                </div>
            </section>

        </main>
    );
}
