'use client';
import React, { useState } from "react";
import Head from "next/head";
import { Send, Bot, Zap, Sparkles } from "lucide-react";

export default function ComingSoon() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
  };

  return (
    <>
      <Head>
        <title>Contex | AI Chatbot Platform</title>
      </Head>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-black text-white px-6">
        {/* Navigation */}
        <nav className="flex items-center justify-between p-6 w-full max-w-7xl border-b border-gray-800">
          <div className="flex items-center space-x-2">
            <Bot className="w-8 h-8 text-blue-500" />
            <span className="text-2xl font-bold tracking-wide">Contex</span>
          </div>
        </nav>

        {/* Main Content */}
        <div className="text-center max-w-3xl mt-14">
          <h1 className="text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">AI Chatbots, Simplified</h1>
          <p className="text-lg text-gray-300 mb-6">Powerful, scalable, and intuitive AI chatbot solutions designed for businesses, agencies, and enterprises.</p>
          <p className="text-md text-yellow-400 font-semibold text-lg">🚀 Coming Soon! Stay updated.</p>

          <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row justify-center max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 rounded-lg text-black focus:outline-none w-full sm:w-auto border border-gray-700"
              required
            />
            <button
              type="submit"
              className="mt-3 sm:mt-0 sm:ml-3 bg-blue-600 hover:bg-blue-700 justify-center text-white font-bold py-3 px-6 rounded-lg transition flex items-center gap-2 shadow-lg"
            >
              <span>Notify Me</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
          {submitted && (
            <p className="text-green-400 text-sm mt-2">Thanks! We&apos;ll notify you when we launch.</p>
          )}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mt-12 max-w-5xl text-center">
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <Zap className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Scalable & Multi-Tenant</h3>
            <p className="text-gray-400">Manage multiple chatbots across teams, brands, and clients—all from a single platform.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <Sparkles className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Seamless Integration</h3>
            <p className="text-gray-400">Easily connect with CRM, analytics, and customer service tools for a seamless workflow.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 shadow-lg">
            <Bot className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">AI-Powered Conversations</h3>
            <p className="text-gray-400">Automate interactions, understand customer intent, and deliver personalized responses effortlessly.</p>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 text-center text-gray-500 mt-12 border-t border-gray-800">
          <p>&copy; 2025 Contex. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
