'use client';

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { CardProject } from "@/components/CardProject";
import { TechStackIcon } from "@/components/TechStackIcon";
import { Certificate } from "@/components/Certificate";
import { TabPanel } from "@/components/TabPanel";
import { Code, Award, Boxes } from "lucide-react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { ToggleButton } from "@/components/ToggleButton";
import { TECH_STACK_PORTFOLIO, PROJECTS, CERTIFICATES } from "@/data/data";

// Swiper (SSR disabled)
const Swiper = dynamic(() => import("swiper/react").then(mod => mod.Swiper), { ssr: false });
const SwiperSlide = dynamic(() => import("swiper/react").then(mod => mod.SwiperSlide), { ssr: false });


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`,
    };
}

function PortfolioPage() {
    const theme = useTheme();
    const [value, setValue] = useState(0);
    const [isMobile, setIsMobile] = useState(false);
    const [isClient, setIsClient] = useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        setIsClient(true);

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const initialItems = isMobile ? 4 : 6;

    return (
        <div className="md:px-[10%] px-[5%] w-full mt-[3rem] overflow-hidden" id="Portofolio">
            <div className="flex flex-col gap-6 text-center pb-10">
                <h2 className="inline-block text-3xl md:text-5xl font-title text-center mx-auto text-transparent bg-clip-text bg-blue-black dark:bg-blue-light">
                        Portfolio
                </h2>
                <p className="text-blue-black dark:text-slate-400 max-w-2xl  mx-auto text-sm md:text-base mt-2">
                    Explore my journey through projects, certifications, and technical expertise.
                    Each section represents a milestone in my continuous learning path.
                </p>
            </div>

            <Box sx={{ width: "100%" }}>
                <AppBar
                    position="static"
                    elevation={0}
                    sx={{
                        background: "radial-gradient(circle at center, rgba(8, 46, 68, 0.7), rgba(22, 72, 99, 0.7))",
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: "20px",
                        position: "relative",
                        overflow: "hidden",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            backdropFilter: "blur(10px)",
                            zIndex: 0,
                        },
                    }}
                    className="md:px-4"
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        variant="fullWidth"
                        sx={{
                            minHeight: "70px",
                            "& .MuiTab-root": {
                                fontSize: { xs: "0.9rem", md: "0.9rem" },
                                fontWeight: "500",
                                color: "#cff6fe",
                                textTransform: "none",
                                transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                                padding: "20px 0",
                                zIndex: 1,
                                margin: "8px",
                                borderRadius: "12px",
                                "&:hover": {
                                    color: "#6edefa",
                                    backgroundColor: "rgba(22, 72, 99)",
                                    transform: "translateY(-2px)",
                                    "& .lucide": {
                                        transform: "scale(1.1) rotate(5deg)",
                                    },
                                },
                                "&.Mui-selected": {
                                    color: "#6edefa",
                                    background: "linear-gradient(rgba(110, 222, 250, 0.3), rgba(8, 46, 68, 0.3))",
                                    boxShadow: "0 4px 15px -3px rgba(92, 105, 246, 0.2)",
                                    "& .lucide": {
                                        color: "#6edefa",
                                    },
                                },
                            },
                            "& .MuiTabs-indicator": {
                                height: 0,
                            },
                            "& .MuiTabs-flexContainer": {
                                gap: "8px",
                            },
                        }}
                    >
                        <Tab icon={<Code className="mb-2 w-5 h-5 transition-all duration-300" />} label="Projects" {...a11yProps(0)} />
                        <Tab icon={<Award className="mb-2 w-5 h-5 transition-all duration-300" />} label="Certificates" {...a11yProps(1)} />
                        <Tab icon={<Boxes className="mb-2 w-5 h-5 transition-all duration-300" />} label="Tech Stack" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>

                {isClient && (
                    <Swiper
                        modules={[Pagination, Navigation]}
                        pagination={{ clickable: true }}
                        navigation
                    >
                        <SwiperSlide>
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className="container mx-auto flex justify-center items-center overflow-hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                                        {PROJECTS.map((project, index) => (
                                            <div
                                                key={project.id || index}

                                            >
                                                <CardProject
                                                    Img={project.Img}
                                                    Title={project.Title}
                                                    Description={project.Description}
                                                    Link={project.Link}
                                                    id={project.id}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabPanel>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className="container mx-auto flex justify-center items-center overflow-hidden">
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {CERTIFICATES.map((certificate, index) => (
                                            <div key={index}>
                                                <Certificate ImgCertif={certificate.Img} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabPanel>
                        </SwiperSlide>
                        <SwiperSlide>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <div className="container mx-auto flex justify-center items-center overflow-hidden pb-[5%]">
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:gap-8 gap-5">
                                        {TECH_STACK_PORTFOLIO.map((stack, index) => (
                                            <div
                                                key={index}
                                                data-aos={index % 3 === 0 ? "fade-up-right" : index % 3 === 1 ? "fade-up" : "fade-up-left"}
                                                data-aos-duration={index % 3 === 0 ? "1000" : index % 3 === 1 ? "1200" : "1000"}
                                            >
                                                <TechStackIcon TechStackIcon={stack.icon} Language={stack.language} />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </TabPanel>
                        </SwiperSlide>
                    </Swiper>
                )}
            </Box>
        </div>
    );
}

export default  PortfolioPage;




