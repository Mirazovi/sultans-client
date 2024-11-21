

const RecommendCart = ({ cart }) => {
    const { image, recipe, category, price } = cart;
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={image}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{category}</h2>
                    <p>{recipe}</p>
                    <p className="text-xl text-orange-700">${price}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary">Add To Cart</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RecommendCart;