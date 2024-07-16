import React, { useState } from "react";
import {
  Button,
  Input,
  // DatePicker,
  Form,
  // Checkbox,
  Typography,
} from "antd";
import "antd/dist/reset.css";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import Card from "../../../components/ui/Card";
import {
  LoadingOutlined,
  SmileOutlined,
  SolutionOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Steps } from "antd";

const {
  // Title,
  Paragraph,
} = Typography;
const Index: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Form Values:", values);
  };
  const [objectives, setObjectives] = useState([
    {
      title: "Increase Sales Revenue",
      description: "Manage HR team and oversee recruitment processes.",
      specificGoals:
        "Achieve a 15% increase in sales revenue over the next quarter.",
      keyActions: [
        "Identify potential new markets.",
        "Develop a marketing strategy targeting these new markets.",
        "Launch marketing campaigns and monitor performance.",
      ],
      resources: "Marketing budget, additional staff, training programs.",
      timeline: {
        startDate: moment("2024-07-01"),
        endDate: moment("2024-09-30"),
      }, // Use moment objects
      successMetrics:
        "Percentage increase in sales revenue, number of new customers acquired, return on investment (ROI).",
      challenges:
        "Market competition, economic downturns, resource limitations.",
      support:
        "Assistance from the marketing team, approval for budget allocation, access to data analytics tools.",
      weight: 30,
      startDate: "16-2-2023",
      endDate: "8-4-2023",
      score: "",
      agreement: true,
      comments: "I am happy with this objective because is achievable.",
      selfAppraisal: "",
      employeeComments: "",
      status: "Agreed",
    },
  ]);
  // const [completionAverage, setCompletionAverage] = useState(0);
  // const [employeeComments, setEmployeeComments] = useState({
  //     achievements: "",
  //     improvementAreas: "",
  //     supportNeeded: "",
  //     feedback: "",
  //     overallExperience: "",
  // });
  // const [developmentGoals, setDevelopmentGoals] = useState([
  //     {
  //         skill: "",
  //         action: "",
  //         timeline: { startDate: "", endDate: "" },
  //         supportResources: "",
  //         successCriteria: "",
  //     },
  // ]);
  const comments = [
    "Great work on the project! (John Doe)",
    "Needs improvement in meeting deadlines. (Adernaline)",
    "Excellent teamwork and collaboration. (Jack)",
    "............",
  ];
  // const calculateCompletionAverage = () => {
  //     const totalWeight = objectives.reduce((total, obj) => total + obj.weight, 0);
  //     const totalSelfAppraisal = objectives.reduce((total, obj) => total + Number(obj.selfAppraisal), 0);
  //     setCompletionAverage(totalSelfAppraisal / totalWeight);
  // };
  const navigate = useNavigate();
  return (
    <div className="p-5 space-y-10">
      {/* SECTION 1: SELF-APPRAISAL */}
      <div className="space-y-5">
        <h2 className="text-xl font-bold">
          SELF-APPRAISAL (TO BE COMPLETED BY THE EMPLOYEE)
        </h2>
        <Card
          headerslot={""}
          bodyClass="p-4"
          subtitle={""}
          noborder={false}
          title="Previous Comments"
          className="mt-12 bg-[#fff]"
        >
          {comments.length > 0 ? (
            comments.map((comment, idx) => (
              <p key={idx} className="py-2">
                {`${comment}`}
              </p>
            ))
          ) : (
            <p>No comments available</p>
          )}
        </Card>
        {objectives.map((_obj, index) => (
          <Form form={form} layout="vertical" key={index}>
            <Steps
              items={[
                {
                  title: "Comments",
                  description:
                    "Please enter your self appraisal details below.",
                  status: "finish",
                  icon: <UserOutlined />,
                },
                {
                  title: "Completion %",
                  status: "finish",
                  description: "40%",
                  icon: <SolutionOutlined />,
                },
                {
                  title: "Score N1",
                  status: "process",
                  icon: <LoadingOutlined />,
                },
                {
                  title: "Annual Plan",
                  status: "wait",
                  icon: <SmileOutlined />,
                },
                {
                  title: "Sign Off",
                  status: "wait",
                  icon: <SmileOutlined />,
                },
              ]}
            />

            <Card
              bodyClass="p-4"
              subtitle={""}
              noborder={false}
              title="Self Appraisal"
              headerslot={""}
              className="mt-12 bg-[#fff]"
            >
              <Paragraph>
                Please enter your self appraisal details below.
              </Paragraph>
              <Form form={form} layout="vertical" onFinish={onFinish}>
                <div className="w-full flex items-center gap-12">
                  <Form.Item label="Enter Percentage">
                    <Input
                      type="number"
                      placeholder="Enter Percentage"
                      addonAfter="%"
                      onChange={(e) => {
                        const newObjectives = [...objectives];
                        newObjectives[index].selfAppraisal = e.target.value;
                        setObjectives(newObjectives);
                      }}
                    />
                  </Form.Item>
                  <Form.Item label="Enter Score">
                    <Input
                      type="number"
                      placeholder="Enter a score"
                      onChange={(e) => {
                        const newObjectives = [...objectives];
                        newObjectives[index].score = e.target.value;
                        setObjectives(newObjectives);
                      }}
                    />
                  </Form.Item>
                </div>
                <Form.Item label="Description">
                  <Input.TextArea
                    rows={4}
                    placeholder="Enter description"
                    onChange={(e) => {
                      const newObjectives = [...objectives];
                      newObjectives[index].description = e.target.value;
                      setObjectives(newObjectives);
                    }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="mt-4"
                    type="primary"
                    htmlType="submit"
                    onClick={() =>
                      navigate(
                        "/dashboard/evaluation/annualReviews/managerResponse"
                      )
                    }
                  >
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </Card>

            {/* <Form.Item label="Description">
                            <TextArea value={obj.comments} />
                        </Form.Item>
                        <Form.Item label="14. Employee comments">
                            <TextArea
                                placeholder="Please use this space below to justify your score, taking into account your successes, failures, and any difficulties."
                                onChange={(e) => {
                                    const newObjectives = [...objectives];
                                    newObjectives[index].employeeComments = e.target.value;
                                    setObjectives(newObjectives);
                                }}
                            />

                        </Form.Item> */}
          </Form>
        ))}
        {/* <div>
                    <Button type="primary" onClick={calculateCompletionAverage}>Calculate Objectives Completion Average</Button>
                    <p>Objectives Completion Average: {completionAverage}</p>
                </div> */}
      </div>

      {/* SECTION 2: EMPLOYEE COMMENTS */}
      {/* <div className="space-y-5">
                <h2 className="text-xl font-bold">SECTION: EMPLOYEE COMMENTS (TO BE COMPLETED BY THE EMPLOYEE)</h2>
                <Form form={form} layout="vertical">
                    <Form.Item label="1. Reflection on Achievements">
                        <TextArea
                            placeholder="Reflect on your achievements."
                            onChange={(e) => setEmployeeComments({ ...employeeComments, achievements: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="2. Areas for Improvement">
                        <TextArea
                            placeholder="Identify areas for improvement."
                            onChange={(e) => setEmployeeComments({ ...employeeComments, improvementAreas: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="3. Support Needed">
                        <TextArea
                            placeholder="Specify the support needed."
                            onChange={(e) => setEmployeeComments({ ...employeeComments, supportNeeded: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="4. Feedback on Management">
                        <TextArea
                            placeholder="Provide feedback on management."
                            onChange={(e) => setEmployeeComments({ ...employeeComments, feedback: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="5. Overall Experience">
                        <TextArea
                            placeholder="Share your overall experience."
                            onChange={(e) => setEmployeeComments({ ...employeeComments, overallExperience: e.target.value })}
                        />
                    </Form.Item>
                </Form>
            </div> */}

      {/* SECTION 3: PERSONAL DEVELOPMENT PLAN */}
      {/* <div className="space-y-5">
                <h2 className="text-xl font-bold">SECTION: PERSONAL DEVELOPMENT PLAN (TO BE COMPLETED BY THE EMPLOYEE)</h2>
                {developmentGoals.map((goal, index) => (
                    <Form form={form} layout="vertical" key={index}>
                        <h3>Goal {index + 1}</h3>
                        {goal.skill}
                        <Form.Item label="Skill to develop">
                            <Input
                                placeholder="Skill to develop"
                                onChange={(e) => {
                                    const newGoals = [...developmentGoals];
                                    newGoals[index].skill = e.target.value;
                                    setDevelopmentGoals(newGoals);
                                }}
                            />

                        </Form.Item>
                    </Form>
                ))}
                <Button
                    type="dashed"
                    onClick={() => setDevelopmentGoals([...developmentGoals, { skill: "", action: "", timeline: { startDate: "", endDate: "" }, supportResources: "", successCriteria: "" }])}
                >
                    Add Goal
                </Button>
            </div> */}

      {/* SECTION 4: SIGN OFF */}
      {/* <div className="space-y-5" style={{ lineHeight: '1.6' }}>
                <h2 className="text-xl font-bold">SECTION: SIGN OFF (TO BE COMPLETED BY LINE MANAGER N+1 & EMPLOYEE)</h2>
                <Form form={form} layout="vertical">
                    <Form.Item>
                        <p className='mb-2'>
                            <b >Employee acknowledgement:</b>
                            <br />
                            I acknowledge that I have reviewed this appraisal with my manager and understand the content discussed. My signature does not necessarily indicate agreement with the appraisal but confirms that I have been informed of my performance ratings and areas for improvement.
                        </p>
                        <Button className='mb-2' type="primary" onClick={() => console.log("Employee Signed")}>
                            Employee SIGN
                        </Button>
                        <p>Signatory: [Employee Name], Date: [Current Date], Time: [Current Time]</p>
                    </Form.Item>
                    <Form.Item>
                        <p className='mb-2'>
                            <b>Line Manager N+1 acknowledgement:</b>
                            <br />
                            I confirm that I have conducted a thorough performance review with the employee and have discussed their strengths, areas for improvement, and future goals. I am committed to supporting the employee's development and addressing any concerns they may have.
                        </p>
                        <Button className='mb-2' type="primary" onClick={() => console.log("Manager Signed")}>
                            Manager SIGN
                        </Button>
                        <p className='mb-2'>Signatory: [Manager Name], Date: [Current Date], Time: [Current Time]</p>
                    </Form.Item>
                </Form>
                <Button type="primary" onClick={() => navigate("/dashboard/evaluation/managerAnnualReview")}>Next</Button>
            </div> */}
    </div>
  );
};

export default Index;
