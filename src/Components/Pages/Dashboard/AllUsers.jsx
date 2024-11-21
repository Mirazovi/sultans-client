import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: user = [] ,refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users',{
                headers: {Authorization: `Bearer ${localStorage.getItem('access-token')}`}
            })
            return res.data
        }
    })

    const handleUpdatedUser = (id,user) =>{
        axiosSecure.patch(`/users/admin/${id}`)
        .then(res =>{
            if(res.data.modifiedCount > 0){
                console.log(res.data);
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user} now he is admin`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })

    }

    const handleDeleteUser = (id) => {
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

                axiosSecure.delete(`/users/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                        refetch();
                    })
            }
        });
    }
    return (
        <div>
            <h1 className="text-4xl mb-6">Total Users : {user.length}</h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#
                            </th>
                            <th>name</th>
                            <th>email</th>
                            <th>Role</th>
                            <th>Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user?.map((item, idx) => <tr key={idx}>
                                <td className="text-xl">
                                    {idx + 1}
                                </td>
                                <td className="text-xl">{
                                    item.name}
                                </td>
                                <td className="text-xl">{item.email}</td>
                                <th>
                                    {item?.role === 'admin' ? 'Admin' : <button onClick={()=>handleUpdatedUser(item._id,item.name)} className="text-4xl text-white bg-orange-600 p-4 rounded-lg"><BiPeopleFill /></button>}
                                </th>

                                <th>
                                    <button onClick={() => handleDeleteUser(item._id)} className="text-4xl text-red-700"><MaterialSymbolsDeleteRounded /></button>
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

export function BiPeopleFill(props) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16" {...props}><path fill="currentColor" d="M7 14s-1 0-1-1s1-4 5-4s5 3 5 4s-1 1-1 1zm4-6a3 3 0 1 0 0-6a3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5"></path></svg>
    )
}
export default AllUsers;