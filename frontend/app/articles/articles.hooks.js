import { useState } from "react";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/navigation";
import { useCategoryContext } from "../../utilities/categoryContext";

export const useArticlePage = (articles) => {
    const { categoryState } = useCategoryContext();
    const router = useRouter();
    const [carouselIdx, setCarouselIdx] = useState(0)
    const [movement, setMovement] = useState(null);

    let article;


    
    if (categoryState && categoryState != "all") {
        articles = articles.filter((article) => article.category.includes(categoryState))

        if (carouselIdx > articles.length){
            setCarouselIdx(0)
        }
        
    } 

    console.log(articles);

    if (articles.length === 0) {
        article = {
            title: "Sorry, no articles in this category found",
            description: "Try another category to find articles",
            url : "",
            image: '/defaultImage.jpg'
        }
    } else {
        article = articles[carouselIdx];
    }
    
    



    const { user } = useUser();
    
    async function handleMatchCreate() {
        if(!user) router.push('/api/auth/login')
        if (!article) return
        
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

    return { article, movement, handleMatchCreate, handleNavClick };
}