import React, { useState } from 'react';
import Navbar from '../components/navbar';
import { motion } from 'framer-motion';

const Settings = () => {
    const [notifications, setNotifications] = useState(true);
    const [locationServices, setLocationServices] = useState(false);
    const [privacyMode, setPrivacyMode] = useState(true);

    const Toggle = ({ value, onChange, label }) => (
        <div className="flex items-center justify-between py-4 border-b border-gray-800 last:border-0">
            <span className="text-gray-300 font-medium">{label}</span>
            <div
                onClick={() => onChange(!value)}
                className={`w-12 h-7 rounded-full flex items-center px-1 cursor-pointer transition-colors duration-300 ${value ? 'bg-cyan-500' : 'bg-gray-700'}`}
            >
                <motion.div
                    className="w-5 h-5 bg-white rounded-full shadow-md"
                    animate={{ x: value ? 20 : 0 }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
            </div>
        </div>
    );

    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white w-screen overflow-x-hidden">
            <Navbar />
            <div className="pt-32 px-6 max-w-3xl mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                    <h1 className="text-4xl font-bold mb-8 text-white">Settings</h1>

                    <div className="space-y-6">
                        <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <h2 className="text-cyan-400 font-bold mb-4 uppercase text-xs tracking-wider">Preferences</h2>
                            <Toggle label="Push Notifications" value={notifications} onChange={setNotifications} />
                            <Toggle label="Location Services" value={locationServices} onChange={setLocationServices} />
                            <Toggle label="Enhanced Privacy" value={privacyMode} onChange={setPrivacyMode} />
                        </section>

                        <section className="bg-gray-900/50 p-6 rounded-2xl border border-gray-800">
                            <h2 className="text-cyan-400 font-bold mb-4 uppercase text-xs tracking-wider">Appearance</h2>
                            <div className="flex items-center justify-between py-3 cursor-pointer group">
                                <span className="text-gray-300 group-hover:text-white transition-colors">App Icon</span>
                                <span className="text-gray-500 text-sm">Default &gt;</span>
                            </div>
                            <div className="flex items-center justify-between py-3 cursor-pointer group">
                                <span className="text-gray-300 group-hover:text-white transition-colors">Font Size</span>
                                <span className="text-gray-500 text-sm">Medium &gt;</span>
                            </div>
                        </section>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Settings;
