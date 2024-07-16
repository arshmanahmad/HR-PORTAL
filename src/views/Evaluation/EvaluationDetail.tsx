import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
// import DynamicForm from "../../components/DynamicForm/DynamicForm";
// import { useState } from "react";
import managerSign from "../../assets/images/managerSign.jpeg";
import employeeSign from "../../assets/images/employeeSign.jpg"
import Table from "../../components/MainTable/Table";
import { MdEdit } from "react-icons/md";
// type ObjectiveFormField = {
//     name: string;
//     label: string;
//     type: 'text' | 'select' | 'file' | 'profileFile';
//     options?: string[]; // Only for 'select' type
//     defaultValue?: string | File; // Default value for the field
// };

// // Example form fields with default values
// const objectiveFields: ObjectiveFormField[] = [
//     { name: 'priorityResponsibility', label: 'Priority Responsibility', type: 'text', defaultValue: 'Project Management' },
//     { name: 'objective', label: 'Objective', type: 'text', defaultValue: 'Increase team productivity by 20%' },
//     { name: 'keyActivities', label: 'Key Activities', type: 'text', defaultValue: 'Lead weekly team meetings' },
//     { name: 'resources', label: 'Resources', type: 'text', defaultValue: 'Budget allocation' },
//     { name: 'evaluationObjectives', label: 'Evaluation Objectives', type: 'text', defaultValue: 'Achieve quarterly targets' },
// ];
// type AssessmentFormField = {
//     name: string;
//     label: string;
//     type: 'text' | 'file';
//     defaultValue?: string | File; 
// };

// Example assessment fields with default values
// const assessmentFields: AssessmentFormField[] = [
//     { name: 'year', label: 'Year', type: 'text', defaultValue: '2023' },
//     { name: 'grade', label: 'Grade', type: 'text', defaultValue: 'A' },
//     { name: 'attachment', label: 'Attachment', type: 'file', defaultValue: undefined }, // No default file value
// ];



// const handleFormSubmit = (formData: FormData) => {
//     for (let pair of formData.entries()) {
//         console.log(pair[0] + ': ' + pair[1]);
//     }
// };

