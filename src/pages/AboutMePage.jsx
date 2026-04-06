'use client'

import React, { useEffect, useMemo, useState } from "react"
import { Code, Award, Globe } from "lucide-react"
import { AboutMe, ProfileImage, StatCard, CTAButton } from "@/components/ComponentsMemo";
import { LINKS_BUTTONS } from "@/data/data";

function AboutMePage() {
    
    const [YearExperience, setYearExperience] = useState(0);

    useEffect(() => {

        const startDate = new Date("2023-11-06");
        const today = new Date();
        const experience = today.getFullYear() - startDate.getFullYear() -
            (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

        setYearExperience(experience);
    }, []);

    const statsData = useMemo(() => [
        {
            icon: Code,
            value: 19,
            label: "Total Projects",
            description: "Web Applications",
            animation: "fade-right",
        },
        {
            icon: Award,
            value: 15,
            label: "Certificates",
            description: "Certification of professional skills",
            animation: "fade-up",
        },
        {
            icon: Globe,
            value: YearExperience,
            label: "Years of Experience",
            description: "Relevant experience",
            animation: "fade-left",
        },
    ], [YearExperience]);

    return (
        <div
            className="h-auto pb-[5%] overflow-hidden px-[5%] md:px-[10%] mt-10"
            id="About"
        >
            <AboutMe />

            <div className="w-full mx-auto pt-8 md:pt-12 relative">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-4xl font-title">
                            <span className="text-transparent bg-clip-text bg-blue-white dark:bg-blue-medium">
                                Hello, I'm
                            </span>
                            <span className="block mt-2 text-blue-black dark:text-blue-white text-xl md:text-3xl">
                                Diego Fernando Guerrero
                            </span>
                        </h2>

                        <p className="text-sm md:text-base text-blue-black dark:text-gray-400 leading-relaxed pb-4 md:pb-0">
                            Environmental Engineer with advanced training in Software Engineering (final semester) and strong knowledge in fullstack web application development, focused on creating engaging and functional digital experiences tailored to the specific needs of each project.
                        </p>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-4 md:px-0 w-full">
                            {LINKS_BUTTONS.map((social, index) => (
                                <CTAButton key={index} {...social} />
                            ))}
                        </div>
                    </div>
                    <ProfileImage />
                </div>

                <a href="#Portofolio">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 cursor-pointer">
                        {statsData.map((stat) => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </a>
            </div>


        </div>
    );
}

export default AboutMePage ;