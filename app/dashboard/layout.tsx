import Footer from "../ui/dashboard/footer/footer";
import Navbar from "../ui/dashboard/navbar/page";
import Sidebar from "../ui/dashboard/sidebar/page";
import styles from "@/app/ui/dashboard/dashboard.module.css"

import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <Sidebar />
            </div>
            <div className={styles.content}>
                <Navbar />
                {children}
                <Footer />
            </div>
        </div>
    )
}

export default Layout;