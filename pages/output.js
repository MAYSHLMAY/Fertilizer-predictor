import Link from "next/link"
import NavBar from "components/NavBar";
import Footer from "components/footer";

import useFetch from "hooks/useFetch";

export default function Home() {

const [city, country] = useFetch();

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
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Result</li>
            </ol>
          </div>
          {'{'}% if not data %{'}'}
         
          {'{'}% endif %{'}'}
          {'{'}% if data %{'}'}
          <h1><u>{'{'}{'{'}data{'}'}{'}'}</u> is the recommeded fertilizer.</h1>
          <br />
          <p><i className="fas fa-map-marker-alt	" /> {city}, {city}, {country}</p>
          <p>({'{'}{'{'}ipdata.json.loc{'}'}{'}'})</p>
          <p>{'{'}{'{'}weather{'}'}{'}'}</p>
          <h6>{'{'}{'{'}desc1{'}'}{'}'}</h6>
          <h6>{'{'}{'{'}desc2{'}'}{'}'}</h6>
          <h6>{'{'}{'{'}desc3{'}'}{'}'}</h6>
          <h6>{'{'}{'{'}desc4{'}'}{'}'}</h6>
          <br />
          <h4>{'{'}{'{'}ph1{'}'}{'}'}</h4>
          <h6>{'{'}{'{'}p1{'}'}{'}'}</h6>
          <br /><br />
          {'{'}% endif %{'}'}
        </div>
        {/* /.container */}
        {/*footer starts from here*/}
        <Footer />
      </div>
      );
}

