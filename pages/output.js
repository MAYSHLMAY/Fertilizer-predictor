import Link from "next/link"
import NavBar from "components/NavBar";

export default function Home() {
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
          <p><i className="fas fa-map-marker-alt	" /> {'{'}{'{'}ipdata.json.city{'}'}{'}'}, {'{'}{'{'}ipdata.json.region{'}'}{'}'}, {'{'}{'{'}ipdata.json.country{'}'}{'}'} </p>
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
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Find us</h5>
                {/*headin5_amrc*/}
                <p><i className="fa fa-location-arrow" /> R.V. College of Engineering, Mysore Rd, Vidyaniketan post,
                  Bengaluru-560059 </p>
                <p><i className="fa fa-phone" /> +91-9876543210 </p>
                <p><i className="fa fa fa-envelope" /> response-team-fr@gmail.com </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Follow us</h5>
                {/*headin5_amrc ends here*/}
                <ul className="footer_ul2_amrc">
                  <li>
                    <a href="#"><i className="fab fa-linkedin fleft padding-right" /> </a>
                    <p><a href="https://www.linkedin.com/in/sahil-sharma-396b49179/">Linkedin : Sahil Sharma</a>
                    </p>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-linkedin fleft padding-right" /> </a>
                    <p><a href="https://www.linkedin.com/in/ameya-mahadev-gonal-a2ba59134/">Linkedin : Ameya
                        MG</a></p>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-linkedin fleft padding-right" /> </a>
                    <p><a href="https://www.linkedin.com/in/ktnvaish/">Linkedin : Ketan Vaish</a></p>
                  </li>
                  <li>
                    <a href="#"><i className="fab fa-linkedin fleft padding-right" /> </a>
                    <p><a href="#">Linkedin : Harshit Handa</a>
                    </p>
                  </li>
                </ul>
                {/*footer_ul2_amrc ends here*/}
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <h5 className="headin5_amrc col_white_amrc pt2">Quick links</h5>
                {/*headin5_amrc*/}
                <ul className="footer_ul_amrc">
                  <li><a href="https://farmer.gov.in/stl.aspx">Soil Testing labs (State-wise)</a></li>
                  <li><a href="https://www.napanta.com/fertilizer-dealer">Offline fertilizer dealers (State-wise)</a></li>
                  <li><a href="https://www.napanta.com/market-price/telangana/warangal/warangal">Daily Market Price (of various crops)</a></li>
                  <li><a href="https://www.ugaoo.com/plant-care/plant-growth/fertilizers.html">Buy fertilizers online</a></li>
                  <li><a href="https://agricoop.gov.in/programmes-schemes-listing">Programmes and Schemes</a></li>
                  <li><a href="https://pib.gov.in/PressReleasePage.aspx?PRID=1725612">MSP (crop-wise)</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-logo">
              <a href="#"><img src="{% static 'images/logo.jpg' %}" alt="" /></a>
            </div>
            {/*foote_bottom_ul_amrc ends here*/}
            <p className="copyright text-center">All Rights Reserved. © 2021 <a href="{% url 'recommend' %}">Fertilizer Recommendation</a>
              Design By :
              <a href="#">Team 5</a>
            </p>
            <ul className="social_footer_ul">
              <li><a href="#"><i className="fab fa-facebook-f" /></a></li>
              <li><a href="#"><i className="fab fa-twitter" /></a></li>
              <li><a href="#"><i className="fab fa-linkedin" /></a></li>
              <li><a href="#"><i className="fab fa-instagram" /></a></li>
            </ul>
            {/*social_footer_ul ends here*/}
          </div>
        </footer>
      </div>
      );
}

