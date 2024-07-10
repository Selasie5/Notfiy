import ProfileInfo from "./Cards/ProfileInfo";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar/SearchBar";
const Navbar = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const logOut=()=>
  {
    navigate("/login");
  }
  const handleSearch=()=>
  {

  }

    const onClearSearch=()=>
    {
      setSearchQuery("");
    }
  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
        <h2 className="text-xl font-medium text-black py-2">Notify</h2>
        <SearchBar value={searchQuery}
        onChange={(e)=>
          setSearchQuery(e.target.value)
        }
        handleSearch={handleSearch}
        onClearSearch={onClearSearch}
        />
        <ProfileInfo onLogout={logOut}/>
    </div>
  )
}

export default Navbar