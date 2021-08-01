import React from "react";
import Header2,{} from "./Landinpage/Header";

import Header,{} from "./Landinpage/headerLandingPage";
import Technology,{} from "./Landinpage/Technology";
import Team,{} from "./Landinpage/Team";
import Portfolio,{} from "./Landinpage/Portfolio";
import Question,{} from "./Landinpage/Question";
import Contact,{} from "./Landinpage/Contact";
import Footer,{} from "./Footer";



const LandingPage:React.FC = () => (
    <div>
        <Header/>
        <Header2/>
        <Technology/>
        <Team/>
        <Portfolio/>
        <Question/>
        <Contact/>
        <Footer/>
    </div>
) 
export default LandingPage;