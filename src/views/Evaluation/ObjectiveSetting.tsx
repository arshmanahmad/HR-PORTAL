import React, { ChangeEvent, FormEvent, useState } from 'react';
import {
    //  Button, Input, DatePicker, Checkbox,
    Form
} from 'antd';
import 'antd/dist/reset.css';
import Modal from '../../components/Modal/Modal';
import Card from '../../components/ui/Card';
import Table from '../../components/MainTable/Table';
import { MdEdit } from 'react-icons/md';

// const { TextArea } = Input;

const ObjectiveSetting: React.FC = () => {
    interface TableData {
        ObjectiveTitle: string;
        ObjectiveDescription: string;
        StartDate: string;
        EndDate: string;
    }
    const [form] = Form.useForm();
    const [tableData, setTableData] = useState<TableData[]>([]);
    // const [agreed, setAgreed] = useState(false);
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    interface FormState {
        objectiveTitle: string;
        description: string;
        specificGoals: string;
        keyActions: string;
        resourcesRequired: string;
        startDate: string;
        endDate: string;
        successMetrics: string;
        potentialChallenges: string;
        supportNeeded: string;
        weight: string;
    }
    const [forms, setForm] = useState<FormState>({
        objectiveTitle: '',
        description: '',
        specificGoals: '',
        keyActions: '',
        resourcesRequired: '',
        startDate: '',
        endDate: '',
        successMetrics: '',
        potentialChallenges: '',
        supportNeeded: '',
        weight: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...forms,
            [e.target.name]: e.target.value,
        });
    }
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        toggleModal()
        console.log(form);
        const newData: TableData = {
            ObjectiveTitle: forms.objectiveTitle,
            ObjectiveDescription: forms.description,
            StartDate: forms.startDate,
            EndDate: forms.endDate,
        };
        form.setFieldsValue({
            objectiveTitleAgreed: 'Increase Sales Revenue',
            descriptionAgreed: 'Provide a detailed description of the objective.',
            specificGoalsAgreed: 'Achieve a 15% increase in sales revenue over the next quarter.',
            keyActionsAgreed: 'List specific actions or steps required to achieve the objective.',
            resourcesRequiredAgreed: 'Marketing budget, additional staff, training programs.',
            timelineAgreed: [], // Use an array for DatePicker RangePicker initial value
            successMetricsAgreed: 'Percentage increase in sales revenue, number of new customers acquired, return on investment (ROI).',
            potentialChallengesAgreed: 'Market competition, economic downturns, resource limitations.',
            supportNeededAgreed: 'Assistance from the marketing team, approval for budget allocation, access to data analytics tools.',
            weightAgreed: '30%', // Assuming this is a string input
            agreement: false, // Agreement checkbox, controlled by state
            comments: '', // Empt the initial value dynamically
        });
        setTableData([...tableData, newData]);
    };

    console.log(tableData);

    return (
        <div className="p-5 space-y-10">
            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="space-y-5">
                        <h2 className="text-xl font-bold">SECTION: OBJECTIVES SETTING (TO BE COMPLETED BY THE LINE MANAGER (N+1))</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label>1. Objective Title</label>
                                <input
                                    type="text"
                                    name="objectiveTitle"
                                    value={forms.objectiveTitle}
                                    onChange={handleChange}
                                    placeholder="e.g., Increase Sales Revenue"
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>2. Description</label>
                                <textarea
                                    name="description"
                                    value={forms.description}
                                    onChange={handleChange}
                                    placeholder="Provide a detailed description of the objective."
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>3. Specific Goals</label>
                                <textarea
                                    name="specificGoals"
                                    value={forms.specificGoals}
                                    onChange={handleChange}
                                    placeholder="e.g., Achieve a 15% increase in sales revenue over the next quarter."
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>4. Key actions to be carried out</label>
                                <textarea
                                    name="keyActions"
                                    value={forms.keyActions}
                                    onChange={handleChange}
                                    placeholder="List specific actions or steps required to achieve the objective."
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>5. Resources Required</label>
                                <textarea
                                    name="resourcesRequired"
                                    value={forms.resourcesRequired}
                                    onChange={handleChange}
                                    placeholder="e.g., Marketing budget, additional staff, training programs."
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>6. Timeline</label>
                                <div className="flex space-x-2">
                                    <input
                                        type="date"
                                        name="startDate"
                                        value={forms.startDate}
                                        onChange={handleChange}
                                        placeholder="start date"
                                        required
                                        className="border p-2 w-full"
                                    />
                                    <input
                                        type="date"
                                        name="endDate"
                                        value={forms.endDate}
                                        onChange={handleChange}
                                        placeholder="end date"
                                        required
                                        className="border p-2 w-full"
                                    />
                                </div>
                            </div>
                            <div>
                                <label>7. Success Metrics</label>
                                <textarea
                                    name="successMetrics"
                                    value={forms.successMetrics}
                                    onChange={handleChange}
                                    placeholder="e.g., Percentage increase in sales revenue, number of new customers acquired, return on investment (ROI)."
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>8. Potential Challenges</label>
                                <textarea
                                    name="potentialChallenges"
                                    value={forms.potentialChallenges}
                                    onChange={handleChange}
                                    placeholder="e.g., Market competition, economic downturns, resource limitations."
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>9. Support Needed</label>
                                <textarea
                                    name="supportNeeded"
                                    value={forms.supportNeeded}
                                    onChange={handleChange}
                                    placeholder="e.g., Assistance from the marketing team, approval for budget allocation, access to data analytics tools."
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div>
                                <label>10. Weight</label>
                                <input
                                    type="text"
                                    name="weight"
                                    value={forms.weight}
                                    onChange={handleChange}
                                    placeholder="e.g., 30%"
                                    required
                                    className="border p-2 w-full"
                                />
                            </div>
                            <div className="w-full flex justify-end">
                                <button
                                    type="submit"
                                    className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>

                </Modal>
            )}
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Add Objective</button>}
                    noborder={false}
                    title="Objective Setting Details"
                >
                    <Table
                        array={tableData}
                        search={"ObjectiveTitle"}
                        keysToDisplay={["ObjectiveTitle", "ObjectiveDescription", "StartDate", "EndDate"]}
                        label={[
                            "Objective Title",
                            "Objective Decription",
                            "Start Date",
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

                                        className="text-[#ccccc] text-[1.3rem]" />
                                );
                            },
                        ]}
                    />
                </Card>
                {tableData.length > 0 ?
                    <>
                        <div className='w-full flex items-end justify-end'>
                            <button
                                onClick={() => window.alert("Submitted")}
                                style={{ cursor: "pointer" }}
                                className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">Submit</button>
                        </div>
                    </> : ""

                }

            </div>
            {/* SECTION 1: OBJECTIVES SETTING */}

            {/* SECTION 2: OBJECTIVES AGREEMENT */}
            {/* <div className="space-y-5">
                <h2 className="text-xl font-bold">SECTION: OBJECTIVES AGREEMENT (TO BE COMPLETED BY THE EMPLOYEE)</h2>
                <Form form={form} layout="vertical">
                    <Form.Item label="1. Objective Title" name="objectiveTitleAgreed">
                        <Input placeholder="e.g., Increase Sales Revenue" disabled />

                    </Form.Item>
                    <Form.Item label="2. Description" name="descriptionAgreed">
                        <TextArea placeholder="Provide a detailed description of the objective." disabled />
                    </Form.Item>
                    <Form.Item label="3. Specific Goals" name="specificGoalsAgreed">
                        <TextArea placeholder="e.g., Achieve a 15% increase in sales revenue over the next quarter." disabled />
                    </Form.Item>
                    <Form.Item label="4. Key actions to be carried out" name="keyActionsAgreed">
                        <TextArea placeholder="List specific actions or steps required to achieve the objective." disabled />
                    </Form.Item>
                    <Form.Item label="5. Resources Required" name="resourcesRequiredAgreed">
                        <TextArea placeholder="e.g., Marketing budget, additional staff, training programs." disabled />
                    </Form.Item>
                    <Form.Item label="6. Timeline" name="timelineAgreed">
                        <div className="flex space-x-2">
                            <DatePicker placeholder="Start Date" className="flex-1" disabled />
                            <DatePicker placeholder="End Date" className="flex-1" disabled />
                        </div>
                    </Form.Item>
                    <Form.Item label="7. Success Metrics" name="successMetricsAgreed">
                        <TextArea placeholder="e.g., Percentage increase in sales revenue, number of new customers acquired, return on investment (ROI)." disabled />
                    </Form.Item>
                    <Form.Item label="8. Potential Challenges" name="potentialChallengesAgreed">
                        <TextArea placeholder="e.g., Market competition, economic downturns, resource limitations." disabled />
                    </Form.Item>
                    <Form.Item label="9. Support Needed" name="supportNeededAgreed">
                        <TextArea placeholder="e.g., Assistance from the marketing team, approval for budget allocation, access to data analytics tools." disabled />
                    </Form.Item>
                    <Form.Item label="10. Weight" name="weightAgreed">
                        <Input placeholder="e.g., 30%" disabled />
                    </Form.Item>
                    <Form.Item label="11. Agreement" name="agreement">
                        <Checkbox checked={agreed} onChange={(e) => setAgreed(e.target.checked)}>Do you agree with this objective? Yes</Checkbox>
                    </Form.Item>
                    <Form.Item label="12. Comments" name="comments">
                        <TextArea placeholder="e.g., I am happy with this objective because is achievable." />
                    </Form.Item>
                </Form>
            </div> */}

            {/* SECTION 3: SIGN OFF OBJECTIVES SETTING */}
            {/* <div className="space-y-5">
                <h2 className="text-xl font-bold">SECTION: SIGN OFF OBJECTIVES SETTING (TO BE COMPLETED BY LINE MANAGER N+1 & EMPLOYEE)</h2>
                <div>
                    <p className="mb-2">
                        Employee acknowledgement:
                        <br />
                        I acknowledge that I have participated in the objective-setting process, and I understand the objectives set for the upcoming review period. I am committed to achieving these goals to the best of my ability.
                    </p>
                    <Button type="primary" onClick={() => alert('Employee signed')}>SIGN</Button>
                    <div className="mt-2">Employee Name: John Doe, Date: {new Date().toLocaleString()}</div>
                </div>
                <div className="mt-5">
                    <p className="mb-2">
                        Line Manager N+1 acknowledgement:
                        <br />
                        I confirm that I have reviewed and discussed the objectives with the employee. I will provide the necessary support and resources to help the employee achieve these objectives.
                    </p>
                    <Button type="primary" onClick={() => alert('Line Manager signed')}>SIGN</Button>
                    <div className="mt-2">Manager Name: Jane Smith, Date: {new Date().toLocaleString()}</div>
                </div>
            </div> */}
        </div>
    );
};

