import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";
interface Function {
    function_id: number;
    function_name: string;
    function_description: string;
    job_id: number;
    created_at: string;
    updated_at: string;
}

const functionData: Function[] = [
    {
        function_id: 1,
        function_name: "Recruitment Planning",
        function_description: "Develop and implement recruitment plans and strategies.",
        job_id: 1,
        created_at: "01 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        function_id: 2,
        function_name: "Interview Coordination",
        function_description: "Coordinate and schedule interviews with candidates.",
        job_id: 2,
        created_at: "12 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        function_id: 3,
        function_name: "Payroll Processing",
        function_description: "Process payroll and manage salary disbursements.",
        job_id: 3,
        created_at: "05 Jun, 2023",
        updated_at: "22 May, 2024"
    },
    {
        function_id: 4,
        function_name: "Benefits Management",
        function_description: "Manage employee benefits programs and policies.",
        job_id: 4,
        created_at: "08 Jun, 2023",
        updated_at: "23 May, 2024"
    },
    {
        function_id: 5,
        function_name: "Technical Support",
        function_description: "Provide technical support and troubleshoot IT issues.",
        job_id: 5,
        created_at: "11 Jul, 2023",
        updated_at: "23 May, 2024"
    },
    {
        function_id: 6,
        function_name: "Network Maintenance",
        function_description: "Maintain and support network infrastructure.",
        job_id: 6,
        created_at: "15 Jul, 2023",
        updated_at: "23 May, 2024"
    },
    {
        function_id: 7,
        function_name: "SEO Optimization",
        function_description: "Optimize web content for search engine rankings.",
        job_id: 7,
        created_at: "20 Aug, 2023",
        updated_at: "23 May, 2024"
    },
    {
        function_id: 8,
        function_name: "Social Media Campaigns",
        function_description: "Plan and execute social media campaigns.",
        job_id: 8,
        created_at: "25 Aug, 2023",
        updated_at: "23 May, 2024"
    },
    {
        function_id: 9,
        function_name: "Sales Strategy Development",
        function_description: "Develop and implement sales strategies.",
        job_id: 9,
        created_at: "30 Sep, 2023",
        updated_at: "25 May, 2024"
    },
    {
        function_id: 10,
        function_name: "Customer Engagement",
        function_description: "Engage with customers to enhance relationships.",
        job_id: 10,
        created_at: "05 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        function_id: 11,
        function_name: "Operational Analysis",
        function_description: "Analyze and optimize operational processes.",
        job_id: 11,
        created_at: "10 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        function_id: 12,
        function_name: "Automation Implementation",
        function_description: "Implement automated processes to improve efficiency.",
        job_id: 12,
        created_at: "15 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        function_id: 13,
        function_name: "Prototype Development",
        function_description: "Develop product prototypes for testing.",
        job_id: 13,
        created_at: "20 Nov, 2023",
        updated_at: "29 May, 2024"
    },
    {
        function_id: 14,
        function_name: "Market Research",
        function_description: "Conduct market research to inform business strategies.",
        job_id: 14,
        created_at: "25 Nov, 2023",
        updated_at: "29 May, 2024"
    },
    {
        function_id: 15,
        function_name: "Customer Support",
        function_description: "Provide support to customers.",
        job_id: 15,
        created_at: "30 Dec, 2023",
        updated_at: "30 May, 2024"
    },
    {
        function_id: 16,
        function_name: "Issue Resolution",
        function_description: "Resolve customer issues and ensure satisfaction.",
        job_id: 16,
        created_at: "05 Jan, 2024",
        updated_at: "31 May, 2024"
    },
    {
        function_id: 17,
        function_name: "Contract Management",
        function_description: "Review and manage legal contracts.",
        job_id: 17,
        created_at: "11 Jan, 2024",
        updated_at: "31 May, 2024"
    },
    {
        function_id: 18,
        function_name: "Compliance Monitoring",
        function_description: "Ensure compliance with legal requirements.",
        job_id: 18,
        created_at: "15 Jan, 2024",
        updated_at: "31 May, 2024"
    },
    {
        function_id: 19,
        function_name: "Project Coordination",
        function_description: "Coordinate project activities and ensure timely completion.",
        job_id: 1,
        created_at: "20 Jan, 2024",
        updated_at: "01 Jun, 2024"
    },
    {
        function_id: 20,
        function_name: "Training and Development",
        function_description: "Plan and conduct training sessions for employees.",
        job_id: 2,
        created_at: "25 Jan, 2024",
        updated_at: "01 Jun, 2024"
    }
];


const Functions: React.FC = () => {
    const { t } = useTranslation()
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [formData, setFormData] = useState<Function>({
        function_id: 0,
        function_name: '',
        function_description: '',
        job_id: 0,
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
                        <h2 className="text-xl font-bold mb-4">Add Function Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Function ID</label>
                                <input
                                    type="number"
                                    name="function_id"
                                    value={formData.function_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Function Name</label>
                                <input
                                    type="text"
                                    name="function_name"
                                    value={formData.function_name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Function Description</label>
                                <textarea
                                    name="function_description"
                                    value={formData.function_description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
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


            <HomeBredCurbs title="Functions" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">{t("Functions.AddFunction")}</button>}
                    noborder={false}
                    title={t("Functions.FunctionDetails")}
                >
                    <Table
                        array={functionData}
                        search={"function_name"}
                        keysToDisplay={["function_id", "function_name", "function_description", "job_id", "created_at", "updated_at",]}
                        label={[
                            "#",
                            t("Functions.table.FunctionName"),
                            t("Functions.table.Description"),
                            t("Functions.table.JobId"),
                            t("Functions.table.CreatedAt"),
                            t("Functions.table.Updated At"),
                            t("Functions.table.Actions"),
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

export default Functions;
