
import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategory = ({ items, img, title }) => {

    return (
        <div>
            <Cover img={img} title={title}></Cover>
          
            <div className="grid grid-cols-2 gap-8 my-8">
                {
                    items?.map((item, idx) => <MenuItem key={idx} item={item}></MenuItem>)
                }
            </div>
            <Link to={`/orders/${title}`} className="flex justify-center my-6">
            <button  className="btn btn-secondary ">Order your favorite food</button>
            </Link>
        </div>
    );
};

export default MenuCategory;