import { Route, Routes } from "react-router-dom"
import ProfileDetail from "../../views/Profile/ProfileDetail"
import EditProfile from "../../views/Profile/EditProfile"
const Staff: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<ProfileDetail />} />
            <Route path="/editProfile" element={<EditProfile />} />
        </Routes>
    )
}
export default Staff