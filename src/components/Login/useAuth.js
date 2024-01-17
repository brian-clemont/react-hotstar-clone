import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../../authSlice';
import { useNavigate } from 'react-router-dom';


 const useAuth = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate()


  const loginHandle = (username, password) => {
    if (username !== '' && password !== '') {
      dispatch(login(username));
      navigate('/')

    } else {
      alert('Invalid credentials');
    }
  };

  const logoutHandle = () => {
    dispatch(logout());
    navigate('/')

  };

  return { isLoggedIn, login: loginHandle, logout: logoutHandle };
};

export default useAuth