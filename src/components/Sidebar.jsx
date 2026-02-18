import {
    Home,
    ArrowLeftRight,
    User,
    HandCoins,
    CreditCard,
    BarChart3,
    Wrench,
    Lightbulb,
    Settings,
    Menu,
    X,
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../assets/Logo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();
    const menuItems = [
        { icon: Home, label: "Dashboard", active: true, path: "/" },
        { icon: ArrowLeftRight, label: "Transactions", path: "/transactions" },
        { icon: User, label: "Accounts", path: "/accounts" },
        { icon: BarChart3, label: "Investments", path: "/investments" },
        { icon: CreditCard, label: "Credit Cards", path: "/credit-cards" },
        { icon: HandCoins, label: "Loans", path: "/loans" },
        { icon: Wrench, label: "Services", path: "/services" },
        { icon: Lightbulb, label: "My Privileges", path: "/privileges" },
        { icon: Settings, label: "Setting", path: "/settings" },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-20 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar Content */}
            <aside className={`
        fixed top-0 left-0 z-30
        h-full 
        w-[260px] lg:w-[260px] 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        bg-white border-r border-card-border
        transition-all duration-300 ease-in-out
        flex flex-col
      `}>
                {/* Logo */}
                <div className="flex items-center gap-2 px-8 h-[90px]">
                    <img src={Logo} alt="BankDash" className="w-[30px] h-[30px]" />
                    <h1 className="text-[25px] font-extrabold text-[#343C6A] font-inter">BankDash.</h1>
                </div>

                {/* Menu Items */}
                <nav className="flex-1 py-4">
                    <ul className="flex flex-col gap-0">
                        {menuItems.map((item, index) => {
                            const isActive = location.pathname === item.path;
                            return (
                                <li key={index}>
                                    <Link
                                        to={item.path}
                                        className={`
                                        relative flex items-center gap-4 px-8 py-3
                                        text-[16px] font-medium transition-colors
                                        ${isActive
                                                ? 'text-primary-blue'
                                                : 'text-[#B1B1B1] hover:text-primary-blue/70'}
                                    `}
                                    >
                                        {/* Active Indicator Bar */}
                                        {isActive && (
                                            <div className="absolute left-0 top-0 bottom-0 w-[6px] bg-primary-blue rounded-r-[10px]" />
                                        )}

                                        <item.icon
                                            size={25}
                                            className={isActive ? 'text-primary-blue' : 'text-[#B1B1B1]'}
                                            fill={isActive ? "currentColor" : "none"}
                                        />
                                        <span className="lg:block">{item.label}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
