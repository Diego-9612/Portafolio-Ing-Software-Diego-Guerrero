'use client'

import { memo } from "react";
import { ArrowUpRight, Sparkles } from "lucide-react"

const MainTitle = memo(() => (
    <div className="w-full mt-12 space-y-2">
        <h1 className="text-5xl md:text-6xl font-title tracking-tight uppercase">
            <span className="relative inline-block">
                <span className="absolute -inset-2 bg-radial from-blue-white to-border-soft blur-2xl opacity-15"></span>
                <span className="relative bg-blue-white dark:bg-text-second-nav bg-clip-text text-transparent transition-colors duration-700 tracking-wide">
                    software
                </span>
            </span>
            <br />
            <span className="relative inline-block mt-2">
                <span className="absolute -inset-2  bg-radial from-blue-white  to-border-soft blur-2xl opacity-15"></span>
                <span className="relative bg-blue-black dark:bg-blue-white bg-clip-text text-transparent transition-colors duration-700 tracking-wide">
                    engineer
                </span>
            </span>
        </h1>
    </div>
));

const CTAButton = memo(({ href, text, icon: Icon }) => (
    <a href={href}>
        <button className="group relative w-[160px]">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-white to-blue-medium rounded-xl opacity-20 blur-md group-hover:opacity-90 transition-all duration-700"></div>
            <div className="relative h-11 md:h-12 bg-blue-black dark:bg-bg-dark backdrop-blur-xl rounded-lg border border-blue-medium/10 leading-none overflow-hidden">
                <div className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 bg-gradient-to-r from-blue-white-radio/10 to-blue-medium/10"></div>
                <span className="cursor-pointer absolute inset-0 flex items-center justify-center gap-3 text-base group-hover:gap-3 transition-all duration-300">
                    <span className="bg-blue-medium bg-clip-text text-transparent font-subtitle z-10">
                        {text}
                    </span>
                    <Icon className={`w-5 h-5 text-blue-medium ${text === 'Contact' ? 'group-hover:translate-x-1' : 'group-hover:rotate-45'} transform transition-all duration-300 z-10`} />
                </span>
            </div>
        </button>
    </a>
));

