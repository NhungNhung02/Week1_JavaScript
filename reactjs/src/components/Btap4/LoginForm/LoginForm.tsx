import { useState } from "react";
import "./LoginForm.css";

const LoginForm = () => {
    const [show, setShow] = useState(true);

    if (!show) return null;

    return (
        <div className="overlay">
            <div className="login-form fade-in">
                <button className="close-btn" onClick={() => setShow(false)}>
                    ×
                </button>

                <h2>Login</h2>

                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />

                <button className="login-btn">Login</button>
            </div>
        </div>
    );
};

export default LoginForm;
