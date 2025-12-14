import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

const AboutVersion = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white w-screen overflow-x-hidden">
            <Navbar />
            <div className="pt-32 px-6 max-w-3xl mx-auto text-center">
                <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
                    <div className="w-24 h-24 mx-auto bg-gradient-to-tr from-cyan-400 to-blue-600 rounded-3xl flex items-center justify-center mb-6 shadow-2xl shadow-cyan-500/20">
                        <span className="text-5xl font-black text-white">Z</span>
                    </div>

                    <h1 className="text-4xl font-bold text-white mb-2">ZukiX App</h1>
                    <p className="text-cyan-400 font-mono mb-8">v2.4.0 (Build 2024.12)</p>

                    <div className="bg-gray-900/50 max-w-md mx-auto rounded-2xl border border-gray-800 overflow-hidden text-left">
                        <div className="p-4 border-b border-gray-800">
                            <span className="text-gray-400 text-sm">Release Notes</span>
                        </div>
                        <div className="p-6 space-y-4">
                            <div>
                                <h3 className="font-bold text-white">What's New</h3>
                                <ul className="mt-2 space-y-2 text-sm text-gray-400 list-disc list-inside">
                                    <li>Implemented new Modal Ordering System</li>
                                    <li>Added Dark/Light Theme Switching</li>
                                    <li>Enhanced Mobile Navigation Bar</li>
                                    <li>Performance improvements</li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-4 bg-gray-900/80 border-t border-gray-800 text-center text-xs text-gray-500">
                            © 2024 ZukiX Automotive Inc. All rights reserved.
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default AboutVersion;
