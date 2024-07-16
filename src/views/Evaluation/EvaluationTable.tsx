import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdRemoveRedEye } from "react-icons/md";
import Table from "../../components/MainTable/Table";
import SelectMonth from "../../components/chart/SelectMonth";
import Calculation from "../../components/chart/Calculation";
import GroupChart3 from "../../components/chart/group-chart-4";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Modal from "../../components/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Define the Staff interface
interface Staff {
  id: number;
  firstName: string;
  lastName: string;
  lineManager: string;
  functionalManager: string;
  previousLineManager: string;
  status: string;
  type: string;
}

// Sample data for the Staff Table with evaluation fields
const staffData: Staff[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    lineManager: "David Brown",
    functionalManager: "Eva Williams",
    previousLineManager: "Frank White",
    status: "Start",
    type: "Annual Review",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    lineManager: "Carol Taylor",
    functionalManager: "Grace Green",
    previousLineManager: "Henry Green",
    status: "Ready to be signed",
    type: "Annual Review",
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Taylor",
    lineManager: "Bob Smith",
    functionalManager: "Grace Green",
    previousLineManager: "Henry Green",
    status: "Signed",
    type: "Objective",
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Brown",
    lineManager: "Alice Johnson",
    functionalManager: "Eva Williams",
    previousLineManager: "Frank White",
    status: "Start",
    type: "Annual Review",
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Williams",
    lineManager: "Frank White",
    functionalManager: "David Brown",
    previousLineManager: "Alice Johnson",
    status: "Ready to be signed",
    type: "Annual Review",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "White",
    lineManager: "Alice Johnson",
    functionalManager: "David Brown",
    previousLineManager: "Bob Smith",
    status: "Signed",
    type: "Annual Review",
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Green",
    lineManager: "Eva Williams",
    functionalManager: "Frank White",
    previousLineManager: "Carol Taylor",
    status: "Start",
    type: "Annual Review",
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Green",
    lineManager: "David Brown",
    functionalManager: "Eva Williams",
    previousLineManager: "Frank White",
    status: "Ready to be signed",
    type: "Annual Review",
  },
  {
    id: 9,
    firstName: "Ivy",
    lastName: "King",
    lineManager: "Alice Johnson",
    functionalManager: "David Brown",
    previousLineManager: "Bob Smith",
    status: "Signed",
    type: "Annual Review",
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Miller",
    lineManager: "Carol Taylor",
    functionalManager: "Grace Green",
    previousLineManager: "Henry Green",
    status: "Start",
    type: "Annual Review",
  },
  {
    id: 11,
    firstName: "Karen",
    lastName: "Lee",
    lineManager: "Eva Williams",
    functionalManager: "Frank White",
    previousLineManager: "Carol Taylor",
    status: "Ready to be signed",
    type: "Annual Review",
  },
  {
    id: 12,
    firstName: "Liam",
    lastName: "Clark",
    lineManager: "Bob Smith",
    functionalManager: "Grace Green",
    previousLineManager: "Henry Green",
    status: "Signed",
    type: "Annual Review",
  },
  {
    id: 13,
    firstName: "Mia",
    lastName: "Hall",
    lineManager: "Alice Johnson",
    functionalManager: "David Brown",
    previousLineManager: "Frank White",
    status: "Start",
    type: "Annual Review",
  },
  {
    id: 14,
    firstName: "Noah",
    lastName: "Adams",
    lineManager: "Carol Taylor",
    functionalManager: "Eva Williams",
    previousLineManager: "Bob Smith",
    status: "Ready to be signed",
    type: "Annual Review",
  },
  {
    id: 15,
    firstName: "Olivia",
    lastName: "Martin",
    lineManager: "Eva Williams",
    functionalManager: "Frank White",
    previousLineManager: "Carol Taylor",
    status: "Signed",
    type: "Annual Review",
  },
];

