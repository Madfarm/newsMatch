"use client"

import { detail } from '../../utilities/backend-api'
import { useUser } from '@auth0/nextjs-auth0/client'
import styles from './articles.module.css'


async function getMatches(user){
    if(!user) {
        window.location.href = 'https://news-match.vercel.app/api/auth/login'
        return
    }

    let account = await detail(user.sub);
    return account.matches
}


export default async function MatchesPage(){
    const { user } = useUser();

    let matches = await getMatches(user)
    return (
        <section className={styles.container}>
            {matches.map((article)=> {
                return (
                    <a href={article.url}>
                        <div className={styles.card}>
                            <div className={styles.cardTitle}>
                                <h3>{article.title}</h3>
                            </div>
                            
                            <div className={styles.cardDesc}>
                                <p>{article.description}</p>
                            </div>

                        </div>
                    </a>

                )
            })

            }

        </section>
    )
}