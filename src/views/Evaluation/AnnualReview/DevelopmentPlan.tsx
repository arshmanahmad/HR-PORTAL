import React, { useState } from 'react';
import 'antd/dist/reset.css';
import HomeBredCurbs from '../../../components/ui/HomeBredCrubs';
import Card from '../../../components/ui/Card';
import Table from '../../../components/MainTable/Table';

import Modal from '../../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';


const DevelopmentPlan: React.FC = () => {
    const navigate = useNavigate()
    const [modal, setModal] = useState<boolean>(false)
    const toggleModal = () => {
        setModal(!modal);
    }
    interface Objective {
        title: string;
        description: string;
        startDate: string;
        endDate: string;
        status: string;
        employeeComment: string;
        managerResponse: string;
    }

    const tableData: Objective[] = [
        {
            title: "Increase Sales Revenue",
            description: "Focus on increasing sales revenue by 20% in the next quarter.",
            startDate: "2024-01-01",
            endDate: "2024-03-31",
            status: "Agreed",
            employeeComment: "I believe this is achievable...",
            managerResponse: "Agreed, let's ensure we have....",
        },
        {
            title: "Improve Customer Satisfaction",
            description: "Enhance customer service and support to achieve a satisfaction rate of 95%.",
            startDate: "2024-02-01",
            endDate: "2024-06-30",
            status: "Disagreed",
            employeeComment: "I think we need more staff....",
            managerResponse: "I disagree with the....",
        },
        {
            title: "Reduce Operational Costs",
            description: "Implement cost-saving measures to reduce operational costs by 15%.",
            startDate: "2024-03-01",
            endDate: "2024-08-31",
            status: "Agreed",
            employeeComment: "We can review our....",
            managerResponse: "Good idea, let's....",
        },
        {
            title: "Enhance Employee Training",
            description: "Develop and implement a comprehensive training program for employees.",
            startDate: "2024-04-01",
            endDate: "2024-12-31",
            status: "Disagreed",
            employeeComment: "A detailed training....",
            managerResponse: "Currently, we don't....",
        },
        {
            title: "Expand Market Reach",
            description: "Launch marketing campaigns to expand market reach by entering new regions.",
            startDate: "2024-05-01",
            endDate: "2024-11-30",
            status: "Agreed",
            employeeComment: "Targeting new regions....",
            managerResponse: "Yes, make sure to allocate....",
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
                                onClick={() => navigate("/dashboard/evaluation/annualReviews/allPlans")}
                                className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 mt-2 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                View All
                            </button>
                        </div>
                    </form>
                </Modal>
            )}

            <HomeBredCurbs title="Development Plan" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle=""
                    headerslot=""
                    noborder={false}
                    title="Objectives Detail"
                >
                    <Table
                        array={tableData}
                        search={"title"}
                        keysToDisplay={["title", "startDate", "endDate", "employeeComment", "managerResponse",]}
                        label={[
                            "Objective Title",
                            "Start Date",
                            "End Date",
                            "Employee Response",
                            "Manager Response",
                            "Development Plan",
                        ]}
                        extraColumns={[
                            () => (
                                <>
                                    <button
                                        onClick={toggleModal}
                                        style={{ cursor: "pointer" }}
                                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add Plan</button>

                                </>
                            ),
                        ]}
                    />
                </Card>

                {/* Manager's Scoring and Comment Card */}

            </div>

        </div>
    );
};

export default DevelopmentPlan;