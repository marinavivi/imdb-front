import { login } from '../store/auth/actions';
import { useDispatch } from 'react-redux';
import Login from '../components/auth/Login';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLoginOnSubmit = ((values) => {
        dispatch(login(values.email, values.password, () => navigate('/')))
    })

    return <Login handleLoginOnSubmit={handleLoginOnSubmit} />
}
export default LoginPage