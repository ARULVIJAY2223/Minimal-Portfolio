import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';

const Layout = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    return (
        <div className="min-h-screen bg-app-bg flex font-inter">
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

            <div className="flex-1 lg:ml-[260px] flex flex-col min-w-0 transition-all duration-300">
                <Header title="Overview" toggleSidebar={toggleSidebar} />
                <main className="p-6 lg:p-[30px] overflow-y-auto">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
