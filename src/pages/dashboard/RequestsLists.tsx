import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import Modal from "../../components/Modal/Modal";
import { ChangeEvent, useState } from "react";
import { useTranslation } from "react-i18next";

interface Job {
    id: number;
    requestedBy: string;
    designation: string;
    department: string;
    jobTitle: string;
    numberOfPositions: number;
    requestDate: string;
    status: string;
}

const jobData: Job[] = [
    {
        id: 1,
        requestedBy: "Alice Johnson",
        designation: "Manager",
        department: "Human Resources",
        jobTitle: "HR Manager",
        numberOfPositions: 1,
        requestDate: "2024-06-01",
        status: "Open",
    },
    {
        id: 2,
        requestedBy: "Bob Smith",
        designation: "Accountant",
        department: "Finance",
        jobTitle: "Accountant",
        numberOfPositions: 2,
        requestDate: "2024-05-15",
        status: "Closed",
    },
    {
        id: 3,
        requestedBy: "Charlie Brown",
        designation: "Engineer",
        department: "IT",
        jobTitle: "Software Engineer",
        numberOfPositions: 3,
        requestDate: "2024-06-10",
        status: "Open",
    },
    {
        id: 4,
        requestedBy: "Diana Prince",
        designation: "Specialist",
        department: "Marketing",
        jobTitle: "Marketing Specialist",
        numberOfPositions: 1,
        requestDate: "2024-06-12",
        status: "Open",
    },
    {
        id: 5,
        requestedBy: "Edward Norton",
        designation: "Manager",
        department: "Sales",
        jobTitle: "Sales Manager",
        numberOfPositions: 1,
        requestDate: "2024-05-20",
        status: "Closed",
    },
    {
        id: 6,
        requestedBy: "Fiona Gallagher",
        designation: "Manager",
        department: "Operations",
        jobTitle: "Operations Manager",
        numberOfPositions: 2,
        requestDate: "2024-06-05",
        status: "Open",
    }
];

const RequestsLists: React.FC = () => {
    const { t } = useTranslation();
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
        setJob(prevJob => ({ ...prevJob, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Job submitted", job);
        toggleModal();
    }
    return (
        <div>
            {modal && (
                <Modal
                    toggleModal={toggleModal}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Add Job</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Job Title
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
                                    Job Code
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                                    Department
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
                <Modal
                    toggleModal={toggleEditModal}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Edit Job</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Job Title
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="code">
                                    Job Code
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
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="department">
                                    Department
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
            <HomeBredCurbs title={t("RequestsList.RequestsList")} />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    // <button
                    //     onClick={toggleModal}
                    //     style={{ cursor: "pointer" }}
                    //     className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add Job</button>}
                    headerslot={""}
                    noborder={false}
                    title="Detail"
                >
                    <Table
                        array={jobData}
                        search={"jobTitle"}
                        keysToDisplay={["id", "requestedBy", "designation", "department", "numberOfPositions", "jobTitle", "status"]}
                        label={[
                            "#",
                            t("RequestsList.table.RequestedBy"),
                            t("RequestsList.table.Designation"),
                            t("RequestsList.table.Department"),
                            t("RequestsList.table.NumberOfPositions"),
                            t("RequestsList.table.Job Title"),
                            t("RequestsList.table.Status"),
                            t("RequestsList.table.Actions"),
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
                                        // onClick={toggleEditModal}
                                        className="text-[#ccccc] text-[1.3rem]" />
                                );
                            },
                        ]}
                    />
                </Card>


            </div>
        </div>
    );
};

export default RequestsLists;
