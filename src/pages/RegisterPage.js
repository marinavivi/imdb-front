import { register } from '../store/auth/actions'
import { useDispatch } from 'react-redux';
import Register from '../components/auth/Register';
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegisterOnSubmit = ((values) => {
        dispatch(register(values.email, values.first_name, values.password, () => navigate('/login')))
    })

    return <Register handleRegisterOnSubmit={handleRegisterOnSubmit} />
}
export default RegisterPage