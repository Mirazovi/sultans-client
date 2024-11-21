import { Helmet } from "react-helmet-async";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import menuBanner from '../../../assets/menu/banner3.jpg'
import MenuCategory from "../../Shared/MenuCategory";
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import drinksImg from '../../../assets/menu/drinks.jpg'

import useMenu from "../../Hooks/useMenu";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu?.filter(item => item.category === 'offered')
    const dessert = menu?.filter(item => item.category === 'dessert')
    const salad = menu?.filter(item => item.category === 'salad')
    const drinks = menu?.filter(item => item.category === 'drinks')
    const soup = menu?.filter(item => item.category === 'soup')
    const pizza = menu?.filter(item => item.category === 'pizza')
    return (
        <div>
            <Helmet>
            <title>Sultans-dine | Menu</title>
            </Helmet>
            <Navbar></Navbar>
            <MenuCategory items={offered} img={menuBanner} title={"salad"}></MenuCategory>
            <MenuCategory items={dessert} img={dessertImg} title={"dessert"}></MenuCategory>
            <MenuCategory items={salad} img={saladImg} title={"salad"}></MenuCategory>
            <MenuCategory items={drinks} img={drinksImg} title={"drinks"}></MenuCategory>
            <MenuCategory items={pizza} img={pizzaImg} title={"pizza"}></MenuCategory>
            <MenuCategory items={soup} img={soupImg} title={"soup"}></MenuCategory>
            <Footer></Footer>
        </div>
    );
};

export default Menu;