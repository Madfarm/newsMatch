import Link from "next/link"

export default function HomePage(){
    return (
        <main id="homepage">
            <h1>Fall in love with the news again</h1>
            <p>News Match gives you all the news you love with the convenience of a dating app</p>
            <Link href="/articles">
                <button id="get-started-btn">Get Started</button>
            </Link>
        </main>
    )
}