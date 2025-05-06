'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/ui/navbar';
// import { GlowingEffect } from "@/components/ui/glowing-effect";
import { useState } from 'react';
import { CheckIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import {Popover, PopoverTrigger, PopoverContent, Button} from "@heroui/react";

const features = [
  {
    title: "Quick Diagnosis",
    description: "Provides fast, real-time predictions, reducing wait times for users.",
    image: '/Fast.png',
  },
  {
    title: "High Accuracy",
    description: "Trained on a large dataset for reliable and precise results in detecting tumors.",
    image: '/Time.png',
  },
  {
    title: "Easy to Use",
    description: "Simple interface for uploading MRI images and getting instant feedback.",
    image: '/Cursor.png',
  },
  {
    title: "Cost-Effective",
    description: "Reduces the need for expensive diagnostic equipment or manual analysis.",
    image: '/Money.png',
  },
  {
    title: "Accessible Anywhere",
    description: "Available online, allowing anyone with an internet connection to use it.",
    image: '/Net.png',
  },
  {
    title: "Educational Tool",
    description: "A great resource for students and researchers to understand AI-based tumor detection.",
    image: '/Book.png',
  },
];

const plans = [
  {
    name: 'Free',
    price: 0,
    billing: 'Forever',
    description: 'Perfect for small teams and startups',
    cta: 'Sign Up Now',
    features: [
      '3 scans/month',
      'Basic tumor detection',
      'Unlimited projects and tasks',
      'Access to sample cases for learning',
      'Encrypted upload for privacy',
    ],
  },
  {
    name: 'Pro',
    price: 16,
    billing: 'per month',
    description: 'Advanced tools for growing teams.',
    cta: 'Request Pro Plan',
    features: [
      'All Free plan features, plus',
      '50 scans/month',
      'Advanced tumor detection',
      'Tumor region highlighting',
      'Downloadable reports',
      'Priority email support',
    ],
  },
  {
    name: 'Team',
    price: 42,
    billing: 'per month',
    description: 'Complete collaboration for larger teams.',
    cta: 'Request Team Plan',
    features: [
      'All Pro plan features, plus',
      'Unlimited scans',
      'Full AI analytics suite',
      'API & system Integration',
      'Team collaboration tools',
      'Dedicated support & onboarding',
    ],
  },
];



export default function Home() {
  const [isAnnual, setIsAnnual] = useState(true);
  return (
    <>
 <Navbar />
      <motion.div // Ensures a new animation is triggered when navigating to a different page
        initial={{ opacity: 0 }}  // Initial state (before the page loads)
        animate={{ opacity: 1 }}  // Final state (after the page loads)
        exit={{ opacity: 0 }}  // State when leaving the page
        transition={{ duration: 0.5 }}  // Duration of the transition
      >
        <main className="text-white scroll-smooth">
          <section id="main"
            style={{
              backgroundImage: "url('/Brain.png')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="fade-mask flex flex-col items-center justify-center mb-25 text-center px-4 min-h-screen"
          >
            <img
              src='/GlowBrain.png'
              alt="Glowing Brain"
              className="absolute top-[Xpx] left-[Ypx] w-[Widthpx] h-[Heightpx] z-10 pointer-events-none glow"
            />
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-b from-transparent to-[#0a0b0e] z-0 pointer-events-none" />
            {/* Heading */}
            <motion.h1
              style={{ marginTop: '-250px' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-6xl font-bold leading-tight"
            >
              Detect Brain Tumors In<br /> Seconds With brAIn
            </motion.h1>

            {/* Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mt-4 text-md max-w-xl mx-auto text-white"
            >
              Your smart MRI companion. Fast results, AI-powered insights,<br />
              and peace of mind—all in one scan.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 mt-8"
            >
              {/* Model Button */}
              <Link href="/technology" className="cursor-pointer">
                <button
                  className="cursor-pointer bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e] border-t border-b border-white/20 border-b-white/5 text-zinc-400 text-md font-medium px-8 py-2 rounded-xl shadow-md transition duration-200 hover:text-white"
                >
                  View Model
                </button>
              </Link>

              {/* Scan Button */}
              <Link href="/technology" className="cursor-pointer">
              <button
                className="cursor-pointer bg-gradient-to-tl from-[#00be77] via-[#027b4f] to-[#003c28] font-medium text-emerald-950 px-8 py-2 rounded-xl border-t border-b border-white/10 overflow-hidden transition duration-200 hover:text-white hover:shadow-[0_0_12px_4px_rgba(1,123,79,0.4)]"
              >
                Scan Now
              </button>
              </Link>
            </motion.div>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-42">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center px-6 py-1 rounded-[2rem] bg-[linear-gradient(to_right,rgba(0,60,40,0.4),rgba(2,123,79,0.6),rgba(0,60,40,0.4))] backdrop-blur-md border-t border-b border-white/20 border-b-white/5 shadow-inner text-center">
                <span className="text-transparent text-white font-regular drop-shadow-[0_0_4px_rgba(2,123,79,0.5)]">
                  Features
                </span>
              </div>
            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <img className="w-full border-t border-b border-white/20 border-b-white/5 shadow-inner rounded-4xl" src='/F1.png' />
              <div className="mt-4 md:mt-0">
                <h2 className="text-5xl font-regular mb-4">Image Preview & Prediction</h2>
                <p className="text-neutral-400 mb-6 font-regular">
                  Users can easily upload an MRI image and instantly receive a prediction result displayed alongside a live preview of the uploaded image. Once the image is selected, the system processes it in real time and provides a clear outcome—such as “Normal” or “Tumor”—within seconds.
                </p>
              </div>
            </div>

            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <div className="mt-4 md:mt-0">
                <h2 className="text-5xl font-regular mb-4">Confidence Score</h2>
                <p className="text-neutral-400 mb-6 font-regular">
                  The model displays a confidence percentage alongside each prediction to help users interpret the results more clearly—for example, “92% Tumor” or “88% No Tumor.” This percentage represents how certain the AI is about its diagnosis, based on the data it has analyzed.
                </p>
              </div>
              <img className="w-full border-t border-b border-white/20 border-b-white/5 shadow-inner rounded-4xl" src='/F2.png' />
            </div>
          </section>


          <div className="glowing-line"></div>

          {/* Offer */}

          <section id="solutions" className="py-20 px-6 mt-6 mb-22">
            {/* Label Tag */}
            <div className="flex justify-center mb-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center justify-center px-6 py-1 rounded-[2rem] bg-[linear-gradient(to_right,rgba(0,60,40,0.4),rgba(2,123,79,0.6),rgba(0,60,40,0.4))] backdrop-blur-md border-t border-b border-white/20 border-b-white/5 shadow-inner text-center"
              >
                <span className="text-transparent text-white font-regular drop-shadow-[0_0_4px_rgba(2,123,79,0.5)]">
                  What We Offer
                </span>
              </motion.div>
            </div>

            {/* Title + Subtitle */}
            <div className="max-w-6xl mx-auto text-center">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-5xl font-regular mb-4 text-white"
              >
                Your Perfect Diagnosis, One Scan at a Time
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="mb-10 text-neutral-400"
              >
                brAIn offers quick, accurate tumor detection with an easy-to-use interface. <br />
                Accessible online, it’s an affordable, reliable tool for both professionals and students.
              </motion.p>

              {/* Feature Cards */}
              <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

                  {features.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 5, scale: 0.90 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        duration: 0.2,
                        delay: i * 0.10,
                        ease: [0.25, 1, 0.25, 1]
                      }}
                      viewport={{ once: true, amount: 0.3 }}
                      className="relative w-full bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e] pb-8 pt-6 px-12 rounded-xl shadow hover:shadow-lg transition-all duration-300 border-t border-b border-white/20 border-b-white/5"
                    >
                      {/* Optional GlowingEffect */}
                      {/* <GlowingEffect
                        spread={50}
                        glow={true}
                        disabled={false}
                        proximity={100}
                        inactiveZone={0.06}
                      /> */}

                      {/* Image */}
                      <div className="flex justify-center items-center w-full">
                        <img
                          src={feature.image}
                          className="w-15 h-15 mb-2 object-contain"
                          alt={feature.title}
                        />
                      </div>

                      {/* Title + Description */}
                      <h4 className="font-semibold text-lg text-white mb-2 text-center">
                        {feature.title}
                      </h4>
                      <p className="text-neutral-300 text-center text-xs">
                        {feature.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <div className="glowing-line"></div>

          {/* Pricing Plan */}

          <section id="pricing" className="py-16 px-6 text-white mt-12">
            <div className="flex justify-center mb-4">
              <div className="inline-flex items-center justify-center px-6 py-1 rounded-[2rem] bg-[linear-gradient(to_right,rgba(0,60,40,0.4),rgba(2,123,79,0.6),rgba(0,60,40,0.4))] backdrop-blur-md border-t border-b border-white/20 border-b-white/5 shadow-inner text-center">
                <span className="text-transparent text-white font-regular drop-shadow-[0_0_4px_rgba(2,123,79,0.5)]">
                  Pricing
                </span>
              </div>
            </div>
            <div className="max-w-5xl mx-auto text-center">
              <h2 className="text-5xl font-regular mb-2">Choose the Perfect<br />Plan for Your Diagnosis</h2>
              <p className="text-neutral-400 mb-6 font-medium">
                brAIn offers the perfect solution for professionals and students alike.


              </p>

              <div className="mb-10 flex justify-center items-center">
                <div className="flex items-center space-x-4 pl-2 pr-4 py-2 rounded-4xl bg-gradient-to-r from-[#0c0e14] via-[#0f1218] to-[#13171e]/5 backdrop-blur-sm border-t border-b border-white/20 border-b-white/5 shadow-inner">
                  {/* Monthly Radio Button */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="billingCycle"
                      checked={!isAnnual}
                      onChange={() => setIsAnnual(false)}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/40 transition-all duration-300">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${!isAnnual
                          ? 'bg-[#00be77] shadow-[0_0_6px_3px_rgba(1,123,79,0.9)]'
                          : 'bg-transparent'
                          }`}
                      />
                    </div>
                    <span className={`ml-2 text-sm ${!isAnnual ? 'text-white font-semibold' : 'text-white/60'}`}>
                      Monthly
                    </span>
                  </label>
                  {/* Annually Radio Button */}
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="radio"
                      name="billingCycle"
                      checked={isAnnual}
                      onChange={() => setIsAnnual(true)}
                      className="sr-only peer"
                    />
                    <div className="w-8 h-8 flex items-center justify-center rounded-full border border-white/40 transition-all duration-300">
                      <div
                        className={`w-4 h-4 rounded-full transition-all duration-300 ${isAnnual
                          ? 'bg-[#00be77] shadow-[0_0_6px_3px_rgba(1,123,79,0.9)]'
                          : 'bg-transparent'
                          }`}
                      />
                    </div>
                    <span className={`ml-2 text-sm ${isAnnual ? 'text-white font-semibold' : 'text-white/60'}`}>
                      Annually{' '}
                      <span
                        className={`ml-1  ${isAnnual
                          ? 'text-[#00be77] drop-shadow-[0_0_6px_rgba(34,197,94,0.6)]'
                          : 'text-white/40'
                          }`}
                      >
                        Save 15%
                      </span>
                    </span>
                  </label>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    name: 'Free',
                    price: 0,
                    billing: 'Forever',
                    cta: 'Sign Up Now',
                    features: [
                      '3 scans/month',
                      'Basic tumor detection',
                      'Unlimited projects and tasks',
                      'Access to sample cases for learning',
                      'Encrypted upload for privacy',
                    ],
                    preFeatureText: 'Free Plan includes',
                    extraText: 'For students and first-time users.',
                  },
                  {
                    name: 'Pro',
                    price: 16,
                    billing: 'per month',
                    cta: 'Request Pro Plan',
                    features: [
                      '50 scans/month',
                      'Advanced tumor detection',
                      'Tumor region highlighting',
                      'Downloadable reports',
                      'Priority email support',
                    ],
                    preFeatureText: 'All Free plan features, plus',
                    extraText: 'For medical professionals and researchers.',
                    bgColor: 'bg-gradient-to-t from-[#00be77] via-[#027b4f] to-[#003c28]',
                    isGlowing: true,
                    glowEffect: 'animate-pulse',
                    borderColor: 'border-2 border-white',
                  },
                  {
                    name: 'Team',
                    price: 42,
                    billing: 'per month',
                    cta: 'Request Team Plan',
                    features: [
                      'Unlimited scans',
                      'Full AI analytics suite',
                      'API & system Integration',
                      'Team collaboration tools',
                      'Dedicated support & onboarding',
                    ],
                    preFeatureText: 'All Pro plan features, plus',
                    extraText: 'For clinics & institutions.',
                  },
                ].map((plan) => {
                  const calculatedPrice =
                    plan.price === 0
                      ? '$0'
                      : `$${isAnnual ? Math.round(plan.price * 12 * 0.85) : plan.price}`;

                  const billingText = isAnnual ? 'Billed annually' : 'Billed monthly';

                  return (
                    <div
                      key={plan.name}
                      className={`${plan.bgColor ? plan.bgColor : 'bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e]'
                        } ${plan.isGlowing ? 'shadow-[0_0_60px_rgba(1,123,79,0.9)]' : ''
                        } ${plan.name === 'Pro' ? ' border-t border-b border-white/40 border-b-white/20' : ' border-t border-b border-white/20 border-b-white/5'
                        } rounded-2xl shadow p-6 flex flex-col justify-between`}
                    >
                      <div>
                        <h3 className={`text-xl font-semibold mb-1 text-left ${plan.name === 'Pro' ? 'text-emerald-100' : 'text-zinc-400'}`}>
                          {plan.name}
                        </h3>

                        <div className={`text-5xl mt-2 font-bold mb-2 text-left ${plan.name === 'Pro' ? 'text-white' : ''}`}>
                          {calculatedPrice} <span className="text-sm font-normal">{isAnnual ? 'per year' : 'per month'}</span>
                        </div>
                      </div>

                      {/* New line below the price */}
                      <p className={`text-sm font-medium mb-4 text-left ${plan.name === 'Pro' ? 'text-emerald-100' : 'text-zinc-400'}`}>
                        {plan.extraText}
                      </p>

                        {/* CTA Button */}
                        {plan.name === 'Pro' || plan.name === 'Team' ? (
  <Popover
    showArrow
    backdrop="opaque"
    classNames={{
      base: ["before:bg-default-200"],
      content: [
        "rounded-2xl py-3 px-4 border-t border-b border-white/20 border-b-white/5 bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e]",
      ],
    }}
    placement="bottom"
  >
    <PopoverTrigger>
      <a
        className="inline-block mb-2 bg-white text-[#0f1218] text-md font-medium py-2 px-4 rounded-xl shadow-md transition duration-300 hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
      >
        {plan.cta}
      </a>
    </PopoverTrigger>
    <PopoverContent>
      {(titleProps) => (
        <div className="px-1 py-2 ">
          <h3 className="text-small font-bold text-white" {...titleProps}>
            {plan.name} Trial Info
          </h3>
          <div className="text-tiny text-white">
            {plan.name === 'Pro'
              ? 'Want Pro plan? Reach out to [your email address] for more info!'
              : 'Want Teams plan? Reach out to [your email address] for more info!'}
          </div>
        </div>
      )}
    </PopoverContent>
  </Popover>
) : (
  <a
    href="/signup"
    className="inline-block mb-2 bg-white text-[#0f1218] text-md font-medium py-2 px-4 rounded-xl shadow-md transition duration-300 hover:shadow-[0_0_12px_rgba(255,255,255,0.5)]"
  >
    {plan.cta}
  </a>
)}


                      <div className="text-sm font-semibold text-white/50 mb-6">{billingText}</div>

                      {/* Line division below the button */}
                      <hr className="border-t border-[0.5px] border-white/25 mb-4" />

                      {/* Pre-feature text */}
                      <p className={`text-md font-medium mb-4 text-left ${plan.name === 'Pro' ? 'text-white' : 'text-white'}`}>
                        {plan.preFeatureText}
                      </p>

                      <ul className={`text-sm space-y-2 mb-6 text-left font-medium ${plan.name === 'Pro' ? 'text-emerald-100' : 'text-zinc-400'}`}>
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex gap-x-3">
                            <CheckIcon
                              aria-hidden="true"
                              className={`h-5 w-5 ${plan.name === 'Pro' ? 'text-white' : 'text-gray-400'}`}
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>

                    </div>
                  );
                })}
              </div>

            </div>
          </section>
          <footer className="mt-20 w-full z-50 top-0 border-t border-white/20 text-white py-8">
            <div className="max-w-screen-xl mx-auto px-4">
              {/* Footer content */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {/* Company Info */}
                <div>
                  <Link href="/#main" className="text-5xl font-bold text-white">
                    br<span className="text-[#00be77]">AI</span>n.
                  </Link>
                  <p className="text-sm text-zinc-400 mt-2">
                    brAIn is a cutting-edge AI-powered tool for quick and accurate brain tumor detection. We provide fast results and peace of mind with each scan.
                  </p>
                </div>

                {/* Empty space for better alignment */}
                <div className="hidden lg:block"></div>

                {/* Useful Links (Moved to the right) */}
                <div className="lg:text-right">
                  <h3 className="text-xl font-semibold mb-4">Useful Links</h3>
                  <ul className="text-sm text-zinc-400 space-y-2">
                    <li><a href="#features" className="hover:text-[#00be77]">Features</a></li>
                    <li><a href="#solutions" className="hover:text-[#00be77]">What We Offer</a></li>
                    <li><a href="#pricing" className="hover:text-[#00be77]">Pricing</a></li>
                    <li><a href="/technology  " className="hover:text-[#00be77]">Model</a></li>
                  </ul>
                </div>

              </div>

              {/* Footer Bottom */}
              <div className="mt-8 border-t border-gray-600/20 pt-6 text-center">
                <p className="text-sm text-zinc-400">&copy; 2025 brAIn. All rights reserved.</p>
              </div>
            </div>
          </footer>


        </main>
      </motion.div>
    </>
  );
}
