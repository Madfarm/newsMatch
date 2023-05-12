"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faUpRightFromSquare, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import Popup from 'reactjs-popup';

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";

import { create } from '../../utilities/backend-api';







export default function ArticlesPage(props) {
    const articles = props.params.articles.news
    const [carouselIdx, setCarouselIdx] = useState(0)
    const [movement, setMovement] = useState(null);

    const { user } = useUser();

    async function handleMatchCreate() {
        if (!user) return
        if (!article) return

        console.log(article)

        let parsedArticle = {
            title: article.title,
            description: article.description,
            url: article.url,
            image: article.image
        }

        try {
            await create(parsedArticle, user.sub)
        } catch (err) {
            console.log(err)
        }
    }


    function handleNavClick(direction) {


        if (direction == "right") {
            setMovement(direction)

            if (carouselIdx == articles.length - 1) {
                setCarouselIdx(0)
                return
            }

            setCarouselIdx(carouselIdx + 1)

        } else {
            setMovement(direction)

            if (carouselIdx == 0) {
                setCarouselIdx(articles.length - 1)
                return
            }

            setCarouselIdx(carouselIdx - 1)
        }
    }


    const article = articles[carouselIdx];

    return (
        <main id="article-page">
            <article key={article?.id} className={movement == 'right' ? "slide-right" : "slide-left"}>
                <div className="article-section art-img">
                    <img src={article?.image != 'None' ? article.image : '/defaultImage.jpg'} /> 
                </div>
                <div className="article-section art-desc">{article?.description}</div>

                <a href={article.url}>
                    <div className="article-section art-title">

                        <h2>{article.title}</h2>
                        <FontAwesomeIcon icon={faUpRightFromSquare} size={"2xl"} />
                    </div>
                </a>
                <div className="article-section art-nav">
                    <div onClick={() => handleNavClick('left')}>
                        <FontAwesomeIcon id="left-arrow" icon={faArrowLeft} style={{ color: "#ffffff" }} size={"2xl"} />
                    </div>
                    <Popup
                        className="matchArrow"
                        trigger={open => (
                            <div onClick={handleMatchCreate}>
                                <p>Add to matches</p>
                                <FontAwesomeIcon id="down-arrow" icon={faArrowDown} style={{ color: "#ffffff" }} size={"2xl"} />
                            </div>
                        )}
                        position="top center"
                        contentStyle={{padding: "1vw", border: "1px solid gray"}}
                        closeOnDocumentClick
                    >
                        <span>It's a Match!</span>
                    </Popup>
                    <div onClick={() => handleNavClick('right')}>
                        <FontAwesomeIcon id="right-arrow" icon={faArrowRight} style={{ color: "#ffffff" }} size={"2xl"} />
                    </div>
                </div>
            </article>
        </main>
    )
}