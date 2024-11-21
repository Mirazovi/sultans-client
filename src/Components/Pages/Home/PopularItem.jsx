import SubTitle from "../../Shared/SubTitle";
import MenuItem from "../../Shared/MenuItem";
import useMenu from "../../Hooks/useMenu";


const PopularItem = () => {
    const [menu,loading] = useMenu();
    const popularMenu = menu?.filter(item => item.category === 'popular')
    
    return (
        <div>
            <SubTitle subheading={'---Check it out---'} heading={'FROM OUR MENU'}></SubTitle>

            <div className="grid grid-cols-2 gap-8 my-8">
                {
                   loading ? <p>loading....</p> :  popularMenu?.map((item,idx) => <MenuItem key={idx} item={item}></MenuItem>)
                }
            </div>
        </div>
    );
};

export default PopularItem;