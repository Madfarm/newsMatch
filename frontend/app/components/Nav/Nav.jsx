"use client"
import Link from "next/link"
import styles from './Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList, faBars } from "@fortawesome/free-solid-svg-icons"
import { useUser } from "@auth0/nextjs-auth0/client"
import { useState } from "react";
import { usePathname } from 'next/navigation'
import CategoryFilter from "../CategoryFilter/CategoryFilter"

export default function Nav(props) {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { user, error, isLoading } = useUser();
    let pathname = usePathname()

    console.log(user);


    function handleHamburger() {
        setMobileMenuOpen(!mobileMenuOpen);
    }

    return (
        <>
            <nav className={styles.Nav}>
                <div className={styles.navSection} id="navLogo">
                    <Link href="/">News Match</Link>
                </div>

                <div className={styles.navSection} id="navLinks">
                    <Link className={pathname == "/matches" ? styles.activeLink : ""} href="/matches">Matches</Link>
                    <Link className={pathname == "/articles" ? styles.activeLink : ""}  href="/articles">Articles</Link>
                </div>

                <div className={styles.navSection} id="navLists">
                    {pathname == "/articles" && <CategoryFilter />}
                </div>


                <div className={styles.navSection} id="navProfile">
                    {user && !isLoading ?

                        <div>
                            <p>Hi,{user.nickname}!</p>
                            <a className={styles.logButton} href="/api/auth/logout">Logout</a>
                        </div>
                        :

                        <a className={styles.logButton} href="/api/auth/login">Login/Signup</a>


                    }
                </div>
            </nav>
            <nav className={styles.mobileNav}>
                <div className={styles.mobileSection} id="mobile-logo">
                    <Link href="/">News Match</Link>
                </div>

                <div onClick={handleHamburger} className={styles.mobileSection} id="hamburger-container">
                    <p>MENU</p>
                    <FontAwesomeIcon icon={faBars} size={"2xl"} />
                </div>
            </nav>

            {mobileMenuOpen ?
                <div className={styles.openHamburger}>
                    <Link onClick={handleHamburger} href="/">Home</Link>
                    <Link onClick={handleHamburger} href="/articles">Articles</Link>


                    {user && !isLoading ?
                        <>
                            <Link onClick={handleHamburger} href="/matches">Matches</Link>
                            <a href="/api/auth/logout">Logout</a>
                        </>

                        :
                        <a href="/api/auth/login">Login/Signup</a>
                    }

                </div>

                :
                <></>
            }
        </>
    )
}