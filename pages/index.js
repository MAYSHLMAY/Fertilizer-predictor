import Link from "next/link"
import Head from "next/head"

export default function Home() {
    return (
        <>
        <Head>
     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
        crossOrigin="anonymous" referrerPolicy="no-referrer"/>
      <link href="https://fonts.googleapis.com/css?family=Cabin|Herr+Von+Muellerhoff|Source+Sans+Pro" rel="stylesheet"></link>
      <link href="../static/css/bootstrap.min.css" rel="stylesheet"/>
	<link href="../static/css/all.css" rel="stylesheet"/>
	<link rel="shortcut icon" href="../static/images/favicon.png"/>
	<link href="../static/css/style.css" rel="stylesheet"/>
   </Head>
        <div>
          <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-light top-nav fixed-top">
            <div className="container">
              <a className="navbar-brand" href="{% url 'home' %}">
                <img src="{% static 'images/logo.jpg' %}" className="logo" alt="logo" />
              </a>
              <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="fas fa-bars" />
              </button>
              <div className="collapse navbar-collapse myDiv" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a className="nav-link active page1" href="{% url 'home' %}">Home</a>
                  </li>
                  <li>
                    <a className="nav-link page2" href="{% url 'recommend' %}">Fertilizer Recommend</a>
                  </li>
                  <li>
                    <a className="nav-link page3" href="{% url 'services' %}">Why Soil test?</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link page4" href="{% url 'faq' %}">FAQ's</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="{% url 'about' %}">About</a>
                  </li>
                  <li className="nav-item">
                  </li><li className="nav-item">
                    <a className="nav-link" href="{% url 'contact' %}">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <header className="slider-main">
            <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to={0} className="active" />
                <li data-target="#carouselExampleIndicators" data-slide-to={1} />
                <li data-target="#carouselExampleIndicators" data-slide-to={2} />
              </ol>
              <div className="carousel-inner" role="listbox">
                {/* Slide One - Set the background image for this slide in the line below */}
                <div className="carousel-item active" style={{backgroundImage: 'url("../static/images/slider-01.jpg")'}}>
                  <div className="carousel-caption  d-md-block">
                    <div className="parentElement">
                      <a href="{% url 'recommend' %}" className="btn success mainbutton">
                        <h2 className="mainbuttontext first">Click Here for Fertilizer Recommendation</h2>
                        <h2 className="mainbuttontext second">Fertilizer Recommend</h2>
                      </a>
                    </div>
                    <h3>Welcome to our website</h3>
                    <p>This is a Fertilizer Recommendation system for hassle free selection of fertilizers</p>
                  </div>
                </div>
                {/* Slide Three - Set the background image for this slide in the line below */}
                <div className="carousel-item" style={{backgroundImage: 'url("../static/images/slider-03.jpg")'}}>
                  <div className="carousel-caption d-md-block">
                    <div className="parentElement">
                      <a href="{% url 'recommend' %}" className="btn success mainbutton">
                        <h2 className="mainbuttontext first">Click Here for Fertilizer Recommendation</h2>
                        <h2 className="mainbuttontext second">Fertilizer Recommend</h2>
                      </a>
                    </div>
                    <h3>Soil Test Data</h3>
                    <p>Only soil test data, soil type and crop related data needed to be entered for prediction</p>
                  </div>
                </div>
                {/* Slide Two - Set the background image for this slide in the line below */}
                <div className="carousel-item" style={{backgroundImage: 'url("../static/images/slider-02.jpg")'}}>
                  <div className="carousel-caption d-md-block">
                    <div className="parentElement">
                      <a href="{% url 'recommend' %}" className="btn success mainbutton">
                        <h2 className="mainbuttontext first">Click Here for Fertilizer Recommendation</h2>
                        <h2 className="mainbuttontext second">Fertilizer Recommend</h2>
                      </a>
                    </div>
                    <h3>Best Fertilizer Selection</h3>
                    <p>Choose the best fertilizer for your crop and soil out of all the choices available.</p>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </header>
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
                {/* <div class="col-lg-3 col-md-6 col-sm-6 ">
                      <h5 class="headin5_amrc col_white_amrc pt2">Recent posts</h5>
                      headin5_amrc
                           <ul class="footer_ul_amrc">
                          <li class="media">
                              <div class="media-left">
                                  <img class="img-fluid" src="images/post-img-01.jpg" alt="" />
                              </div>
                              <div class="media-body">
                                  <p>How to find best dog food?</p>
                                  <span>22 Sep 2018</span>
                              </div>
                          </li>
                          <li class="media">
                              <div class="media-left">
                                  <img class="img-fluid" src="images/post-img-02.jpg" alt="" />
                              </div>
                              <div class="media-body">
                                  <p>How to find best dog food?</p>
                                  <span>34 Sep 2018</span>
                              </div>
                          </li>
                          <li class="media">
                              <div class="media-left">
                                  <img class="img-fluid" src="images/post-img-03.jpg" alt="" />
                              </div>
                              <div class="media-body">
                                  <p>How to find best dog food?</p>
                                  <span>30 Sep 2018</span>
                              </div>
                          </li>
                      </ul> */}
                {/*footer_ul_amrc ends here*/}
                {/* </div> */}
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
        </>
      );
}

