import Nav from "./Nav"
import './globals.css'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false


import {UserProvider} from '@auth0/nextjs-auth0/client'



export default function RootLayout({ children }) {
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
