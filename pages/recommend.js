import Link from "next/link"
import NavBar from "components/NavBar";
import Footer from "components/footer";

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
                <Link href="./">
                <a>Home</a>
                </Link>
              </li>
              <li className="breadcrumb-item active">Fertilizer Recommendation</li>
            </ol>
          </div>
          <div>
            <h1>Please fill the details below</h1>
            <form id="form">
              {/* Details */}
              <div className="form-control">
                <label htmlFor="name" id="label-name">
                  Temperature: 
                </label>
                <input type="text" name="p1" id="name" defaultValue="{{temperature}}" readOnly />
              </div>
              <div className="form-control">
                <label htmlFor="email" id="label-email">
                  Humidity: 
                </label>
                <input type="text" name="p2" id="name" defaultValue="{{humidity}}" readOnly />
              </div>
              <div className="form-control">
                <label htmlFor="age" id="label-age">
                  Moisture: 
                </label>
                {/* Input Type Text */}
                <input type="number" name="p3" id="age" placeholder="Enter moisture content of the soil" required />
              </div>
              <div className="form-control">
                <label htmlFor="age" id="label-age">
                  Nitrogen Content: 
                </label>
                {/* Input Type Text */}
                <input type="number" name="p6" id="age" placeholder="Enter Nitrogen content" required />
              </div>
              <div className="form-control">
                <label htmlFor="age" id="label-age">
                  Potassium Content: 
                </label>
                <input type="number" id="age" name="p7" placeholder="Enter Potassium content" required />
              </div>
              <div className="form-control">
                <label htmlFor="age" id="label-age">
                  Phosphorus Content: 
                </label>
                <input type="number" name="p8" id="age" placeholder="Enter Phosphorus content" required />
              </div>
              <button className="subbutton" type="submit" value="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* /.container */}
       <Footer />
      </div>
      );
}

