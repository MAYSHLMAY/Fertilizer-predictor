import Link from "next/link"
import NavBar from "components/NavBar";
import Footer from "components/footer";
import useFetch from "hooks/useFetch";

export default function Home() {

const [city, country] = useFetch();

let max = city;
console.log(max)
console.log(city, country)

    return (
        <div>
        <NavBar />
        <div className="full-title" style={{backgroundImage: 'url("static/images/all-title-bg.jpg")'}}>
          <div className="container">
            {/* Page Heading/Breadcrumbs */}
            <h1 className="mt-4 mb-3">Fertilizer Recommendation
              <small>Choose the best.</small>
            </h1>
          </div>
        </div>
        {/* Page Content */}
        <div className="container">
          <div className="breadcrumb-main">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
              <Link href="./">
                <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">Result</li>
            </ol>
          </div>
          <h1><u>{'{'}{'{'}data{'}'}{'}'}</u> is the recommeded fertilizer.</h1>
          <br />
          <p><i className="fas fa-map-marker-alt	" /> {city}, {city}, {country}</p>
          <br /><br />
        </div>
        {/* /.container */}
        {/*footer starts from here*/}
        <Footer />
      </div>
      );
}

