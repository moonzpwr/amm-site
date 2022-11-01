import { Suspense } from "react";
import Loader from "./helpers/components/Loader/Loader";
import Layout from './helpers/components/Layout/Layout'
import Header from "./components/Header/Header";
import Hero from "components/Hero/Hero";
import WhoAreWe from "components/WhoAreWe/WhoAreWe";
import Features from "components/Features/Features";
import OurProducts from "components/OurProducts/OurProducts"; 
import Calculator from "components/Calculator/Calculator";
import WorkProcess from "components/WorkProcess/WorkProcess";
import Case from "components/Case/Case";
import ContactForm from "components/ContactForm/ContactForm";
import Clients from "components/Clients/Clients";
import Footer from "components/Footer/Footer";

function App() {

  return (
    <Suspense fallback={<Loader/>}>
      <Layout>
        <Header/>
        <Hero/>
        <WhoAreWe/>
        <Features/>
        <OurProducts/>
        <Calculator/>
        <WorkProcess/>
        <Case/>
        <ContactForm/>
        <Clients/>
      </Layout>
      <Footer/>
    </Suspense>
  );
}

export default App;
