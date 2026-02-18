import React from 'react';
import { Zap } from 'lucide-react'; // Using Zap as a placeholder for the chip icon if needed, or build custom
const CreditCard = ({ balance, holder, validThru, number, theme = 'light', className = '', style = {} }) => {
    const isDark = theme === 'dark';

    return (
        <div
            className={`
        relative
        rounded-main p-6
        flex flex-col justify-between
        shrink-0 transition-all duration-300
        ${className || 'w-[350px] h-[235px]'}
        ${isDark
                    ? 'text-white shadow-active-card'
                    : 'bg-white text-text-dark border border-card-border'}
      `}
            style={isDark ? { background: 'linear-gradient(135deg, #4C49ED 0%, #0A06F4 100%)', ...style } : { ...style }}
        >
            {/* Blue Gradient Overlay - simplified to single gradient style above, removing inner overlay divs to avoid conflicts */}

            <div className="relative z-10 flex justify-between items-start">
                <div>
                    <p className={`text-[12px] font-lato ${isDark ? 'text-white' : 'text-text-light'}`}>Balance</p>
                    <h2 className={`text-[20px] font-semibold mt-1 font-inter ${isDark ? 'text-white' : 'text-text-dark'}`}>
                        ${balance.toLocaleString()}
                    </h2>
                </div>
                <div>
                    <img
                        src={isDark ? "https://raw.githubusercontent.com/kathirm20129/Greendy-Landing-Page/main/public/chip_white.png" : "https://raw.githubusercontent.com/kathirm20129/Greendy-Landing-Page/main/public/chip_black.png"}
                        alt="Chip"
                        className="w-[34px] h-[34px] object-contain"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzQiIGhlaWdodD0iMzQiIHZpZXdCb3g9IjAgMCAzNCAzNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjM0IiBoZWlnaHQ9IjM0IiByeD0iOCIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4="
                        }}
                    />
                </div>
            </div>

            <div className="relative z-10 flex gap-14 mt-4">
                <div>
                    <p className={`text-[12px] uppercase font-lato ${isDark ? 'text-white/70' : 'text-text-light'}`}>CARD HOLDER</p>
                    <p className="text-[15px] font-semibold mt-1 font-lato">{holder}</p>
                </div>
                <div>
                    <p className={`text-[12px] uppercase font-lato ${isDark ? 'text-white/70' : 'text-text-light'}`}>VALID THRU</p>
                    <p className="text-[15px] font-semibold mt-1 font-lato">{validThru}</p>
                </div>
            </div>

            <div className={`relative z-10 flex justify-between items-center px-0 pt-4 mt-2
        ${isDark
                    ? 'bg-gradient-to-b from-white/15 to-white/0 -mx-6 -mb-6 px-6 py-5 rounded-b-main'
                    : 'border-t border-card-border -mx-6 -mb-6 px-6 py-5 rounded-b-main'}
      `}>
                <p className={`text-[22px] font-semibold font-lato items-center flex gap-4 ${isDark ? 'text-white' : 'text-text-dark'}`}>
                    <span>3778</span>
                    <span>****</span>
                    <span>****</span>
                    <span>1234</span>
                </p>

                {/* Mastercard Circles */}
                <div className="flex relative w-[44px]">
                    <div className={`w-[30px] h-[30px] rounded-full z-10 ${isDark ? 'bg-white/50' : 'bg-[#9199AF]/50'}`}></div>
                    <div className={`w-[30px] h-[30px] rounded-full -ml-[14px] z-0 ${isDark ? 'bg-white/50' : 'bg-[#9199AF]/50'}`}></div>
                </div>
            </div>
        </div>
    );
};

export default CreditCard;
