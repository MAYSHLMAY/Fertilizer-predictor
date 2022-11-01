import Link from "next/link"
import NavBar from "components/NavBar";
import Footer from "components/footer";
import { useEffect, useState } from "react";
import {useRouter} from 'next/router'



export default function Home({action = '/output'}) {

  const router = useRouter()
  const [query, setQuery] = useState("")
  const [query2, setQuery2] = useState("")
  const [query3, setQuery3] = useState("")


  const handleParam = setValue => e => setValue(e.target.value)

  const preventDefault = f => e => {
    e.preventDefault()
    f(e)
  }
  const handleSubmit = preventDefault(() => {
    router.push({
      pathname: action,
      query: {
        p6 : query,
              p7 : query2,
              p8: query3
      },
    })
  })

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
            <form id="form" onSubmit={handleSubmit} >
              {/* Details */}
              <div className="form-control">
                <label htmlFor="age" id="label-age">
                  Nitrogen Content: 
                </label>
                {/* Input Type Text */}
                <input 
         value={query}
         onChange={handleParam(setQuery)} className="N-Value" type="number" name="p6" id="age" placeholder="Enter Nitrogen content" required />
              </div>
              <div className="form-control">
                <label htmlFor="age" id="label-age">
                  Potassium Content: 
                </label>
                <input value={query2}
         onChange={handleParam(setQuery2)} className="K-value" type="number" id="age" name="p7" placeholder="Enter Potassium content" required />
              </div>
              <div className="form-control">
                <label htmlFor="age" id="label-age">
                  Phosphorus Content: 
                </label>
                <input value={query3}
         onChange={handleParam(setQuery3)} className="P-value" type="number" name="p8" id="age" placeholder="Enter Phosphorus content" required />
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

