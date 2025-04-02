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
                    Chapter 2 AI Office Assistant
                </h1>
            
                {/* Section 1 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    Chapter Objectives
                </h2>
                <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                    <li>· To demystify AI by understanding basic concepts and common applications.</li>
                    <li>· To master channels for obtaining AI resources and learn basic tool operations.</li>
                    <li>· To spark interest through real-life applications of AI and build confidence in learning.</li>
                </ul>

                 {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 2 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    1 How AI Serves as an Office Tool
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Core Knowledge Module:</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    In today's fast-paced work environment, AI-powered office tools have emerged as powerful aids to boost efficiency and productivity. Traditional office methods often require manual document editing and manual data tabulation, which are not only time-consuming and labor-intensive but also prone to errors. In contrast, AI-assisted office work can achieve automatic error correction and data analysis, significantly streamlining workflows.
                </p>
                
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    For instance, in text processing, AI tools can swiftly detect grammatical errors and offer suggestions for corrections. They can also generate draft emails and adjust text styles based on user needs. Whether it's a formal business email or casual daily communication, these tools can handle it with ease. In terms of spreadsheet processing, AI can automatically fill in data, create formulas, and transform complex data into intuitive visual charts to help users quickly understand and analyze the information.
                </p>

                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Through these classic scenario-based examples, we can see the immense potential of AI office tools in enhancing work efficiency and quality. Next, we will delve deeper into how to operate these tools and integrate AI into our daily work.
                </p>
                
                {/* Divider */}
                 <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 3 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    2 How to Operate AI Office Tools
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Text Processing Tools (such as Grammarly or ChatGPT) </h3>
                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Operation Demonstration: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [1] Open the Grammarly or ChatGPT website, and register or log in to your account.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [2] Upload the document you need to process, or directly input the text content.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [3] In the settings, select the check target, such as grammar, tone, etc.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [4] Click the “Check” or “Generate” button and wait for the tool to generate suggestions or content.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [5] Review the results and choose to accept or reject the suggestions as needed.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [6] Export the modified document, or directly copy and paste it elsewhere.
                </p>
   
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Task Exercise: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Prepare a draft of an English email that contains grammatical errors, spelling mistakes, and inappropriate tone. Use the Grammarly or ChatGPT tool to modify it, ensuring that the email content is accurate, smooth, and meets the tone requirements of a formal email. After completion, compare the text before and after modification to appreciate the powerful functions of the AI tool.
                </p>
                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Spreadsheet Processing Tools (such as Excel AI or Google Sheets Smart Fill) </h3>
                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Operation Demonstration: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [1] Open the Excel AI or Google Sheets Smart Fill tool.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [2] Input or import the data you need to process, such as sales data, customer feedback, etc.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [3] Select the column that needs AI prediction filling, for example, date, category, etc.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [4] Click the “Predictive Fill” or “Smart Fill” button, and the tool will automatically analyze the data and generate filling content.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [5] Review the filling results and make adjustments as needed.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [6] Use the tool to generate a chart, select an appropriate chart type, such as a bar chart, line chart, etc., to present the data more intuitively.
                </p>
             
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Task Exercise: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Prepare a table containing sales data with some missing date and category information. Use the Excel AI or Google Sheets Smart Fill tool to automatically fill in the missing data and generate a chart showing sales trends. Observe the chart, analyze the changes in sales data, and experience the convenience of AI tools in data processing and visualization.
                </p>

                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Additional Tools (Optional) </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Notion AI: </strong>Notion is a powerful note-taking and project management tool, and its AI function can automatically generate meeting minutes, task lists, etc. After a meeting, simply import the meeting record into Notion, and AI will quickly organize clear meeting minutes, including the meeting topic, participants, discussion points, and next steps, saving a significant amount of time in organizing.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Canva Magic Write:</strong>Canva is a popular design tool, and its Magic Write function combines AI technology to optimize design copy. After users input the copy content, Magic Write can provide more attractive copy suggestions based on the design style and target audience, helping users enhance the appeal and professionalism of their design work.
                </p>

                <br />
                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Tips</h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>· The importance of prompts and “parameter settings”: </strong>When using AI tools, reasonable prompts and parameter settings can help us obtain more accurate and demand-compliant results. For example, in Grammarly, setting the check target to “formal business email” will prompt the tool to provide suggestions more suitable for a business context; in ChatGPT, adjusting the output length and tone can generate content that better meets user needs.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>· File format compatibility: </strong>Different AI tools may support different file formats. During use, pay attention to file format compatibility to ensure smooth document import and export. For example, Grammarly supports common document formats such as .docx and .txt, Excel AI supports .xlsx spreadsheet files, and Canva supports a variety of design file formats, including .pdf and .png.
                </p>

                {/* Divider */}
                 <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 4 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    3 Comprehensive Exercise
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Comprehensive Tasks: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [1] Use AI tools to draft a meeting invitation email, which should include key information such as the meeting time, location, and agenda. The language of the email should be formal, accurate, and the format should be standardized to clearly convey the meeting information while demonstrating the advantages of AI tools in text generation and style adjustment.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    [2] Use AI spreadsheet tools to organize customer feedback data, automatically classify it based on customer satisfaction ratings, and calculate the satisfaction percentage. The data organization should be accurate and error-free, and the generated visual chart should be intuitive and clear, presenting an overall picture of customer satisfaction to help us better understand customer needs and directions for improvement.
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
                        <em> [1] How to handle AI output errors? During the use of AI tools, you may encounter inaccurate or unexpected output results. In such cases, carefully review the input content and set parameters to ensure they are accurate. If the problem persists, try adjusting the prompts or parameter settings, or refer to the tool's help documentation and community support to find solutions.</em> 
                        <br /><br />
                        <em> [2] How to adjust parameters to make the results meet your needs? AI tools typically offer various parameter settings, such as output length, tone, and style. By reasonably adjusting these parameters, you can make the AI-generated results closer to your requirements. For example, if you want more concise content, set a shorter output length; for a more formal language style, adjust the tone to formal. In practice, flexibly adjust parameters according to specific tasks and goals to achieve the best results. </em>
                        <br /><br />
                        <em> [3] Emphasizing privacy and data security issues: When using AI tools, privacy and data security are of utmost importance. Avoid uploading sensitive information to untrustworthy platforms and ensure the security and privacy of your data. When selecting AI tools, prioritize those with good privacy policies and data security guarantees, and strictly follow relevant regulations during use to protect your and others' privacy. </em>
                    </p>
                </div>
                

                {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 5*/}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                4 Reference Resources and Tool Recommendations
                </h2>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Text Processing Tools: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>Grammarly:</strong>Grammarly is a well-known grammar checking and writing assistance tool. It can detect grammatical and spelling errors, as well as offer suggestions for vocabulary replacement and tone adjustment to help users improve their writing skills. Grammarly provides a wealth of tutorials and usage guides. Users can learn how to better use the tool for grammar correction and tone adjustment in the 
                    <a href="https://www.grammarly.com/blog/category/tips/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    “Tips”
                    </a>
                    section of its website.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>ChatGPT: </strong>ChatGPT is a powerful language model that can generate various types of text content based on user input prompts, such as emails, articles, stories, etc. It also supports multiple languages to meet the needs of different users. When using ChatGPT, users can find a wealth of prompt examples on the 
                    <a href="https://prompts.chat/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    prompts.chat
                    </a>
                    website. These examples can help users better understand and use ChatGPT to improve writing efficiency and quality.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Spreadsheet Processing Tools: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>Excel AI (Microsoft 365 Copilot): </strong>Microsoft 365 Copilot is an AI-powered office assistant launched by Microsoft. It integrates various AI functions to help users more efficiently process Excel spreadsheets. For example, it can automatically fill in data, generate formulas, and create charts. Users can refer to the 
                    <a href="https://support.microsoft.com/en-us/copilot" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    official Microsoft 365 Copilot feature introduction
                    </a>
                    to learn about its detailed functions and usage methods. Note that this tool requires a subscription to Microsoft 365 services and is more suitable for enterprise users.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>Google Sheets Smart Fill: </strong>Google Sheets Smart Fill is a smart fill feature in Google Workspace that can automatically predict and fill in missing content based on the data entered by users. It also supports data visualization, allowing users to easily transform data into various charts. Users can learn how to use Google Sheets Smart Fill for data processing and visualization in the 
                    <a href="https://workspace.google.com/learning-center/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    Google Workspace tutorials
                    </a>
                    .This tool is free and easy to use, suitable for individual users and small teams.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Comprehensive Tools and Extended Learning: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>Notion AI: </strong>Notion is a multifunctional note-taking and project management tool, and its AI function can automatically generate meeting minutes, task lists, etc. Users can find various practical templates, such as meeting record templates and project management templates, in the 
                    <a href="https://www.notion.so/templates" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    Notion Template Library
                    </a>
                    . These templates can help users more efficiently organize and manage information. By using Notion AI, users can combine AI technology with project management to enhance work efficiency and team collaboration.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>Canva Magic Write: </strong>Canva is a professional design tool, and its Magic Write function combines AI technology to optimize design copy. Users can learn how to use Magic Write for copy optimization and design integration in the 
                    <a href="https://www.canva.com/designschool/" target="_blank" rel="noopener noreferrer" style={{ color: '#1e40af', textDecoration: 'underline', marginLeft: '4px' }}>
                    Canva Design School
                    </a>
                    . The school offers a wealth of design tutorials and courses, covering everything from basic design knowledge to advanced design skills. Users can choose appropriate learning content based on their needs to improve their design capabilities.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Free Alternative Tools: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>HIX.AI: </strong>HIX.AI is a writing assistance tool that can help users quickly generate high-quality text content. Both writing beginners and professionals can obtain writing inspiration and suggestions through HIX.AI to improve writing efficiency and quality.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    · <strong>Airtable: </strong>Airtable is a smart database tool that combines the features of spreadsheets and databases to help users better manage and analyze data. Airtable offers a variety of templates and automation functions, allowing users to create personalized databases according to their needs to achieve efficient data management and intelligent analysis.
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