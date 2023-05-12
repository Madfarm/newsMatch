"use client"

import { detail } from '../../utilities/backend-api'
import { useUser, withPageAuthRequired, WithPageAuthRequired } from '@auth0/nextjs-auth0/client'
import styles from './articles.module.css'
import { redirect } from 'next/navigation';




async function getMatches(user){
    let account = await detail(user.sub);
    return account.matches
}


export default async function MatchesPage(){
    const { user } = useUser();

    if(!user) redirect('/api/auth/login')

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

