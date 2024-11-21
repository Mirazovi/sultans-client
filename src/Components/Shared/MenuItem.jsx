

const MenuItem = ({item}) => {
    const {image,name,price,recipe} = item;
    return (
        <div className="flex gap-4 items-center">
            <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[120px]" src={image} alt="" />
            <div className="text-2xl">
                <h1>{name}</h1>
                <p>{recipe}</p>
            </div>
            <h1 className="text-xl text-orange-700">${price}</h1>
        </div>
    );
};

export default MenuItem;