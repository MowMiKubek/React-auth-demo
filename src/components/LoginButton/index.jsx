import { Link } from "react-router-dom";
import { useAuthContext } from "../../utils/AuthContext";

export default function LoginButton() {
    const { authenticatedUser } = useAuthContext();
    
    const logoutHandler = () => {
        localStorage.removeItem("accessToken");
        window.location.reload();
    }

    if(!authenticatedUser.user) {
        return <Link to="/login">Login</Link>
    }
    return <a href="#" onClick={logoutHandler}>Logout</a>
}