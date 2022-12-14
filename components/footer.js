export default function Footer() {
    return (
        <>
        <footer className="footer">
          <div className="container bottom_border">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Find Me</h5>
                {/*headin5_amrc*/}
                <p><i className="fa fa-location-arrow" />Bethel, Addis Ababa</p>
                <p><i className="fa fa-phone" /> +251-900766164 </p>
                <p><i className="fa fa fa-envelope" />Amarasfaw1077@gmail.com </p>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Follow Me</h5>
                {/*headin5_amrc ends here*/}
                <ul className="footer_ul2_amrc">
                  <li>
                    <a href="#"><i className="fab fa-github fleft padding-right" /> </a>
                    <p><a href="https://www.github.com/amxson/">Amar Asfaw</a>
                    </p>
                  </li>
                  <li>
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
                  <li><a href="https://www.napanta.com/market-price/telangana/warangal/warangal">Daily Market Price (of variMe crops)</a></li>
                  <li><a href="https://www.ugaoo.com/plant-care/plant-growth/fertilizers.html">Buy fertilizers online</a></li>
                  <li><a href="https://agricoop.gov.in/programmes-schemes-listing">Programmes and Schemes</a></li>
                  <li><a href="https://pib.gov.in/PressReleasePage.aspx?PRID=1725612">MSP (crop-wise)</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            {/*foote_bottom_ul_amrc ends here*/}
            <p className="copyright text-center">All Rights Reserved. ?? {new Date().getFullYear()}
            </p>
            {/*social_footer_ul ends here*/}
          </div>
        </footer>
        </>
    )
}
