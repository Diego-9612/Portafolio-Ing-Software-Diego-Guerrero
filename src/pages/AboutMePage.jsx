'use client'

import React, { useEffect, useMemo, useState } from "react"
import { Code, Award, Globe } from "lucide-react"
import { AboutMe, ProfileImage, StatCard, Buttons } from "@/components/ComponentsMemo";
import { LINKS_BUTTONS } from "@/data/data";




function AboutMePage() {

    // Memoized calculations
    const [totalProjects, setTotalProjects] = useState(0);
    const [totalCertificates, setTotalCertificates] = useState(0);
    const [YearExperience, setYearExperience] = useState(0);

    useEffect(() => {
        const storedProjects = JSON.parse(localStorage.getItem("projects") || "[]");
        const storedCertificates = JSON.parse(localStorage.getItem("certificates") || "[]");

        const startDate = new Date("2021-11-06");
        const today = new Date();
        const experience = today.getFullYear() - startDate.getFullYear() -
            (today < new Date(today.getFullYear(), startDate.getMonth(), startDate.getDate()) ? 1 : 0);

        setTotalProjects(storedProjects.length);
        setTotalCertificates(storedCertificates.length);
        setYearExperience(experience);
    }, []);

    const statsData = useMemo(() => [
        {
            icon: Code,
            color: "from-blue-white to-blue-black-medium",
            value: totalProjects,
            label: "Total Projects",
            description: "Innovative web solutions crafted",
            animation: "fade-right",
        },
        {
            icon: Award,
            color: "from-blue-black-medium to-blue-white",
            value: totalCertificates,
            label: "Certificates",
            description: "Professional skills validated",
            animation: "fade-up",
        },
        {
            icon: Globe,
            color: "from-blue-white to-blue-black-medium",
            value: YearExperience,
            label: "Years of Experience",
            description: "Continuous learning journey",
            animation: "fade-left",
        },
    ], [totalProjects, totalCertificates, YearExperience]);

    return (
        <div
            className="h-auto pb-[10%] text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%] mt-10 sm-mt-0"
            id="About"
        >
            <AboutMe />

            <div className="w-full mx-auto pt-8 md:pt-12 relative">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:gap-16 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <h2 className="text-3xl md:text-5xl font-title">
                            <span className="text-transparent bg-clip-text bg-blue-medium">
                                Hello, I'm
                            </span>
                            <span className="block mt-2 text-blue-white text-2xl md:text-4xl">
                                Diego Fernando Guerrero
                            </span>
                        </h2>

                        <p className="text-base md:text-lg text-gray-400 leading-relaxed text-justify pb-4 md:pb-0">
                            Software engineering student interested in web development. I focus on creating engaging digital experiences and always strive to provide the best solutions for each project.
                        </p>

                        <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-4 md:px-0 w-full">
                            {LINKS_BUTTONS.map((social, index) => (
                                <Buttons key={index} {...social} />
                            ))}
                        </div>
                    </div>
                    <ProfileImage />
                </div>

                <a href="#Portofolio">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 cursor-pointer">
                        {statsData.map((stat) => (
                            <StatCard key={stat.label} {...stat} />
                        ))}
                    </div>
                </a>
            </div>


        </div>
    );
}

export { AboutMePage };