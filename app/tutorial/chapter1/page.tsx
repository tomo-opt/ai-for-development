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
                    Chapter 1 AI Basics
                </h1>
            
                {/* Section 1 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    Chapter Objectives
                </h2>
                <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                    <li>· To dispel unfamiliarity with AI and grasp fundamental concepts and common applications.</li>
                    <li>· To master channels for obtaining AI resources and learn basic tool operations.</li>
                    <li>· To spark interest through real-life applications of AI and build confidence in learning.</li>
                </ul>

                 {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 2 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    1 What is AI? Breaking the "Robot" Stereotype
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Core Knowledge Module:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    AI is like a computer program that simulates human thinking. It can solve problems and perform tasks through learning and experience. Imagine a child learning to recognize different objects by continuous observation and trial. AI undergoes a similar process, only it relies on vast amounts of data and complex algorithms.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Applications Around You:</h3>

                <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
                    <strong>· Personal Assistants and Voice Recognition:</strong> AI-powered personal assistants (such as Siri, Alexa, and Google Assistant) can understand and respond to voice commands, performing tasks like setting reminders, sending messages, and providing information.
                </p>

                <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
                    <strong>· Recommendation Systems:</strong> Streaming services (like Netflix and Spotify) and online retailers (like Amazon) use AI to analyze user behavior and preferences, offering personalized content and product recommendations to enhance user experience.
                </p>

                <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
                    <strong>· Image and Facial Recognition:</strong> The facial unlock feature on smartphones and photo tagging on social media platforms utilize AI for image and facial recognition, improving security and user interaction.
                </p>

                <p style={{ lineHeight: '1.8', marginBottom: '12px' }}>
                    <strong>· Email Filtering:</strong> Email services use AI to filter out spam and phishing emails, ensuring the safety and tidiness of users' inboxes.
                </p>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Common Misconceptions:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Many people equate AI with the robots in sci-fi movies. However, current AI is mostly "weak AI," meaning it excels only in specific tasks rather than possessing the general human intelligence depicted in films. Although AI is developing towards that goal, it is still in progress.
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
                        Discussion Topic:  <br />
                        <em>"How can I use AI to summarize my lecture notes?"</em> <br />
                        <em>"What do you often discuss with people around you about AI?"</em> 
                    </p>
                    <p style={{ marginBottom: '12px' }}>
                        Video Case:  <br />
                        <em>You can watch this video
                            <a href="https://www.youtube.com/watch?v=J4RqCSD--Dg" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                            What is AI? - AI Basics
                            </a>.
                            ，which introduces the basic concepts and practical application cases of AI in a simple and understandable way.
                        </em>  
                    </p>

                </div>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Reference Resource Recommendations:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                For example, the 
                <a href="https://www.youtube.com/playlist?list=PL8dPuuaLjXtO65LeD2p4_Sb5XQ51par_b" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                CrashCourse AI channel
                </a>
                on YouTube, which introduces the basics of AI with lively animations and explanations.
                </p>
                
                {/* Divider */}
                 <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 3 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    2 How to Learn AI? Resource Navigation and Learning Path
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Core Knowledge Module: </h3>
                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Classification of Learning Resources: </h3>
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Popular Science and Understanding: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Text and short videos (such as YouTube educational channels) can help you quickly grasp the basic concepts and applications of AI. For example, Learn about Cloud Computing | Google Cloud (which has many interesting and fundamental AI Q&A).
                </p>
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Systematic Courses: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Introductory AI courses on Coursera/edX provide systematic AI knowledge, from basic theory to practical applications, suitable for those who want to delve deeper into AI.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Recommended Start Methods: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    First, identify your interest in AI. For instance, are you more interested in everyday AI creation, such as AI drawing, or in the application of AI in specific industries? Then, you can experience some simple AI tools to get a feel for the actual operation of AI and try to use AI tools to solve a real problem. If you find that you want to further study AI knowledge and apply specific AI technologies in your learning and work, you can learn some basic AI theoretical knowledge, such as the basic concepts of machine learning.
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
                        Discussion Topic:  <br />
                        <em>"What do you want to achieve with AI?"</em> 
                    </p>
                </div>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Reference Resource Recommendations:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}> 
                ·
                <a href="https://www.ai-4-all.org/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                AI4ALL Open Learning
                </a>
                (free public welfare courses, offering AI courses from basic to advanced levels)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}> 
                ·
                <a href="https://www.coursera.org/specializations/artificial-intelligence" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                Coursera AI Introductory Course
                </a>
                (systematic study of the basics and applications of AI)
                </p>

                {/* Divider */}
                 <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 4 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    3 AI Cases in Daily Life and Introduction to Basic Concepts
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Core Knowledge Module:</h3>
                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Simplified Technical Principles:</h3>
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Data Training: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Imagine you are teaching a child to recognize apples. You show them pictures and real apples, telling them these are all apples. Machine learning is similar; it trains AI models with large amounts of data to learn to identify and understand certain patterns or features. For example, an image recognition AI model needs to learn how to distinguish between apples and pears through a large number of image data.
                </p>
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Algorithms: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Algorithms can be seen as the "steps to solve problems" for AI. They tell AI how to process data and solve problems. For example, a classification algorithm can help AI categorize data into different classes, while a prediction algorithm can help AI forecast future trends.
                </p>
                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Ethical Discussion:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    However, AI can be biased. If the training data of an AI model is biased, it may show discrimination in decision-making. For example:
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · A recruitment algorithm may favor a certain group due to the higher proportion of that gender or race in the training data. Moreover, since AI requires a large amount of data for training, this also raises privacy concerns, as the data may contain personal privacy information.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Social media platform recommendation algorithms recommend content based on users' browsing history, likes, and comments. This may lead users into an "information cocoon," where they only see content similar to their own views.
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
                        Discussion Topic:  <br />
                        <em>Search and display the link to "Should AI replace human jobs?" You can refer to 
                        <a href="https://www.forbes.com/sites/rachelwells/2025/03/10/11-jobs-ai-could-replace-in-2025-and-15-jobs-that-are-safe/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                        this article
                        </a>  
                        and open a question module: "What jobs do you think AI should replace or not? Why?"</em> 
                    </p>
                </div>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Reference Resource Recommendations:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}> 
                ·
                <a href="https://www.ted.com/talks/ted_ed_how_will_ai_change_the_world" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                TED-Ed: How will AI change the world? | TED Talk
                </a>
                (This talk explores the role and impact of algorithms in our lives)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}> 
                ·
                <a href="https://www.futurepedia.io/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                AI Tools Directory
                </a>
                (The latest AI tool navigation can help you find various types of AI tools)
                </p>

                {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 5*/}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                4 Hands-on Experience with AI Tools
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Core Knowledge Module:</h3>
                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Registration and Experience of Common AI Chat Tools: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · With so many large AI models, which ones should I use?
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    You can refer to：
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    Hugging Face
                    </a>
                     (an AI platform offering open-source models, datasets, and tools for machine learning, especially natural language processing)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <a href="https://lmstudio.ai/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    LM Studio
                    </a>
                     (a desktop app that lets you run large language models (LLMs) locally on your computer, offering private, offline AI chat without internet or cloud dependencie)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Case: Instructional large models. In the field of dialogue, ChatGPT is a very popular AI chat tool that can engage in various types of conversations. In the design field, Canva's AI design tool can help you quickly generate design works.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Step-by-step Demonstration: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Take ChatGPT as an example. You can visit the 
                    <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    ChatGPT official website
                    </a>
                    , register for a free account. In the chat box, you can input various questions, such as "Tell me a story about AI" or "Help me write a thank-you letter." Some common prompt templates include:
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Information Inquiry: "Tell me about..."
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Creative Writing: "Help me write a story about..."
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Study Guidance: "Explain the concept of..."
                </p>
                
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>How to Write Prompts: </h3>
                <br />
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Prompts are like instructions you give to AI, telling it what you want it to do. In AI chat software, a good prompt can help you get more accurate and useful responses.
                </p>
                <br />
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Instructional large models</strong>
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · The structure and content of prompts for common instructional and reasoning large models are different. Prompts for instructional large models are usually more straightforward, such as "List the pros and cons of..."
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Reasoning large models</strong>
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · Prompts for reasoning large models may require more background information and logical guidance, such as "Assuming..., then what would happen to..."
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
                        <em>Try writing prompts with AI software and search for AI applications in areas of interest (please write a structured prompt here): "I want to know the latest applications of AI in the medical field. Please list some specific examples and explain how they improve medical services."</em> 
                    </p>
                </div>
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