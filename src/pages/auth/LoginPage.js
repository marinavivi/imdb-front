import { login } from "../../store/auth/actions";
import { useDispatch } from "react-redux";
import Login from "../../components/auth/Login";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOnSubmit = ({ email, password }) => {
    dispatch(login(email, password, () => navigate("/")));
  };

  return <Login handleOnSubmit={handleOnSubmit} />;
};
export default LoginPage;
