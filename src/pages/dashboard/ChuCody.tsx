
"use client";

import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Tree from 'react-d3-tree';
import Table from '../../components/MainTable/Table'
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import Icon from "../../components/ui/Icon";


export interface Agent {
    index: number;
    name: string;
    position: string;
    department: string;
    subdivision: string;
    directorateSUS: string;
    departmentHead: string;
}

const config = {
    nodeSize: {
        x: 200,
        y: 100,
    },
    nodeSvgShape: {
        shape: 'rect',
        shapeProps: {
            width: 150,
            height: 50,
            x: -75,
            y: -25,
        },
    },
};
interface TreeNode {
    name: string;
    children?: TreeNode[];
}

const treeData: TreeNode = {
    name: 'Directorate SUS',
    children: [
        {
            name: 'Department: Security',
            children: [
                {
                    name: 'Position: Agent',
                    children: [
                        {
                            name: 'Subdivision: Field Operations',
                        },
                    ],
                },
                {
                    name: 'Department Head: Jane Smith',
                },
            ],
        },
        {
            name: 'Department: Intelligence',
            children: [
                {
                    name: 'Position: Senior Agent',
                    children: [
                        {
                            name: 'Subdivision: Counterintelligence',
                        },
                    ],
                },
                {
                    name: 'Department Head: Bob Anderson',
                },
            ],
        },
    ],
};
const agentsData: Agent[] = [
    {
        index: 1,
        name: "John Doe",
        position: "Software Engineer",
        department: "IT",
        subdivision: "Development",
        directorateSUS: "Technology Services",
        departmentHead: "Jane Smith / Department Chief"
    },
    {
        index: 2,
        name: "Alice Johnson",
        position: "Product Manager",
        department: "Product",
        subdivision: "Product Development",
        directorateSUS: "Innovation and Strategy",
        departmentHead: "Bob Brown / Department Chief"
    },
    {
        index: 3,
        name: "Sophia Moore",
        position: "Operations Manager",
        department: "Operations",
        subdivision: "Logistics",
        directorateSUS: "Operational Services",
        departmentHead: "Isabella Thompson / Department Chief"
    },
    {
        index: 4,
        name: "Alexander Thomas",
        position: "Financial Analyst",
        department: "Finance",
        subdivision: "Financial Planning",
        directorateSUS: "Financial Services",
        departmentHead: "Mason White / Department Chief"
    },
    {
        index: 5,
        name: "Charlotte Martinez",
        position: "Legal Advisor",
        department: "Legal",
        subdivision: "Corporate Law",
        directorateSUS: "Legal Services",
        departmentHead: "Ethan Garcia / Department Chief"
    }
];

interface Announcement {
    id: number;
    title: string;
    issueDate: string;
    endDate: string;
    issuerName: string;
}

const announcementsData: Announcement[] = [
    {
        id: 1,
        title: "Important Announcement",
        issueDate: "2024-06-10",
        endDate: "2024-06-20",
        issuerName: "John Doe"
    },
    {
        id: 2,
        title: "Upcoming Event",
        issueDate: "2024-06-15",
        endDate: "2024-06-25",
        issuerName: "Jane Smith"
    },
    // Add more announcement objects as needed
];
const departments = ["IT", "Product", "Finance"];
const Profile = () => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        toggleModal();
    };
    return (
        <div>
            {modal &&
                <Modal toggleModal={toggleModal}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Create New Announcement</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                                    Title
                                </label>
                                <input
                                    type="text"
                                    id="title"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                                    // value={title}
                                    // onChange={(e) => setTitle(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                                    // value={message}
                                    // onChange={(e) => setMessage(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                                    Select Department
                                </label>
                                <select
                                    id="department"
                                    className="mt-1 p-2 block w-full border-gray-300 rounded-md shadow-md focus:ring-indigo-500 focus:border-indigo-500"
                                    // value={selectedDepartment}
                                    // onChange={(e) => setSelectedDepartment(e.target.value)}
                                    required
                                >
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                        <option key={dept} value={dept}>
                                            {dept}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="flex justify-end">
                                <button
                                    type="button"
                                    className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                    // onClick={toggleModal}
                                    onClick={toggleModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={toggleModal}
                                    type="submit"
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            }
            <HomeBredCurbs title="CHU Cocody" />
            <div className="space-y-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-8 col-span-12 space-y-5">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title="Agents"
                        >
                            <Table
                                // routes={["/admin/providers"]}
                                array={agentsData}
                                search={"name"}
                                keysToDisplay={["index", "name", "position", "department",]}
                                label={[
                                    "#",
                                    "Name",
                                    "Position",
                                    "Department",
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
                                                // onClick={() => navigate(`${"/admin/providers/"}${record.id}`)}
                                                className="text-[#ccccc] text-[1.3rem]" />
                                        );
                                    },
                                ]}
                            />
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={<button onClick={toggleModal} style={{ cursor: "pointer" }} className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add New Announcement</button>}
                            noborder={false}
                            title="Anouncements "
                        >
                            <Table
                                // routes={["/admin/providers"]}
                                array={announcementsData}
                                search={"title"}
                                keysToDisplay={["id", "title", "issueDate", "endDate"]}
                                label={[
                                    "#",
                                    "Title",
                                    "Date of issue",
                                    "End Date",
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
                                                // onClick={() => navigate(`${"/admin/providers/"}${record.id}`)}
                                                className="text-[#ccccc] text-[1.3rem]" />
                                        );
                                    },
                                ]}
                            />
                        </Card>
                        <Card
                            bodyClass="p-4"
                            subtitle=""
                            noborder={false}
                            title="Organization Chart"
                            headerslot={""}
                        >
                            <div style={{ width: '80%', height: '16rem', alignSelf: "center", justifyContent: "center", position: 'relative', top: 0, marginLeft: "4rem" }}>
                                <Tree data={treeData} separation={{ siblings: 1, nonSiblings: 2 }} {...config} />
                            </div>
                        </Card>
                    </div>
                    <div className="lg:col-span-4 col-span-12 space-y-5 h-[22rem]">
                        <div className="lg:col-span-4 col-span-12 space-y-5  max-h-[22rem]">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                noborder={false}
                                title="Related Content"
                                headerslot={""}
                            >


                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mt-[1rem]">Agents</span>
                                    </div>

                                    <div className="flex items-center">
                                        <Icon icon="heroicons:check-circle" className="w-6 h-6 text-gray-500 mr-2" />
                                        <span className="text-sm text-gray-500">50+</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-lg font-bold mt-[1rem]">Announcements</span>
                                    </div>

                                    <div className="flex items-center">
                                        <Icon icon="heroicons:check-circle" className="w-6 h-6 text-gray-500 mr-2" />
                                        <span className="text-sm text-gray-500">2</span>
                                    </div>
                                </div>

                            </Card>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;
