import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";
interface Privilege {
    privilege_id: number;
    privilege_name: string;
    privilege_description: string;
    created_at: string;
    updated_at: string;
}

const privilegeData: Privilege[] = [
    {
        privilege_id: 1,
        privilege_name: "Create User",
        privilege_description: "Allows user to create new accounts",
        created_at: "01 Jan, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 2,
        privilege_name: "Delete User",
        privilege_description: "Allows user to delete existing accounts",
        created_at: "15 Jan, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 3,
        privilege_name: "Edit Profile",
        privilege_description: "Allows user to modify their profile information",
        created_at: "01 Feb, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 4,
        privilege_name: "Approve Requests",
        privilege_description: "Allows user to approve various requests",
        created_at: "15 Feb, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 5,
        privilege_name: "Manage Finances",
        privilege_description: "Allows user to manage financial transactions and records",
        created_at: "01 Mar, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 6,
        privilege_name: "Access Reports",
        privilege_description: "Allows user to access and generate reports",
        created_at: "15 Mar, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 7,
        privilege_name: "Create Content",
        privilege_description: "Allows user to create and publish content",
        created_at: "01 Apr, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 8,
        privilege_name: "Manage Inventory",
        privilege_description: "Allows user to manage inventory and stock levels",
        created_at: "15 Apr, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 9,
        privilege_name: "Schedule Meetings",
        privilege_description: "Allows user to schedule and organize meetings",
        created_at: "01 May, 2023",
        updated_at: "23 May, 2024"
    },
    {
        privilege_id: 10,
        privilege_name: "Monitor Performance",
        privilege_description: "Allows user to monitor performance metrics",
        created_at: "15 May, 2023",
        updated_at: "23 May, 2024"
    }
];


const Privileges: React.FC = () => {
    const { t } = useTranslation();
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    const [formData, setFormData] = useState<Privilege>({
        privilege_id: 0,
        privilege_name: '',
        privilege_description: '',
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
                        <h2 className="text-xl font-bold mb-4">Add Privilege Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Privilege ID</label>
                                <input
                                    type="number"
                                    name="privilege_id"
                                    value={formData.privilege_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Privilege Name</label>
                                <input
                                    type="text"
                                    name="privilege_name"
                                    value={formData.privilege_name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Privilege Description</label>
                                <textarea
                                    name="privilege_description"
                                    value={formData.privilege_description}
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

            <HomeBredCurbs title={t("Privileges.Privileges")} />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">{t("Privileges.AddPrivileges")}</button>}
                    noborder={false}
                    title="Privilege Details"
                >
                    <Table
                        array={privilegeData}
                        search={"privilege_name"}
                        keysToDisplay={["privilege_id", "privilege_name", "privilege_description", "created_at", "updated_at",]}
                        label={[
                            "#",
                            t("Privileges.table.PrivilegeName"),
                            t("Privileges.table.Description"),
                            t("Privileges.table.CreatedAt"),
                            t("Privileges.table.Updated At"),
                            t("Privileges.table.Actions"),
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

export default Privileges;
