import Head from "./head";
import Header from "../pages/Header.jsx";
import PageLoader from '../pages/PageLoader.jsx';
import CssImports from "./CssImports.jsx";

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
   <Head />
      <body>
    
     

      {children}
      </body>
    </html>
  )
}
