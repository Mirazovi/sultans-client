import { useState } from "react";
import SubTitle from "../../Shared/SubTitle";
import RecommendCart from "./RecommendCart";
import axios from "axios";


const Recommends = () => {
    const [menu,setMenu] = useState([])
    // const [count,setCount] = useState(null)

    axios.get('http://localhost:5000/menu')
    .then(res => {
        setMenu(res.data)
    })
    // axios.get('http://localhost:5000/menuCount')
    // .then(res => {
    //     setCount(res.data)
    // })
    
    return (
        <div>

            <SubTitle subheading={'---Should Try---'} heading={'CHEF RECOMMENDS'}></SubTitle>
            
            <div className="grid grid-cols-3 gap-4">
                {
                    menu.map((item,idx)=><RecommendCart key={idx} cart={item}></RecommendCart>)
                }
            </div>
        </div>
    );
};

export default Recommends;