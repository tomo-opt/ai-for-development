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
                    Chapter 3 AI Image Magic Show
                </h1>
            
                {/* Section 1 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    Chapter Objectives
                </h2>
                <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                    <li>· Understand the basic principles behind AI image recognition, such as identifying plant and animal species.</li>
                    <li>· Learn how to use AI for simple image editing, like one-click beautification and adding filters.</li>
                    <li>· Explore AI image recognition through case studies and AI-assisted photo editing techniques in popular image editing software.</li>
                </ul>

                 {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 2 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    1  How Does AI Understand Images? 
                </h2>
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Principle Explanation</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Feature Extraction: </strong>Like a children's picture card game, AI identifies features such as ear shape, tail length, and patterns. AI uses these features to determine the content of the image.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Training Process: </strong>Like playing the "Guess Who?" game, labeled data is crucial. Through a large amount of labeled data, AI can learn to recognize different objects.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Convolutional Neural Networks: </strong>Imagine multiple layers of filters stacked to recognize. Each layer of filters extracts different features, ultimately helping AI identify the content of the image.
                </p>

                <div
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '24px',
                        borderRadius: '12px',
                        maxWidth: '720px',
                        margin: '32px auto',
                        lineHeight: '1.8',
                        textAlign: 'justify',
                    }}
                >
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
                        Discussion Box Module:
                    </h3>
                    <p style={{ marginBottom: '12px' }}>
                        <em>Using Google Lens to identify plant species. Google Lens can quickly identify the type of plant by taking a photo of it.</em> <br />
                        <em><strong>Compare error cases: </strong>For example, why does AI mistake a Dalmatian for a cow? This is because AI may be affected by data bias during the training process, leading to recognition errors.</em> 
                    </p>

                </div>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Useful Resources:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>    
                <strong>·</strong>
                <a href="https://teachablemachine.withgoogle.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                <strong>Google Teachable Machine </strong>
                </a>
                    (Visualization of training model demonstration)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>    
                <strong>·</strong>
                <a href="https://ai.google/discover/responsible-ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                <strong>How Computer Vision Works </strong>
                </a>
                    (Google AI educational video)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>    
                <strong>·</strong>
                <a href="https://www.youtube.com/results?search_query=AI+vision+fails" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                <strong>AI Vision Fails Compilation </strong>
                </a>
                    (You can search for "AI vision fails" on YouTube for entertaining videos)
                </p>

                
                {/* Divider */}
                 <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 3 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    2 AI Photo Editing in Practice
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Operation Tips: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Keyword Optimization: </strong>How to describe your needs  ("vibrant sunset lighting" vs. "soft daylight"). Accurate keywords can help AI better understand your needs.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Common Mistakes to Avoid: </strong>Over-processing can make photos look unnatural. Be mindful of not overusing AI functions.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Exercise Module: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Use the specified tool </strong> to change a cloudy landscape photo to a sunny one. Through this task, you can learn how to use AI to adjust the light and shadow of a photo.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Work Presentation and Review: </strong> Analyze how AI handles light and shadow logic. Through the review, you can better understand how AI works.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Recommended Tools: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>·</strong>
                    <a href="https://www.canva.com/ai-image-generator/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                        <strong>Canva AI </strong>
                    </a>
                    (Web-based)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>·</strong>
                    <a href="https://www.photoroom.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                        <strong>Photoroom </strong>
                    </a>
                    (Mobile)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>·</strong>
                    <a href="https://pixlr.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                        <strong>Pixlr E </strong>
                    </a>
                    (Web-based basic photo editing)
                </p>
                

                {/* Divider */}
                 <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 4 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    3 Technical Boundaries and Ethical Discussion
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Deepfake and Copyright Issues</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <a href="https://www.theverge.com/2023/2/6/23587393/ai-art-copyright-lawsuit-getty-images-stable-diffusion" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                        <strong> The Getty Images lawsuit against Stable Diffusion </strong>
                    </a>
                    shows the copyright issues that AI image generation technology may cause.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong> Hands-On: </strong> Use
                    <a href="https://haveibeentrained.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                        <strong> Have I Been Trained? </strong>
                    </a>
                    to check if your images have been used for AI training. This tool can help you understand whether your images have been used for AI training.
                </p>
                
                <div
                    style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        padding: '24px',
                        borderRadius: '12px',
                        maxWidth: '720px',
                        margin: '32px auto',
                        lineHeight: '1.8',
                        textAlign: 'justify',
                    }}
                >
                    <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '12px' }}>
                        Discussion Box Module:
                    </h3>
                    <p style={{ marginBottom: '12px' }}>
                        <em> Proposition: "Does AI photo editing make photography lose its authenticity?" </em><br />
                        <em> Provide an Argument Framework: Balancing artistic expression and information authenticity. Through discussion, you can better understand the balance between AI technology and ethics. </em><br />
                        <em> Discussion: How to identify AI-generated images? You can judge by looking at details such as fingers, text, and light and shadow consistency. </em>
                    </p>
                </div>

                {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 5*/}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                Additional Materials
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Visual Materials</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Comparison Images (Original/AI-Processed): You can find example images on the official websites of
                    <a href="https://www.canva.com/ai-image-generator/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    Canva
                    </a>
                    and
                    <a href="https://www.photoroom.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    Photoroom
                    </a>
                    .
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Funny Recognition Error Cases (e.g., mistaking a toaster for a cat): Search for "AI vision fails" on YouTube to find related videos.
                </p>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Operation Guides</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Complete AI Photo Editing Process Tutorial: You can find detailed tutorials on the official website of
                    <a href="https://express.adobe.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    Adobe Express
                    </a>
                    .
                </p>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Extended Reading</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    ·
                    <a href="https://www.technologyreview.com/2023/04/04/1071156/when-ai-looks-at-art/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    MIT Technology Review Article "When AI Looks at Art"
                    </a>
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    ·
                    <a href="https://en.unesco.org/artificial-intelligence/ethics" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    UNESCO "AI Ethics Issues Student Handbook" Illustrated Edition
                    </a>
                </p>
                
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