import './nav.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import useAuth from '../Login/useAuth';

const Nav = () => {
    const { logout } = useAuth();
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);


    const handleLogout = () => {
        logout();
    };

    


    return (
        <div className="navbar">
            {isLoggedIn ? <button onClick={handleLogout}>Logout</button> :
                <Link to="/login">
                    <button>Login</button>
                </Link>

            }


        </div>
    );
};


export default Nav;