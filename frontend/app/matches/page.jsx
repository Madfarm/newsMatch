"use client"

import { destroyMatch, detail } from '../../utilities/backend-api'
import { useUser, withPageAuthRequired, WithPageAuthRequired } from '@auth0/nextjs-auth0/client'
import styles from './matches.module.css';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';


async function deleteMatch(user, articleid){
    return await destroyMatch(user.sub, articleid)
}

async function getMatches(user){
    let account = await detail(user.sub);
    return account.matches
}


export default function MatchesPage(){
    const { user } = useUser();
    const [matches, setMatches] = useState([]);

    if(!user) redirect('/api/auth/login')


    useEffect(() => {
        document.title = "Your Matches";

        getMatches(user)
        .then(res => setMatches(res))   
    }, [matches]);


    async function handleClick(user, articleid){
        let deletedMatch = await deleteMatch(user, articleid);
        setMatches(deletedMatch.matches);
    }


    return (
        <>
        {matches.length != 0 ?
        <section className={styles.container}>
            {matches?.map((article)=> {
                return (
                    <a key={article._id} onClick={()=>handleClick(user, article._id)} href={article.url} target="_blank" rel="noopener noreferrer">
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
            :
        <div style={{position: "absolute", textAlign: "center", width: "100vw"}}>
            <h1>You have no matches, head to the articles page to make some</h1>
        </div>
        }
        </>
    )
}

