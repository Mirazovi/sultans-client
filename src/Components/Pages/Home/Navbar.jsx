import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/Sultans-Diner-main-logo.png'
import { useContext } from 'react';
import { AuthContext } from '../Authentication/AuthProvider';
import useCart from '../../Hooks/usecart';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut();
    }
    return (
        <div className='flex fixed z-10 w-[90%] justify-between items-center px-4 bg-black text-white opacity-80'>
            <div className='w-[200px]'>
                <img src={logo} alt="" />
            </div>
            <div className='flex justify-center items-center text-xl'>
                <NavLink className={({ isActive }) => isActive ? "text-red-600" : ''} style={{
                    padding: '10px 10px 10px 10px'
                }} to={'/'}>Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-600" : ''} style={{
                    padding: '10px 10px 10px 10px'
                }} to={'/menu'}>OurMenu</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-600" : ''} style={{
                    padding: '10px 10px 10px 10px'
                }} to={'/dashboard'}>Dashboard</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-600" : ''} style={{
                    padding: '10px 10px 10px 10px'
                }} to={'/orders/salad'}>Orders</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-600" : ''} style={{
                    padding: '10px 10px 10px 10px'
                }} to={'/contact'}>Contact Us</NavLink>
                <NavLink className={({ isActive }) => isActive ? "text-red-600" : ''} style={{
                    padding: '10px 10px 10px 10px'
                }} to={'/dashboard/cart'}><button className="btn">
                       <i><MaterialSymbolsShoppingCartOutlineSharp/></i>
                        <div className="badge badge-secondary">+{cart.length}</div>
                    </button></NavLink>

                {
                    user ? <>
                        <span>{user?.displayName}</span>
                        <button onClick={handleLogOut} className='text-xl bg-purple-900 py-2 px-6 rounded-lg'>LogOut</button>
                    </> : <>
                        <Link to={'/login'} className='text-xl bg-purple-900 py-2 px-6 rounded-lg'>Login</Link>
                    </>
                }
            </div>
            <div>
                <button className='text-xl text-white bg-purple-700 py-2 px-6 rounded-lg'>Get Started</button>
            </div>
        </div>

    );
};


export function MaterialSymbolsShoppingCartOutlineSharp(props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}><path fill="currentColor" d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h16.5l-4.975 9H8.1L7 15h12v2H3.625L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"></path></svg>
    )
  }
export default Navbar;