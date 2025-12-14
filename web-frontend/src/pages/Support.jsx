import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';
import PrimaryButton from '../components/primarybutton';

const Support = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white w-screen overflow-x-hidden">
            <Navbar />
            <div className="pt-32 px-6 max-w-3xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl font-bold mb-4 text-white">Support Center</h1>
                    <p className="text-gray-400 mb-8 text-lg">How can we help you today?</p>

                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                            <span className="text-3xl mb-4 block">📚</span>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Documentation</h3>
                            <p className="text-gray-500 text-sm">Read our detailed guides and FAQs about vehicle features.</p>
                        </div>
                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800 hover:border-cyan-500/50 transition-colors cursor-pointer group">
                            <span className="text-3xl mb-4 block">🔧</span>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">Service Request</h3>
                            <p className="text-gray-500 text-sm">Schedule maintenance or repairs for your vehicle.</p>
                        </div>
                    </div>

                    <div className="bg-gray-900/80 p-8 rounded-2xl border border-gray-800 text-center">
                        <h2 className="text-2xl font-bold text-white mb-4">Contact Support</h2>
                        <p className="text-gray-400 mb-6">Our dedicated team is available 24/7 to assist you.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <PrimaryButton label="Chat Live" onClick={() => { }} type="primary" />
                            <PrimaryButton label="Email Us" onClick={() => { }} type="outline" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default Support;
