import { Route, Routes } from "react-router-dom"
import Index from "./index"
import ManagerResponse from "./ManagerResponse"
import DevelopmentPlan from "./DevelopmentPlan"
import AllPlans from "./AllPlans"

const Staff: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/managerResponse" element={<ManagerResponse />} />
            <Route path="/developmentPlan" element={<DevelopmentPlan />} />
            <Route path="/allPlans" element={<AllPlans />} />
        </Routes>
    )
}
export default Staff