import Cover from "../../Shared/Cover";
import coverImg from '../../../assets/shop/banner2.jpg'
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../Hooks/useMenu";
import OrderTab from "../../Shared/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Orders = () => {
    const categories = ['salad','pizza','soup','dessert','drinks'];
    const {category} = useParams();
    const initialsIndex = categories.indexOf(category)
    const [tabIndex,setTabIndex] = useState(initialsIndex);


    const [menu] = useMenu();

    const dessert = menu?.filter(item => item.category === 'dessert')
    const salad = menu?.filter(item => item.category === 'salad')
    const drinks = menu?.filter(item => item.category === 'drinks')
    const soup = menu?.filter(item => item.category === 'soup')
    const pizza = menu?.filter(item => item.category === 'pizza')


    return (
        <div>
             <Helmet>
            <title>Sultans-dine | Order Food</title>
            </Helmet>
            <Navbar></Navbar>
            <Cover img={coverImg} title={'Yours Orders'}></Cover>
            <div className="my-10 flex justify-center">
            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>
                </TabList>
                <TabPanel>
                    <OrderTab items={salad}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={pizza}></OrderTab>
                </TabPanel>
                <TabPanel>
                    <OrderTab items={soup}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={dessert}></OrderTab>
                </TabPanel>
                <TabPanel>
                <OrderTab items={drinks}></OrderTab>
                </TabPanel>
            </Tabs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Orders;