const EvaluationTable: React.FC = () => {
  const { t } = useTranslation()
  const [showModal, setShowModal] = useState(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const navigate = useNavigate();
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Perform search logic here if needed
  };
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
    if (option === "Objective Setting") {
      navigate("/dashboard/evaluation/objectiveSettings");
    }
    if (option === "Annual Review") {
      navigate("/dashboard/evaluation/annualReviews");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ selectedOption });
    // Reset form
    setSelectedOption(null);
    toggleModal();
  };

  return (
    <div>
      {showModal && (
        <Modal toggleModal={toggleModal}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Select one of them:</h2>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-4 mb-4">
                <div
                  onClick={() => handleOptionSelect("Objective Setting")}
                  className={`p-4 border rounded-md cursor-pointer ${selectedOption === "Objective Setting"
                    ? "bg-blue-200 border-blue-500"
                    : ""
                    }`}
                >
                  <h3 className="text-lg font-bold">Objective Setting</h3>
                </div>
                <div
                  onClick={() => handleOptionSelect("Annual Review")}
                  className={`p-4 border rounded-md cursor-pointer ${selectedOption === "Annual Review"
                    ? "bg-blue-200 border-blue-500"
                    : ""
                    }`}
                >
                  <h3 className="text-lg font-bold">Annual Review</h3>
                </div>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  onClick={toggleModal}
                >
                  Close
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}

      <HomeBredCurbs title="Evaluation" />
      <div className="space-y-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="col-span-12">
            <Card
              bodyClass="p-4"
              subtitle={""}
              headerslot={""}
              noborder={false}
              title=""
            >
              <div className="grid xl:grid-cols-4 lg:grid-cols-4 col-span-1 gap-3 flex justify-between">
                <GroupChart3 />
              </div>
            </Card>
          </div>
          <div className="col-span-8">
            <Card
              bodyClass="p-4"
              subtitle={""}
              noborder={false}
              title={t("Evaluation.SearchEmployees")}
              headerslot={<SelectMonth />}
            >
              <div className="flex flex-col gap-[2rem]">
                <div>
                  <p>{t("Evaluation.SelectDepartment&service")}</p>
                </div>
                <div className="flex gap-[1rem]">
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option value="">{t("Evaluation.SelectDepartment")}</option>
                    <option value="1">Department 1</option>
                    <option value="2">Department 2</option>
                    <option value="3">Department 3</option>
                  </select>
                  <select className="w-full px-3 py-2 border rounded-md">
                    <option value="">{t("Evaluation.SelectService")}</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                  </select>
                </div>
                <div className="flex items-center justify-between mt-4 mb-10">
                  <div className="relative w-full h-full">
                    <input
                      type="text"
                      placeholder="Search employee..."
                      value={searchTerm}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-md"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <FaSearch className="text-gray-400" />
                    </div>
                  </div>
                </div>
                <button
                  onClick={toggleModal}
                  style={{ cursor: "pointer" }}
                  className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                >
                  {t("Evaluation.StartEvaluation")}
                </button>
              </div>
              {/* <div className="legend-ring3">
                                <Calculation />
                            </div> */}
            </Card>
          </div>
          <div className="col-span-4 ">
            <Card
              bodyClass="p-4"
              subtitle={""}
              noborder={false}
              title={t("Evaluation.ListOfEvaluations")}
              headerslot={<SelectMonth />}
            >
              <div className="legend-ring3">
                <Calculation />
              </div>
            </Card>
          </div>

          <div className="col-span-12">
            <Card
              bodyClass="p-4"
              subtitle={""}
              headerslot={""}
              noborder={false}
              title={t("Evaluation.Evaluation")}
            >
              <Table
                routes={["/dashboard/evaluation"]}
                array={staffData}
                search={"firstName"}
                keysToDisplay={[
                  "id",
                  "firstName",
                  "lineManager",
                  "type",
                  "functionalManager",
                  "status",
                ]}
                label={[
                  "#",
                  t("Evaluation.Evaluation"),
                  t("Evaluation.LineManagerN+1"),
                  t("Evaluation.Type"),
                  t("Evaluation.LineManagerN+2"),
                  t("Evaluation.Status"),
                  t("Evaluation.Actions"),
                ]}
                // customBlocks={[
                //     {
                //         index: 4,
                //         component: (isValid) => {
                //             return isValid ? "Valid" : "Invalid"
                //         }
                //     }
                // ]}
                extraColumns={[
                  () => {
                    return (
                      <MdRemoveRedEye
                        // onClick={() => navigate(`${"/admin/providers/"}${record.id}`)}
                        className="text-[#ccccc] text-[1.3rem]"
                      />
                    );
                  },
                ]}
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EvaluationTable;
