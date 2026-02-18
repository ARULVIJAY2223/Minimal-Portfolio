import React from 'react';
import { Search, Settings, Bell, Menu } from 'lucide-react';
import ProfileImage from '../assets/profile.jpg';
import { useLocation } from 'react-router-dom';

const Header = ({ toggleSidebar }) => {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/': return 'Overview';
            case '/transactions': return 'Transactions';
            case '/accounts': return 'Accounts';
            case '/investments': return 'Investments';
            case '/credit-cards': return 'Credit Cards';
            case '/loans': return 'Loans';
            case '/services': return 'Services';
            case '/privileges': return 'My Privileges';
            case '/settings': return 'Setting';
            default: return 'Overview';
        }
    };

    return (
        <header className="h-[80px] bg-white md:bg-transparent px-6 md:px-8 flex items-center justify-between border-b md:border-none border-card-border">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="lg:hidden p-2 text-text-dark"
                >
                    <Menu size={24} />
                </button>
                <h1 className="text-[20px] md:text-[28px] font-semibold text-text-dark">{getTitle()}</h1>
            </div>

            <div className="flex items-center gap-6">
                {/* Search Bar */}
                <div className="hidden md:flex items-center bg-input-bg rounded-pill px-6 h-[44px] w-[300px]">
                    <Search size={20} className="text-text-dark" />
                    <input
                        type="text"
                        placeholder="Search for something"
                        className="bg-transparent border-none outline-none ml-3 text-[15px] text-text-dark w-full placeholder-placeholder"
                    />
                </div>

                {/* Icons */}
                <button className="hidden md:flex w-[50px] h-[50px] bg-input-bg rounded-full items-center justify-center hover:bg-gray-200 transition-colors">
                    <Settings size={24} className="text-text-light" />
                </button>
                <button className="hidden md:flex w-[50px] h-[50px] bg-input-bg rounded-full items-center justify-center hover:bg-gray-200 transition-colors">
                    <Bell size={24} className="text-[#FE5C73]" />
                </button>

                {/* Profile Image */}
                <div className="w-[35px] h-[35px] md:w-[44px] md:h-[44px] rounded-full overflow-hidden bg-gray-300">
                    <img
                        src={ProfileImage}
                        alt="Profile"
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </header>
    );
};

export default Header;