const EvaluationDetail: React.FC = () => {
    // const [selectedOptions, setSelectedOptions] = useState<number[]>([]);
    // const [formData, setFormData] = useState({
    //     objective: '',
    //     expectedOutcomes: '',
    //     timeFrame: '',
    //     caregiverResponsibilities: '',
    //     patientResponsibilities: '',
    //     monitoringEvaluation: '',
    //     caregiverSignature: '',
    //     patientSignature: ''
    // });

    // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    //     const { name, value } = e.target;
    //     setFormData({
    //         ...formData,
    //         [name]: value
    //     });
    // };

    // const handleOptionSelect = (questionIndex: number, optionIndex: number) => {
    //     const updatedSelectedOptions = [...selectedOptions];
    //     updatedSelectedOptions[questionIndex] = optionIndex;
    //     setSelectedOptions(updatedSelectedOptions);
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     console.log(formData);
    // };
    const tableData = [
        {
            ObjectiveTitle: 'Increment in development',
            ObjectiveDescription: 'Increase revenue by 20% in Q3.',
            StartDate: '2024-07-01',
            EndDate: '2024-09-30',
            Status: 'Agree',
            Comment: 'Approved for implementation.',
        },
        {
            ObjectiveTitle: 'Reduce Operational Costs',
            ObjectiveDescription: 'Cut down costs by optimizing supply chain.',
            StartDate: '2024-08-01',
            EndDate: '2024-12-31',
            Status: 'Disagree',
            Comment: 'Need further analysis.',
        },
        {
            ObjectiveTitle: 'Expand Market Reach',
            ObjectiveDescription: 'Enter new international markets.',
            StartDate: '2024-09-15',
            EndDate: '2025-03-31',
            Status: 'Agree',
            Comment: 'Market research completed.',
        },
        {
            ObjectiveTitle: 'Enhance Customer Satisfaction',
            ObjectiveDescription: 'Improve customer service response time.',
            StartDate: '2024-08-15',
            EndDate: '2024-11-30',
            Status: 'Agree',
            Comment: 'New CRM system implemented.',
        },
        {
            ObjectiveTitle: 'Develop New Product Line',
            ObjectiveDescription: 'Launch innovative product for niche market.',
            StartDate: '2024-10-01',
            EndDate: '2025-02-28',
            Status: 'Disagree',
            Comment: 'Budget constraints.',
        },
    ];



    return (
        <div>

            <HomeBredCurbs title="Details" />
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle=""
                    headerslot={""}
                    noborder={false}
                    title="Objective Setting Details"
                >
                    <Table
                        array={tableData}
                        search={"ObjectiveTitle"}
                        keysToDisplay={["ObjectiveTitle", "ObjectiveDescription", "StartDate", "EndDate", "Status", "Comment"]}
                        label={[
                            "Objective Title",
                            "Objective Description",
                            "Start Date",
                            "End Date",
                            "Status",
                            "Comment",
                            "Actions",
                        ]}
                        extraColumns={[
                            () => (
                                <MdEdit className="text-[#ccccc] text-[1.3rem]" />
                            ),
                        ]}
                    />
                </Card>
                <Card
                    bodyClass="p-4"
                    subtitle=""
                    headerslot={""}
                    noborder={false}
                    title="Sign Off"
                >
                    <div className="flex flex-col space-y-6 ">
                        {/* Employee Signature */}
                        <div className="flex flex-col space-y-2">
                            <img src={employeeSign} alt="Employee Signature" className="w-32 h-auto rounded-full shadow-lg" />
                            <p className="font-semibold">Employee Signature</p>
                        </div>

                        {/* Employee Agreement Text */}
                        <p className=" text-gray-800">
                            I acknowledge that I have participated in the objective-setting process, and I understand the <br /> objectives set for the upcoming review period. I am committed to achieving these goals to the best of my ability.
                        </p>

                        {/* Line Manager Signature */}
                        <div className="flex flex-col  space-y-2">
                            <img src={managerSign} alt="Line Manager Signature" className="w-32 h-auto rounded-full shadow-lg" />
                            <p className="font-semibold">Line Manager Signature</p>
                        </div>

                        {/* Line Manager Agreement Text */}
                        <p className=" text-gray-800">
                            I confirm that I have reviewed and discussed the objectives with the employee. <br /> I will provide  the necessary support and resources to help the employee achieve these objectives.
                        </p>
                    </div>
                </Card>
                {/* <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={""}
                    noborder={false}
                    title="Objectives "
                >
                    <form onSubmit={handleSubmit} className="w-[90%]"> */}

                {/* Section 1: Objective Setting */}
                {/* <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4">1. Objective Setting</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Objective of Treatment
                                </label>
                                <select
                                    name="objective"
                                    value={formData.objective}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none h-[2.5rem] focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    <option value="">Select Objective</option>
                                    <option value="pain_reduction">Reduce pain levels</option>
                                    <option value="improve_mobility">Improve mobility</option>
                                    <option value="enhance_wellbeing">Enhance overall well-being</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Expected Outcomes
                                </label>
                                <textarea
                                    name="expectedOutcomes"
                                    value={formData.expectedOutcomes}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full h-[6rem] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Describe the expected outcomes"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Time Frame
                                </label>
                                <input
                                    type="text"
                                    name="timeFrame"
                                    value={formData.timeFrame}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full h-[3rem] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="e.g., 4 weeks"
                                />
                            </div>
                        </div> */}

                {/* Section 2: Objective Agreement */}
                {/* <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4">2. Objective Agreement</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Responsibilities of the Caregiver
                                </label>
                                <textarea

                                    name="caregiverResponsibilities"
                                    value={formData.caregiverResponsibilities}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full h-[6rem] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Describe caregiver responsibilities"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Responsibilities of the Patient
                                </label>
                                <textarea
                                    name="patientResponsibilities"
                                    value={formData.patientResponsibilities}
                                    onChange={handleInputChange}
                                    className="mt-1 block h-[6rem] w-full bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Describe patient responsibilities"
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Monitoring and Evaluation
                                </label>
                                <textarea
                                    name="monitoringEvaluation"
                                    value={formData.monitoringEvaluation}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full h-[6rem] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Describe monitoring and evaluation process"
                                ></textarea>
                            </div>
                        </div> */}

                {/* Section 3: Sign-Off */}
                {/* <div className="mb-8">
                            <h2 className="text-xl font-bold mb-4">3. Sign-Off</h2>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Signature of Caregiver
                                </label>
                                <input
                                    type="text"
                                    name="caregiverSignature"
                                    value={formData.caregiverSignature}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full h-[3rem] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Caregiver's Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium text-gray-700">
                                    Signature of Patient
                                </label>
                                <input
                                    type="text"
                                    name="patientSignature"
                                    value={formData.patientSignature}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full h-[3rem] bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    placeholder="Patient's Name"
                                />
                            </div>
                        </div> */}

                {/* Submit Button */}
                {/* <div className="mb-8">
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Submit
                            </button>
                        </div>
                    </form> */}
                {/* <DynamicForm
                        fieldsPerRow={1}
                        buttonText="Add" fields={objectiveFields} onSubmit={handleFormSubmit} /> */}
                {/* </Card> */}
                {/* <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={""}
                    noborder={false}
                    title="Previous assessments"
                >
                    <DynamicForm
                        fieldsPerRow={3}
                        buttonText="Add" fields={assessmentFields} onSubmit={handleFormSubmit} />
                </Card> */}



            </div>
        </div>
    );
};

export default EvaluationDetail;
