"use client"

import { FC } from 'react';
import { motion } from 'framer-motion';
import { useAnimation } from 'framer-motion';
import Head from 'next/head';
import Navbar from '@/components/ui/navbar';
import Link from 'next/link';

const imageWrapperStyle = {
  backgroundColor: 'rgba(65, 52, 52, 0.05)', // subtle transparent background
  borderRadius: 20,
  padding: 16,
  borderTop: '1px solid rgba(255, 255, 255, 0.2)', // border-t (top border with white opacity)
  borderBottom: '1px solid rgba(255, 255, 255, 0.05)', // border-b (bottom border with lighter opacity)
};


export default function Model() {
  return (
    <>
     <Navbar />
     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20 mb-20">
      <motion.section
        className='mt-40 mb-20'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        <h2 className='text-5xl'>Project Overview</h2>
        <p className='mt-4 mb-4'>
          This project focuses on the detection of brain tumors using MRI images.
          This deep learning model detects <strong className='text-[#00be77]'>brain tumors</strong> from MRI images using a
          <strong className='text-[#00be77]'> Convolutional Neural Network (CNN)</strong>. The system classifies MRI scans into two categories:
        </p>
        <ul>
          <li><strong>0 → Normal Brain</strong></li>
          <li><strong>1 → Tumor Detected</strong></li>
        </ul>
      </motion.section>

      <div className="glowing-line"></div>

      <motion.section
        className="mt-20 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <h2 className="font-regular text-5xl mb-4">Dataset Summary</h2>
        <p>
          <strong>Total Images:</strong>{' '}
          <span className="text-[#00be77] ">253</span>
        </p>
        <ul className="mt-2 ml-5 list-disc text-white">
          <li>
            <strong>Tumor Images:</strong>{' '}
            <span className="text-[#00be77] ">155</span>
          </li>
          <li>
            <strong>Normal Images:</strong>{' '}
            <span className="text-[#00be77] ">98</span>
          </li>
        </ul>
        <p className="mt-4 mb-4 text-white">
          Images were preprocessed by resizing to{' '}
          <strong className="text-[#00be77]">128x128</strong>, converting to{' '}
          <strong className="text-[#00be77]">RGB</strong>, and normalizing pixel values.
        </p>
      </motion.section>

      <div className="glowing-line"></div>

      <motion.section
        className="mt-20 mb-20 rounded-xl text-white shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <h2 className="text-5xl font-regular">Model Architecture</h2>
        <p className="mt-4 mb-4 text-gray-300">
          The model is a Convolutional Neural Network (CNN) with the following structure:
        </p>

        <div className="overflow-x-auto">
          <table className="w-full rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-[#00be77] text-[#0a0b0e]">
                <th className="px-6 py-2 text-left">Layer Type</th>
                <th className="px-4 py-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody className='bg-gradient-to-tr from-[#0c0e14] via-[#0f1218] to-[#13171e] '>
              <tr>
                <td className="px-6 py-4">Conv2D</td>
                <td className="px-6 py-4">64 filters, 3×3 kernel, ReLU</td>
              </tr>
              <tr>
                <td className="px-6 py-4">MaxPooling2D</td>
                <td className="px-6 py-4">2×2 pool</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Flatten</td>
                <td className="px-6 py-4">Converts 2D to 1D</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Dense</td>
                <td className="px-6 py-4">128 neurons, ReLU</td>
              </tr>
              <tr>
                <td className="px-6 py-4">Output Dense</td>
                <td className="px-6 py-4">2 neurons, Sigmoid activation</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 mb-2 text-gray-300">
          <strong>Loss Function:</strong>{' '}
          <span className="text-[#00be77]">sparse_categorical_crossentropy</span>
        </p>
        <p className="text-gray-300">
          <strong>Optimizer:</strong>{' '}
          <span className="text-[#00be77]">Adam</span>
        </p>
      </motion.section>

      <div className="glowing-line"></div>

      <motion.section
        className="mt-20 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <h2 className="text-5xl mb-6 ">Training Details</h2>
        <ul className="mt-4 mb-4 space-y-2 ">
          <li>
            <strong>Epochs:</strong>{' '}
            <span className="text-[#00be77] font-medium">50</span>
          </li>
          <li>
            <strong>Train/Test Split:</strong>{' '}
            <span className="text-[#00be77] font-medium">80/20</span>
          </li>
          <li>
            <strong>Validation Split:</strong>{' '}
            <span className="text-[#00be77] font-medium">10% (within training)</span>
          </li>
          <li>
            <strong>Final Test Accuracy:</strong>{' '}
            <span className="text-[#00be77] font-medium">~86%</span>
          </li>
        </ul>
      </motion.section>

      <div className="glowing-line"></div>

      <motion.section
        className="mt-20 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
      >
        <h2 className='text-5xl'>Results & Visualizations</h2>
        <h3 className='mt-6 mb-6 text-center text-2xl font-medium'>Sample Images</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
          <div>
            <img
              src="/normal_cell_sample.png" // Replace with the actual path
              alt="Normal Brain"
              style={imageWrapperStyle}
            />
          </div>
          <div>
            <img
              src="/tumor_cell_sample.png" // Replace with the actual path
              alt="Tumor Brain"
              style={imageWrapperStyle}
            />
          </div>
        </div>

        <h3 className='mt-6 mb-6 text-center text-2xl font-medium'>Model Performance</h3>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>            
            <img
              src="/learning_curves.png" // Replace with the actual path
              alt="Accuracy Curve"
              style={imageWrapperStyle}
            />
          </div>
        </div>
      </motion.section>

      <div className="glowing-line"></div>

      <motion.section
        className='mt-20 mb-20'
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
      >
        <h2 className='text-5xl'>Conclusion</h2>
        <p className='mt-4 mb-4'>
          This CNN-based solution provides an effective approach for early brain tumor detection using MRI scans. With an
          86% accuracy, it can serve as a foundation for integration into clinical decision support systems or mobile
          diagnostic tools.
        </p>
      </motion.section>
    </main>
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
    </>
  );
};


