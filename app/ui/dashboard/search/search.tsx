"use client"
import { MdSearch } from 'react-icons/md';
import styles from './search.module.css';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce';

const Search = ({placeholder}: {placeholder: string}) => {

    const searchParams = useSearchParams()
    const {replace} = useRouter()
    const pathname = usePathname()

    
    const handleSearch = useDebouncedCallback((e: string) => {
        const params = new URLSearchParams(searchParams)
        
        if(e) {
            e.length > 2 && params.set("q", e)

        } else {
            params.delete("q")
        }
    
        replace(`${pathname}?${params}`)

    }, 300)

    return (
        <div className={styles.container}>
            <MdSearch />
            <input type="text" placeholder={placeholder} className={styles.input} onChange={(e) => handleSearch(e.target.value)}/>
        </div>
    )
}

export default Search;