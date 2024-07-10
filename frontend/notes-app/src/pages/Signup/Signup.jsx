import { Link } from "react-router-dom";
import {useState} from "react"
import Navbar from "../../components/Navbar";
import PasswordInput from "../../components/input/PasswordInput";
import { validateEmail } from "../../utils/helper";

// import { validateEmail } from "../../utils/helper";
const Signup = () => {
  const handleSignUp = async(e)=>
  {
    e.preventDefault();
    if(!name)
    {
      setError("Please enter your name");
      return;
    }
    if(!validateEmail(email))
    {
      setError("Please enter a valid email address");
      return;
    }
    if(!password)
    {
      setError("Please enter the password");
      return;
    }
    setError(null);

    //Signup API Call
  }

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {error, setError} = useState("");

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleSignUp}>
                        <h4 className="text-2xl mb-2">Sign Up</h4>
                        <input
                            type="text"
                            placeholder="Name"
                            value={name}
                            className="w-full text-sm bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none"
                            onChange={(e) => setName(e.target.value)}
                        />
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
                        />  {error && <p className="text-red-500 text-xs pb-1">{error}</p>}
                        <button type="submit" className="w-full text-sm bg-purple-500 text-white p-2 rounded my-1 hover:bg-blue-900">
                            Create Account
                        </button>
                        <p>
                            Already have an account ?{" "}
                            <Link to="/login" className="font-medium text-primary underline">
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};



export default Signup