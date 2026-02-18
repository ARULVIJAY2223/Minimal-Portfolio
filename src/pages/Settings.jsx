import React, { useState } from 'react';
import { Pencil, ChevronDown } from 'lucide-react';
import ProfileImage from '../assets/profile.jpg';

const Settings = () => {

    const [activeTab, setActiveTab] = useState('Edit Profile');

    const tabs = ['Edit Profile', 'Preferences', 'Security'];

    return (
        <div className="flex flex-col font-inter text-[#1F2A56] max-w-[1180px] mx-auto w-full">

            {/* Main Settings Card */}
            <div className="bg-white rounded-[28px] p-[32px] shadow-soft">

                {/* Tabs */}
                <div className="flex items-center border-b border-[#E6EBF5] h-[48px] mb-[32px] gap-[40px]">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`h-full text-[14px] font-medium transition-colors relative ${activeTab === tab
                                ? 'text-[#3B41F1] font-semibold border-b-[2px] border-[#3B41F1]'
                                : 'text-[#6B7280]'
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Content based on Active Tab */}
                {activeTab === 'Edit Profile' && (
                    <div className="flex flex-col lg:grid lg:grid-cols-[200px_1fr] gap-[40px]">
                        {/* Profile Image */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-[130px] h-[130px]">
                                <img
                                    src={ProfileImage}
                                    alt="Profile"
                                    className="w-full h-full rounded-full object-cover"
                                />
                                <button className="absolute bottom-[10px] right-[0px] w-[28px] h-[28px] bg-[#3B41F1] rounded-full flex items-center justify-center text-white shadow-md hover:bg-[#2A2FC5] transition-colors">
                                    <Pencil size={14} />
                                </button>
                            </div>
                        </div>

                        {/* Edit Profile Form */}
                        <form className="w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[24px]">
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Your Name</label>
                                    <input type="text" defaultValue="Charlene Reed" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">User Name</label>
                                    <input type="text" defaultValue="Charlene Reed" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Email</label>
                                    <input type="email" defaultValue="charlenereed@gmail.com" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Password</label>
                                    <input type="password" defaultValue="**********" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px] relative">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Date of Birth</label>
                                    <div className="relative">
                                        <input type="text" defaultValue="25 January 1990" className="h-[48px] w-full rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                        <ChevronDown size={16} className="absolute right-[16px] top-1/2 -translate-y-1/2 text-[#718EBF] pointer-events-none" />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Present Address</label>
                                    <input type="text" defaultValue="San Jose, California, USA" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Permanent Address</label>
                                    <input type="text" defaultValue="San Jose, California, USA" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">City</label>
                                    <input type="text" defaultValue="San Jose" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Postal Code</label>
                                    <input type="text" defaultValue="45962" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Country</label>
                                    <input type="text" defaultValue="USA" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                            </div>
                            <div className="flex justify-end mt-[24px]">
                                <button type="button" className="w-[140px] md:w-full lg:w-[140px] h-[44px] rounded-[14px] bg-gradient-to-br from-[#4F7BFF] to-[#3B41F1] text-white text-[14px] font-600 shadow-md hover:shadow-lg transition-shadow">
                                    Save
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                {/* Preferences Tab Content */}
                {activeTab === 'Preferences' && (
                    <div>
                        {/* Top Input Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[32px] gap-y-[24px] mb-[32px]">
                            <div className="flex flex-col gap-[6px]">
                                <label className="text-[13px] font-medium text-[#1F2A56]">Currency</label>
                                <input type="text" defaultValue="USD" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1]" />
                            </div>
                            <div className="flex flex-col gap-[6px]">
                                <label className="text-[13px] font-medium text-[#1F2A56]">Time Zone</label>
                                <input type="text" defaultValue="(GMT-12:00) International Date Line West" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1]" />
                            </div>
                        </div>

                        {/* Notification Section */}
                        <div className="mb-[32px]">
                            <h3 className="text-[14px] font-semibold text-[#1F2A56] mb-[16px]">Notification</h3>

                            <div className="flex flex-col gap-[16px]">
                                {/* Toggle 1 */}
                                <div className="flex items-center gap-[16px] h-[48px]">
                                    <div className="relative w-[44px] h-[24px] rounded-[12px] bg-[#14B8A6] cursor-pointer">
                                        <div className="absolute right-[2px] top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm"></div>
                                    </div>
                                    <span className="text-[14px] text-[#1F2A56]">I send or receive digital currency</span>
                                </div>

                                {/* Toggle 2 */}
                                <div className="flex items-center gap-[16px] h-[48px]">
                                    <div className="relative w-[44px] h-[24px] rounded-[12px] bg-[#E5E7EB] cursor-pointer">
                                        <div className="absolute left-[2px] top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm"></div>
                                    </div>
                                    <span className="text-[14px] text-[#1F2A56]">I receive merchant order</span>
                                </div>

                                {/* Toggle 3 */}
                                <div className="flex items-center gap-[16px] h-[48px]">
                                    <div className="relative w-[44px] h-[24px] rounded-[12px] bg-[#14B8A6] cursor-pointer">
                                        <div className="absolute right-[2px] top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm"></div>
                                    </div>
                                    <span className="text-[14px] text-[#1F2A56]">There are recommendation for my account</span>
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end mt-[32px]">
                            <button type="button" className="w-[140px] md:w-full lg:w-[140px] h-[44px] rounded-[14px] bg-gradient-to-br from-[#4F7BFF] to-[#3B41F1] text-white text-[14px] font-600 shadow-md hover:shadow-lg transition-shadow">
                                Save
                            </button>
                        </div>
                    </div>
                )}

                {/* Security Tab Content */}
                {activeTab === 'Security' && (
                    <div>
                        {/* Two-factor Authentication */}
                        <div className="mb-[32px]">
                            <h3 className="text-[14px] font-semibold text-[#1F2A56] mb-[12px]">Two-factor Authentication</h3>
                            <div className="flex items-center gap-[16px]">
                                <div className="relative w-[44px] h-[24px] rounded-[12px] bg-[#14B8A6] cursor-pointer shrink-0">
                                    <div className="absolute right-[2px] top-[2px] w-[20px] h-[20px] bg-white rounded-full shadow-sm"></div>
                                </div>
                                <span className="text-[14px] text-[#1F2A56]">Enable or disable two factor authentication</span>
                            </div>
                        </div>

                        {/* Change Password */}
                        <div className="mb-[40px]">
                            <h3 className="text-[14px] font-semibold text-[#1F2A56] mb-[16px]">Change Password</h3>
                            <div className="flex flex-col gap-[24px] w-full max-w-[420px]">  {/* Fixed width 420px */}
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">Current Password</label>
                                    <input type="password" defaultValue="**********" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                                <div className="flex flex-col gap-[6px]">
                                    <label className="text-[13px] font-medium text-[#1F2A56]">New Password</label>
                                    <input type="password" defaultValue="**********" className="h-[48px] rounded-[12px] border border-[#E6EBF5] bg-[#F9FAFB] px-[16px] text-[14px] text-[#1F2A56] outline-none focus:ring-1 focus:ring-[#3B41F1] placeholder-[#9CA3AF]" />
                                </div>
                            </div>
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-end">
                            <button type="button" className="w-[140px] md:w-full lg:w-[140px] h-[44px] rounded-[14px] bg-gradient-to-br from-[#4F7BFF] to-[#3B41F1] text-white text-[14px] font-600 shadow-md hover:shadow-lg transition-shadow">
                                Save
                            </button>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default Settings;
