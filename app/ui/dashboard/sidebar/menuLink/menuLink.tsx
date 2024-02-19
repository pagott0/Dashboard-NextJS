import { IconBaseProps } from 'react-icons';
import styles from './menuLink.module.css';
import Link from 'next/link';
import React from 'react';

const MenuLink = ({item}: {item: {icon: React.ReactElement, title: string, path: string}}) => {
    return (
        <Link href={item.path} className={styles.container}>
            {item.icon}
            {item.title}
        </Link>
    )
}

export default MenuLink;