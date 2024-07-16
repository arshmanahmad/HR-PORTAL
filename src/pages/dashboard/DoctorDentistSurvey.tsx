import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import '../../App.css'
import { Form, Radio } from 'antd';
import { useTranslation } from "react-i18next";



const options = [
    'Not at all satisfied',
    'Not satisfied',
    'No opinion',
    'Satisfied',
    'Very satisfied',
];

const questions = [
    'Were you taken care of?',
    'Did they listen to you without rushing or interrupting?',
    'Did they understand your concerns?',
    ' Did they actively listen and speak clearly and calmly?',
    'Did they show you respect?',
    'Did they demonstrate a desire to provide you with the best possible care?',
    'Did they remain professional at all times?',
    'Did they respond to your needs and requests promptly?',
];

interface DoctorDentistSurvey {
    id: number;
    patientName: string;
    email: string;
    phoneNumber: string;
    rating: number;
    department: string;
    careGiver: string;
    created_at: string;
}

const surveyData: DoctorDentistSurvey[] = [
    {
        id: 1,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 2,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 3,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 4,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 5,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 6,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 7,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 8,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 9,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 10,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 11,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
    {
        id: 12,
        patientName: "Patient Assessment",
        email: "johndoe@mail.com",
        phoneNumber: "08012345678",
        rating: 4,
        department: "Medical",
        careGiver: "Alice",
        created_at: "01 Jan, 2023",
    },
];


const NursingMidwiferySurvey: React.FC = () => {
    const { t } = useTranslation()
    interface SurveyFormData {
        patientEmails: string;
        patientPhoneNumbers: string;
    }
    const [form] = Form.useForm();


    const onFinish = (values: any) => {
        console.log('Form Values:', values);
    };

    const [modal, setModal] = useState(false);

    const [feedbackModal, setFeedbackModal] = useState(false);
    const toggleFeedbackModal = () => {
        setFeedbackModal(!feedbackModal);
    };

    const toggleModal = () => {
        setModal(!modal);
    };

    const [formData, setFormData] = useState<SurveyFormData>({
        patientEmails: '',
        patientPhoneNumbers: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(formData);
        setFormData({
            patientEmails: '',
            patientPhoneNumbers: ''
        });
        toggleModal();
    };

    type FeedbackFormFields = {
        name: string;
        label: string;
        type: "text" | "select" | "file" | "textarea" | "date" | "profileFile";
        options?: string[];
    };

    const feedbackFormFields: FeedbackFormFields[] = [
        { name: "name", label: "Name", type: "text" },
        { name: "address", label: "Address", type: "text" },
        { name: "city", label: "City", type: "text" },
        { name: "country", label: "Country", type: "text" },
        { name: "email", label: "Email", type: "text" },
        { name: "phone", label: "Phone Number", type: "text" },
        { name: "dob", label: "Date of Birth", type: "date" },
        { name: "gender", label: "Gender", type: "select", options: ["Male", "Female"] },
        { name: "occupation", label: "Occupation", type: "text" },
        { name: "age", label: "Age", type: "text" }
    ];
    const handleFeedbackSubmit = (formData: FormData) => {
        console.log("Form submitted", formData);
        toggleFeedbackModal();
    };
    const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
    const [thirdQuestionAnswer, setThirdQuestionAnswer] = useState<string | null>(null);

    const handleAnswerPress = (answer: string) => {
        setSelectedAnswer(answer);
    };
    const handleThirdQuestionAnswer = (answer: string) => {
        setThirdQuestionAnswer(answer);
    };
    const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

    const handlePressNumber = (answer: number) => {
        setSelectedNumber(answer === selectedNumber ? null : answer);
    };




    return (
        <div>

            {feedbackModal && (
                <Modal size="lg" toggleModal={toggleFeedbackModal}>
                    <h5 className="mt-[1rem]">Question 1</h5>
                    <p className="mb-[2rem]">Fact sheet</p>
                    <DynamicForm
                        fieldsPerRow={2}
                        fields={feedbackFormFields}
                        onSubmit={handleFeedbackSubmit}
                        buttonText="Next =>"


                    />
                    <h5 className="mt-[2rem]">Question 2</h5>
                    <p className="mb-[2rem]">Fill out this questionnaire to</p>
                    <div className="flex flex-col  p-5">
                        <div className="flex space-x-4 flex flex-col gap-[1rem]" >

                            <div
                                className={`py-2 px-4  border rounded-md shadow-lg w-[90%] ml-4 ${selectedAnswer === 'A' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleAnswerPress('A')}
                            >
                                Yourself    <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">A</span>
                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${selectedAnswer === 'B' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleAnswerPress('B')}
                            >
                                Your child    <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">B</span>
                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${selectedAnswer === 'C' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleAnswerPress('C')}
                            >
                                Your spouse   <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">C</span>
                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${selectedAnswer === 'D' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleAnswerPress('D')}
                            >
                                Another parent or friend     <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">D</span>

                            </div>



                        </div>
                    </div>
                    <h5 className="mt-[2rem]">Question 3</h5>
                    <p className="mb-[2rem] mt-[1rem]">Which of the following statements best describes the reason why you consulted the doctor/dentist today?</p>
                    <p className="mb-[2rem] mt-[1rem]">If you are filling this out for someone else, please answer the following questions from the patient’s perspective.</p>
                    <p className="mb-[2rem] mt-[1rem]">(Please check all that apply.)</p>
                    <div className="flex flex-col  p-5">
                        <div className="flex space-x-4 flex flex-col gap-[1rem]" >

                            <div
                                className={`py-2 px-4  border rounded-md shadow-lg w-[90%] ml-4 ${thirdQuestionAnswer === 'A' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleThirdQuestionAnswer('A')}
                            >
                                Ask for someone’s advice   <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">A</span>
                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${thirdQuestionAnswer === 'B' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleThirdQuestionAnswer('B')}
                            >
                                Due to another persistent health problem   <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">B</span>
                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${thirdQuestionAnswer === 'C' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleThirdQuestionAnswer('C')}
                            >
                                For a routine check <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">C</span>
                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${thirdQuestionAnswer === 'D' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleThirdQuestionAnswer('D')}
                            >
                                For treatment (including prescriptions)   <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">D</span>

                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${thirdQuestionAnswer === 'E' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleThirdQuestionAnswer('E')}
                            >
                                Due to a one-time health problem  <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">E</span>

                            </div>
                            <div
                                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${thirdQuestionAnswer === 'F' ? 'bg-blue-500 text-white border-gray-300' : 'bg-white text-black border-gray-300'
                                    }`}
                                onClick={() => handleThirdQuestionAnswer('F')}
                            >
                                Feel free to ask if you need any further assistance! 😊<span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">F</span>

                            </div>



                        </div>
                    </div>
                    <div className="flex justify-center p-5 mr-8 flex-col">
                        <h5 className="mt-[2rem]">Question 4</h5>
                        <p className="mb-[2rem] mt-[1rem]">On a scale of 0 to 3, how important was your visit to the doctor/dentist for your health and well-being today?</p>
                        <p className="mb-[2rem] ">Here's a breakdown of the scale:
                            <br />
                            - 0: Not important at all
                            <br />
                            - 1: Somewhat important
                            <br />
                            - 2: Important
                            <br />
                            - 3: Very important
                        </p>
                        <p className="mb-[2rem] mt-[1rem]">Please respond with a number from 0 to 3 to indicate the level of importance.</p>

                        <div className="flex w-[90%] items-center justify-center">
                            {[0, 1, 2, 3].map((number) => (
                                <button
                                    key={number}
                                    className={`flex-1 border  border-gray-300 text-black h-12 ${selectedNumber === number
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-transparent'
                                        } ${number !== 1 ? '-ml-px' : ''}`}
                                    onClick={() => handlePressNumber(number)}
                                >
                                    {number}
                                </button>
                            ))}
                        </div>
                    </div>
                    <h5 className="mt-[2rem] ml-[1rem]">Question 5</h5>
                    <p className="mb-[2rem] mt-[1rem]  ml-[1rem]">It’s essential to implement measures that are adapted in the treatments/services we offer you so that a better quality of life can be provided to you by the caregiving staff based on what you have experienced.</p>
                    <div className="container">

                        <Form form={form} layout="vertical" onFinish={onFinish}>
                            <table className="survey-table">
                                <thead>
                                    <tr>
                                        <th>Question</th>
                                        {options.map((option, index) => (
                                            <th className="optionTableHead" key={index}>{option}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {questions.map((question, qIndex) => (
                                        <tr key={qIndex}>
                                            <td>{question}</td>
                                            {options.map((_, oIndex) => (
                                                <td key={oIndex}>
                                                    <Form.Item
                                                        name={`question${qIndex}`}
                                                        noStyle
                                                        rules={[{ required: true, message: 'Please select an option' }]}
                                                    >
                                                        <Radio.Group>
                                                            <Radio value={oIndex + 1} />
                                                        </Radio.Group>
                                                    </Form.Item>
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </Form>
                    </div>
                    <button
                        onClick={toggleFeedbackModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 mb-3">Submit</button>
                </Modal>
            )}

            {modal && (
                <Modal toggleModal={toggleModal}>
                    <div className="p-4">
                        <h2 className="text-xl font-bold mb-4">Send Feedback Form to Patients</h2>
                        <form onSubmit={handleSubmit}>



                            <div className="mb-4">
                                <label className="block text-gray-700">Patient Emails</label>
                                <input
                                    name="patientEmails"
                                    value={formData.patientEmails}
                                    onChange={handleChange}
                                    className="w-full px-3 py-2 border rounded-md"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Patient Phone Numbers</label>
                                <input
                                    name="patientPhoneNumbers"
                                    value={formData.patientPhoneNumbers}
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
                                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </Modal>
            )}

            <HomeBredCurbs title="Doctor & Dentist Survey" />
            <div className="w-full flex justify-end"><button
                onClick={toggleFeedbackModal}
                style={{ cursor: "pointer" }}
                className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 mb-3">{t("DoctorSurveys.FeedbackForm")}</button></div>
            <div className="space-y-5">
                <Card
                    bodyClass="p-4"
                    subtitle={""}
                    headerslot={<button
                        onClick={toggleModal}
                        style={{ cursor: "pointer" }}
                        className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">{t("DoctorSurveys.RequestSurvey")}</button>}
                    noborder={false}
                    title="Details"
                >
                    <Table
                        array={surveyData}
                        search={"patientName"}
                        keysToDisplay={[
                            "id",
                            "patientName",
                            "email",
                            "phoneNumber",
                            "rating",
                            "department",
                            "careGiver",
                            "created_at",
                        ]}
                        label={[
                            "#",
                            t("DoctorSurveys.table.SurveyName"),
                            "Email",
                            "Phone Number",
                            "Rating",
                            t("DoctorSurveys.table.DepartmentID"),
                            t("DoctorSurveys.table.CreatedAt"),
                            "Care Giver",
                            "Actions",
                        ]}
                        extraColumns={[
                            () => {
                                return <MdEdit className="text-[#ccccc] text-[1.3rem]" />;
                            },
                        ]}
                    />
                </Card>


            </div>
        </div>
    );
};

export default NursingMidwiferySurvey;
