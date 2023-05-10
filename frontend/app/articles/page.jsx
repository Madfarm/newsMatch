"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faUpRightFromSquare, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";







export default function ArticlesPage(props) {
    const articles = props.params.articles.news
    const [carouselIdx, setCarouselIdx] = useState(10)
    const [movement, setMovement] = useState(null);




    function handleNavClick(direction) {
        if (direction == "right") {
            setCarouselIdx(carouselIdx + 1)
            setMovement(direction)
        } else {
            setCarouselIdx(carouselIdx - 1)
            setMovement(direction)
        }
    }

    const article = articles[carouselIdx];

    return (
        <main>
            <article key={article.id} className={movement == 'right' ? "slide-right" : "slide-left"}>
                <div className="article-section art-img">
                    {article?.image != 'None' ? <img src={article.image} /> : <h1>oops</h1>}
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
                    <div>
                        <p>Add to matches</p>
                        <FontAwesomeIcon id="down-arrow" icon={faArrowDown} style={{ color: "#ffffff" }} size={"2xl"} />
                    </div>
                    <div onClick={() => handleNavClick('right')}>
                        <FontAwesomeIcon id="right-arrow" icon={faArrowRight} style={{ color: "#ffffff" }} size={"2xl"} />
                    </div>
                </div>
            </article>
        </main>
    )
}