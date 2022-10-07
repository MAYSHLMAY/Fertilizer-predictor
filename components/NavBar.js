import Image from "next/image"

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
                  <a className="nav-link page1" href="./index.html">Home</a>
                </li>
                <li>
                  <a className="nav-link page2 active" href="./recommend.html">Fertilizer Recommend</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link page4" href="./faq.html">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        </>
    )
}