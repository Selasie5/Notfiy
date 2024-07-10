/* eslint-disable react/prop-types */
import { useState } from "react"
import {FaRegEye, FaRegEyeSlash} from "react-icons/fa6"

const PasswordInput = ({value, onChange, placeholder}) => {
  
    const [isShowPassword, setIsShowPassword] = useState(false);

    const toggleShowPassword =()=>
    {
        setIsShowPassword(!isShowPassword);
    }
  
    return (
    <div className="flex items-center bg-transparent border-[1.5px] px-5 py-3 rounded mb-4 outline-none">
        <input
        value={value}
        onChange={onChange}
        type={isShowPassword ? 
            "text": "password"
        } 
        placeholder={placeholder || 
            "Password"}
            className="w-full text-sm bg-transparent py-3 mr-3 rounded outline-none"
        />
        {isShowPassword ?
            <FaRegEye size={22} 
        className="text-blue-600 cursor-pointer"
        onClick={()=> toggleShowPassword}/>:
        <FaRegEyeSlash size={22} 
        className="text-slate-600 cursor-pointer"
        onClick={()=> toggleShowPassword}/>
        }
    </div>
  )
}

export default PasswordInput