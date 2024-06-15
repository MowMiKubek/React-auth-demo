import { Link } from "react-router-dom";
import LoginButton from "../../components/LoginButton";
import { useAuthContext } from "../../utils/AuthContext"

export default function Profile() {
    const { authenticatedUser } = useAuthContext();
    return (
        <>
            <h1>Profile</h1>
            <p>Username: {authenticatedUser.user.username}</p>
            <p>Rank: {authenticatedUser.user.rank}</p>
            <Link to="/">Go home</Link><br/>
            <LoginButton />
        </>
    )
}