import Image from "next/image"
import Link from "next/link"

export default function NavBar() {
    return (
        <>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
          <div className="container">
            <a className="navbar-brand" href="./index.html">
              <img src="../static/images/logo.jpg" className="logo" alt="logo" />
            </a>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="fas fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link href="./">
                <a className="nav-link page1">Home</a>
                </Link>
                </li>
                <li>
                <Link href="./recommend">
                <a className="nav-link page2 active">Fertilizer Recommend</a>
                  </Link>
                  
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    )
}