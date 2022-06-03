import { register } from "../../store/auth/actions";
import { useDispatch } from "react-redux";
import Register from "../../components/auth/Register";
import { useNavigate } from "react-router-dom";
import { LOGIN_PAGE } from "../../constants/routes";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = ({ email, first_name, password }) => {
    dispatch(register(email, first_name, password, () => navigate(LOGIN_PAGE)));
  };

  return <Register handleOnSubmit={handleOnSubmit} />;
};
export default RegisterPage;
