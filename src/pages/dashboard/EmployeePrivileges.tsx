import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
interface EmployeePrivilege {
    employee_privilege_id: number; // Primary Key
    employee_id: number; // Foreign Key linking to Employees
    privilege_id: number; // Foreign Key linking to Privileges
    assigned_at: string; // Date and time when the privilege was assigned (e.g., "23 May, 2024")
    created_at: string; // Date and time when the record was created (e.g., "23 May, 2024")
    updated_at: string; // Date and time when the record was last updated (e.g., "23 May, 2024")
}
const employeePrivilegeData: EmployeePrivilege[] = [
    {
        employee_privilege_id: 1,
        employee_id: 1, // Example employee_id
        privilege_id: 1, // Example privilege_id
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 2,
        employee_id: 2, // Example employee_id
        privilege_id: 2, // Example privilege_id
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 3,
        employee_id: 3, // Example employee_id
        privilege_id: 3, // Example privilege_id
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 4,
        employee_id: 4,
        privilege_id: 4,
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 5,
        employee_id: 5,
        privilege_id: 5,
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 6,
        employee_id: 6,
        privilege_id: 6,
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 7,
        employee_id: 7,
        privilege_id: 7,
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 8,
        employee_id: 8,
        privilege_id: 8,
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_privilege_id: 9,
        employee_id: 9,
        privilege_id: 9,
        assigned_at: "23 May, 2024",
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    }
    // Add more employee privilege records as needed
];


const EmployeePrivileges: React.FC = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    const [formData, setFormData] = useState<EmployeePrivilege>({
        employee_privilege_id: 0,
        employee_id: 0,
        privilege_id: 0,
        assigned_at: '', // Initialize with current date/time if needed
        created_at: '', // Initialize with current date/time if needed
        updated_at: '', // Initialize with current date/time if needed
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here, e.g., sending data to server
        console.log(formData);
        // Reset form or perform other actions after submission
    };

    // Dummy data for employee and privilege options (replace with actual data)
    const employees = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' },
        { id: 3, name: 'Michael Johnson' },
    ];

    const privileges = [
        { id: 1, name: 'Admin' },
        { id: 2, name: 'User' },
        { id: 3, name: 'Manager' },
    ];


    return (
        <div>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div>
                        <h2 className="text-xl font-bold mb-4">Assign Privilege</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700">Employee</label>
                                <select
                                    name="employee_id"
                                    value={formData.employee_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                >
                                    <option value="">Select Employee</option>
                                    {employees.map(employee => (
                                        <option key={employee.id} value={employee.id}>
                                            {employee.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Privilege</label>
                                <select
                                    name="privilege_id"
                                    value={formData.privilege_id}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                >
                                    <option value="">Select Privilege</option>
                                    {privileges.map(privilege => (
                                        <option key={privilege.id} value={privilege.id}>
                                            {privilege.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Assigned At</label>
                                <input
                                    type="text" // Consider using a date picker for better UX
                                    name="assigned_at"
                                    value={formData.assigned_at}
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
                                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
                                >
                                    Assign Privilege
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}

            <HomeBredCurbs title="Employee Privileges" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add Employee Privilege</button>}
                    noborder={false}
                    title="Employee Privilege Details"
                >
                    <Table
                        array={employeePrivilegeData}
                        search={""}
                        keysToDisplay={["employee_privilege_id", "employee_id", "privilege_id", "created_at", "updated_at",]}
                        label={[
                            "#",
                            "Employee Id",
                            "Privilege Id",
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

export default EmployeePrivileges;
