'use client'

import React, { useState, useEffect, useCallback, memo } from "react";
import { MainTitle, CTAButton, SocialLink } from "@/components/ComponentsMemo";
import { SOCIAL_LINKS } from "@/data/data";
import {Mail, ExternalLink,} from "lucide-react";



function HomePage() {

    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        return () => setIsLoaded(false);
    }, []);


    return (

        <main className="min-h-screen  overflow-hidden" id="Home">
            <div className={`relative z-10 transition-all duration-1000 ${isLoaded ? "opacity-100" : "opacity-0"}`}>
                <section className="container mx-auto px-[5%] md:px-[10%] min-h-screen">
                    <div className="flex flex-col items-center justify-center h-screen gap-0">
                        {/* Left Column */}
                        <div className="w-full text-center md:text-left space-y-6 order-1">
                            <div className="space-y-5">
                                <MainTitle />
                                {/* Typing Effect */}
                                <div className="h-8 text-center md:text-left w-full">
                                    <span className="text-xl md:text-2xl bg-blue-medium bg-clip-text text-transparent font-paragraph">
                                        
                                        {/* {text} recordar para añadir efecto*/}
                                        Fullstack Developer
                                    </span>
                                    
                                </div>

                                {/* Description */}
                                <p className="text-base md:text-lg text-blue-black dark:text-gray-400 max-w-xl leading-relaxed font-paragraph md:w-1/2">
                                    Creating innovative, functional, and user friendly websites for digital solutions.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-row gap-3 w-full justify-center md:justify-start">
                                    <CTAButton href="#Portofolio" text="Projects" icon={ExternalLink} />
                                    <CTAButton href="#Contact" text="Contact" icon={Mail} />
                                </div>

                                {/* Social Links */}
                                <div className="flex gap-4 justify-center md:justify-start">
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

export default  HomePage;
