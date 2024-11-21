import { useContext } from "react";
import { AuthContext } from "../Pages/Authentication/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";


const Social = () => {

    const {googleSignIn} = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()

    const handleGoogleSignIn = () =>{
        googleSignIn()
        .then(result =>{
            Swal.fire({
                title: "Sign In Successfully",
                showClass: {
                  popup: `
                    animate__animated
                    animate__fadeInUp
                    animate__faster
                  `
                },
                hideClass: {
                  popup: `
                    animate__animated
                    animate__fadeOutDown
                    animate__faster
                  `
                }
              });
              const userInfo = {
                email: result.user?.email,
                name:result.user?.displayName
              }
              axiosPublic.post('/users',userInfo)
              .then((res)=>{
                console.log(res.data);
                  navigate('/')
              })
        })
    }
    return (
        <div className="flex gap-2 text-2xl justify-center items-center bg-gray-500 py-2 px-6 rounded-lg my-4">
            <i><RiGoogleFill></RiGoogleFill></i>
            <button onClick={handleGoogleSignIn}>Google</button>
        </div>
    );
};

export function RiGoogleFill(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M3.064 7.51A10 10 0 0 1 12 2c2.695 0 4.959.991 6.69 2.605l-2.867 2.868C14.786 6.482 13.468 5.977 12 5.977c-2.605 0-4.81 1.76-5.595 4.123c-.2.6-.314 1.24-.314 1.9s.114 1.3.314 1.9c.786 2.364 2.99 4.123 5.595 4.123c1.345 0 2.49-.355 3.386-.955a4.6 4.6 0 0 0 1.996-3.018H12v-3.868h9.418c.118.654.182 1.336.182 2.045c0 3.046-1.09 5.61-2.982 7.35C16.964 21.105 14.7 22 12 22A9.996 9.996 0 0 1 2 12c0-1.614.386-3.14 1.064-4.49"></path></svg>
    )
  }
export default Social;