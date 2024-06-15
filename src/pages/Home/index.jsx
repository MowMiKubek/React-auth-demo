import { useState } from "react"
import { Link } from "react-router-dom"
import LoginButton from "../../components/LoginButton"

import { useAuthContext } from "../../utils/AuthContext"

export default function Home() {
    const [count, setCount] = useState(0)
    const { authenticatedUser } = useAuthContext();
    return (
        <>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
                </button>
                <p>
                Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            {authenticatedUser.user && <Link to="/profile">Go to profile</Link>}<br />
            <LoginButton /><br/>
            <Link to="/login">Force login</Link>
        </>
    )
}