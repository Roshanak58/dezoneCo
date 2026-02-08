import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import Link from "next/link"
import Breadcrumb from "@/components/layout/Breadcrumb"


function Layout({ children }) {
  return (
    <div className="container">
       <Header/>
       <div className="rightHead-section">
        <Breadcrumb />
        <div className="leftHead-section">
          <div className="lang">
            <Link href="/">En</Link>/<Link href="/">fa</Link>
          </div>
          <div>
            <Link href="/">
              <h4>ورود</h4>
            </Link>
          </div>
        </div>
      </div>
        <div className="container--main">
        
        <main className="content">{children}</main>
      </div>
       <Footer/>
    </div>
  )
}

export default Layout