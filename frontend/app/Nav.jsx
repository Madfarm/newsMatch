"use client"
import Link from "next/link"
import styles from './Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"
import { useUser } from "@auth0/nextjs-auth0/client"

export default function Nav() {
    const isLoggedIn = false;
    const { user, error, isLoading } = useUser();


    return (
        <>
        <nav className={styles.Nav}>
            <div className={styles.navSection} id="navLogo">
                <Link href="/">News Match</Link>
            </div>

            <div className={styles.navSection} id="navLinks">
                <Link href="/matches">Matches</Link>
                <Link href="/articles">Articles</Link>
            </div>

            <div className={styles.navSection} id="navLists">
                <Link href="/articles"><FontAwesomeIcon icon={faList} /></Link>
                <Link href="/articles"><FontAwesomeIcon icon={faList} style={{ color: "#ffffff" }} /></Link>
                <Link href="/articles"><FontAwesomeIcon icon={faList} style={{ color: "#ffffff" }} /></Link>
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
                <div>

                </div>

                <div>

                </div>
        </nav>
        </>
    )
}