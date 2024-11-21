import { useContext } from "react";
import { AuthContext } from "../Pages/Authentication/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useCart from "../Hooks/usecart";


const FoodCart = ({item}) => {

    const {image,name,price,recipe,_id} = item;

    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure()
    const [,refetch] = useCart()



    const handleAddToCart = () =>{
      if(user && user.email){
            const addCart = {
              menuId: _id,
              email: user.email,
              name,
              price,
              image
            }
            axiosSecure.post('/carts',addCart)
            .then(res =>{
              console.log(res.data);
              if(res.data.insertedId){
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `${name} Added successfully`,
                  showConfirmButton: false,
                  timer: 1500
                });
                // refetch to the cart 
                refetch();
              }
            })
      }else{
        Swal.fire({
          title: "You are not Logged In",
          text: "Please Login before add to Cart",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes Login?"
        }).then((result) => {
          if (result.isConfirmed) {
            navigate('/login',{state:{from : location}})
          }
        });
      }
    }
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <p className="py-2 px-4 rounded-xl absolute top-14 right-14 bg-slate-900 text-white">${price}</p>

  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p>{recipe}</p>
    <div className="card-actions">
      <button onClick={handleAddToCart} className="btn border-b-4 border-b-orange-600 ">Add To Cart</button>
    </div>
  </div>
</div>
    );
};

export default FoodCart;