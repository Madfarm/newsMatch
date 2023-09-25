import Nav from "./Nav"
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { CategoryContextProvider } from '../utilities/categoryContext.jsx'


import { UserProvider } from '@auth0/nextjs-auth0/client'

const getArticle = async () => {
  var url = 'https://api.currentsapi.services/v1/search?langauge=us&page_size=200&apiKey=_nzV85Gpfc5q7Qq_QuQ1rLNUTSKIh9r7uOtBD-ZLnczq0qNm';

  const res = await fetch(url, {next :{ revalidate: 3600 }});
  const data = await res.json()
  return data
}



export default async function RootLayout({ children, params }) {
  // //const articles = await getArticle();
  // params.articles = articles;

  params.articles = {
    news: []
  }




  return (
    <html lang="en">
      <body>
        <UserProvider>
          <CategoryContextProvider>
            <Nav />
            {children}
          </CategoryContextProvider>
        </UserProvider>
      </body>
    </html>
  )
}
