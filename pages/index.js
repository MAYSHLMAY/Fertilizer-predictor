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
                <a href="index.html">Home</a>
              </li>
              <li className="breadcrumb-item active">Fertilizer Recommendation</li>
            </ol>
          </div>
          {'{'}% if not data %{'}'}
          <div>
            <h1>Please fill the details below</h1>
            <form id="form" action="/output" method="post">
              {'{'}% csrf_token %{'}'}
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
                <label htmlFor="role" id="label-role">
                  Soil type: 
                </label>
                <select name="p4" id="role">
                  <option value={0}>Black</option>
                  <option value={1}>Clayey</option>
                  <option value={2}>Loamy</option>
                  <option value={3}>Red</option>
                  <option value={4}>Sandy</option>
                </select>
              </div>
              <div className="form-control">
                <label name="p5">
                  Crop Type: 
                </label>
                <select name="p5" id="role">
                  <option value={0}>Barley</option>
                  <option value={1}>Cotton</option>
                  <option value={2}>
                    Ground Nuts
                  </option>
                  <option value={3}>Maize</option>
                  <option value={4}>Millet</option>
                  <option value={5}>Oil Seeds</option>
                  <option value={6}>Paddy</option>
                  <option value={7}>Pulses</option>
                  <option value={8}>Sugercane</option>
                  <option value={9}>Tobacco</option>
                  <option value={10}>Wheat</option>
                </select>
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

