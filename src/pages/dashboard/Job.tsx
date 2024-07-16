import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

interface Job {
    job_id: number;
    job_title: string;
    job_description: string;
    unit_id: number;
    created_at: string;
    updated_at: string;
}

const jobData: Job[] = [
    {
        job_id: 1,
        job_title: "Senior Recruiter",
        job_description: "Lead the recruitment team and manage high-level hiring processes.",
        unit_id: 1,
        created_at: "01 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        job_id: 2,
        job_title: "Onboarding Specialist",
        job_description: "Facilitate smooth onboarding experiences for new employees.",
        unit_id: 2,
        created_at: "12 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        job_id: 3,
        job_title: "Payroll Administrator",
        job_description: "Administer payroll and manage salary disbursement.",
        unit_id: 3,
        created_at: "05 Jun, 2023",
        updated_at: "22 May, 2024"
    },
    {
        job_id: 4,
        job_title: "Benefits Coordinator",
        job_description: "Coordinate and manage employee benefits programs.",
        unit_id: 4,
        created_at: "08 Jun, 2023",
        updated_at: "23 May, 2024"
    },
    {
        job_id: 5,
        job_title: "IT Support Specialist",
        job_description: "Provide technical support and troubleshoot IT issues.",
        unit_id: 5,
        created_at: "11 Jul, 2023",
        updated_at: "23 May, 2024"
    },
    {
        job_id: 6,
        job_title: "Network Engineer",
        job_description: "Design, implement, and manage network infrastructure.",
        unit_id: 6,
        created_at: "15 Jul, 2023",
        updated_at: "23 May, 2024"
    },
    {
        job_id: 7,
        job_title: "SEO Specialist",
        job_description: "Optimize web content to improve search engine rankings.",
        unit_id: 7,
        created_at: "20 Aug, 2023",
        updated_at: "23 May, 2024"
    },
    {
        job_id: 8,
        job_title: "Social Media Manager",
        job_description: "Manage and oversee social media campaigns and activities.",
        unit_id: 8,
        created_at: "25 Aug, 2023",
        updated_at: "23 May, 2024"
    },
    {
        job_id: 9,
        job_title: "Sales Strategist",
        job_description: "Develop and implement effective sales strategies.",
        unit_id: 9,
        created_at: "30 Sep, 2023",
        updated_at: "25 May, 2024"
    },
    {
        job_id: 10,
        job_title: "Customer Engagement Specialist",
        job_description: "Engage with customers and enhance customer relationships.",
        unit_id: 10,
        created_at: "05 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        job_id: 11,
        job_title: "Operations Analyst",
        job_description: "Analyze and optimize operational processes.",
        unit_id: 11,
        created_at: "10 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        job_id: 12,
        job_title: "Automation Engineer",
        job_description: "Design and implement automated processes to improve efficiency.",
        unit_id: 12,
        created_at: "15 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        job_id: 13,
        job_title: "Prototype Developer",
        job_description: "Develop product prototypes for testing and evaluation.",
        unit_id: 13,
        created_at: "20 Nov, 2023",
        updated_at: "29 May, 2024"
    },
    {
        job_id: 14,
        job_title: "Market Analyst",
        job_description: "Conduct market research and analysis to inform business strategies.",
        unit_id: 14,
        created_at: "25 Nov, 2023",
        updated_at: "29 May, 2024"
    },
    {
        job_id: 15,
        job_title: "Customer Support Representative",
        job_description: "Provide assistance and support to customers.",
        unit_id: 15,
        created_at: "30 Dec, 2023",
        updated_at: "30 May, 2024"
    },
    {
        job_id: 16,
        job_title: "Issue Resolution Specialist",
        job_description: "Resolve customer issues and ensure satisfaction.",
        unit_id: 16,
        created_at: "05 Jan, 2024",
        updated_at: "31 May, 2024"
    },
    {
        job_id: 17,
        job_title: "Contract Manager",
        job_description: "Review and manage legal contracts and agreements.",
        unit_id: 17,
        created_at: "11 Jan, 2024",
        updated_at: "31 May, 2024"
    },
    {
        job_id: 18,
        job_title: "Compliance Officer",
        job_description: "Ensure compliance with legal and regulatory requirements.",
        unit_id: 18,
        created_at: "15 Jan, 2024",
        updated_at: "31 May, 2024"
    }
];

const Job: React.FC = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [formData, setFormData] = useState<Job>({
        job_id: 0,
        job_title: '',
        job_description: '',
        unit_id: 0,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can handle form submission, e.g., send the formData to a server
        console.log(formData);
        toggleModal();
    };



    return (
        <div>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Add Job Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Job ID</label>
                                <input
                                    type="number"
                                    name="job_id"
                                    value={formData.job_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Job Title</label>
                                <input
                                    type="text"
                                    name="job_title"
                                    value={formData.job_title}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Job Description</label>
                                <textarea
                                    name="job_description"
                                    value={formData.job_description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Unit ID</label>
                                <input
                                    type="number"
                                    name="unit_id"
                                    value={formData.unit_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Created At</label>
                                <input
                                    type="datetime-local"
                                    name="created_at"
                                    value={formData.created_at}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Updated At</label>
                                <input
                                    type="datetime-local"
                                    name="updated_at"
                                    value={formData.updated_at}
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

            <HomeBredCurbs title="Jobs" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add Job</button>}
                    noborder={false}
                    title="Job Details"
                >
                    <Table
                        array={jobData}
                        search={"job_title"}
                        keysToDisplay={["job_id", "job_title", "job_description", "unit_id", "created_at", "updated_at",]}
                        label={[
                            "#",
                            "Job Name",
                            "Description",
                            "Unit Id",
                            "Created At",
                            "Updated At",
                            "Actions",
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

export default Job;
