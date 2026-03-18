"use client"
import React, { useState } from "react";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function ComingSoon() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e:any) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to your API / mailing list
    setSubmitted(true);
    setEmail("");
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 flex items-center justify-center p-6" style={{ fontFamily: "Inter, Manrope, ui-sans-serif, system-ui" }}>
      <div className="max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl sm:text-6xl font-extrabold mb-6"
        >
          We’re Launching Soon
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 mb-8"
        >
          A simpler, faster experience is on its way. Join the waitlist and we’ll let you know the moment we go live.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-md mx-auto"
        >
          <div className="flex rounded-lg border border-gray-200 overflow-hidden shadow-sm">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 focus:outline-none text-sm"
              placeholder="Enter your email"
              required
            />
            <button type="submit" className="flex items-center gap-2 px-4 py-3 bg-black text-white text-sm font-medium">
              <Mail size={16} />
              {submitted ? "Subscribed" : "Notify me"}
            </button>
          </div>
          <p className="text-xs text-gray-400 mt-2">We respect your privacy — unsubscribe anytime.</p>
        </motion.form>
      </div>
    </div>
  );
}