import { Route, Routes } from "react-router-dom"
import EvaluationTable from "../../views/Evaluation/EvaluationTable"
import EvaluationDetail from "../../views/Evaluation/EvaluationDetail"
import ObjectiveSetting from "../../views/Evaluation/ObjectiveSetting"
import ManagerAnnualReview from "../../views/Evaluation/ManagerAnnualReview"
import AnnualReview from "../../views/Evaluation/AnnualReview/layout"
const Staff: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<EvaluationTable />} />
            <Route path="/:id" element={<EvaluationDetail />} />
            <Route path="/objectiveSettings" element={<ObjectiveSetting />} />
            <Route path="/annualReviews/*" element={<AnnualReview />} />
            <Route path="/managerAnnualReview" element={<ManagerAnnualReview />} />
        </Routes>
    )
}
export default Staff