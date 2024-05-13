// import axios from "axios";
// import { useContext, useEffect } from "react";

// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "../providers/AuthProvider";

// const axiosSecure = axios.create({
//     baseURL:' https://resturent-management-server.vercel.app',
//     withCredentials: true
// });

// const useAxiosSecure = () => {
//     const { logOut } = useContext(AuthContext)
//     const navigate = useNavigate()
//      useEffect( () =>{
//         axiosSecure.interceptors.response.use( res => {
//             return res;

//        }, error =>{
//            console.log('error tracked in the interceptor ', error.response);
//             if(error.response.status === 401 || error.response.status === 403){
//                 console.log('logout usr');
//                 logOut()
//                 .then(() => {
//                     navigate('/login')
//                  })
//                 .catch(error => console.log(error));
//             }
//        })
//     }, [])
//     return axiosSecure;
// };

// export default useAxiosSecure;

