import Feature from "../components/feature";
import Footer from "../components/footer";
import Header from "../components/header";
import Hero from "../components/hero";
import Promotion from "../components/promotion";


export default function HomePage(){


    return (

        <div className="">
            {/* Header */}
            <Header/>
            {/* Hero Section */}
            <Hero/>
            {/* Feature */}
            <Feature/>
            {/* promotion */}
            <Promotion/>
            {/* Footer */}
            <Footer/>
        </div>
    )
}