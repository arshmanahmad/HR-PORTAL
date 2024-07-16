import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import { useTranslation } from "react-i18next";

interface Unit {
    unit_id: number;
    unit_name: string;
    unit_description: string;
    service_id: number;
    created_at: string;
    updated_at: string;
}

const unitData: Unit[] = [
    {
        unit_id: 1,
        unit_name: "Talent Acquisition",
        unit_description: "Responsible for recruiting top talent.",
        service_id: 1,
        created_at: "10 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        unit_id: 2,
        unit_name: "Onboarding",
        unit_description: "Ensures smooth integration of new hires.",
        service_id: 1,
        created_at: "12 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        unit_id: 3,
        unit_name: "Salary Processing",
        unit_description: "Handles monthly salary disbursement.",
        service_id: 2,
        created_at: "05 Jun, 2023",
        updated_at: "22 May, 2024"
    },
    {
        unit_id: 4,
        unit_name: "Benefits Administration",
        unit_description: "Manages employee benefits and perks.",
        service_id: 2,
        created_at: "08 Jun, 2023",
        updated_at: "23 May, 2024"
    },
    {
        unit_id: 5,
        unit_name: "Help Desk",
        unit_description: "Provides IT support to employees.",
        service_id: 3,
        created_at: "11 Jul, 2023",
        updated_at: "23 May, 2024"
    },
    {
        unit_id: 6,
        unit_name: "Network Management",
        unit_description: "Oversees company network infrastructure.",
        service_id: 3,
        created_at: "15 Jul, 2023",
        updated_at: "23 May, 2024"
    },
    {
        unit_id: 7,
        unit_name: "SEO",
        unit_description: "Optimizes web content for search engines.",
        service_id: 4,
        created_at: "20 Aug, 2023",
        updated_at: "23 May, 2024"
    },
    {
        unit_id: 8,
        unit_name: "Social Media Marketing",
        unit_description: "Manages social media campaigns.",
        service_id: 4,
        created_at: "25 Aug, 2023",
        updated_at: "23 May, 2024"
    },
    {
        unit_id: 9,
        unit_name: "Sales Planning",
        unit_description: "Develops sales strategies.",
        service_id: 5,
        created_at: "30 Sep, 2023",
        updated_at: "25 May, 2024"
    },
    {
        unit_id: 10,
        unit_name: "Customer Outreach",
        unit_description: "Engages with potential customers.",
        service_id: 5,
        created_at: "05 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        unit_id: 11,
        unit_name: "Workflow Optimization",
        unit_description: "Improves operational workflows.",
        service_id: 6,
        created_at: "10 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        unit_id: 12,
        unit_name: "Process Automation",
        unit_description: "Implements automated processes.",
        service_id: 6,
        created_at: "15 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        unit_id: 13,
        unit_name: "Prototype Development",
        unit_description: "Creates product prototypes.",
        service_id: 7,
        created_at: "20 Nov, 2023",
        updated_at: "29 May, 2024"
    },
    {
        unit_id: 14,
        unit_name: "Market Research",
        unit_description: "Conducts market research.",
        service_id: 7,
        created_at: "25 Nov, 2023",
        updated_at: "29 May, 2024"
    },
    {
        unit_id: 15,
        unit_name: "Customer Assistance",
        unit_description: "Provides support to customers.",
        service_id: 8,
        created_at: "30 Dec, 2023",
        updated_at: "30 May, 2024"
    },
    {
        unit_id: 16,
        unit_name: "Issue Resolution",
        unit_description: "Resolves customer issues.",
        service_id: 8,
        created_at: "05 Jan, 2024",
        updated_at: "31 May, 2024"
    },
    {
        unit_id: 17,
        unit_name: "Contract Review",
        unit_description: "Reviews legal contracts.",
        service_id: 9,
        created_at: "11 Jan, 2024",
        updated_at: "31 May, 2024"
    },
    {
        unit_id: 18,
        unit_name: "Compliance",
        unit_description: "Ensures legal compliance.",
        service_id: 9,
        created_at: "15 Jan, 2024",
        updated_at: "31 May, 2024"
    }
];


const Units: React.FC = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    const [formData, setFormData] = useState<Unit>({
        unit_id: 0,
        unit_name: '',
        unit_description: '',
        service_id: 0,
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
                                <label className="block text-gray-700">Unit Name</label>
                                <input
                                    type="text"
                                    name="unit_name"
                                    value={formData.unit_name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Unit Description</label>
                                <textarea
                                    name="unit_description"
                                    value={formData.unit_description}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Service ID</label>
                                <input
                                    type="number"
                                    name="service_id"
                                    value={formData.service_id}
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
            <HomeBredCurbs title={t("Units.Units")} />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">{t("Units.AddUnits")}</button>}
                    noborder={false}
                    title="Unit Details"
                >
                    <Table
                        array={unitData}
                        search={"unit_name"}
                        keysToDisplay={["unit_id", "unit_name", "unit_description", "service_id", "created_at", "updated_at",]}
                        label={[
                            "#",
                            t("Units.table.UnitName"),
                            t("Units.table.Description"),
                            t("Units.table.Service tId"),
                            t("Units.table.CreatedAt"),
                            t("Units.table.Updated At"),
                            t("Units.table.Actions"),
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

export default Units;
