import NavBar from "components/NavBar"
import Footer from "components/footer"

export default function Recommend() {
    return (
        <>
        <NavBar />
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
      <div className="container">
        <div className="lead" style={{marginTop: '10vh'}}>
          <h2>Gain knowledge about the soil condition and how to improve it</h2>
          <p>Fertile soils are necessary to grow healthy crops. To improve soil fertility, it needs to be measured first. Soil
            fertility is determined by the chemical, physical and biological properties of soil. Properties such as soil texture,
            colour and structure are visible. However, it is impossible to see the chemical composition of soil. This is what needs
            to be measured and why soil sampling is essential. Soil tests are used to determine the nutrient content and pH level of
            a soil. With this information the exact type and quantity of fertiliser that needs to be applied to improve soil
            fertility can be defined.</p>
          <br />
          <h2>It is the first step into soil fertility management</h2>
          <p>With a proper soil fertility management strategy, farmers can maximize the efficiency of nutrients and water use and
            improve their agricultural productivity. Soil testing is the first step towards proper soil fertility management. Soil
            testing gives valuable information and helps you improve your soil’s health.</p>
          <br />
          <h2>Minimise fertiliser expenditures</h2>
          <p>You will not waste money on unnecessary fertilisers if the exact type and quantity of fertilisers your soil and crops
            need is known. Moreover, inorganic fertilisers in general and nutrients such as phosphorus and potassium are limited
            resources. Their prices are increasing over the years and because this trend is set to last it is clever to adapt now to
            the inevitable changes.</p>
          <br />
          <h2>Avoid over-fertilisation</h2>
          <p>Applying fertiliser without knowing the actual nutrient needs of your soil might lead to over-fertilisation. By testing
            your soils and receiving fertiliser recommendations, you can avoid using an excessive amount of fertiliser. This is
            better for your crops and the environment. Fertiliser burn and leaves turning yellow is the outcome of
            over-fertilisation for crops. It might also result in nutrient leaching, water pollution and irreversible damages to the
            surrounding aquatic life.</p>
          <br />
          <h2>Avoid soil degradation</h2>
          <p>Soil degradation is a threat to every farmer. It is estimated that each year 24 billion tonnes of fertile soil are lost
            due to erosion which is a result of unbalanced soil management. A proper soil management is guaranteed by soil tests
            followed by the application of the right fertilisers at the right moment. Besides avoiding risks of soil degradation, it
            is a more efficient and financially more interesting practice. Moreover, soil restoration is a difficult, costly and
            time-consuming process.</p>
        </div>
      </div>
      <Footer />

      <style jsx>
        {`
        @import url('https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800');

        .navbar-toggler{
            width: 44px;
            height: 35px;
        }
        body {
          padding-top: 54px;
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          color: #4e3914;
        }
        
        @media (min-width: 992px) {
          body {
            padding-top: 80px;
          }
        }
        
        .second{
            display: none;
        }
        
        .parentElement{
            text-align: center;	
        }
        
        .success {
            border-color: #4eae3a;
            border-radius: 4px;
            border-width: 2px;
            color:white;
            margin-bottom: 120px;
            width: 33rem;
            height: 5rem;
            padding: 0;
            text-align: center;
            display: inline-block;
            
        }
        
        .success:hover{
            background-color: #4eae3a;
            border-color: #4eae3a;
            color: white;
            
        }
        
        
        .mainbuttontext{
            font-size: 1.5rem;
            font-weight: 1000;
            margin: 1.5rem auto;
        }
        
        
        a.btn-primary{
            background-color: #4eae3a;
            border-color: #4eae3a;
        }
        a.btn-primary:hover{
            background-color: #5ec549;
            border-color: #5ec549;
        }
        button.btn-primary{
            background-color: #4eae3a;
            border-color: #4eae3a;
        }
        button.btn-primary:hover{
            background-color: #5ec549;
            border-color: #5ec549;
        }
        
        a.btn-secondary{
            background-color: #4eae3a;
            border-color: #4eae3a;
        }
        a.btn-secondary:hover{
            background-color: #5ec549;
            border-color: #5ec549;
        }
        button.btn-secondary{
            background-color: #4eae3a;
            border-color: #4eae3a;
        }
        button.btn-secondary:hover{
            background-color: #5ec549;
            border-color: #5ec549;
        }
        
        .top-nav{
            background-color: #ffffff !important;
        }
        .navbar-expand-lg.top-nav .navbar-nav .nav-link{
            padding: 10px 15px;
            margin-right: 8px;
            margin-top: 5px;
            color: #4e3914;
            font-size: 14px;
            font-weight: 300;
            text-transform: uppercase;
        }
        .navbar-expand-lg.top-nav .navbar-nav .nav-link:hover{
            background: #4eae3a;
            color: #ffffff;
            border-radius: 4.8px;
        }
        .navbar-expand-lg.top-nav .navbar-nav .nav-link.active{
            background: #4eae3a;
            color: #ffffff;
            border-radius: 4.8px;
        }
        .navbar-expand-lg.top-nav .navbar-nav .dropdown-menu{
            margin: 0px;
            box-shadow: 3px 5px 15px rgba(0,0,0, .15);
            border: none;
            padding: 20px;
        }
        .navbar-expand-lg.top-nav .navbar-nav .dropdown-menu .dropdown-item{
            font-size: 14px;
            padding: 0px;
            padding-bottom: 15px;
            font-weight: 300;
        }
        .navbar-expand-lg.top-nav .navbar-nav .dropdown-menu .dropdown-item:last-child{
            padding: 0px;
        }
        .navbar-expand-lg.top-nav .navbar-nav .dropdown-menu .dropdown-item:hover{
            background: none;
            color: #4eae3a;
        }
        .top-nav .navbar-toggler{
            color: #4e3914;
            border-color: #4e3914;
        }
        .top-nav .navbar-toggler:hover{
            color: #4eae3a;
            border-color: #4eae3a;
        }
        
        
        .slider-main .carousel .carousel-inner .carousel-item:before{
            content: "";
            position: absolute;
            background: rgba(0,0,0,0.5);
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
        }
        .carousel-item {
          height: 88vh;
          min-height: 300px;
          background: no-repeat center center scroll;
          -webkit-background-size: cover;
          -moz-background-size: cover;
          -o-background-size: cover;
          background-size: cover;
        }
        .portfolio-item {
          margin-bottom: 30px;
        }
        .services-bar h1{
            font-weight: 600;
            font-size: 24px;
        }
        .services-bar .card{
            box-shadow: 3px 5px 15px rgba(0,0,0, .15);
            border: none;
        }
        .services-bar .card h4.card-header{
            background-color: #4e3914;
            color: #4eae3a;
            font-size: 18px;
            font-weight: 400;
        }
        .services-bar .card .card-footer{
            background-color: #4e3914;
        }
        .about-main{
            padding: 30px 0px;
        }
        .about-main h2{
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .about-main h5{
            font-size: 18px;
        }
        .about-main p{
            font-size: 14px;
            text-transform: capitalize;
        }
        .about-main ul{
            padding-left: 20px;
        }
        .about-main ul li{
            position: relative;
            font-weight: 300;
            list-style: none;
            line-height: 29px;
        }
        .about-main ul li:before{
            content: "\f0da";
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            position: absolute;
            left: -15px;
            top: 0px;
            color: #4eae3a;
        }
        .portfolio-main{
            padding: 30px 0px;
        }
        .portfolio-main h2{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .portfolio-main .card {
            border: none;
            border-radius: 4px;
            overflow: hidden;
        }
        .portfolio-main .card .card-body .card-title{
            margin-bottom: 0px;
        }
        .portfolio-main .card .card-body .card-title a{
            font-size: 20px;
            font-weight: 400;
            text-transform: uppercase;
            color: #4eae3a;
        }
        .portfolio-main .card .card-body{
            background: #4e3914;
            padding: 10px 20px;
        }
        .card-img{
            overflow: hidden;
            position: relative;
        }
        .overlay{
            background: rgba(78,174,58,0.5);
            position: absolute;
            bottom: -100%;
            width: 100%;
            height: 100%;
            left: 50%;
            transform: translateX(-50%);
            transition: all 0.3s;
        }
        .overlay i{
            font-size: 35px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%);
            color: #4e3914;
        }
        .portfolio-main .card:hover .overlay{
            bottom: 0px;
        }
        
        .footer {
            width:100%;
            background-color:#263238;
            min-height:250px;
            padding:10px 0px 25px 0px;
            }
        .pt2 {
            padding-top:40px ;
            margin-bottom:20px ;
            color: #ffffff;
            font-weight: 500;
            }
        footer p {
            font-size:13px;
            color:#CCC;
            padding-bottom:0px;
            margin-bottom:8px;
            }
        .mb10 {
            padding-bottom:0px ;
            }
        .footer_ul_amrc {
            margin:0px ;
            list-style-type:none ;
            font-size:14px;
            padding:0px 0px 10px 0px ;
            }
        .footer_ul_amrc li {
            padding:0px 0px 5px 0px;
            }
        .footer_ul_amrc li a{
            color:#cccccc;
            font-size: 14px;
            font-weight: 300;
            }
        .footer_ul_amrc li a:hover{
            color: #4eae3a;
            text-decoration:none;
            }
        .footer_ul_amrc li .media-left{
            margin-right: 10px;
        }
        .footer_ul_amrc li .media-left img{
            max-width: 50px;
        }
        .footer_ul_amrc li .media-body p{
            font-size: 14px;
            font-weight: 500;
            color: #ffffff;
        }
        .footer_ul_amrc li .media-body span{
            color: #cccccc;
            font-size: 14px;
            font-weight: 400;
        }
        .fleft {
            float:left;
            }
        .padding-right {
            padding-right:10px;
            }
        .footer_ul2_amrc {
            margin:0px;
            list-style-type:none;
            padding:0px;
            }
        .footer_ul2_amrc li p {
            display:table;
            }
        .footer_ul2_amrc li a:hover {
            text-decoration:none;
            }
        .footer_ul2_amrc li i {
            margin-top:5px;
            }
        .footer_ul2_amrc li a {
            color: #4eae3a;
        }
        .bottom_border {
            border-bottom:1px solid #323f45;
            padding-bottom:20px;
            }
        .foote_bottom_ul_amrc {
            list-style-type:none;
            padding:0px;
            display:table;
            margin-top: 10px;
            margin-right: auto;
            margin-bottom: 10px;
            margin-left: auto;
        }
        .foote_bottom_ul_amrc li {
            display:inline;
            }
        .foote_bottom_ul_amrc li a {
            color:#ffffff;
            margin:0 12px;
            font-size: 16px;
            font-weight: 300;
            }
        .footer-logo{
            padding: 20px 0px;
            text-align: center;
        }
        .copyright a{
            color: #4eae3a;
            text-decoration: underline;
        }
        .copyright a:hover{
            color: #ffffff;
            text-decoration: none;
        }
        .social_footer_ul {
            display:table;
            margin:15px auto 0 auto;
            list-style-type:none;
            padding: 0;
            }
        .social_footer_ul li {
            padding-left:20px;
            padding-top:10px;
            float:left;
            }
        .social_footer_ul li a {
            color:#CCC;
            border:2px solid #CCC;
            padding:8px;
            border-radius:50%;
            }
        .social_footer_ul li i {
            width:20px;
            height:20px;
            text-align:center;
            }
        .social_footer_ul li a:hover {
            color: #4eae3a;
            border:2px solid #4eae3a;
        }
        
        /* ---- All Pages CSS ---- */
        
        
        
        .full-title{
            padding: 80px 0px;
            background: url(static/images/all-title-bg.jpg) no-repeat center;
            position: relative;
        }
        .full-title:before{
            content: "";
            background: rgba(0,0,0,0.5);
            top: 0px;
            left: 0px;
            position: absolute;
            width: 100%;
            height: 100%;
        }
        .full-title h1{
            position: relative;
            color: #ffffff;
        }
        .full-title h1 small{
            float: right;
            padding: 15px 0px;
            font-size: 14px;
        }
        
        .breadcrumb-main .breadcrumb{
            background: #4eae3a;
        }
        .breadcrumb-main .breadcrumb li a{
            color: #ffffff;
        }
        .breadcrumb-main .breadcrumb li{
            color: #4e3914;
        }
        .breadcrumb-main .breadcrumb-item + .breadcrumb-item::before{
            color: #4e3914;
        }
        .team-members-box{
            padding: 30px 0px;
        }
        .team-members-box h2{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .team-members-box .card{
            box-shadow: 3px 5px 15px rgba(0,0,0, .15);
            border: none;
        }
        .team-members-box .card .card-footer{
            background: #4eae3a;
        }
        .team-members-box .card .card-footer ul{
            margin: 0px;
            padding: 0px;
        }
        .team-members-box .card .card-footer ul li{
            display: inline-block;
        }
        .team-members-box .card .card-footer ul li a{
            width: 32px;
            height: 32px;
            line-height: 32px;
            background: #4e3914;
            color: #ffffff;
            display: inline-block;
            border-radius: 4.8px;
            font-size: 14px;
        }
        .customers-box h2{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 20px;
        }
        
        .project-inner h3{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 30px;
        }
        .pagination_bar .pagination .page-item .page-link{
            font-size: 20px;
            background: #4e3914;
            border: 1px solid #4e3914;
            color: #ffffff;
            width: 35px;
            text-align: center;
        }
        .pagination_bar .pagination .page-item .page-link:hover{
            background: #4eae3a;
        }
        .portfolio-item h4.card-title a{
            font-size: 20px;
            font-weight: 500;
            margin-bottom: 20px;
            color: #4e3914;
        }
        .related-projects{
            padding: 30px 0px;
        }
        .related-projects h3{
            font-weight: 600;
            font-size: 24px;
            margin: 0px;
            margin-bottom: 20px;
        }
        .blog-entries .card{
            box-shadow: 3px 5px 15px rgba(0,0,0, .15);
            border: none;
        }
        .blog-entries .card .card-body h2.card-title{
            font-size: 22px;
            font-weight: 500;
        }
        .blog-entries .card .card-footer{
            background-color: #4e3914;
        }
        .blog-entries .card .card-footer.text-muted{
            color: #ffffff !important;
        }
        .blog-entries .card .card-footer a{
            color: #4eae3a;
        }
        .blog-right-side .card{
            box-shadow: 3px 5px 15px rgba(0,0,0, .15);
            border: none;
        }
        .blog-right-side .card h5.card-header{
            background-color: #4e3914;
            color: #ffffff;
            font-size: 20px;
            font-weight: 400;
        }
        .blog-right-side .card .card-body ul li{
            margin-bottom: 2px;
        }
        .blog-right-side .card .card-body ul li a{
            border-radius: 4.8px;
            padding: 6px;
            background: #4e3914;
            color: #4eae3a;
            display: inline-block;
        }
        .pagination_bar_arrow .pagination .page-item .page-link{
            font-size: 20px;
            background: #4e3914;
            border: 1px solid #4e3914;
            color: #ffffff;
            width: 120px;
            text-align: center;
        }
        .pagination_bar_arrow .pagination .page-item .page-link:hover{
            background: #4eae3a;
        }
        .faq-main{
            padding: 30px 35px;
            background: #4e3914;
            margin: 30px 0px;
        }
        .accordion-single{
            border-radius: 0px;
            border: none;
            border-bottom: 1px solid #e4e8ed;
        }
        .accordion-single .card-header{
            background-color: transparent;
            padding: 0px;
            border: none;
        }
        .accordion-single .card-header h5 a{
            color: #202428;
            display: block;
            position: relative;
            padding: 21.28px 32px 26.56px 20px;
            font-size: 18px;
            text-transform: capitalize;
        }
        .accordion-single .card-header h5 a:hover{
            color: #4eae3a;
            text-decoration: none;
        }
        .accordion-single h5 a[aria-expanded="false"]::before {
            position: absolute;
            content: "\f0dd";
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            right: 10px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            color: #4e3914;
        }
        .accordion-single h5 a[aria-expanded="true"]::before{
            position: absolute;
            content: "\f0de";
            font-family: 'Font Awesome 5 Free';
            font-weight: 900;
            right: 10px;
            top: 50%;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            color: #4eae3a;
        }
        .error-contents{
            padding: 30px 0px;
            max-width: 980px;
            margin: 0 auto;
            text-align: center;
        }
        .error-contents{}
        .pricing-box{
            padding: 30px 0px;
        }
        .pricing-box .card{
            position: relative;
            overflow: hidden;
            box-shadow: 3px 5px 15px rgba(0,0,0, .15);
            border: none;
        }
        .pricing-box .card h3.card-header{
            padding: 80px 15px;
            text-align: center;
            background: #4e3914;
            color: #ffffff;
        }
        .most_popular{
            position: absolute;
            top: 32px;
            font-size: 12px;
            text-align: center;
            width: 181px;
            padding: 4px 0;
            right: -36px;
            transform: rotate(40deg);
            background-color: #4eae3a;
            color: #4e3914;
        }
        
        
        .contact-left h3{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .contact-right h3{
            font-weight: 600;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .contact-right p abbr{
            font-weight: bold;
            font-size: 18px;
        }
        
        .help-block ul{
            margin: 0px;
            padding: 0px;
            list-style: none;
            background: red;
            color: #fff;
            padding: 0px 15px;
        }
        
        
        @media (min-width:768px) and (max-width:991px){
            .navbar-expand-lg.top-nav .navbar-nav .nav-link.dropdown-toggle::after{
                position: absolute;
                top: 18px;
                right: 6px;
            }
        }
        
        @media screen and (max-width:767px){
            .navbar-expand-lg.top-nav .navbar-nav .nav-link.dropdown-toggle::after{
                position: absolute;
                top: 18px;
                right: 6px;
            }
            .portfolio-main h2{
                text-align: center;
            }
            .customers-box{
                text-align: center;
            }
            .team-members-box h2{
                text-align: center;
            }
            .services-bar h1{
                text-align: center;
            }
            .social_footer_ul li{
                padding-left: 10px;
                padding-right: 10px;
            }
            .faq-main{
                padding: 20px 15px;
            }
            .accordion-single .card-header h5 a{
                font-size: 14px;
            }
        }
        
        @media (min-width:320px) and (max-width:575.98px){
            .navbar-expand-lg.top-nav .navbar-nav .nav-link.dropdown-toggle::after{
                position: absolute;
                top: 18px;
                right: 6px;
            }
            
            .portfolio-main h2{
                text-align: center;
            }
            .customers-box{
                text-align: center;
            }
            .team-members-box h2{
                text-align: center;
            }
            .services-bar h1{
                text-align: center;
            }
            .social_footer_ul li{
                padding-left: 10px;
                padding-right: 10px;
            }
            .faq-main{
                padding: 20px 15px;
            }
            .accordion-single .card-header h5 a{
                font-size: 14px;
            }
            .success {
                margin: 0 50px 250px -37px;
                width: 21rem;
                height: 5rem;
                padding: 0;
                text-align: center;
                display: inline-block;
            
            }
            .second{
                display: block;
            }
            .first{
                display: none;
            }
        }        
        `}
      </style>
        </>
    )
}