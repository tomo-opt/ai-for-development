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
                CONTACT US
            </h1>

            <p className="text-center text-gray-700 max-w-2xl mx-auto px-4 mb-8">
                Please contact the author below: 
            </p>

            <section className="max-w-3xl mx-auto px-4 py-12 text-center">
                <p className="text-xl md:text-2xl font-medium mb-6 leading-relaxed font-body">
                Hongbo REN,  
                email: renopt9@gmail.com
                </p>

                <div className="flex justify-center space-x-6 mt-8">
                    <a href="https://github.com" target="_blank">
                        <Image src="/Github Logo.png" alt="GitHub" width={48} height={48} />
                    </a>
                </div>
            </section>
        </main>
    );
}
