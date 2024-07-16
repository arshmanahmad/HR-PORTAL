"use client";

import React, { useState } from "react";
import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import Modal from "../../components/Modal/Modal";







interface Feedback {
    id: string;
    reviewerName: string;
    comment: string;
    timestamp: string;
}
interface Colleague {
    id: string;
    name: string;
}

interface StaffSchedule {
    id: string;
    name: string;
}

const feedbackData: Feedback[] = [
    {
        id: '1',
        reviewerName: 'John Doe',
        comment: 'Great service and very professional!',
        timestamp: 'Jun 14, 2024 at 08:00 AM'
    },
    {
        id: '2',
        reviewerName: 'Jane Smith',
        comment: 'Friendly staff and quick service.',
        timestamp: 'Jun 13, 2024 at 02:30 PM'
    },
    {
        id: '3',
        reviewerName: 'Michael Johnson',
        comment: 'Highly recommend this provider!',
        timestamp: 'Jun 12, 2024 at 10:15 AM'
    },
    {
        id: '4',
        reviewerName: 'Emily Davis',
        comment: 'Good experience but waiting time was long.',
        timestamp: 'Jun 11, 2024 at 09:45 AM'
    },
    {
        id: '5',
        reviewerName: 'Chris Lee',
        comment: 'Excellent care and attention to detail.',
        timestamp: 'Jun 10, 2024 at 12:00 PM'
    },
    {
        id: '6',
        reviewerName: 'Samuel Green',
        comment: 'The doctor was very attentive and kind.',
        timestamp: 'Jun 09, 2024 at 11:30 AM'
    },
    {
        id: '7',
        reviewerName: 'Lisa Brown',
        comment: 'Quick diagnosis and effective treatment.',
        timestamp: 'Jun 08, 2024 at 03:45 PM'
    },
    {
        id: '8',
        reviewerName: 'Paul White',
        comment: 'Clean facility and friendly staff.',
        timestamp: 'Jun 07, 2024 at 09:00 AM'
    },
    {
        id: '9',
        reviewerName: 'Nancy Black',
        comment: 'Highly satisfied with the care provided.',
        timestamp: 'Jun 06, 2024 at 02:00 PM'
    },
    {
        id: '10',
        reviewerName: 'Kevin Blue',
        comment: 'Would definitely recommend to others.',
        timestamp: 'Jun 05, 2024 at 10:30 AM'
    },
    {
        id: '11',
        reviewerName: 'Megan Gray',
        comment: 'The waiting time was a bit long, but worth it.',
        timestamp: 'Jun 04, 2024 at 01:15 PM'
    },
    {
        id: '12',
        reviewerName: 'Jason Orange',
        comment: 'Efficient and professional service.',
        timestamp: 'Jun 03, 2024 at 11:00 AM'
    },
    {
        id: '13',
        reviewerName: 'Sophia Purple',
        comment: 'Staff was very helpful and courteous.',
        timestamp: 'Jun 02, 2024 at 04:30 PM'
    },
    {
        id: '14',
        reviewerName: 'Tom Red',
        comment: 'The doctor explained everything clearly.',
        timestamp: 'Jun 01, 2024 at 10:00 AM'
    },
    {
        id: '15',
        reviewerName: 'Anna Pink',
        comment: 'Great experience overall.',
        timestamp: 'May 31, 2024 at 12:00 PM'
    }
];

