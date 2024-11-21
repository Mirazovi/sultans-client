import Category from "./Category";
import Featured from "./Featured";
import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import PopularItem from "./PopularItem";
import Recommends from "./Recommends";
import ShowOff from "./ShowOff";
import Testimonials from "./Testimonials";
import { Helmet} from 'react-helmet-async';


const Home = () => {
    return (
        <div>
            <Helmet>
            <title>sultans-dine | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <Header></Header>
            <Category></Category>
            <ShowOff></ShowOff>
            <PopularItem></PopularItem>
            <Recommends></Recommends>
            <Featured></Featured>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;