import { getInitial } from "../../utils/helper"

// eslint-disable-next-line react/prop-types
const ProfileInfo = ({onLogout}) => {
  return (
    <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-purple-500">
            {getInitial("Selasie Sepenu")}
            </div>
            <div>
                <p className="text-sm font-medium">Selasie Sepenu</p>
                <button className="text-sm text-slate-700 underline" onClick={onLogout}>
                    Logout
                    </button>
                                    </div>
    </div>
  )
}

export default ProfileInfo