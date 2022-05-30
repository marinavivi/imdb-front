import { register } from "../../store/auth/actions";
import { useDispatch } from "react-redux";
import Register from "../../components/auth/Register";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = ({ email, first_name, password }) => {
    dispatch(register(email, first_name, password, () => navigate("/login")));
  };

  return <Register handleOnSubmit={handleOnSubmit} />;
};
export default RegisterPage;
