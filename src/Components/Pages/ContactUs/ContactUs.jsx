import Cover from "../../Shared/Cover";
import contactImg from '../../../assets/contact/banner.jpg'
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import SubTitle from "../../Shared/SubTitle";
import Location from "./Location";
import From from "./From";

const ContactUs = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Cover img={contactImg} title={'Contact Us'}></Cover>
            <SubTitle subheading={'---Visit Us---'} heading={'Our Location'}></SubTitle>
            <Location></Location>
            <SubTitle subheading={'---Send Us a Message---'} heading={'Contact Us'}></SubTitle>
            <From></From>
            <Footer></Footer>
        </div>
    );
};

export default ContactUs;