const StaffDetail: React.FC = () => {
    const [showFeedback, setShowFeedback] = useState(false);
    const [feedback, setFeedback] = useState('');
    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };
    const [error, setError] = useState("")
    const [selectedColleague, setSelectedColleague] = useState<string>('');
    const [selectedStaffSchedule, setSelectedStaffSchedule] = useState<string>('');

    // Dummy data (replace with actual data or fetch from API)
    const colleagues: Colleague[] = [
        { id: '1', name: 'Alice Johnson' },
        { id: '2', name: 'Bob Smith' },
        { id: '3', name: 'Ella Davis' },
        { id: '4', name: 'Grace Taylor' },
        { id: '5', name: 'Henry Brown' }
    ];

    const staffSchedules: StaffSchedule[] = [
        { id: '1', name: 'John Doe' },
        { id: '2', name: 'Jane Smith' },
        { id: '3', name: 'Michael Johnson' },
        { id: '4', name: 'Emily Davis' },
        { id: '5', name: 'Chris Lee' }

    ];
    const handleClick = () => {
        if (selectedColleague && selectedStaffSchedule !== "") {
            toggleModal();
            setError("");
        }
        else {
            setError("Please select the required options")
        }
    }
    const handleColleagueChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedColleague(event.target.value);
    };

    const handleStaffScheduleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedStaffSchedule(event.target.value);
        setShowFeedback(false);
    };
    // const handleAddFeedbackClick = () => {
    //     setShowFeedback(true);
    // };

    return (
        <div>
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="p-4 ">
                        <h2 className="text-xl font-bold mb-4">Confirm here</h2>
                        <div>
                            {selectedColleague && selectedStaffSchedule && (
                                <p className="mb-[1rem]">
                                    Do you really want to send the review request to {colleagues.find(c => c.id === selectedColleague)?.name} by the {' '}
                                    {staffSchedules.find(s => s.id === selectedStaffSchedule)?.name}.
                                </p>
                            )}
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
                                type="button"
                                className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                onClick={toggleModal}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </Modal>
            )}
            <div>
                <div className="space-y-5 profile-page">
                    <HomeBredCurbs title="Provide Feedback" />

                    <div className="grid grid-cols-12 gap-6">
                        <div className="lg:col-span-7 col-span-12 space-y-5">
                            <Card
                                bodyClass="p-4"
                                subtitle=""
                                headerslot=""
                                noborder={false}
                                title="Select the person"
                            >
                                <div className="flex items-center justify-between">
                                    <div>
                                        <label className="mr-2">Select the person to be reviewed:</label>
                                        <select
                                            className="border shadow-md ml-[0.5rem]"
                                            value={selectedStaffSchedule}
                                            onChange={handleStaffScheduleChange}
                                        >
                                            <option value="">Select...</option>
                                            {staffSchedules.map((schedule) => (
                                                <option key={schedule.id} value={schedule.id}>
                                                    {schedule.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    {/* <button
                                        className="text-red-500 ml-4"
                                        onClick={handleAddFeedbackClick}
                                    >
                                        Add patient feedback
                                    </button> */}
                                </div>
                            </Card>

                            {/* Conditionally render the feedback section */}
                            {showFeedback && (
                                <Card
                                    bodyClass="p-4"
                                    subtitle=""
                                    headerslot=""
                                    noborder={false}
                                    title="Patient Feedback"
                                >
                                    <div>
                                        <label className="block mb-2">Feedback:</label>
                                        <textarea
                                            className="border shadow-md w-full p-2"
                                            value={feedback}
                                            onChange={(e) => setFeedback(e.target.value)}
                                            placeholder="Enter patient feedback here..."
                                        />
                                    </div>
                                </Card>
                            )}
                        </div>
                        <div className="lg:col-span-5 col-span-12">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title=" Select Colleague"
                            >
                                <div>

                                    <div>
                                        <label >Select Colleague:</label>
                                        <select className="border shadow-md ml-[1rem]" value={selectedColleague} onChange={handleColleagueChange}>
                                            <option value="">Select...</option>
                                            {colleagues.map(colleague => (
                                                <option key={colleague.id} value={colleague.id}>
                                                    {colleague.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="lg:col-span-2 col-span-12">
                            <div>
                                <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Click to Confirm
                                </button>
                            </div>

                        </div>
                        <div className=" col-span-12">

                            <p className="text-red-500">{error}</p>


                        </div>

                        <div className="lg:col-span-12 col-span-12">
                            <Card
                                bodyClass="p-4"
                                subtitle={""}
                                headerslot={""}
                                noborder={false}
                                title=" Reviews"
                            >
                                <Table
                                    array={feedbackData}
                                    search={"reviewerName"}
                                    keysToDisplay={["id", "reviewerName", "comment", "timestamp"]}
                                    label={[
                                        "#",
                                        "Reviewer Name",
                                        "Comment",
                                        "Time Stamp",
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

            {/* <HomeBredCurbs title="Details" />
            <div className="space-y-5">
                <div className="grid grid-cols-12 gap-5">
                    <div className="lg:col-span-6 col-span-12 space-y-5">
                        <Card
                            bodyClass="p-4"
                            subtitle={""}
                            headerslot={""}
                            noborder={false}
                            title=" "
                        >
                            <Table
                                array={staffData}
                                search={"firstName"}
                                keysToDisplay={["id", "firstName", "department",]}
                                label={[
                                    "#",
                                    "Title",
                                    "Category",
                                    "Actions",
                                ]}
                                extraColumns={[
                                    (staff: Staff) => {
                                        return (
                                            <div className="flex items-center gap-[0.3rem]">
                                                <MdRemoveRedEye
                                                    className="cursor-pointer text-blue-500"
                                                    onClick={() => handleView(staff)}
                                                />
                                                <MdEdit
                                                    className="text-gray-500 text-[1.3rem]"
                                                />
                                            </div>
                                        );
                                    },
                                ]}
                            />
                        </Card>
                    </div>
                    <div className="lg:col-span-6 col-span-12 space-y-5 h-[22rem]">
                        <div className="lg:col-span-12 col-span-12 space-y-5  max-h-[22rem]">
                            <div style={{ paddingBottom: '2rem' }}>
                                <Card
                                    bodyClass="p-4"
                                    subtitle={""}
                                    headerslot={""}
                                    noborder={false}
                                    title="Details"
                                >
                                    <DynamicForm buttonText="Add" fields={fields} onSubmit={handleFormSubmit} />
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default StaffDetail;
