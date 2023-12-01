"use client"

import { destroyMatch, detail } from '../../utilities/backend-api'
import { useUser, withPageAuthRequired, WithPageAuthRequired } from '@auth0/nextjs-auth0/client'
import styles from './matches.module.css';
import { redirect, useRouter } from 'next/navigation';


async function deleteMatch(user, articleid){
    console.log('1')
    return await destroyMatch(user.sub, articleid)
}

async function getMatches(user){
    let account = await detail(user.sub);
    return account.matches
}


export default async function MatchesPage(){
    const router = useRouter();
    const { user } = useUser();

    if(!user) redirect('/api/auth/login')

    let matches = await getMatches(user);

    useEffect(() => {
        document.title = "Your Matches";
    }, []);


    async function handleClick(user, articleid){
        let deletedMatch = await deleteMatch(user, articleid)
        router.refresh();
    }


    return (
        <>
        {matches.length != 0 ?
        <section className={styles.container}>
            {matches?.map((article)=> {
                return (
                    <a onClick={()=>handleClick(user, article._id)} href={article.url} target="_blank" rel="noopener noreferrer">
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

