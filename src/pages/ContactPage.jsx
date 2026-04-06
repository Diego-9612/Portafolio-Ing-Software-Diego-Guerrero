"use client";

import React, { useState } from "react";
import { Share2, User, Mail, MessageSquare, Send } from "lucide-react";
import Swal from "sweetalert2";
import { SocialLinks } from "../components/SocialLinks";
import { Commentar } from "../components/Commentar";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    Swal.fire({
      title: 'Sending Message...',
      html: 'Please wait while we send your message',
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      }
    });

    try {
      const response = await fetch("https://formsubmit.co/ajax/diegoguerrero@umariana.edu.co", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully!',
          icon: 'success',
          confirmButtonColor: '#6366f1',
          timer: 2000,
          timerProgressBar: true,
        });

        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Close'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="text-center lg:mt-[5%] mt-10 mb-2 md:px-0 px-[5%]">
        <h2 className="inline-block text-3xl md:text-4xl font-title text-center mx-auto text-transparent bg-clip-text bg-blue-black dark:bg-blue-white">
          <span>Contact Me</span>
        </h2>
        <p className="text-blue-black dark:text-slate-400 max-w-2xl mx-auto text-sm md:text-base mt-2">
          Got a question? Send me a message, and I'll get back to you soon.
        </p>
      </div>

      <div className="h-auto py-10 flex items-center justify-center px-[5%] md:px-0" id="Contact">
        <div className="container px-[1%] grid grid-cols-1 md:grid-cols-2 w-6xl gap-12">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-5 py-10 sm:p-10 transform transition-all duration-300 hover:shadow-[#6366f1]/10">
            <div className="flex justify-between items-start mb-8">
              <div>
                <h2 className="text-2xl font-paragraph font-bold mb-3 text-transparent bg-clip-text bg-blue-black dark:bg-blue-white">
                  Get in Touch
                </h2>
                <p className="text-blue-black dark:text-slate-400 text-base">
                  Have something to discuss? Send me a message and let's talk.
                </p>
              </div>
              <Share2 className="w-8 h-8 text-blue-black dark:text-blue-white opacity-50" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative group">
                <User className="absolute left-4 top-4 w-5 h-5 dark:text-gray-400 group-focus-within:text-blue-white transition-colors" />
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 text-gray-400 placeholder-blue-black dark:placeholder-gray-500 placeholder:text-sm text-sm text-gray/10 dark:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-white-radio/30 transition-all duration-300 hover:border-blue-white/30 disabled:opacity-50"
                  required
                />
              </div>
              <div className="relative group">
                <Mail className="absolute left-4 top-4 w-5 h-5 dark:text-gray-400 group-focus-within:text-blue-white transition-colors" />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full p-4 pl-12 bg-white/10 rounded-xl border border-white/20 placeholder-blue-black text-sm dark:placeholder-gray-500 text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#6366f1]/30 transition-all duration-300 hover:border-blue-white/30 disabled:opacity-50"
                  required
                />
              </div>
              <div className="relative group">
                <MessageSquare className="absolute left-4 top-4 text-sm w-5 h-5 text-blue-black dark:text-gray-400 group-focus-within:text-blue-white transition-colors" />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  className="w-full resize-none p-4 pl-12 bg-white/10 rounded-xl placeholder:text-sm border border-white/20 placeholder-blue-black dark:placeholder-gray-500 text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-white/30 transition-all duration-300 hover:border-blue-white/30 h-[9.9rem] disabled:opacity-50"
                  required
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-black text-sm to-blue-black-medium dark:to-blue-white-radio text-blue-medium py-4 rounded-xl font-paragraph transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6366f1]/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <Send className="w-4 h-4" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>

            <div className="mt-10 pt-6 border-t border-white/10 flex justify-center space-x-6">
              <SocialLinks />
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-3 py-3 md:p-10 md:py-8 shadow-2xl transform transition-all duration-300 hover:shadow-[#6366f1]/10">
            <Commentar />
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactPage;