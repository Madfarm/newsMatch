import Link from "next/link"
import styles from './Nav.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faList } from "@fortawesome/free-solid-svg-icons"

export default function Nav() {
    const isLoggedIn = false;
    console.log(process.env.AUTH_CLIENT_ID)

    return (
        <>
        <nav className={styles.Nav}>
            <div className={styles.navSection} id="navLogo">
                <Link href="/">News Match</Link>
            </div>

            <div className={styles.navSection} id="navLinks">
                <Link href="/">Matches</Link>
                <Link href="/articles">Articles</Link>
            </div>

            <div className={styles.navSection} id="navLists">
                <Link href="/articles"><FontAwesomeIcon icon={faList} /></Link>
                <Link href="/articles"><FontAwesomeIcon icon={faList} style={{ color: "#ffffff" }} /></Link>
                <Link href="/articles"><FontAwesomeIcon icon={faList} style={{ color: "#ffffff" }} /></Link>
            </div>


            <div className={styles.navSection} id="navProfile">
                {isLoggedIn ?
                    <Link href="/logout">Log Out</Link>
                :
                    <Link href="/login">Login</Link>
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