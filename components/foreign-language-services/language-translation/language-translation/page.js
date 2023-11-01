// import { Last } from "react-bootstrap/esm/PageItem";
import Banner from "./banner/page";
import Section from "../sections/page";
import Last from "../sections/last";
import Business_benefits from "../sections/business_benefits";
import Footer from "../../Footer/page";
export default function LanguageTranslation(){
    return(
        <div className="">
            {/* <Banner></Banner> */}
            <Section></Section>
            {/* <Footer></Footer> */}
            <Business_benefits></Business_benefits>
            <Last></Last>
        </div>
    )
}