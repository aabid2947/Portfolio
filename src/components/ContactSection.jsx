import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaLinkedin, FaGithub, FaEnvelope, FaTwitter, FaPaperPlane, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const ContactSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen ">
      {/* Background elements */}
      {/* <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-1/2 -translate-x-1/2 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#3a3a3a22,#00000000)]"></div>
        <div className="absolute left-[20%] top-[20%] h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle_300px_at_30%_40%,#2a2a2a15,#00000000)] animate-pulse-slow"></div>
        <div className="absolute right-[15%] bottom-[15%] h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle_250px_at_70%_60%,#2a2a2a10,#00000000)] animate-pulse-slower"></div>
      </div> */}

      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block mb-6"
            >
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-2 inline-flex items-center">
                <FaEnvelope className="text-yellow-500/80 mr-2" />
                <span className="text-yellow-500/80 font-medium">Get in Touch</span>
              </div>
            </motion.div>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-500/90 to-yellow-600">
                Contact Me
              </span>
            </motion.h1>
            <motion.p
              className="text-lg text-gray-400 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 h-full">
                <h2 className="text-2xl font-bold mb-8 text-yellow-500/90">Contact Information</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                      <FaEnvelope className="text-yellow-500/80 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300 mb-1">Email</h3>
                      <a href="mailto:aabidhussainpas@gmail.com" className="text-gray-400 hover:text-yellow-500/80 transition-colors">
                        aabidhussainpas@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                      <FaPhone className="text-yellow-500/80 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300 mb-1">Phone</h3>
                      <p className="text-gray-400">+91 1234567890</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-yellow-500/10 p-3 rounded-lg mr-4">
                      <FaMapMarkerAlt className="text-yellow-500/80 text-xl" />
                    </div>
                    <div>
                      <h3 className="text-lg font-medium text-gray-300 mb-1">Location</h3>
                      <p className="text-gray-400">Hyderabad, India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xl font-bold mb-6 text-yellow-500/90">Follow Me</h3>
                  <div className="flex space-x-3">
                    {[
                      { icon: <FaGithub />, color: "hover:text-yellow-500/80", href: "https://github.com/aabid2947" },
                      { icon: <FaLinkedin />, color: "hover:text-yellow-500/80", href: "https://www.linkedin.com/in/md-aabid-hussain-852a72255/" },
                      { icon: <FaInstagram />, color: "hover:text-yellow-500/80", href: "https://instagram.com/aabid2947" },
                      { icon: <FaTwitter />, color: "hover:text-yellow-500/80", href: "https://x.com/aabid2947" },
                    ].map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gray-800 p-3 rounded-full text-gray-400 text-lg transition-all hover:bg-yellow-500/10"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {social.icon}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-lg font-bold mb-4 text-yellow-500/90">Availability</h3>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                    <p className="text-gray-400">Available for freelance work</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-8 h-full">
                <h2
                  className="text-2xl font-bold mb-8 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-transparent bg-clip-text"
                >
                  Send a Message
                </h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12"
                  >
                    <div className="bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 rounded-full p-5 mb-6">
                      <FaPaperPlane className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-500/90">Message Sent!</h3>
                    <p className="text-gray-400 text-center max-w-md">
                      Thanks for reaching out. I'll get back to you as soon as possible.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-gray-400 mb-2">Your Name</label>
                      <div className="relative">
                        <input
                          type="text"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-all pl-12"
                          placeholder="John Doe"
                          required
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500/80">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2">Your Email</label>
                      <div className="relative">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-all pl-12"
                          placeholder="john@example.com"
                          required
                        />
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-500/80">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 mb-2">Your Message</label>
                      <div className="relative">
                        <textarea
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          rows={5}
                          className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-3 text-white focus:outline-none focus:ring-1 focus:ring-yellow-500/50 transition-all pl-12"
                          placeholder="Hello, I'd like to talk about..."
                          required
                        ></textarea>
                        <div className="absolute left-4 top-4 text-yellow-500/80">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      type="submit"
                      className="w-full py-3 bg-gradient-to-r from-yellow-500/80 to-yellow-600/80 text-white font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-3 mt-6"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <FaPaperPlane className="h-5 w-5" />
                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-16 bg-gray-900/70 backdrop-blur-lg border border-gray-800 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6 text-yellow-500/90">My Location</h2>
            <div className="bg-gray-800 h-60 rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 to-black/80 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-full p-4 inline-block mb-4">
                    <FaMapMarkerAlt className="text-yellow-500/80 text-2xl" />
                  </div>
                  <p className="text-lg font-medium text-white">Hyderabad, India</p>
                  <p className="text-gray-400 mt-2">Available for remote work worldwide</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.6; }
        }
        @keyframes pulse-slower {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 6s infinite;
        }
        .animate-pulse-slower {
          animation: pulse-slower 8s infinite;
        }
      `}</style>
    </div>
  );
};

export default ContactSection;