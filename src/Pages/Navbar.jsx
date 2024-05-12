import { Link, NavLink } from "react-router-dom";
import '../../src/Styles/footer.css'; 
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";


const Navbar = () => {
const { user, logOut } = useContext(AuthContext)
    const navLinks = <>
    <li> <NavLink to="/" className={`font-bold text-white font-serif  footer-content`} >Home</NavLink></li>
    <li> <NavLink to="/all-foods" className={`font-bold text-white font-serif footer-content`}>All Foods</NavLink></li>
    <li> <NavLink to="/gallery" className={`font-bold text-white font-serif footer-content`}>Gallery</NavLink></li>
  

   

  
</>
    return (
        <div className="navbar  footer-background ">
        <div className="navbar-start ml-4 mr-4">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden footer-content">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  " fill="none" viewBox="0 0 24 24" stroke="white"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow  bg-slate-800 rounded-box w-52">
             {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-3xl font-extrabold text-white font-serif footer-content ">Dish<span className="text-yellow-400">&</span>Dine</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
           {navLinks}
          </ul>
        </div>
        <div className="navbar-end gap-4 ">
          
                        

  {
    user ?
    (
<div className='dropdown dropdown-end z-50'>
<div
  tabIndex={0}
  role='button'
  className='btn btn-ghost btn-circle avatar'
>
  <div title={user?.displayName} className='w-10 rounded-full'>
    <img
      referrerPolicy='no-referrer'
      alt='User Profile Photo'
      src={user?.photoURL}
    />
  </div>
</div>
<ul
  tabIndex={0}
  className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
>

  <li>
    <Link to='/my-added-foods'>My Added Food Items</Link>
  </li>
  <li>
    <Link to='/add-food'>Add a Food Item</Link>
  </li>
  <li>
    <Link to='/my-purchase'>My Ordered food item</Link>
  </li>
 
</ul>
<button onClick={logOut} className='btn btn-sm bg-yellow-400 font-bold text-black border-0 ml-4 mr-4 mt-[-500px] footer-content'>Logout</button>
{/* <Link to="/login"><a className="btn bg-yellow-400 text-black mr-4 font-bold font-serif footer-content">Log out</a></Link> */}
</div>
    )
  :
                  
          (
              <div>
                <Link to="/login"><a className="btn bg-yellow-400 text-black mr-4 font-bold font-serif footer-content">Log in</a></Link>
          
             </div>
          )
  }
              
      
      
      
      
      
      
        </div>
      </div>
    );
};

export default Navbar;