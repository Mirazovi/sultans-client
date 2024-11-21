import FoodCart from "./FoodCart";


const OrderTab = ({items}) => {
    return (
        <div className="grid grid-cols-3 gap-4">
            {
                items.map((item,idx)=><FoodCart key={idx} item={item}></FoodCart>)
            }
        </div>
    );
};

export default OrderTab;