import { useState } from "react"
import { useAuthContext } from "../../utils/AuthContext"

import { useNavigate, Navigate } from "react-router"

export default function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const { authenticatedUser, setAuthToken } = useAuthContext();
    const navigate = useNavigate();

    if(authenticatedUser.user) {
        console.log("Redirecting")
        return <Navigate to="/" />

    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            })
            if(response.status >= 400 && response.status < 499) {
                alert("Invalid credentials")
                return;
            }
            if(response.status >= 500) {
                alert("Server error")
                return;
            }
            const data = await response.json()
            console.log(data)
            setAuthToken(data.token)
            navigate("/");
        } catch(e) {
            console.log(e)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
        </>
    )
}