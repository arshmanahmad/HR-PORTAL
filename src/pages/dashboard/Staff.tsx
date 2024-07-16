import { Route, Routes } from "react-router-dom"
import StaffTable from '../../views/Staff/StaffTable'
import StaffDetail from "../../views/Staff/StaffDetail"
import AddStaff from "../../views/Staff/AddStaff"
const Staff: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<StaffTable />} />
            <Route path="/:id" element={<StaffDetail />} />
            <Route path="/addStaff" element={<AddStaff />} />
        </Routes>
    )
}
export default Staff