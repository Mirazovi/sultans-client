import Swal from "sweetalert2";
import useCart from "../../Hooks/usecart";
import useAxiosSecure from "../../Hooks/useAxiosSecure";


const Cart = () => {
    const [cart,refetch] = useCart();
    const totalPrice = cart.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    const axiosSecure = useAxiosSecure()

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            
            axiosSecure.delete(`/carts/${id}`)
            .then(res =>{
                if(res.data.deletedCount > 0){
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                          refetch();
                }
            })
            }
          });
    }


    return (
        <div>
            <div className="flex justify-evenly">
            <h1 className="text-4xl">Total Order : {cart.length}</h1>
            <h1 className="text-4xl">Total Price : ${totalPrice}</h1>
            <p className="text-xl bg-purple-800 py-3 px-6 rounded-xl text-white">Pay</p>
            </div>
            
            {/* cart details  */}
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Active</th>
      </tr>
    </thead>
    <tbody>
        {
            cart.map((item,idx) => <tr key={idx}>
            <th>
              {idx + 1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img
                      src={item.image} />
                  </div>
                </div>
              </div>
            </td>
            <td>
            <div className="font-bold">{item.name}</div>
            </td>
            <td>
            <div className="text-xl opacity-50">${item.price}</div></td>
            <th>
            <button onClick={()=>handleDelete(item._id)} className="text-4xl text-red-700"><MaterialSymbolsDeleteRounded /></button>
            </th>
          </tr>)
        }
    </tbody>
  </table>
</div>
        </div>
    );
};
export function MaterialSymbolsDeleteRounded(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zm3-4q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17"></path></svg>
    )
}
export default Cart;