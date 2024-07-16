import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import Table from "../../components/MainTable/Table";
import LeaveManagementCards from "../../components/chart/leaveManagementCards";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { FaCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
interface LeaveManagementDataTypes {
  id: number;
  name: string;
  position: string;
  department: string;
  requestType: string;
  date: string;
  weeks: number;
  status: string;
  outOfCountry: string; // New field: Out of country (Yes/No)
  countryNames?: string[]; // New field: Country names (if outOfCountry is Yes)
  totalDays?: number; // New field: Total days of leave
}
const leavesData: LeaveManagementDataTypes[] = [
  {
    id: 1,
    name: "John Doe",
    position: "Software Engineer",
    department: "IT",
    requestType: "Day to Day",
    date: "2024-06-01",
    weeks: 2,
    status: "Pending",
    outOfCountry: "No", // Example: Not out of country
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Product Manager",
    department: "Product",
    requestType: "Hourly",
    date: "2024-06-10",
    weeks: 1,
    status: "Granted",
    outOfCountry: "Yes", // Example: Out of country
    countryNames: ["France", "Italy"], // Example: Countries visited
    totalDays: 7, // Example: Total days of leave
  },
  {
    id: 3,
    name: "Smith",
    position: "Product Manager",
    department: "Product",
    requestType: "Day to Day",
    date: "2024-06-10",
    weeks: 1,
    status: "Granted",
    outOfCountry: "No", // Example: Out of country
    countryNames: ["France", "Italy"], // Example: Countries visited
    totalDays: 7, // Example: Total days of leave
  },
  {
    id: 4,
    name: "Dow",
    position: "Product Manager",
    department: "Product",
    requestType: "Day to Day",
    date: "2024-06-10",
    weeks: 1,
    status: "Granted",
    outOfCountry: "Yes", // Example: Out of country
    countryNames: ["France", "Italy"], // Example: Countries visited
    totalDays: 7, // Example: Total days of leave
  },
  {
    id: 5,
    name: "Jane ",
    position: "Product Manager",
    department: "Product",
    requestType: "Day to Day",
    date: "2024-06-10",
    weeks: 1,
    status: "Granted",
    outOfCountry: "Yes", // Example: Out of country
    countryNames: ["France", "Italy"], // Example: Countries visited
    totalDays: 7, // Example: Total days of leave
  },
  // Add more data entries as needed...
];

interface FormField {
  name: string;
  label: string;
  type:
  | "text"
  | "select"
  | "file"
  | "textarea"
  | "date"
  | "profileFile"
  | "time";
  options?: string[];
  placeholder?: string; // Placeholder text
}
const daily: FormField[] = [
  {
    name: "Agent",
    label: "Agent",
    type: "text",
  },
  {
    name: "Request Date",
    label: "Request Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
  {
    name: "Permission Reason",
    label: "Permission Reason",
    type: "text",
  },
  {
    name: "Location",
    label: "Location",
    type: "text",
  },
  {
    name: "Departure Date",
    label: "Departure Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
  {
    name: "Return Date",
    label: "Return Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
  {
    name: "Effective Return Date",
    label: "Effective Return Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
];
const maternity: FormField[] = [
  {
    name: "Agent",
    label: "Agent",
    type: "select",
    options: ["Choose..."],
  },
  {
    name: "Theoretical End Date",
    label: "Theoretical End Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
  {
    name: "Effective Return Date",
    label: "Effective Return Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
  {
    name: "Proof Document 1",
    label: "Proof Document 1",
    type: "file",
  },
  {
    name: "Proof Document 2",
    label: "Proof Document 2",
    type: "file",
  },
  {
    name: "Proof Document 3",
    label: "Proof Document 3",
    type: "file",
  },
];
const annualForm: FormField[] = [
  {
    name: "AnnualLeavePlanName",
    type: "text",
    label: "Annual Leave Plan Name",
    placeholder: "Enter plan name",
  },
  {
    name: "Start Date",
    label: "Start Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
  {
    name: "End Date",
    label: "End Date",
    type: "date",
    placeholder: "dd/mm/yyyy",
  },
  {
    name: "Total days",
    label: "Total days",
    type: "text",
    placeholder: "10",
  },
  {
    name: "Out of Country",
    label: "Out of Country",
    type: "select",
    options: ["Yes", "No"],
    placeholder: "Select option",
  },
  {
    name: "Publish Planning",
    label: "Publish Planning",
    type: "select",
    options: ["Yes", "No"],
    placeholder: "Select option",
  },
];

const formFields: FormField[] = [
  { name: "agentId", label: "Agent ID", type: "text" },
  { name: "agentName", label: "Agent Name", type: "text" },
  { name: "departureDate", label: "Departure Date", type: "date" },
  { name: "permissionObject", label: "Permission Object", type: "text" },
  { name: "exitPlace", label: "Exit Place", type: "text" },
  { name: "departureTime", label: "Departure Time", type: "time" },
  { name: "returnTime", label: "Return Time", type: "time" },
  { name: "effectiveReturnTime", label: "Effective Return Time", type: "time" },
  {
    name: "justificationDocument",
    label: "Justification Document",
    type: "file",
  },
];
const LeaveManagement: React.FC = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState(false);
  const [formType, setFormType] = useState("");
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const handleSubmit = (formData: FormData) => {
    console.log("Form submitted", formData);
  };
  return (
    <div>
      <HomeBredCurbs title={t("LeaveManagement.LeaveManagement")} />
      {modal && (
        <Modal toggleModal={toggleModal}>
          <div className="p-4 ">
            <h2 className="text-xl font-bold mb-4">Add Leave Management</h2>
            <div className="flex flex-col gap-[0.5rem] mt-[1rem]">
              <button
                onClick={() => {
                  setForm(true);
                  setFormType("Hourly");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Hourly
              </button>
              <button
                onClick={() => {
                  setForm(true);
                  setFormType("Daily");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Day
              </button>
              <button
                onClick={() => {
                  setForm(true);
                  setFormType("Annual");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Annual
              </button>
              <button
                onClick={() => {
                  setForm(true);
                  setFormType("Maternity");
                }}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Maternity
              </button>
            </div>
            {form && formType === "Hourly" && (
              <>
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    {" "}
                    <h2 className="text-2xl mb-4 mt-6">Hourly Leave Form</h2>
                  </div>
                  <DynamicForm
                    fieldsPerRow={1}
                    fields={formFields}
                    onSubmit={handleSubmit}
                    buttonText="Submit"
                  />
                </div>
              </>
            )}
            {form && formType === "Daily" && (
              <>
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    {" "}
                    <h2 className="text-2xl  mb-4 mt-6">Day Leave Form</h2>
                  </div>
                  <DynamicForm
                    fieldsPerRow={1}
                    fields={daily}
                    onSubmit={handleSubmit}
                    buttonText="Submit"
                  />
                </div>
              </>
            )}
            {form && formType === "Annual" && (
              <>
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    {" "}
                    <h2 className="text-2xl  mb-4 mt-6">Annual Leave Form</h2>
                  </div>
                  <DynamicForm
                    fieldsPerRow={1}
                    fields={annualForm}
                    onSubmit={handleSubmit}
                    buttonText="Submit"
                  />
                </div>
              </>
            )}
            {form && formType === "Maternity" && (
              <>
                <div className="flex flex-col ">
                  <div className="flex items-center justify-center">
                    {" "}
                    <h2 className="text-2xl  mb-4 mt-6">
                      Maternity Leave Form
                    </h2>
                  </div>
                  <DynamicForm
                    fieldsPerRow={1}
                    fields={maternity}
                    onSubmit={handleSubmit}
                    buttonText="Submit"
                  />
                </div>
              </>
            )}
            <div className="flex justify-end mt-[1rem]">
              <button
                type="button"
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                onClick={toggleModal}
              >
                Close
              </button>
            </div>
          </div>
        </Modal>
      )}
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
                <LeaveManagementCards />
              </div>
            </Card>
          </div>
          <div className="lg:col-span-7 col-span-12">
            <div>
              <button
                onClick={toggleModal}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                {t("LeaveManagement.AddLeave")}
              </button>
            </div>
          </div>
          <div className="col-span-12">
            <Card
              bodyClass="p-4"
              subtitle={""}
              headerslot={""}
              noborder={false}
              title={t("LeaveManagement.table.LeaveManagement")}
            >
              <Table
                // routes={[""]}
                array={leavesData}
                search={"name"}
                keysToDisplay={[
                  "id",
                  "name",
                  "position",
                  "department",
                  "requestType",
                  "weeks",
                  "outOfCountry",
                  "status",
                ]}
                label={[
                  "#",
                  t("LeaveManagement.table.columns.Name"),
                  t("LeaveManagement.table.columns.Position"),
                  t("LeaveManagement.table.columns.Department"),
                  t("LeaveManagement.table.columns.RequestedTime"),
                  t("LeaveManagement.table.columns.Date"),
                  t("LeaveManagement.table.columns.OutOfCountry"),
                  t("LeaveManagement.table.columns.Status"),
                  t("LeaveManagement.table.columns.Actions"),
                ]}
                filter={() => {
                  return (
                    <div className="flex ">
                      <select className="w-full px-3 py-2 ml-3 border rounded-md">
                        <option value="all">All</option>
                        <option value="pending">Pending</option>
                        <option value="granted">Granted</option>
                        <option value="rejected">Rejected</option>
                        <option value="maternity">Maternity</option>
                      </select>
                    </div>
                  );
                }}
                customBlocks={[
                  {
                    index: 7,
                    component: (status: string) => {
                      // Define color mapping based on status
                      const colorMap: { [key: string]: string } = {
                        Pending: "#FFA500",
                        Granted: "#00FF00",
                        Rejected: "#FF0000",
                        Maternity: "#0000FF",
                      };

                      // Check if status exists in colorMap
                      if (colorMap.hasOwnProperty(status)) {
                        return (
                          <div className="flex items-center ">
                            <FaCircle
                              style={{
                                color: colorMap[status],
                                marginRight: "5px",
                                fontSize: "10px",
                              }}
                            />
                            {status}
                          </div>
                        );
                      } else {
                        return null;
                      }
                    },
                  },
                  {
                    index: 8,
                    component: (status: string) => {
                      return <p>{status}</p>;
                    },
                  },
                ]}
                extraColumns={[
                  () => {
                    return (
                      // approve or deny
                      <>
                        <button className="text-white bg-green-500 px-4 py-2 rounded-md mr-3">
                          Approve
                        </button>{" "}
                        <button className="text-white bg-red-500 px-4 py-2 rounded-md">
                          Deny
                        </button>
                      </>
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

export default LeaveManagement;
