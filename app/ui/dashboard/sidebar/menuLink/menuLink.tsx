"use client"
import { IconBaseProps } from 'react-icons';
import styles from './menuLink.module.css';
import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';


const MenuLink = ({item}: {item: {icon: React.ReactElement, title: string, path: string}}) => {

    const pathname = usePathname();

    return (
        <Link href={item.path} className={`${styles.container} ${pathname === item.path && styles.active}`}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink;