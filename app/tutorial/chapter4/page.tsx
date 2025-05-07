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
                    Chapter 4 Fun with AI Video
                </h1>
            
                {/* Section 1 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    Chapter Objectives
                </h2>
                <ul style={{ lineHeight: '1.8', paddingLeft: '20px' }}>
                    <li>· To master the basic applications of AI in video editing and be able to independently use AI tools to complete simple video creation.</li>
                </ul>

                 {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 2 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    1 Introduction to AI Applications in Video Editing 
                </h2>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    The application of AI in the field of video editing has brought unprecedented convenience and efficiency to creators. Its core functions mainly include the following aspects:
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Principle of Automatic Subtitle Generation:  </strong>AI uses speech recognition technology to accurately convert the spoken content in videos into text and match it to the corresponding timeline based on the timing of the speech, thereby generating subtitles. For example, the professional version of CapCut supports AI subtitle recognition, which allows for one-click operation to add subtitles, greatly saving the time and effort required for manual subtitle addition. However, there are technical challenges in this process, such as background noise and accents, which may affect the accuracy of speech recognition and lead to subtitle errors. According to relevant research, some advanced AI subtitle generation technologies can achieve an accuracy rate of over 90% in ideal conditions, but the accuracy rate may decrease in complex speech environments. For those interested in learning more, you can watch this video AI Subtitle Generation Accuracy Test, which details the accuracy of AI subtitle generation in different scenarios and how to improve accuracy through various methods. This is very helpful for us to better utilize AI subtitle functions in actual creation.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>AI Music Matching Logic:  </strong>AI is capable of analyzing the emotions and rhythms in a video and then selecting matching music from a vast music library based on the analysis results. For instance, if the video content is a cheerful dance scene, AI will tend to choose upbeat and lively music; whereas for a sad emotional story, it will recommend music with a melodious and slightly melancholic tune, thereby enhancing the emotional expression and atmosphere of the video and making it easier for viewers to be attracted.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    <strong>Smart Clip Splicing:   </strong>AI has the ability to recognize scenes and can automatically identify different scenes in a video. It then intelligently splices the clips together based on the logical order and content relevance of the scenes. This eliminates the need for creators to spend a lot of time manually arranging and editing clips, greatly improving editing efficiency, especially suitable for making fast-paced, content-rich, and diverse short videos.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Compared to traditional editing methods, the advantages of AI editing are very evident. For example, adding subtitles to a 1-minute video manually may take 30 minutes or even longer, as it requires transcribing word by word and precisely adjusting the timing of subtitle appearance. However, using AI tools, subtitle generation usually takes only about 2 minutes, which undoubtedly saves a lot of time and energy for creators, allowing them to devote more time to creative conception and content optimization.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    In terms of industry applications, AI video editing technology has been widely used. On short video platforms such as TikTok, many AI templates have been launched. Users only need to upload video materials and select the corresponding templates, and AI can automatically complete the editing to generate creative and attractive short videos, greatly reducing the creation threshold and enabling ordinary users to easily produce high-quality video content. In the film and television industry, AI also plays an important auxiliary role. It can pre-edit the shot materials in the early stage, helping directors and editors quickly screen out useful clips and determine the general editing direction, laying the foundation for subsequent fine editing work and thus improving the efficiency of the entire film and television production process.
                </p>

                {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 3 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    2 Creating Simple Videos with AI Tools: Practical Exercise
                </h2>

                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    Next, let's learn how to use some free AI tools to create simple videos.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Tool Selection: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>1.CapCut (International Version): </strong>CapCut is a very popular video editing software, and its international version offers a wealth of AI functions. It supports AI automatic subtitles, which can quickly and accurately add subtitles to videos; it also has one-click template features, making it easy for beginners to create beautiful videos. You can download and install the software from the CapCut official website, and after registering a free account, you can use most of the functions.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>2.Runway ML: </strong>Runway ML is a powerful AI creative tool that can achieve functions such as AI object removal and background replacement. For example, you can easily remove unwanted objects from a video or replace the background with an AI-generated dynamic background to add creativity and fun to the video. However, when using this function, it is important to pay attention to safe operation and avoid infringing on others' copyrights. You can visit the Runway ML official website to learn more and try it out.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>3.Descript: </strong>Descript is an AI video editing tool suitable for intermediate users. It has a voice-driven lip-syncing function that can automatically adjust the mouth movements of people in the video according to their speech, making the video more realistic and natural. For creators who have higher requirements for video quality, this is a very practical function. Interested individuals can visit the Descript official website for more details.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Task Guide: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Basic Task:  </strong>First, you can upload a 30-second video clip shot with your phone, then use CapCut's AI subtitle function to add subtitles to the video, and choose suitable BGM (background music) from its material library to match the video. During the operation, pay attention to the generation effect of AI subtitles and the fit between the BGM and the video content, and experience the convenience of AI editing through actual operation.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Challenge Task: </strong>For those who want to try something more challenging, you can use Runway ML to remove excess objects from the video, such as removing pedestrians or irrelevant objects that accidentally entered the frame, and then replace them with an AI-generated dynamic background. When completing this task, carefully observe the details of AI operation and learn how to adjust and optimize the background effect to make the video more perfect.
                </p>
                <br />
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Tips:  </strong>Copyright issues are very important during the creation process. To ensure the legality and originality of the video, it is recommended that you use royalty-free material libraries, such as the video clips provided by Pexels, which can be used for free without copyright disputes. At the same time, when choosing background music, you can also consider using AI-generated music from Soundraw, which are original and royalty-free, and can be used with confidence.
                </p>

                {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 4 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    3 Resource Recommendations and Creative Inspiration
                </h2>
                
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    To help you better learn and apply AI video editing technology, here are some useful tools and resources, as well as some YouTube bloggers who can inspire your creativity.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>Recommended Tool List: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>CapCut (many templates), Clipchamp (online) :</strong>for Short videos, Vlogs
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Adobe Premiere AI plugin (subscription required): </strong>for Film-level fine-tuning
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Runway ML, Synthesia (AI virtual anchor): </strong>Marketing videos, educational content
                </p>
                
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    CapCut and Clipchamp are both excellent all-in-one editing tools that offer a wide range of functions and templates, suitable for creating various types of short videos and Vlogs. Adobe Premiere, as a professional video editing software, provides more advanced fine-tuning functions with its AI plugin, which is suitable for professionals who have higher requirements for video quality. Runway ML and Synthesia excel in creative effects. Runway ML can achieve functions such as AI object removal and background replacement to add creativity to videos; Synthesia can generate AI virtual anchors, providing new ideas and methods for the production of marketing videos and educational content.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>YouTube Blogger Recommendations: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Educational: </strong>Primal Video (tool reviews), Justin Brown (AI editing tips)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                · The blogger of Primal Video regularly reviews various video editing tools, analyzing them from multiple perspectives such as functionality, performance, and user experience, helping you quickly understand the characteristics and advantages of different tools to choose the most suitable one for yourself. You can follow his channel Primal Video to get the latest tool review information.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                · Justin Brown is a blogger focused on AI editing tips. He shares practical AI editing techniques and ideas to help you improve your editing skills and better utilize AI technology for creation. His channel Justin Brown has a lot of valuable content worth learning and referring to.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Creative: </strong>Corridor Crew (AI effects in practice), Mrwhosetheboss (latest AI tool overviews)
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                · Corridor Crew is a team known for its creativity and special effects. They often use AI effects in their videos to achieve amazing visual effects. By watching their videos, you can learn how to apply AI effects in actual creation to add creativity and highlights to your own works. Their channel Corridor Crew has many wonderful examples worth in-depth study.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                · Mrwhosetheboss brings overviews and introductions of the latest AI tools, keeping you updated with the latest developments in AI technology and broadening your creative thinking. His channel Mrwhosetheboss has a lot of interesting AI-related content that can inspire your creativity.
                </p>

                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                · Corridor Crew is a team known for its creativity and special effects. They often use AI effects in their videos to achieve amazing visual effects. By watching their videos, you can learn how to apply AI effects in actual creation to add creativity and highlights to your own works. Their channel Corridor Crew has many wonderful examples worth in-depth study.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                · Mrwhosetheboss brings overviews and introductions of the latest AI tools, keeping you updated with the latest developments in AI technology and broadening your creative thinking. His channel Mrwhosetheboss has a lot of interesting AI-related content that can inspire your creativity.
                </p>

                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>Inspiration Refueling Station: </strong>With the advancement of AI technology, the boundaries of video creation are constantly being expanded. Nowadays, there have been many AI-generated celebrity composite videos, such as the works of HeyGen, which create astonishing visual effects by synthesizing the images and voices of different people through AI technology. However, while appreciating these works, we must also consider the ethical boundaries. Although AI technology is powerful, we must follow moral and legal norms when using it for creation and must not infringe on others' portrait rights, privacy rights, and other legitimate rights and interests. You can watch some related discussion videos, such as Ethical Issues of AI Celebrity Composite Videos, to delve into this topic and thus be more cautious and responsible in the creation process.
                </p>

                {/* Divider */}
                <hr style={{ margin: '32px 0', borderColor: '#ccc' }} />

                {/* Section 5 */}
                <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '32px', marginBottom: '12px' }}>
                    Additional Materials
                </h2>
                
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                    To facilitate your better learning and practice of AI video editing technology, here are some authoritative reference resource websites:
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>1.Tool Tutorials: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>· CapCut Official Learning Center:</strong>where you can find detailed tutorials and usage guides for CapCut, covering everything from basic operations to advanced features to help you quickly master the software.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>· Runway ML Tutorial Library:</strong> which offers a wealth of Runway ML usage tutorials and cases, covering all aspects from beginner to advanced levels. It is a very valuable resource for creators who want to delve deeper into Runway ML.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>2.Material Libraries: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>· Royalty-Free Video Clips:</strong>Pexels is a well-known royalty-free video material website that provides a large number of high-definition video clips covering various themes and scenes. You can find suitable materials for your creative needs here without worrying about copyright issues.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>· AI-Generated Music:</strong> Soundraw is an AI music generation platform that can produce original soundtracks in various styles according to user needs. These soundtracks are royalty-free and can be used for free in video creation to add musical atmosphere.
                </p>

                <h3 style={{ fontWeight: 'bold', marginBottom: '6px' }}>3.Industry Trends: </h3>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>· Authoritative Review Website:</strong> Future Tools is a website focused on AI tool reviews and recommendations. It gathers various types of AI tools and provides detailed reviews and user experiences to help you quickly find the tools that suit your needs.
                </p>
                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                <strong>· AI Video Trend Analysis:</strong> Protocol is a website that focuses on the dynamics of the technology industry. It analyzes and predicts the development trends of AI video tools, providing you with cutting-edge industry information and insights to help you better grasp the development direction of AI video editing technology.
                </p>

                <p style={{ lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                You can also follow some professional video editing communities and forums, such as Video Editing Stack Exchange, where you can exchange experiences and share tips with other creators to explore the possibilities of AI video editing together. Meanwhile, some online learning platforms like Udemy and Coursera also offer many courses on AI video editing. These courses are taught by professional instructors with systematic and comprehensive content that can help you deeply learn and master the relevant knowledge and skills.
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