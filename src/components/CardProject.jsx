'use client';

import React from 'react';
import Link from 'next/link';
import { ExternalLink, ArrowRight } from 'lucide-react';

function CardProject ({ Img, Title, Description, Link: ProjectLink, id }) {
    
    const handleLiveDemo = (e) => {
        if (!ProjectLink) {
            e.preventDefault();
            alert("Live demo link is not available");
        }
    };

    const handleDetails = (e) => {
        if (!id) {
            e.preventDefault();
            alert("Project details are not available");
        }
    };

    return (
        <main className="group relative w-full">
            <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-bg-dark/90 to-blue-black/90 backdrop-blur-lg border border-blue-white/10 shadow-2xl transition-all duration-300 hover:shadow-blue-light/20">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-blue-light/10 to-bg-dark/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />

                <section className="relative p-5 z-10">
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src={Img}
                            alt={Title}
                            className="w-full h-50 object-cover transform group-hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    <div className="mt-4 space-y-2">
                        <h3 className="text-base font-paragraph bg-blue-light bg-clip-text text-transparent">
                            {Title}
                        </h3>

                        <p className="text-gray-300/80 font-paragraph text-xs leading-relaxed line-clamp-2">
                            {Description}
                        </p>

                        <div className="pt-2 flex text-xs items-center justify-between">
                            {ProjectLink ? (
                                <a
                                    href={ProjectLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={handleLiveDemo}
                                    className="inline-flex items-center space-x-2 text-blue-medium hover:text-blue-light transition-colors duration-200"
                                >
                                    <span className="text-xs font-paragraph">Live Demo</span>
                                    <ExternalLink className="w-4 h-4" />
                                </a>
                            ) : (
                                <span className="text-gray-500 text-sm">Demo Not Available</span>
                            )}

                            {id ? (
                                <Link
                                    href={`/project/${id}`}
                                    onClick={handleDetails}
                                    className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                                >
                                    <span className="text-xs font-medium">Details</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            ) : (
                                <span className="text-gray-500 text-sm">Details Not Available</span>
                            )}
                        </div>
                    </div>

                    <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50" />
                </section>
            </div>
        </main>
    );
};

export {CardProject};
