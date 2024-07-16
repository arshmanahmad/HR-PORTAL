"use client";
import React, { useState } from "react";
import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import Modal from "../../components/Modal/Modal";
import ReactStars from 'react-stars';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

interface Evaluation {
    id: string;
    colleagueName: string;
    performance: number;
    communication: number;
    punctuality: number;
    comments: string;
    timestamp: string;
}

interface Colleague {
    id: string;
    name: string;
}

const colleagues: Colleague[] = [
    { id: '1', name: 'Alice Johnson' },
    { id: '2', name: 'Bob Smith' },
    { id: '3', name: 'Ella Davis' },
    { id: '4', name: 'Grace Taylor' },
    { id: '5', name: 'Henry Brown' }
];

const evaluationData: Evaluation[] = [
    {
        id: '1',
        colleagueName: 'Alice Johnson',
        performance: 8,
        communication: 9,
        punctuality: 10,
        comments: 'Alice has consistently shown excellent performance and communication skills.',
        timestamp: 'Jun 14, 2024 at 08:00 AM'
    },
    {
        id: '2',
        colleagueName: 'Bob Smith',
        performance: 7,
        communication: 8,
        punctuality: 9,
        comments: 'Bob is very reliable and communicates well with the team.',
        timestamp: 'Jun 13, 2024 at 02:30 PM'
    },
    {
        id: '3',
        colleagueName: 'Ella Davis',
        performance: 9,
        communication: 9,
        punctuality: 10,
        comments: 'Ella is outstanding in her role and always on time.',
        timestamp: 'Jun 12, 2024 at 10:15 AM'
    },
    {
        id: '4',
        colleagueName: 'Grace Taylor',
        performance: 6,
        communication: 7,
        punctuality: 8,
        comments: 'Grace needs to improve her punctuality but performs well overall.',
        timestamp: 'Jun 11, 2024 at 09:45 AM'
    },
    {
        id: '5',
        colleagueName: 'Henry Brown',
        performance: 8,
        communication: 8,
        punctuality: 9,
        comments: 'Henry is a great team player and always punctual.',
        timestamp: 'Jun 10, 2024 at 12:00 PM'
    }
];

const Evaluation: React.FC = () => {
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [selectedColleague, setSelectedColleague] = useState<string>('');
    const [performance, setPerformance] = useState<number>(0);
    const [communication, setCommunication] = useState<number>(0);
    const [rating, setRating] = useState<number>(0);
    const [punctuality, setPunctuality] = useState<number>(0);
    const [comments, setComments] = useState<string>('');

    const handleColleagueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColleague(event.target.value);
    };
    const handleRating = (newRating: number) => {
        setRating(newRating);
    };

    const handlePerformanceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPerformance(Number(event.target.value));
    };

    const handleCommunicationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommunication(Number(event.target.value));
    };

    const handlePunctualityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPunctuality(Number(event.target.value));
    };

    const handleCommentsChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComments(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Submit the evaluation data
        toggleModal()
        console.log({
            selectedColleague,
            performance,
            communication,
            punctuality,
            rating,
            comments
        });
    };


    return (
        <div>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="p-4 flex flex-col items-center">
                        <div className="mb-2 flex items-center justify-center gap-[0.5rem]">
                            <h4 className="text-2xl font-bold">Bravo!</h4>
                            <FontAwesomeIcon icon={faCheckCircle} className="text-green-500" size="lg" />
                        </div>
                        <div className="mb-4 mt-4">
                            <h4 className="text-lg ">Evaluation is completed successfully.</h4>
                        </div>
                        <div className="flex justify-end w-full">
                            <button
                                type="button"
                                className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400"
                                onClick={toggleModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
            <div>
                <div className="space-y-5 profile-page">
                    <HomeBredCurbs title="Evaluation" />

                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-8 col-span-12 space-y-5">

                            <div className="lg:col-span-5 col-span-12">
                                <Card
                                    bodyClass="p-4"
                                    subtitle=""
                                    headerslot=""
                                    noborder={false}
                                    title="Select Colleague"
                                >
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700">Select Colleague:</label>
                                        <select
                                            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border  shadow-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                            value={selectedColleague}
                                            onChange={handleColleagueChange}
                                        >
                                            <option value="">Select...</option>
                                            {colleagues.map(colleague => (
                                                <option key={colleague.id} value={colleague.id}>
                                                    {colleague.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </Card>
                            </div>

                            <div className="lg:col-span-8 col-span-12 space-y-5">
                                <Card
                                    bodyClass="p-4"
                                    subtitle=""
                                    headerslot=""
                                    noborder={false}
                                    title="Complete the Evaluation"
                                >
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Performance (1-10):</label>
                                            <input
                                                type="number"
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                value={performance}
                                                onChange={handlePerformanceChange}
                                                min="1"
                                                max="10"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Communication (1-10):</label>
                                            <input
                                                type="number"
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                value={communication}
                                                onChange={handleCommunicationChange}
                                                min="1"
                                                max="10"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Punctuality (1-10):</label>
                                            <input
                                                type="number"
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                value={punctuality}
                                                onChange={handlePunctualityChange}
                                                min="1"
                                                max="10"
                                            />
                                        </div>

                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Rate here:</label>
                                            <ReactStars
                                                count={5}
                                                value={rating}
                                                size={24}
                                                color2="#ffd700"
                                                onChange={handleRating}
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-sm font-medium text-gray-700">Comments:</label>
                                            <textarea
                                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base shadow-sm border   focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                                                value={comments}
                                                onChange={handleCommentsChange}
                                            />
                                        </div>

                                        <button
                                            type="submit"
                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-md"
                                        >
                                            Submit Evaluation
                                        </button>
                                    </form>
                                </Card>
                            </div>
                        </div>
                        <div className="lg:col-span-4 col-span-12">
                            <Card
                                bodyClass="p-4"
                                subtitle=""
                                headerslot=""
                                noborder={false}
                                title="Evaluation Status"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-lg font-semibold text-gray-700">Status</p>
                                        {/* <p className="text-2xl font-bold text-blue-500">Intital</p> */}
                                    </div>
                                    <div>
                                        <p className="text-lg font-semibold  text-blue-500">Initial</p>
                                        {/* <p className="text-xl font-semibold text-blue-500">25.67%</p> */}
                                    </div>
                                </div>
                            </Card>
                        </div>
                        {/* <div className="lg:col-span-2 col-span-12">

                            <div>

                                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Clcik to Confirm
                                </button>
                            </div>

                        </div> */}


                        <div className="lg:col-span-12 col-span-12">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title="Reviews of Evaluation"
                            >
                                <Table
                                    array={evaluationData}
                                    search={"colleagueName"}
                                    keysToDisplay={["id", "colleagueName", "punctuality", "comments"]}
                                    label={[
                                        "#",
                                        "Colleague Name",
                                        "Punctuality",
                                        "Comments",
                                        "Actions"
                                    ]}
                                    extraColumns={[
                                        () => {
                                            return (
                                                <div className="flex items-center gap-[0.3rem]">
                                                    <MdEdit
                                                        className="cursor-pointer text-blue-500"
                                                    />
                                                </div>
                                            );
                                        },
                                    ]}
                                />
                            </Card>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Evaluation;
