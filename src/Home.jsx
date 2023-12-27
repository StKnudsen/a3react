import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/userSlice";

function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.value);
  console.log(user);

  if (user !== null) {
    return (
      <>
        <h1>Welcome user id: {user.userId}</h1>
        <button
          onClick={() => {
            dispatch(logout());
            navigate("/");
          }}
        >
          Logout
        </button>
      </>
    );
  }

  return (
    <>
      <h1>Welcome Guest</h1>
      <Link to="/login">Log in</Link>
    </>
  );
}

export default Home;
