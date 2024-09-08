import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";
import ArshWhizTable from "../../components/ArshWhizTable/index";
interface Department {
  department_id: number;
  department_name: string;
  department_description: string;
  natureOfContract: string;
  created_at: string;
  updated_at: string;
}

const departmentData: Department[] = [
  {
    department_id: 1,
    department_name: "Human Resources",
    natureOfContract: "Permanent",
    department_description:
      "Responsible for recruitment, training, and employee welfare.",
    created_at: "01 May, 2023",
    updated_at: "01 Jan, 2024",
  },
  {
    department_id: 2,
    department_name: "Finance",
    natureOfContract: "Permanent",
    department_description:
      "Handles financial planning, management, and record-keeping.",
    created_at: "15 Jun, 2023",
    updated_at: "01 Feb, 2024",
  },
  {
    department_id: 3,
    department_name: "IT",
    natureOfContract: "Permanent",
    department_description:
      "Manages information technology infrastructure and software development.",
    created_at: "20 Jul, 2023",
    updated_at: "01 Mar, 2024",
  },
  {
    department_id: 4,
    department_name: "Marketing",
    department_description:
      "Plans and executes marketing strategies and campaigns.",
    created_at: "10 Aug, 2023",
    natureOfContract: "Permanent",
    updated_at: "01 Apr, 2024",
  },
  {
    department_id: 5,
    department_name: "Sales",
    department_description:
      "Focuses on sales strategies and achieving sales targets.",
    created_at: "05 Sep, 2023",
    natureOfContract: "Permanent",
    updated_at: "01 May, 2024",
  },
  {
    department_id: 6,
    department_name: "Operations",
    department_description:
      "Oversees day-to-day operations and ensures operational efficiency.",
    created_at: "12 Oct, 2023",
    updated_at: "01 Jun, 2024",
    natureOfContract: "Permanent",
  },
  {
    department_id: 7,
    department_name: "Research and Development",
    department_description:
      "Conducts research and develops new products and technologies.",
    created_at: "01 Nov, 2023",
    natureOfContract: "Permanent",
    updated_at: "01 Jul, 2024",
  },
  {
    department_id: 8,
    department_name: "Customer Service",
    department_description:
      "Handles customer inquiries, complaints, and support.",
    created_at: "05 Dec, 2023",
    updated_at: "01 Aug, 2024",
    natureOfContract: "Permanent",
  },
  {
    department_id: 9,
    department_name: "Legal",
    department_description:
      "Provides legal advice and handles legal issues for the company.",
    created_at: "15 Jan, 2023",
    updated_at: "01 Sep, 2024",
    natureOfContract: "Permanent",
  },
];
const Department: React.FC = () => {
  const { t } = useTranslation();
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [formData, setFormData] = useState<Department>({
    department_id: 0,
    department_name: "",
    department_description: "",

    natureOfContract: "Permanent",
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toggleModal();
  };

  return (
    <div>
      {modal && (
        <Modal toggleModal={toggleModal}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Add Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Department ID</label>
                <input
                  type="number"
                  name="department_id"
                  value={formData.department_id}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Department Name</label>
                <input
                  type="text"
                  name="department_name"
                  value={formData.department_name}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">
                  Department Description
                </label>
                <textarea
                  name="department_description"
                  value={formData.department_description}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-md"
                  required
                />
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

      <HomeBredCurbs title={t("Department.Department")} />
      <div className="space-y-5">
        <Card
          bodyClass="p-4"
          subtitle={""}
          headerslot={
            <button
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
              className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              {t("Department.AddDepartment")}
            </button>
          }
          noborder={false}
          title="Details"
        >
          <ArshWhizTable
            arrayOfData={departmentData}
            attributesToShow={[
              "department_id",
              "department_name",
              "natureOfContract",
              "department_description",
              "created_at",
            ]}
            attributesNames={[
              "No.",
              "Name",
              "Contract Nature",
              "Department",
              "Created At",
              "extraFirst",
              "extraSecond",
              "extraThird",
            ]}
            extraAttributeValueColumns={[
              {
                value: (item: { [key: string]: any }) => (
                  <button
                    className="border p-4"
                    onClick={() => alert(item.name)}
                  >
                    Alert Name
                  </button>
                ),
                columnIndex: 5,
              },
              { value: "Static Extra", columnIndex: 6 },
              { value: "Extra", columnIndex: 7 },
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default Department;
