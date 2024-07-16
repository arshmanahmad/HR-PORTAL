import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";


interface Service {
    service_id: number;
    service_name: string;
    service_description: string;
    department_id: number;
    created_at: string;
    updated_at: string;
}

const serviceData: Service[] = [
    {
        service_id: 1,
        service_name: "Employee Recruitment",
        service_description: "Managing the hiring process and onboarding new employees.",
        department_id: 1,
        created_at: "10 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        service_id: 2,
        service_name: "Payroll Management",
        service_description: "Handling employee salaries and benefits.",
        department_id: 2,
        created_at: "12 Jun, 2023",
        updated_at: "21 May, 2024"
    },
    {
        service_id: 3,
        service_name: "IT Support",
        service_description: "Providing technical support and managing IT infrastructure.",
        department_id: 3,
        created_at: "05 Jul, 2023",
        updated_at: "22 May, 2024"
    },
    {
        service_id: 4,
        service_name: "Digital Marketing",
        service_description: "Creating and managing online marketing campaigns.",
        department_id: 4,
        created_at: "08 Aug, 2023",
        updated_at: "23 May, 2024"
    },
    {
        service_id: 5,
        service_name: "Sales Strategy",
        service_description: "Developing strategies to improve sales and meet targets.",
        department_id: 5,
        created_at: "18 Sep, 2023",
        updated_at: "25 May, 2024"
    },
    {
        service_id: 6,
        service_name: "Operational Efficiency",
        service_description: "Streamlining operations to enhance productivity.",
        department_id: 6,
        created_at: "02 Oct, 2023",
        updated_at: "27 May, 2024"
    },
    {
        service_id: 7,
        service_name: "Product Development",
        service_description: "Researching and developing new products.",
        department_id: 7,
        created_at: "19 Nov, 2023",
        updated_at: "29 May, 2024"
    },
    {
        service_id: 8,
        service_name: "Customer Support",
        service_description: "Assisting customers with their inquiries and issues.",
        department_id: 8,
        created_at: "28 Dec, 2023",
        updated_at: "30 May, 2024"
    },
    {
        service_id: 9,
        service_name: "Legal Advisory",
        service_description: "Providing legal advice and handling legal matters.",
        department_id: 9,
        created_at: "11 Jan, 2024",
        updated_at: "31 May, 2024"
    }
];


const Services: React.FC = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [formData, setFormData] = useState<Service>({
        service_id: 0,
        service_name: '',
        service_description: '',
        department_id: 0,
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


            <HomeBredCurbs title={t("Services.Services")} />
            <div className="space-y-5">
                {modal && (
                    <Modal toggleModal={toggleModal}>
                        <div className="p-4">
                            <h2 className="text-xl font-bold mb-4">Add Details</h2>
                            <form onSubmit={handleSubmit}>
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
                                <div className="mb-4">
                                    <label className="block text-gray-700">Service Name</label>
                                    <input
                                        type="text"
                                        name="service_name"
                                        value={formData.service_name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Service Description</label>
                                    <textarea
                                        name="service_description"
                                        value={formData.service_description}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
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
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">{t("Services.AddServices")}</button>}
                    noborder={false}
                    title="Service Details"
                >
                    <Table
                        array={serviceData}
                        search={"service_name"}
                        keysToDisplay={["service_id", "service_name", "service_description", "department_id", "created_at", "updated_at"]}
                        label={[
                            "#",
                            t("Services.table.ServiceName"),
                            t("Services.table.Description"),
                            t("Services.table.DepartmentId"),
                            t("Services.table.CreatedAt"),
                            t("Services.table.Updated At"),
                            t("Services.table.Actions"),
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

export default Services;
