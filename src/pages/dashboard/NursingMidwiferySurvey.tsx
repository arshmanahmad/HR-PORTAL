import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from "../../components/MainTable/Table";
import Modal from "../../components/Modal/Modal";
import { useState } from "react";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import "../../App.css";
import { Form, Radio } from "antd";
import { useTranslation } from "react-i18next";

const options = [
  "Not at all satisfied",
  "Not satisfied",
  "No opinion",
  "Satisfied",
  "Very satisfied",
];

const questions = [
  "Took care of you?",
  "Listened to you without rushing or interrupting?",
  "Understood your concerns?",
  "Actively listened to you and spoke clearly and calmly?",
  "Showed you respect?",
  "Demonstrated a desire to provide you with the best possible care?",
  "Always remained professional?",
  "Responded to your needs and requests promptly?",
];
interface NursingUnit {
  id: number;
  patientName: string;
  email: string;
  phoneNumber: string;
  rating: number;
  department: string;
  careGiver: string;
  created_at: string;
}

const nursingUnitData: NursingUnit[] = [
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

interface SurveyFormData {
  patientEmails: string;
  patientPhoneNumbers: string;
}

const DoctorDentistSurvey: React.FC = () => {
  const { t } = useTranslation()
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  const [formData, setFormData] = useState<SurveyFormData>({
    patientEmails: "",
    patientPhoneNumbers: "",
  });
  const [feedbackModal, setFeedbackModal] = useState(false);
  const toggleFeedbackModal = () => {
    setFeedbackModal(!feedbackModal);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
    // Reset form
    setFormData({
      patientEmails: "",
      patientPhoneNumbers: "",
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
    { name: "occupation", label: "Occupation", type: "text" },
    { name: "age", label: "Age", type: "text" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female"],
    },
  ];
  const handleFeedbackSubmit = (formData: FormData) => {
    console.log("Form submitted", formData);
    toggleFeedbackModal();
  };
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleAnswerPress = (answer: string) => {
    setSelectedAnswer(answer);
  };

  return (
    <div>
      {feedbackModal && (
        <Modal size="lg" toggleModal={toggleFeedbackModal}>
          <h5 className="mt-[1rem]">Question 1</h5>
          <p className="mb-[2rem] mt-[1rem]  ">
            Please fill out the form, if you please.
          </p>
          <DynamicForm
            fieldsPerRow={2}
            fields={feedbackFormFields}
            onSubmit={handleFeedbackSubmit}
            buttonText="Next"
          />
          <h5 className="mt-[2rem]">Question 2</h5>
          <p className="mb-[2rem]">
            Name of the caregiver who received/treated you.
          </p>
          <div className="flex flex-col  p-5">
            <div className="flex space-x-4 flex flex-col gap-[1rem]">
              <div
                className={`py-2 px-4  border rounded-md shadow-lg w-[90%] ml-4 ${selectedAnswer === "A"
                  ? "bg-blue-500 text-white border-gray-300"
                  : "bg-white text-black border-gray-300"
                  }`}
                onClick={() => handleAnswerPress("A")}
              >
                Nurse{" "}
                <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">
                  A
                </span>
              </div>
              <div
                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${selectedAnswer === "B"
                  ? "bg-blue-500 text-white border-gray-300"
                  : "bg-white text-black border-gray-300"
                  }`}
                onClick={() => handleAnswerPress("B")}
              >
                Midwife{" "}
                <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">
                  B
                </span>
              </div>
              <div
                className={`py-2 px-4  border  rounded-md shadow-lg w-[90%] ${selectedAnswer === "C"
                  ? "bg-blue-500 text-white border-gray-300"
                  : "bg-white text-black border-gray-300"
                  }`}
                onClick={() => handleAnswerPress("C")}
              >
                Nursing Assistant{" "}
                <span className="border border-gray-300 text-black bg-black rounded-full w-10 h-10 flex items-center justify-center">
                  C
                </span>
              </div>
            </div>
          </div>
          <h5 className="mt-[1rem]">Question 3</h5>
          <p className="mb-[2rem] mt-[1rem] ">
            Please rate how satisfied you were with the care/treatment you
            received during your recent visit to the Cocody University Hospital.
            To what extent were you satisfied with the way the healthcare staff:
            {/* <br />
            - 1: Took care of you?
            <br />
            - 2: Listened to you without rushing or interrupting?
            <br />
            - 3: Understood your concerns?
            <br />
            - 4: Actively listened and spoke clearly and calmly?
            <br />
            - 5: Showed respect?
            <br />
            - 5: Demonstrated a desire to provide you with the best possible
            care?
            <br />
            - 6: Remained professional at all times?
            <br />- 7: Responded to your needs and requests promptly? */}
          </p>
          <div className="container">
            <Form form={form} layout="vertical" onFinish={onFinish}>
              <table className="survey-table">
                <thead>
                  <tr>
                    <th>Question</th>
                    {options.map((option, index) => (
                      <th className="optionTableHead" key={index}>
                        {option}
                      </th>
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
                            rules={[
                              {
                                required: true,
                                message: "Please select an option",
                              },
                            ]}
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
            className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 mb-3"
          >
            Submit
          </button>
        </Modal>
      )}
      {modal && (
        <Modal toggleModal={toggleModal}>
          <div className="p-4">
            <h2 className="text-xl font-bold mb-4">
              Send Feedback Form to Patients
            </h2>
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
                <label className="block text-gray-700">
                  Patient Phone Numbers
                </label>
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
      <HomeBredCurbs title={t("NursingSurveys.NursingSurveys")} />
      <div className="w-full flex justify-end">
        <button
          onClick={toggleFeedbackModal}
          style={{ cursor: "pointer" }}
          className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600 mb-3"
        >
          View Feedback Form
        </button>
      </div>
      <div className="space-y-5">
        <Card
          bodyClass="p-4"
          subtitle={""}
          headerslot={
            <button
              onClick={toggleModal}
              style={{ cursor: "pointer" }}
              className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
            >
              {t("NursingSurveys.RequestSurvey")}
            </button>
          }
          noborder={false}
          title="Details"
        >
          <Table
            array={nursingUnitData}
            search={"name"}
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
              t("NursingSurveys.table.Name"),
              "Email",
              "Phone Number",
              "Rating",
              t("NursingSurveys.table.Description"),
              t("NursingSurveys.table.CreatedAt"),
              "Care Giver",
              t("NursingSurveys.table.Actions"),
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

export default DoctorDentistSurvey;
