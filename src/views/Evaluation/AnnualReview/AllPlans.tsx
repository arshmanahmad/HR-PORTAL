import React, { useState } from 'react';
import 'antd/dist/reset.css';
import HomeBredCurbs from '../../../components/ui/HomeBredCrubs';
import Card from '../../../components/ui/Card';
import Table from '../../../components/MainTable/Table';

import Modal from '../../../components/Modal/Modal';


const AllPlans: React.FC = () => {

    const [modal, setModal] = useState<boolean>(false)
    const toggleModal = () => {
        setModal(!modal);
    }
    interface Objective {
        skill: string;
        action: string;
        timeline: string;
        startDate: string;
        endDate: string;
        resources: string;
        successCriteria: string;
    }

    const tableData: Objective[] = [
        {
            skill: "Communication Skills",
            action: "Attend a communication",
            timeline: "Q1 2024",
            startDate: "2024-01-15",
            endDate: "2024-01-20",
            resources: "Workshop registration,travel",
            successCriteria: "Completion of the workshop.",
        },
        {
            skill: "Project Management",
            action: "Complete a project",
            timeline: "Q2 2024",
            startDate: "2024-04-01",
            endDate: "2024-06-30",
            resources: "Online course fees,study materials",
            successCriteria: "Certification received and get success.",
        },
        {
            skill: "Data Analysis",
            action: "Learn data analysis",
            timeline: "Q3 2024",
            startDate: "2024-07-01",
            endDate: "2024-09-30",
            resources: "Course fees, software licenses",
            successCriteria: "Proficiency in data analysis tools.",
        },
        {
            skill: "Leadership",
            action: "Participate in leadership",
            timeline: "Q4 2024",
            startDate: "2024-10-01",
            endDate: "2024-12-31",
            resources: "Program fees, mentoring sessions",
            successCriteria: "Demonstrated leadership in team projects.",
        },
        {
            skill: "Technical Writing",
            action: "Take technical writing",
            timeline: "Q1 2025",
            startDate: "2025-01-10",
            endDate: "2025-03-31",
            resources: "Course fees, writing tools",
            successCriteria: "High-quality technical.",
        },
    ];
    return (
        <div className="p-5 space-y-10 text-[1.1rem]">
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <form className="">
                        <div><label htmlFor="" className='text-[1.5rem] font-semibold mb-12'>Add Development Plan</label></div>
                        <div className='mt-4 flex flex-col gap-[1rem]'>
                            <label className="block text-sm font-medium text-gray-700 mt-12'">
                                Skill to develop:
                                <input
                                    type="text"
                                    name="skill"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Action:
                                <input
                                    type="text"
                                    name="action"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Timeline:
                                <input
                                    type="text"
                                    name="timeline"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    Start date:
                                    <input
                                        type="date"
                                        name="startDate"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </label>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">
                                    End date:
                                    <input
                                        type="date"
                                        name="endDate"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </label>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Support and Resources needed:
                                <textarea
                                    name="resources"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Success criteria:
                                <textarea
                                    name="successCriteria"
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                />
                            </label>
                        </div>
                        <div>
                            <button
                                type="submit"
                                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Submit
                            </button>
                        </div>
                        <div>
                            <button
                                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 mt-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                View All
                            </button>
                        </div>
                    </form>
                </Modal>
            )}

            <HomeBredCurbs title="Development Plans" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle=""
                    headerslot=""
                    noborder={false}
                    title="All Plans"
                >
                    <Table
                        array={tableData}
                        search={"skill"}
                        keysToDisplay={["skill", "action", "startDate", "endDate", "resources", "successCriteria"]}
                        label={[
                            "Skills to develop",
                            "Actions",
                            "Start Date",
                            "End Date",
                            "Support & Resources",
                            "Success Criteria",
                        ]}

                    />
                </Card>

                {/* Manager's Scoring and Comment Card */}

            </div>

        </div>
    );
};

export default AllPlans;