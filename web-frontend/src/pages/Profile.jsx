import React from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

const Profile = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white w-screen overflow-x-hidden">
            <Navbar />
            <div className="pt-32 px-6 max-w-3xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="flex items-center gap-6 mb-8">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-4xl font-bold">
                            GU
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold text-white">Guest User</h1>
                            <p className="text-gray-400">guest@example.com</p>
                            <span className="inline-block mt-2 px-3 py-1 bg-cyan-500/10 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20">
                                Premium Member
                            </span>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <h2 className="text-xl font-semibold mb-4 text-white">Account Details</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between py-2 border-b border-gray-800">
                                    <span className="text-gray-400">Username</span>
                                    <span>GuestUser123</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-800">
                                    <span className="text-gray-400">Phone</span>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-800">
                                    <span className="text-gray-400">Location</span>
                                    <span>New York, USA</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <h2 className="text-xl font-semibold mb-4 text-white">Order History</h2>
                            <p className="text-gray-500 text-center py-4">No recent orders found.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};
export default Profile;
