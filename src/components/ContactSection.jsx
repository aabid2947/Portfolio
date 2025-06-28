import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaPaperPlane } from "react-icons/fa";

export default function ContactSection() {
  const [activeTab, setActiveTab] = useState('contact');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen px-4 py-24 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Left Panel - Information */}
          <div className="w-full md:w-1/3">
            <motion.div 
              className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="space-y-6">
                <div className="space-y-2">
                  <h1 className="font-mono text-3xl text-white">
                    <span className="text-purple-500">/</span>contacts
                  </h1>
                  <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"></div>
                </div>

                <h2 className="font-mono text-xl text-zinc-300">
                  Let's connect
                </h2>

                <p className="font-mono text-zinc-400">
                  I'm interested in freelance opportunities. However, if you have other requests or questions, don't hesitate to contact me.
                </p>

                <div className="mt-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <FaEnvelope className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-zinc-400">Email</p>
                      <a href="mailto:aabidhussainpas@gmail.com" className="font-mono text-white hover:text-purple-500 transition-colors">
                        aabidhussainpas@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <FaGithub className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-zinc-400">GitHub</p>
                      <a href="https://github.com/aabid2947" target="_blank" rel="noopener noreferrer" className="font-mono text-white hover:text-purple-500 transition-colors">
                        @aabid2947
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-slate-800/50 rounded-lg">
                      <FaLinkedin className="h-6 w-6 text-purple-500" />
                    </div>
                    <div>
                      <p className="font-mono text-sm text-zinc-400">LinkedIn</p>
                      <a href="https://www.linkedin.com/in/md-aabid-hussain-852a72255/" target="_blank" rel="noopener noreferrer" className="font-mono text-white hover:text-purple-500 transition-colors">
                        Md Aabid Hussain
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Panel - Contact Form & Social Media */}
          <div className="w-full md:w-2/3">
            <div className="bg-slate-800/40 backdrop-blur-lg rounded-2xl p-8 border border-slate-700 shadow-xl h-full">
              <div className="flex gap-4 mb-8">
                <button 
                  className={`px-6 py-3 rounded-full font-mono transition-all ${
                    activeTab === 'contact' 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                      : 'bg-slate-800/50 text-zinc-400 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setActiveTab('contact')}
                >
                  Send Message
                </button>
                <button 
                  className={`px-6 py-3 rounded-full font-mono transition-all ${
                    activeTab === 'social' 
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                      : 'bg-slate-800/50 text-zinc-400 hover:bg-slate-700/50'
                  }`}
                  onClick={() => setActiveTab('social')}
                >
                  Social Media
                </button>
              </div>

              {activeTab === 'contact' ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center py-12">
                      <div className="bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full p-4 mb-6">
                        <FaPaperPlane className="h-12 w-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-mono text-white mb-2">Message Sent!</h3>
                      <p className="text-zinc-400 font-mono text-center">
                        Thanks for reaching out. I'll get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-2">
                        <label className="font-mono text-zinc-300 block">Name</label>
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white font-mono focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                          placeholder="Your name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-zinc-300 block">Email</label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white font-mono focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                          placeholder="your.email@example.com"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-zinc-300 block">Message</label>
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          className="w-full bg-slate-800/50 border border-slate-700 rounded-xl p-4 text-white font-mono focus:outline-none focus:ring-2 focus:ring-purple-600 transition-all"
                          placeholder="Your message here..."
                          required
                        ></textarea>
                      </div>

                      <button
                        type="submit"
                        className="w-full py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-mono rounded-xl hover:opacity-90 transition-opacity flex items-center justify-center gap-3"
                      >
                        <FaPaperPlane className="h-5 w-5" />
                        Send Message
                      </button>
                    </form>
                  )}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="font-mono text-xl text-white mb-6">
                      <span className="text-purple-500">#</span>all-media
                    </h3>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <a
                        href="https://instagram.com/aabid2947"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-purple-500 transition-all group"
                      >
                        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                          <FaInstagram className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-mono text-white">Instagram</p>
                          <p className="font-mono text-sm text-zinc-400">@aabid2947</p>
                        </div>
                      </a>
                      
                      <a
                        href="https://x.com/aabid2947"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-400 transition-all group"
                      >
                        <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                          <FaTwitter className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-mono text-white">Twitter</p>
                          <p className="font-mono text-sm text-zinc-400">@aabid2947</p>
                        </div>
                      </a>
                      
                      <a
                        href="https://www.linkedin.com/in/md-aabid-hussain-852a72255/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all group"
                      >
                        <div className="bg-gradient-to-r from-blue-700 to-blue-500 p-3 rounded-lg group-hover:scale-110 transition-transform">
                          <FaLinkedin className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-mono text-white">LinkedIn</p>
                          <p className="font-mono text-sm text-zinc-400">Md Aabid Hussain</p>
                        </div>
                      </a>
                      
                      <a
                        href="https://github.com/aabid2947"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 p-4 bg-slate-800/50 rounded-xl border border-slate-700 hover:border-gray-500 transition-all group"
                      >
                        <div className="bg-gradient-to-r from-gray-800 to-gray-600 p-3 rounded-lg group-hover:scale-110 transition-transform">
                          <FaGithub className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <p className="font-mono text-white">GitHub</p>
                          <p className="font-mono text-sm text-zinc-400">@aabid2947</p>
                        </div>
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <h3 className="font-mono text-xl text-white mb-6">
                      <span className="text-purple-500">#</span>direct-links
                    </h3>
                    
                    <div className="flex flex-wrap gap-4">
                      <a 
                        href="mailto:aabidhussainpas@gmail.com" 
                        className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg font-mono text-zinc-300 hover:bg-purple-600/20 hover:border-purple-500 transition-colors"
                      >
                        Email me
                      </a>
                      <a 
                        href="https://github.com/aabid2947" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg font-mono text-zinc-300 hover:bg-gray-700/20 hover:border-gray-500 transition-colors"
                      >
                        View GitHub
                      </a>
                      <a 
                        href="https://www.linkedin.com/in/md-aabid-hussain-852a72255/" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-800/50 border border-slate-700 rounded-lg font-mono text-zinc-300 hover:bg-blue-700/20 hover:border-blue-500 transition-colors"
                      >
                        Connect on LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}