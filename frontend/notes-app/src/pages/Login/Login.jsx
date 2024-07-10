import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import PasswordInput from "../../components/input/PasswordInput";
import { useState } from "react";
import { validateEmail } from "../../utils/helper";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
        } else {
            setError(null);
            //Login API Call
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-2xl mb-2">Login</h4>

                        <input
                            type="text"
                            placeholder="Email"
                            value={email}
                            className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
                        <button type="submit" className="w-full text-sm bg-purple-500 text-white p-2 rounded my-1 hover:bg-blue-900">
                            Login
                        </button>
                        <p>
                            Not registered yet?{" "}
                            <Link to="/signup" className="font-medium text-primary underline">
                                Create an account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
