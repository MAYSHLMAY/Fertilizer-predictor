import Link from "next/link"
import NavBar from "components/NavBar";
import Footer from "components/footer";
import useFetch from "hooks/useFetch";
import data from "Fertilizer.json"
import {useRouter} from 'next/router'
import { useEffect, useState } from "react";

export default function Home() {

const [city, country] = useFetch();
const Router = useRouter()

const Nitrogen = Router.query.p6
const Potassium = Router.query.p7
const Phosphorous = Router.query.p8

let max = city;
// 
const [value, setValue] = useState("");
useEffect(() => {
  if ((Nitrogen >= 35 && Nitrogen <= 42) && (String(Potassium).length == 1) && (String(Phosphorous).length == 1))  {
    setValue("Urea")
  } 
  else if((Nitrogen >= 10 && Nitrogen <= 20) && (String(Potassium).length == 1) && (Phosphorous >= 35 && Phosphorous <= 42)) {
     setValue("DAP")
  }
  else if((String(Potassium)[0] == "1" && String(Potassium).length == 2) && (String(Nitrogen)[0] == "1" && (String(Nitrogen).length == 2)) && (String(Potassium)[0] == "1" && (String(Potassium).length == 2))) {
    setValue("Seventeen-Seventeen-Seventeen")
 }
 else if ((Potassium >= 22 && Potassium <= 33) && (Nitrogen > 6 && Nitrogen < 12) && (Phosphorous > 6 && Phosphorous < 12)) {
  setValue("Fourteen-Thirty Five-Fourteen")
 }
 else if ((Nitrogen >= 19 && Nitrogen <= 29) && (Phosphorous >= 19 && Nitrogen <= 29)) {
  setValue("Twenty Eight-Twenty Eight")
 }
 else {
  setValue("Twenty-Twenty")
 }
}, [])


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
          <h1><u>{value}</u> is the recommeded fertilizer.</h1>
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

