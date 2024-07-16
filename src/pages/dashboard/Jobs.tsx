import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from "../../components/MainTable/Table";
import Modal from "../../components/Modal/Modal";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface Job {
  id: number;
  jobTitle: string;
  department: string;
  position: string;
  noOfJobs: number;
  status: string;
}
const jobData: Job[] = [
  {
    id: 1,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",
    status: "Open",
  },
  {
    id: 2,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",
    status: "Open",
  },
  {
    id: 3,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",
    status: "Open",
  },
  {
    id: 4,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",

    status: "Open",
  },
  {
    id: 5,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",

    status: "Open",
  },
  {
    id: 6,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",

    status: "Open",
  },
  {
    id: 7,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",

    status: "Open",
  },
  {
    id: 8,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",

    status: "Open",
  },
  {
    id: 9,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",

    status: "Open",
  },
  {
    id: 10,
    department: "Human Resources",
    position: "Manager",
    noOfJobs: 4,
    jobTitle: "HR Manager",

    status: "Open",
  },
];

const Jobs: React.FC = () => {
  const { t } = useTranslation()
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [editModal, setEditModal] = useState(false);
  const toggleEditModal = () => {
    setEditModal(!editModal);
  };
  interface Job {
    title: string;
    code: string;
    department: string;
  }
  const [job, setJob] = useState<Job>({
    title: "",
    code: "",
    department: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setJob((prevJob) => ({ ...prevJob, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Job submitted", job);
    toggleModal();
  };
  return (
    <div>
      {modal && (
        <Modal toggleModal={toggleModal}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Add Job</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  {t("Jobs.table.JobTitle")}
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={job.title}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter job title"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="code"
                >
                  {t("Jobs.table.JobCode")}
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  value={job.code}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter job code"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="department"
                >
                  {t("Jobs.table.Department")}
                </label>
                <input
                  id="department"
                  name="department"
                  type="text"
                  value={job.department}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter department"
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
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      {editModal && (
        <Modal toggleModal={toggleEditModal}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">Edit Job</h2>
            <form>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="title"
                >
                  {t("Jobs.table.JobTitle")}
                </label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={job.title}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter job title"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="code"
                >
                  {t("Jobs.table.JobCode")}
                </label>
                <input
                  id="code"
                  name="code"
                  type="text"
                  value={job.code}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter job code"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="department"
                >
                  {t("Jobs.table.Department")}
                </label>
                <input
                  id="department"
                  name="department"
                  type="text"
                  value={job.department}
                  onChange={handleChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter department"
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                  onClick={toggleEditModal}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
      <HomeBredCurbs title={t("Jobs.Jobs")} />
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
              {t("Jobs.AddJob")}
            </button>
          }
          noborder={false}
          title={t("Jobs.JobDetails")}
        >
          <Table
            array={jobData}
            search={"jobTitle"}
            keysToDisplay={[
              "id",
              "department",
              "jobTitle",
              "position",
              "noOfJobs",
            ]}
            label={[
              "#",
              t("Jobs.table.Department"),
              t("Jobs.table.JobTitle"),
              t("Jobs.table.JobCode"),
              "No Of Jobs",
              t("Jobs.table.Actions"),
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
                  <MdEdit
                    onClick={toggleEditModal}
                    className="text-[#ccccc] text-[1.3rem]"
                  />
                );
              },
            ]}
          />
        </Card>
      </div>
    </div>
  );
};

export default Jobs;
