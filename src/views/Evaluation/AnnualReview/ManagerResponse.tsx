import React, { useState } from 'react';
import 'antd/dist/reset.css';
import HomeBredCurbs from '../../../components/ui/HomeBredCrubs';
import Card from '../../../components/ui/Card';
import Table from '../../../components/MainTable/Table';

import { Button, Input } from 'antd';
import Modal from '../../../components/Modal/Modal';
import { useNavigate } from 'react-router-dom';


const ManagerResponse: React.FC = () => {
    const navigate = useNavigate()
    const [score, setScore] = useState<number | undefined>();
    const [comment, setComment] = useState<string>('');
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
    }

    const tableData: Objective[] = [
        {
            title: "Increase Sales Revenue",
            description: "Focus on increasing sales revenue by 20% in the next quarter.",
            startDate: "2024-01-01",
            endDate: "2024-03-31",
            status: "Agreed",
        },
        {
            title: "Improve Customer Satisfaction",
            description: "Enhance customer service and support to achieve a satisfaction rate of 95%.",
            startDate: "2024-02-01",
            endDate: "2024-06-30",
            status: "Disagreed",
        },
        {
            title: "Reduce Operational Costs",
            description: "Implement cost-saving measures to reduce operational costs by 15%.",
            startDate: "2024-03-01",
            endDate: "2024-08-31",
            status: "Agreed",
        },
        {
            title: "Enhance Employee Training",
            description: "Develop and implement a comprehensive training program for employees.",
            startDate: "2024-04-01",
            endDate: "2024-12-31",
            status: "Disagreed",
        },
        {
            title: "Expand Market Reach",
            description: "Launch marketing campaigns to expand market reach by entering new regions.",
            startDate: "2024-05-01",
            endDate: "2024-11-30",
            status: "Agreed",
        },
    ];

    const handleScoreChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newScore = parseInt(e.target.value, 10);
        setScore(newScore);
    };

    const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newComment = e.target.value;
        setComment(newComment);
    };



    return (
        <div className="p-5 space-y-10 text-[1.1rem]">
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <label htmlFor="" className='font-bold'>Add Score & Comment</label>
                    <div className="flex space-x-2 items-center">
                        <Input
                            type="number"
                            placeholder="Score"
                            value={score !== undefined ? score.toString() : ''}
                            onChange={handleScoreChange}
                            className="border border-gray-300 rounded-md p-2 w-20 mt-4"
                        />
                        <Input
                            type="text"
                            placeholder="Comment"
                            value={comment}
                            onChange={handleCommentChange}
                            className="border border-gray-300 rounded-md p-2 flex-1 mt-4"
                        />
                        <Button className="h-[2.4rem] mt-4" type="primary" onClick={toggleModal}>Submit</Button>
                    </div>
                </Modal>
            )}
            <HomeBredCurbs title="Manager's Response" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle=""
                    headerslot=""
                    noborder={false}
                    title="Objectives"
                >
                    <Table

                        array={tableData}
                        search={"title"}
                        keysToDisplay={["title", "description", "startDate", "endDate", "status"]}
                        label={[
                            "Objective Title",
                            "Objective Description",
                            "Start Date",
                            "End Date",
                            "Status",
                            "Actions",
                        ]}
                        extraColumns={[
                            () => (
                                <button
                                    onClick={toggleModal}
                                    style={{ cursor: "pointer" }}
                                    className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Evaluate Employee</button>
                            ),
                        ]}
                    />
                </Card>

                {/* Manager's Scoring and Comment Card */}

            </div>
            <button
                onClick={() => navigate("/dashboard/evaluation/annualReviews/developmentPlan")}
                style={{ cursor: "pointer" }}
                className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Next</button>
        </div>
    );
};

export default ManagerResponse;