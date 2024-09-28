

import React,{useState } from "react";
import Link from "next/link";
import {usePathname,useRouter } from "next/navigation";
import {useClerk,useUser } from "@clerk/nextjs";
import {
    LogOutIcon,
    MenuIcon,
    LayoutDashboardIcon,
    Share2Icon,
    UploadIcon,
    ImageIcon,
 } from "lucide-react";

 const sidebarItems = [
    {herf:"/home",icon: LayoutDashboardIcon,label:"Home Page"},
    {herf:"/social-share",icon: Share2Icon,label:"Social Share"},
    {herf:"/video-upload",icon: UploadIcon,label:"Video Upload"},
 ];

 export default function AppLayout({
    children,
 }:Readonly<{children:React.ReactNode;}>){
    const [sidebarOpen,setSidebarOpen] = useState(false);
    const pathname= usePathname();
    const router = useRouter();
    const {signOut} = useClerk();

    const handleLogoClick = () => {
        router.push("/");
    };

    const handleSignOut = async () => {
        await signOut();
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="sidebar-drawer" type="checkbox" className="drawer-toggle" checked={sidebarOpen} onChange={() => setSidebarOpen(!sidebarOpen)} />

            <div className="drawer-content flex flex-col">
                {/* {Navbar} */}
            <header className="w-full bg-base-200">
                <div className="navbar max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
                    <div className="flex-none lg-hidden">
                        <label htmlFor="sidebar-drawer"
                        className="btn btn-square btn-ghost drawe-button"
                        >
                            <MenuIcon/>
                        </label>
                    </div>
                    
                </div>
            </header>
            </div>
        </div>
    )
 }
