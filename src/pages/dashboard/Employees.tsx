import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
interface Employee {
    employee_id: number;
    first_name: string;
    last_name: string;
    email: string;
    phone_number: string;
    date_of_birth: string; // Should be formatted as YYYY-MM-DD for database storage
    hire_date: string; // Should be formatted as YYYY-MM-DD for database storage
    department_id: number;
    service_id: number;
    unit_id: number;
    job_id: number;
    function_id: number;
    grade_id: number;
    role_id: number;
    created_at: string; // Should be formatted as "DD MMM, YYYY" (e.g., "23 May, 2024")
    updated_at: string; // Should be formatted as "DD MMM, YYYY" (e.g., "23 May, 2024")
}

const employeeData: Employee[] = [
    {
        employee_id: 1,
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone_number: "+1234567890",
        date_of_birth: "1990-05-15",
        hire_date: "2020-07-01",
        department_id: 1, // Example department_id
        service_id: 1, // Example service_id
        unit_id: 1, // Example unit_id
        job_id: 1, // Example job_id
        function_id: 1, // Example function_id
        grade_id: 1, // Example grade_id
        role_id: 1, // Example role_id
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_id: 2,
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone_number: "+1987654321",
        date_of_birth: "1995-10-20",
        hire_date: "2021-03-15",
        department_id: 2, // Example department_id
        service_id: 2, // Example service_id
        unit_id: 2, // Example unit_id
        job_id: 2, // Example job_id
        function_id: 2, // Example function_id
        grade_id: 2, // Example grade_id
        role_id: 2, // Example role_id
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_id: 3,
        first_name: "Michael",
        last_name: "Johnson",
        email: "michael.johnson@example.com",
        phone_number: "+1122334455",
        date_of_birth: "1988-12-10",
        hire_date: "2018-02-28",
        department_id: 3, // Example department_id
        service_id: 3, // Example service_id
        unit_id: 3, // Example unit_id
        job_id: 3, // Example job_id
        function_id: 3, // Example function_id
        grade_id: 3, // Example grade_id
        role_id: 3, // Example role_id
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_id: 4,
        first_name: "Emily",
        last_name: "Brown",
        email: "emily.brown@example.com",
        phone_number: "+1555666777",
        date_of_birth: "1993-06-25",
        hire_date: "2019-09-15",
        department_id: 4, // Example department_id
        service_id: 4, // Example service_id
        unit_id: 4, // Example unit_id
        job_id: 4, // Example job_id
        function_id: 4, // Example function_id
        grade_id: 4, // Example grade_id
        role_id: 4, // Example role_id
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
    {
        employee_id: 5,
        first_name: "David",
        last_name: "Wilson",
        email: "david.wilson@example.com",
        phone_number: "+1444333222",
        date_of_birth: "1991-08-18",
        hire_date: "2020-11-10",
        department_id: 5, // Example department_id
        service_id: 5, // Example service_id
        unit_id: 5, // Example unit_id
        job_id: 5, // Example job_id
        function_id: 5, // Example function_id
        grade_id: 5, // Example grade_id
        role_id: 5, // Example role_id
        created_at: "23 May, 2024",
        updated_at: "23 May, 2024"
    },
];


const Employees: React.FC = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [formData, setFormData] = useState<Employee>({
        employee_id: 0,
        first_name: '',
        last_name: '',
        email: '',
        phone_number: '',
        date_of_birth: '',
        hire_date: '',
        department_id: 0,
        service_id: 0,
        unit_id: 0,
        job_id: 0,
        function_id: 0,
        grade_id: 0,
        role_id: 0,
        created_at: new Date().toLocaleDateString('en-GB'), // Initial value formatted as "DD/MM/YYYY"
        updated_at: new Date().toLocaleDateString('en-GB'), // Initial value formatted as "DD/MM/YYYY"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                        <h2 className="text-xl font-bold mb-4">Add Employee Details</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label className="block text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        name="first_name"
                                        value={formData.first_name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        name="last_name"
                                        value={formData.last_name}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone_number"
                                        value={formData.phone_number}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 border rounded-md"
                                        required
                                    />
                                </div>

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
            <HomeBredCurbs title="Employees" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    // headerslot={<button
                    //     onClick={toggleModal}
                    //     style={{ cursor: "pointer" }}
                    //     className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add Employee</button>}
                    headerslot={""}
                    noborder={false}
                    title="Employee Details"
                >
                    <Table
                        array={employeeData}
                        search={"first_name"}
                        keysToDisplay={["employee_id", "first_name", "phone_number", "department_id", "service_id", "unit_id", "job_id", "function_id", "grade_id",]}
                        label={[
                            "#",
                            "Employee Name",
                            "Phone Number",
                            "Department Id",
                            "Service Id",
                            "Unit Id",
                            "Job Id",
                            "Function Id",
                            "Grade Id",
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

export default Employees;
