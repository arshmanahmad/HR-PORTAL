import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";

interface Role {
    role_id: number;
    role_name: string;
    role_description: string;
    created_at: string;
    updated_at: string;
}

const roleData: Role[] = [
    {
        role_id: 1,
        role_name: "Admin",
        role_description: "Administrator with full access to the system",
        created_at: "01 Jan, 2023",
        updated_at: "23 May, 2024"
    },
    {
        role_id: 2,
        role_name: "Managing Director",
        role_description: "Manages the overall operations and resources of the company",
        created_at: "15 Jan, 2023",
        updated_at: "23 May, 2024"
    },
    {
        role_id: 3,
        role_name: "HR Director",
        role_description: "Oversees the human resources department and staff",
        created_at: "01 Feb, 2023",
        updated_at: "23 May, 2024"
    },
    {
        role_id: 4,
        role_name: "Line Manager N+1",
        role_description: "First level of management responsible for daily operations",
        created_at: "15 Feb, 2023",
        updated_at: "23 May, 2024"
    },
    {
        role_id: 5,
        role_name: "Line Manager N+2",
        role_description: "Second level of management responsible for strategic oversight",
        created_at: "01 Mar, 2023",
        updated_at: "23 May, 2024"
    },

];
const Roles: React.FC = () => {
    const { t } = useTranslation()
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    const [formData, setFormData] = useState<Role>({
        role_id: 0,
        role_name: '',
        role_description: '',
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
                        <h2 className="text-xl font-bold mb-4">Add Role Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Role ID</label>
                                <input
                                    type="number"
                                    name="role_id"
                                    value={formData.role_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Role Name</label>
                                <input
                                    type="text"
                                    name="role_name"
                                    value={formData.role_name}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Role Description</label>
                                <textarea
                                    name="role_description"
                                    value={formData.role_description}
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
            <HomeBredCurbs title={t("Roles.Roles")} />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    // <button
                    //     onClick={toggleModal}
                    //     style={{ cursor: "pointer" }}
                    //     className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add Role</button>
                    headerslot={""}
                    noborder={false}
                    title={t("Roles.AddRoles")}
                >
                    <Table
                        array={roleData}
                        search={"role_name"}
                        keysToDisplay={["role_id", "role_name", "role_description", "created_at", "updated_at",]}
                        label={[
                            "#",
                            t("Roles.table.RoleName"),
                            t("Roles.table.Description"),
                            t("Roles.table.CreatedAt"),
                            t("Roles.table.Updated"),
                            t("Roles.table.Actions"),
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

export default Roles;
