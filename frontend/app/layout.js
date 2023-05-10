import Nav from "./Nav"
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import {UserProvider} from '@auth0/nextjs-auth0/client'

const getArticle = async () =>{
  var url = 'https://api.currentsapi.services/v1/latest-news?langauge=us&apiKey=_nzV85Gpfc5q7Qq_QuQ1rLNUTSKIh9r7uOtBD-ZLnczq0qNm';

  const res = await fetch(url);
  return await res.json()
}

export default async function RootLayout({ children, params }) {
  const articles =  await getArticle();

  params.articles = articles;

  return (
    <html lang="en">
      <body>
        <UserProvider>
          <Nav />
          {children}
        </UserProvider>
      </body>
    </html>
  )
}