export default ObjectiveSetting;
{/* <Form form={form} layout="vertical" onFinish={handleSubmit}>
<Form.Item
    label="1. Objective Title"
    name="objectiveTitle"
    rules={[{ required: true, message: 'Objective Title is required' }]}
>
    <Input placeholder="e.g., Increase Sales Revenue" />
</Form.Item>
<Form.Item
    label="2. Description"
    name="description"
    rules={[{ required: true, message: 'Description is required' }]}
>
    <TextArea placeholder="Provide a detailed description of the objective." />
</Form.Item>
<Form.Item
    label="3. Specific Goals"
    name="specificGoals"
    rules={[{ required: true, message: 'Specific Goals are required' }]}
>
    <TextArea placeholder="e.g., Achieve a 15% increase in sales revenue over the next quarter." />
</Form.Item>
<Form.Item
    label="4. Key actions to be carried out"
    name="keyActions"
    rules={[{ required: true, message: 'Key actions are required' }]}
>
    <TextArea placeholder="List specific actions or steps required to achieve the objective." />
</Form.Item>
<Form.Item
    label="5. Resources Required"
    name="resourcesRequired"
    rules={[{ required: true, message: 'Resources required are necessary' }]}
>
    <TextArea placeholder="e.g., Marketing budget, additional staff, training programs." />
</Form.Item>
<Form.Item label="6. Timeline">
    <div className="flex space-x-2">
        <Form.Item
            name="startDate"
            rules={[{ required: true, message: 'Start Date is required' }]}
            noStyle
        >
            <Input placeholder="start date" />
        </Form.Item>
        <Form.Item
            name="endDate"
            rules={[{ required: true, message: 'End Date is required' }]}
            noStyle
        >
            <Input placeholder="end date" />
        </Form.Item>
    </div>
</Form.Item>
<Form.Item
    label="7. Success Metrics"
    name="successMetrics"
    rules={[{ required: true, message: 'Success Metrics are required' }]}
>
    <TextArea placeholder="e.g., Percentage increase in sales revenue, number of new customers acquired, return on investment (ROI)." />
</Form.Item>
<Form.Item
    label="8. Potential Challenges"
    name="potentialChallenges"
    rules={[{ required: true, message: 'Potential Challenges are required' }]}
>
    <TextArea placeholder="e.g., Market competition, economic downturns, resource limitations." />
</Form.Item>
<Form.Item
    label="9. Support Needed"
    name="supportNeeded"
    rules={[{ required: true, message: 'Support Needed is required' }]}
>
    <TextArea placeholder="e.g., Assistance from the marketing team, approval for budget allocation, access to data analytics tools." />
</Form.Item>
<Form.Item
    label="10. Weight"
    name="weight"
    rules={[{ required: true, message: 'Weight is required' }]}
>
    <Input placeholder="e.g., 30%" />
</Form.Item>
<div className='w-full items-end'>
    <Button
        type='primary'
        htmlType='submit'
        style={{ cursor: "pointer" }}
        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
    >
        Submit
    </Button>
</div>
</Form> */}
