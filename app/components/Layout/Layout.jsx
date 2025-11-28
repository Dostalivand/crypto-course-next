"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { initFlowbite } from "flowbite";

function Layout({ children }) {
    const pathname = usePathname(); 

    useEffect(() => {
        initFlowbite(); 
    }, [pathname]); 

    return <div>{children}</div>;
}

export default Layout;
