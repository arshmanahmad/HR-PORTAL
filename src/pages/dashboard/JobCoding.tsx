import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import Modal from "../../components/Modal/Modal";
import { ChangeEvent, useState } from "react";

interface Job {
    id: number;
    jobTitle: string;
    jobCode: string;
    department: string;
    position: string;
    description: string;
    status: string;
    requiredSkills: string;
    vacancies: number;
}

const jobData: Job[] = [
    {
        id: 1,
        jobTitle: "HR Manager",
        jobCode: "HR001",
        department: "Human Resources",
        position: "Manager",
        description: "Manage HR team and oversee recruitment processes.",
        status: "Open",
        requiredSkills: "Leadership, Communication, Conflict Resolution",
        vacancies: 1,
    },
    {
        id: 2,
        jobTitle: "Accountant",
        jobCode: "FIN002",
        department: "Finance",
        position: "Accountant",
        description: "Handle financial records and transactions.",
        status: "Closed",
        requiredSkills: "Accounting, Attention to Detail, Financial Reporting",
        vacancies: 0,
    },
    {
        id: 3,
        jobTitle: "Software Engineer",
        jobCode: "IT003",
        department: "IT",
        position: "Engineer",
        description: "Develop and maintain software applications.",
        status: "Open",
        requiredSkills: "JavaScript, React, Node.js",
        vacancies: 2,
    },
    {
        id: 4,
        jobTitle: "Marketing Specialist",
        jobCode: "MKT004",
        department: "Marketing",
        position: "Specialist",
        description: "Plan and execute marketing campaigns.",
        status: "Open",
        requiredSkills: "SEO, Content Marketing, Analytics",
        vacancies: 1,
    },
    {
        id: 5,
        jobTitle: "Sales Manager",
        jobCode: "SALES005",
        department: "Sales",
        position: "Manager",
        description: "Lead the sales team and drive sales targets.",
        status: "Closed",
        requiredSkills: "Sales Strategy, Team Leadership, Negotiation",
        vacancies: 0,
    },
    {
        id: 6,
        jobTitle: "Operations Manager",
        jobCode: "OPS006",
        department: "Operations",
        position: "Manager",
        description: "Oversee daily operations and improve efficiency.",
        status: "Open",
        requiredSkills: "Operations Management, Process Improvement, Leadership",
        vacancies: 1,
    },
    {
        id: 7,
        jobTitle: "R&D Specialist",
        jobCode: "RND007",
        department: "Research and Development",
        position: "Specialist",
        description: "Conduct research and develop new products.",
        status: "Open",
        requiredSkills: "Research, Product Development, Innovation",
        vacancies: 2,
    },
    {
        id: 8,
        jobTitle: "Customer Service Representative",
        jobCode: "CS008",
        department: "Customer Service",
        position: "Representative",
        description: "Assist customers with inquiries and complaints.",
        status: "Open",
        requiredSkills: "Communication, Problem Solving, Patience",
        vacancies: 3,
    },
    {
        id: 9,
        jobTitle: "Legal Advisor",
        jobCode: "LEGAL009",
        department: "Legal",
        position: "Advisor",
        description: "Provide legal advice and handle legal issues.",
        status: "Closed",
        requiredSkills: "Legal Knowledge, Critical Thinking, Communication",
        vacancies: 0,
    },
    {
        id: 10,
        jobTitle: "HR Assistant",
        jobCode: "HR010",
        department: "Human Resources",
        position: "Assistant",
        description: "Assist with HR duties and maintain employee records.",
        status: "Closed",
        requiredSkills: "Organizational Skills, Communication, Attention to Detail",
        vacancies: 0,
    }
];

const JobCoding: React.FC = () => {
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
            <HomeBredCurbs title="Job Coding" />
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
                        keysToDisplay={["id", "jobCode", "jobTitle", "department", "description", "position",]}
                        label={[
                            "#",
                            "Job Code",
                            "Job Title",
                            "Department",
                            "Job Description",
                            "Position",
                            "Actions",
                        ]}

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

export default JobCoding;
