"use client";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowLeft, faUpRightFromSquare, faArrowDown } from "@fortawesome/free-solid-svg-icons"
import Popup from 'reactjs-popup';

import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useCategoryContext } from "../../utilities/categoryContext";


import { create } from '../../utilities/backend-api';
import { redirect } from "next/navigation";
import { useArticlePage } from "./articles.hooks";







export default function ArticlesPage(props) {
    const { handleMatchCreate, handleNavClick, article, movement } = useArticlePage(props.params.articles);
    

    return (
        <main id="article-page">
            <article key={article?.id} className={movement == 'right' ? "slide-right" : "slide-left"}>
                <div className="article-section art-img">
                    <img src={article?.image != 'None' ? article?.image : '/defaultImage.jpg'} />
                </div>
                <div className="article-section art-desc">{article?.description}</div>

                <a href={article?.url} target="_blank" rel="noopener noreferrer">
                    <div className="article-section art-title">

                        <h1 id="title">{article?.title}</h1>
                        <h1 id="goto-article">GO TO ARTICLE</h1>
                    </div>
                </a>
                <div className="article-section art-nav">
                    <div onClick={() => handleNavClick('left')}>
                        <FontAwesomeIcon id="left-arrow" icon={faArrowLeft} style={{ color: "#ffffff" }} size={"2xl"} />
                    </div>



                    <Popup
                        onClick={handleMatchCreate}
                        className="matchArrow"
                        trigger={open => (
                            <div >
                                <div onClick={handleMatchCreate}>
                                    <p>Add to matches</p>
                                    <FontAwesomeIcon id="down-arrow" icon={faArrowDown} style={{ color: "#ffffff" }} size={"2xl"} />
                                </div>
                            </div>
                        )}
                        position="top center"
                        contentStyle={{ padding: "1vw", border: "1px solid gray" }}
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