const SocialLink = memo(({ icon: Icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer">
        <button className="group relative p-3">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-white to-blue-medium rounded-xl blur opacity-10 group-hover:opacity-30 transition duration-300"></div>
            <div className="cursor-pointer relative rounded-xl bg-border-soft/20 dark:bg-bg-dark/60 backdrop-blur-xl p-2 border border-blue-black/20 dark:border-blue-medium/20 group-hover:border-white/20 transition-all duration-300">
                <Icon className="h-5 w-6 md:h-6 text-blue-black dark:text-blue-medium/60 group-hover:text-white transition-colors" />
            </div>
        </button>
    </a>
));

// Memoized Components
const AboutMe = memo(() => (
    <main className="text-center  mb-2 px-[5%]">
        <section className="inline-block relative group">
            <h2 className="text-3xl md:text-4xl font-title text-transparent bg-clip-text bg-blue-black dark:bg-blue-white">
                About Me
            </h2>
        </section>
        <p className="mt-2 text-blue-medium dark:text-gray-400 max-w-2xl mx-auto text-sm flex items-center justify-center gap-6">
            <Sparkles className="w-4 h-4 text-blue-white" />
            Transforming ideas into digital experiences
            <Sparkles className="w-4 h-4 text-blue-white" />
        </p>
    </main>
));

const ProfileImage = memo(() => (
    <main className="flex justify-end items-center p-0 py-2 pb-2">
        <section className="relative group">
            {/* Optimized gradient backgrounds with reduced complexity for mobile */}
            <section className="absolute -inset-6 opacity-[40%] z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-white via-blue-white-radio to-blue-medium rounded-full blur-2xl animate-spin-slower opacity-50" />
                <div className="absolute inset-0 bg-gradient-to-l from-blue-white via-blue-white-radio to-blue-medium rounded-full blur-2xl animate-pulse-slow opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-cyan-500 to-teal-400 rounded-full blur-2xl animate-float opacity-10" />
            </section>

            <section className="relative">
                <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden transform transition-all duration-700 group-hover:scale-105">
                    <div className="absolute inset-0 border-4 border-blue-medium/20 rounded-full z-20 transition-all duration-700 group-hover:border-blue-medium/40 group-hover:scale-105" />

                    {/* Optimized overlay effects - disabled on mobile */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-10 transition-opacity duration-700 group-hover:opacity-0 hidden sm:block" />
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-white/20 via-transparent to-blue-500/20 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block" />

                    <img
                        src="/Photo3.png"
                        alt="Profile"
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-2"
                        loading="lazy"
                    />

                    {/* Advanced hover effects - desktop only */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-700 z-20 hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <div className="absolute inset-0 bg-gradient-to-bl from-transparent via-white/10 to-transparent transform translate-y-full group-hover:-translate-y-full transition-transform duration-1000 delay-100" />
                        <div className="absolute inset-0 rounded-full border-8 border-white/10 scale-0 group-hover:scale-100 transition-transform duration-700 animate-pulse-slow" />
                    </div>
                </div>
            </section>
        </section>
    </main>
));

const StatCard = memo(({ icon: Icon, value, label, description }) => (
    <div className="relative group">
        <div className="relative z-10 bg-bg-dark/20 opacity-70 backdrop-blur-lg rounded-2xl p-6 border border-white/10 overflow-hidden transition-all duration-300 hover:scale-105 hover:opacity-100 hover:shadow-2xl h-full flex flex-col justify-between">
            <div className={`absolute -z-10 inset-0 bg-gradient-to-br from-blue-black to-blue-dark dark:from-blue-white dark:to-blue-black-medium opacity-100 dark:opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>

            <div className="flex items-center justify-between mb-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white/10 transition-transform group-hover:rotate-6">
                    <Icon className="w-8 h-8 text-blue-light" />
                </div>
                <span className="text-4xl font-bold text-blue-medium">
                    {value}
                </span>
            </div>

            <div>
                <p className="text-sm uppercase tracking-wider text-blue-light mb-2">
                    {label}
                </p>
                <div className="flex items-center justify-between">
                    <p className="text-xs text-gray-200">
                        {description}
                    </p>
                    <ArrowUpRight className="w-4 h-4 text-white/50 group-hover:text-white transition-colors" />
                </div>
            </div>
        </div>
    </div>
));

const Buttons = memo(({ href, text, icon: Icon, colorFrom, colorTo }) => (
    <a href={href} className="w-full md:w-auto">
        <button className={`w-full md:px-6 py-3 border border-blue-white/20 text-blue-medium text-sm rounded-lg bg-gradient-to-r from-${colorFrom}  to-${colorTo} text-blue-medium font-subtitle transition-all duration-300 hover:scale-105 flex items-center justify-center md:justify-start gap-2 shadow-lg hover:shadow-xl animate-bounce-slow`}>
            <Icon className="w-3 h-3 md:w-4 md:h-4" /> {text}
        </button>
    </a>
));

const CommentsCart = memo(({ comment, formatDate, index }) => (
    <div 
        className="px-4 pt-4 pb-2 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all group hover:shadow-lg hover:-translate-y-0.5"
        
    >
        <div className="flex items-start gap-3 ">
            {comment.profileImage ? (
                <img
                    src={comment.profileImage}
                    alt={`${comment.userName}'s profile`}
                    className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500/30"
                    loading="lazy"
                />
            ) : (
                <div className="p-2 rounded-full bg-indigo-500/20 text-indigo-400 group-hover:bg-indigo-500/30 transition-colors">
                    <UserCircle2 className="w-5 h-5" />
                </div>
            )}
            <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="font-medium text-white truncate">{comment.userName}</h4>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                        {formatDate(comment.createdAt)}
                    </span>
                </div>
                <p className="text-gray-300 text-sm break-words leading-relaxed relative bottom-2">{comment.content}</p>
            </div>
        </div>
    </div>
));

export { MainTitle, CTAButton, SocialLink, AboutMe, ProfileImage, StatCard, Buttons, CommentsCart };