import SubTitle from "../../Shared/SubTitle";
import feature from '../../../assets/home/featured.jpg'
import './Featured.css'
const Featured = () => {

    return (
        <div className="feature-Item bg-fixed py-10 my-10 text-white">

            <SubTitle subheading={'---Check it out---'} heading={'FROM OUR MENU'}></SubTitle>
            
            <div className="flex gap-10 my-10 px-36 py-20 items-center ">
                <div>
                <img src={feature} alt="" />
                </div>
                <div className="space-y-2">
                    <p className="text-2xl">March 20, 2023</p>
                    <h1 className="text-2xl">WHERE CAN I GET SOME?</h1>
                    <p className="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-secondary">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;