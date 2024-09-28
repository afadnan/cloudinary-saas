

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
                    <div className="flex-1">
                        <Link href="/" onClick={handleLogoClick}>
                        <div className="btn btn-ghost normal-case text-2xl font-bold tracking-tight cursor-pointer">Cloudinary Showcase  </div>
                        </Link>
                    </div> 
                    {/* user found */}
                    {/*  
                    <div className="flex-none flex items-center space-x-4">
                        {user && (<>
                        <div className="avatar">
                            <div className="w-8 h-8 rounded-full">
                                <img src={user.imageUrl} alt={user.username ||user.emailAddresses[0].emailAddress
                                  } />
                            </div>
                        </div>
                        <span className="text-sm truncate max-w-xs lg:max-w-md">
                            {user.username ||user.emailAddresses[0].emailAddress}
                        </span>
                        
                        <button  onClick={handleSignOut} className="btn btn-ghost btn-circle"  >
                            <LogOutIcon className="h-6 w-6" />
                        </button>
                        </>)}
                    </div>
                    */}
                </div>
            </header>

            {/* {page content} */}
            <main className="flex-grow">
                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 my-8">
                    {children}
                </div>
            </main>
            
            </div>
            <div className="drawer-side">
                <label htmlFor="siebar-drawer " className="drawer-overlay"></label>
            
            </div>
        </div>
    )
 }
