import React, { useState } from 'react';
import { Send, ChevronRight } from 'lucide-react';

const QuickTransfer = () => {
    const users = [
        { name: "Livia Bator", role: "CEO", img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
        { name: "Randy Press", role: "Director", img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" },
        { name: "Workman", role: "Designer", img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" }
    ];

    const [selectedUser, setSelectedUser] = useState(0); // Default to Livia (index 0)

    return (
        <div className="bg-white rounded-[25px] p-[35px] h-[276px] flex flex-col justify-between shadow-soft">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-[30px]"> {/* Gap between users */}
                    {users.map((user, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center cursor-pointer min-w-[70px]"
                            onClick={() => setSelectedUser(index)}
                        >
                            <div className={`w-[70px] h-[70px] rounded-full overflow-hidden mb-[10px] transition-all ${selectedUser === index ? 'border-2 border-transparent' : ''}`}> {/* Added margin bottom */}
                                <img src={user.img} alt={user.name} className="w-full h-full object-cover" />
                            </div>
                            <h4 className={`text-[16px] text-[#232323] ${selectedUser === index ? 'font-bold' : 'font-normal'}`}>{user.name}</h4>
                            <p className={`text-[15px] ${selectedUser === index ? 'font-bold text-[#718EBF]' : 'font-normal text-[#718EBF]'}`}>{user.role}</p>
                        </div>
                    ))}
                </div>
                {/* Arrow Button */}
                <div className="w-[50px] h-[50px] rounded-full bg-white shadow-soft flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors">
                    <ChevronRight size={24} className="text-[#718EBF]" />
                </div>
            </div>

            <div className="flex items-center justify-between mt-auto">
                <span className="text-[#718EBF] text-[16px] font-normal">Write Amount</span>
                <div className="bg-[#EDF1F7] rounded-[50px] flex items-center w-[265px] h-[50px] relative">
                    <input
                        type="text"
                        defaultValue="525.50"
                        className="bg-transparent border-none outline-none pl-[25px] pr-[130px] w-full text-[#718EBF] font-medium text-[16px]"
                    />
                    <button className="absolute right-0 h-full w-[125px] bg-[#1814F3] rounded-[50px] text-white flex items-center justify-center gap-3 hover:bg-[#100DCC] transition-colors shadow-lg shadow-blue-500/30">
                        Send
                        <Send size={18} className="-rotate-45 translate-y-[1px]" /> {/* Adjusted icon rotation if needed, usually Send icon is angled. Standard Lucide Send is angled roughly right. */}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickTransfer;
