'use client'

import React, { useState, useEffect } from "react";
import { MainTitle, CTAButton, SocialLink } from "@/components/ComponentsMemo";
import { SOCIAL_LINKS } from "@/data/data";
import { Mail, ExternalLink, } from "lucide-react";
import { TypeAnimation } from 'react-type-animation';



function HomePage() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);


    return (

        <main className="w-full min-h-screen flex justify-center items-center  overflow-hidden" id="Home">
            <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <section className="container mx-auto px-[5%] md:px-[10%] min-h-screen">
                    <div className="flex flex-col items-center justify-center h-screen gap-0">
                        {/* Left Column */}
                        <div className="w-full text-center flex justify-center items-center space-y-6 order-1">
                            <div className="space-y-5 justify-center items-center flex flex-col">
                                <MainTitle />
                                {/* Typing Effect */}
                                <div className="h-8 text-center w-full">
                                    <span className="text-xl md:text-2xl bg-blue-medium bg-clip-text text-transparent font-paragraph">
                                        <TypeAnimation
                                            sequence={[
                                                'Fullstack Developer ',
                                                1500,
                                                'Environmental Engineer',
                                                2000,  
                                            ]}
                                            wrapper='div'
                                            cursor={true}
                                            repeat={Infinity}
                                            style={{ fontSize: '1em', paddingLeft: '5px', color: '#cff6fe' }}
                                        />
                                    </span>


                                </div>

                                {/* Description */}
                                <p className="text-base md:text-xl text-blue-black dark:text-gray-400 max-w-xl leading-relaxed font-paragraph">
                                    Creating innovative, functional, and user friendly websites for digital solutions.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-row gap-3 w-full justify-center">
                                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-4 justify-center">
                                    {SOCIAL_LINKS.map((social, index) => (
                                        <SocialLink key={index} {...social} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>

    )
}

export default HomePage;
