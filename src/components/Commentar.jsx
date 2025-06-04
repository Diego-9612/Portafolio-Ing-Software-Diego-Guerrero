"use client";

import React from 'react';
import { useState, useRef, memo } from 'react';
import { MessageCircle, UserCircle2, Loader2, AlertCircle, Send, ImagePlus, X } from 'lucide-react';


const Comment = memo(({ comment, formatDate, }) => (
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
                <div className="p-2 rounded-full bg-indigo-500/20 text-blue-white group-hover:bg-indigo-500/30 transition-colors">
                    <UserCircle2 className="w-5 h-5" />
                </div>
            )}
            <div className="flex-grow min-w-0">
                <div className="flex items-center justify-between gap-4 mb-2">
                    <h4 className="font-medium text-blue-white truncate">{comment.userName}</h4>
                    <span className="text-xs text-gray-400 whitespace-nowrap">
                        {formatDate(comment.createdAt)}
                    </span>
                </div>
                <p className="text-gray-300 text-sm break-words leading-relaxed relative bottom-2">{comment.content}</p>
            </div>
        </div>
    </div>
));

const CommentForm = memo(() => {
    const [imagePreview, setImagePreview] = useState(null);
    const [imageFile, setImageFile] = useState(null);
    const textareaRef = useRef(null);
    const fileInputRef = useRef(null);


    

    return (
        <form  className="space-y-6">
            <div className="space-y-2">
                <label className="block text-sm font-paragraph  text-blue-black dark:text-blue-medium">
                    Name <span className="text-red-400">*</span>
                </label>
                <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 placeholder-blue-black text-sm dark:placeholder-gray-500 dark:text-blue-medium focus:outline-none focus:border-blue-white focus:ring-1 focus:to-blue-white/20 transition-all"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-paragraph text-blue-black dark:text-blue-medium">
                    Message <span className="text-red-400">*</span>
                </label>
                <textarea
                    ref={textareaRef}
                    placeholder="Write your message here..."
                    className="w-full p-4 rounded-xl bg-white/5 border border-white/10  dark:text-blue-medium placeholder-blue-black text-sm dark:placeholder-gray-500 text-gray-400 focus:outline-none focus:border-blue-white focus:ring-1 focus:to-blue-white/20 transition-all resize-none min-h-[120px]"
                    required
                />
            </div>

            <div className="space-y-2">
                <label className="block text-sm font-paragraph text-blue-black dark:text-blue-medium">
                    Profile Photo <span className="text-gray-400">(optional)</span>
                </label>
                <div className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-xl">
                    {imagePreview ? (
                        <div className="flex items-center gap-4">
                            <img
                                src={imagePreview}
                                alt="Profile preview"
                                className="w-16 h-16 rounded-full object-cover border-2 border-blue-white/50"
                            />
                            <button
                                type="button"
                                onClick={() => {
                                    setImagePreview(null);
                                    setImageFile(null);
                                    if (fileInputRef.current) fileInputRef.current.value = '';
                                }}
                                className="flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all group"
                            >
                                <X className="w-4 h-4" />
                                <span>Remove Photo</span>
                            </button>
                        </div>
                    ) : (
                        <div className="w-full" >
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                            />
                            <button
                                type="button"
                                className="w-full flex items-center text-sm justify-center gap-2 px-4 py-3 rounded-xl bg-blue-white/20 text-blue-black dark:text-blue-medium hover:bg-blue-white/30 transition-all border border-dashed border-blue-white/50 hover:border-blue-white group"
                            >
                                <ImagePlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
                                <span>Choose Profile Photo</span>
                            </button>
                            <p className="text-center text-gray-400 text-sm mt-2">
                                Max file size: 5MB
                            </p>
                        </div>
                    )}
                </div>
            </div>

            <button
                type="submit"
                className="relative w-full h-12 text-sm bg-gradient-to-r from-blue-black to-blue-black-medium dark:to-blue-white-radio rounded-xl font-medium text-white overflow-hidden group transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
            > Comment
                <div className="absolute inset-0 bg-white/20 translate-y-12 group-hover:translate-y-0 transition-transform duration-300" />
                <div className="relative flex items-center justify-center gap-2">
                    
                </div>
            </button>
        </form>
    );
});

const Commentar = () => {
    const [comments, setComments] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    return (
        <div className="w-full bg-gradient-to-b from-blue-white/10 to-white/5 rounded-2xl overflow-hidden backdrop-blur-xl shadow-xl">
        <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-white/20">
                    <MessageCircle className="w-6 h-6 text-blue-white-radio" />
                </div>
                <h3 className="text-xl font-semibold text-blue-black dark:text-blue-white">
                    Comments <span className="text-blue-white">({comments.length})</span>
                </h3>
            </div>
        </div>
        <div className="p-6 space-y-6">
            {error && (
                <div className="flex items-center gap-2 p-4 text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl" data-aos="fade-in">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <p className="text-sm">{error}</p>
                </div>
            )}
            <div >
                <CommentForm  error={error} />
            </div>

            <div className="space-y-4 h-[300px] overflow-y-auto custom-scrollbar" data-aos="fade-up" data-aos-delay="200">
                {comments.length === 0 ? (
                    <div className="text-center py-8">
                        <UserCircle2 className="w-12 h-12 text-blue-white mx-auto mb-3 opacity-50" />
                        <p className="text-gray-400 text-sm">No comments yet. Start the conversation!</p>
                    </div>
                ) : (
                    comments.map((comment, index) => (
                        <Comment 
                            key={comment.id} 
                            comment={comment} 
                            formatDate={formatDate}
                            index={index}
                        />
                    ))
                )}
            </div>
        </div>
    </div>
    );
};

export {Commentar};
