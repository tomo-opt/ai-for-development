'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import ReactMarkdown from 'react-markdown';

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

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const prompts = [
        {
            title: '🌍 Development Policy Analysis',
            description: 'Use this prompt to analyze the impact of a policy in developing countries.',
            markdown: `
                    **Prompt:**  
                    You are a development economist. Analyze the impact of the given policy on income inequality and poverty reduction in the target country.  
                    Consider both short-term and long-term effects, and reference empirical research when applicable.
                    `,
        },
        {
            title: '📊 AI for Monitoring & Evaluation',
            description: 'Use this prompt to ask AI to generate M&E indicators for a specific project.',
            markdown: `
                    **Prompt:**  
                    You're an M&E officer. Generate a logical framework with inputs, outputs, outcomes, and indicators for a digital literacy project targeting rural youth in Sub-Saharan Africa.
                    `,
        },
      ];
    
    const colors = ['#FDE68A', '#C7D2FE', '#A7F3D0', '#FECACA', '#E9D5FF'];
    
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
                AI PROMPTS FOR DEVELOPMENT
            </h1>

            <p className="text-center text-gray-700 max-w-2xl mx-auto px-4 mb-8">
                AI Prompts Collections for Development Study and Work
            </p>

            
            <section style={{ backgroundColor: '#F0FBE4', padding: '40px 20px', fontFamily: 'Inter, sans-serif', color: '#111' }}>
                <div style={{ maxWidth: '720px', margin: '0 auto' }}>
                    {prompts.map((item, index) => (
                        <div key={index} style={{ marginBottom: '32px' }}>
                            <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                                {item.title}
                            </h2>
                            <p style={{ lineHeight: '1.8', marginBottom: '16px', textAlign: 'justify' }}>
                                {item.description}
                            </p>

            {/* 下拉框部分 */}
                            <div
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                style={{
                                    backgroundColor: colors[index % colors.length],
                                    borderRadius: '12px',
                                    padding: '12px 16px',
                                    cursor: 'pointer',
                                    fontWeight: 'bold',
                                    marginBottom: '12px',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                }}
                            >
                                {openIndex === index ? '▲ Hide Prompt' : '▼ View Prompt'}
                            </div>

                            {openIndex === index && (
                                <div
                                    style={{
                                        backgroundColor: '#FFE9C9',
                                        padding: '16px',
                                        border: '1px solid #ccc',
                                        borderRadius: '8px',
                                        overflowX: 'auto',
                                        whiteSpace: 'pre-wrap',
                                        wordWrap: 'break-word',
                                        textAlign: 'left',
                                        fontFamily: 'Inter, sans-serif',
                                        maxWidth: '100%',
                                    }}
                                >
                                    <ReactMarkdown>{item.markdown}</ReactMarkdown>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>


        </main>
    );
}
