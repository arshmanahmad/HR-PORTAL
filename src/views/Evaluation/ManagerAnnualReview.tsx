import React, { useState } from 'react';
import { Rate } from 'antd';
import { Button, Input, Form } from 'antd'
const { TextArea } = Input;


const ManagerAnnualReview: React.FC = () => {
    const [managerComments, setManagerComments] = useState({
        jobKnowledgeSkills: "",
        qualityOfWork: "",
        productivity: "",
        communication: "",
        teamworkCollaboration: "",
        initiativeInnovation: "",
        dependability: "",
        overallPerformance: 0,
    });

    const handleRateChange = (value: number, name: string) => {
        setManagerComments({ ...managerComments, [name]: value });
    };
    const [form] = Form.useForm();
    const [nextYearObjective, setNextYearObjective] = useState({
        title: "",
        description: "",
        specificGoals: "",
        keyActions: ["", "", ""],
        resources: "",
        timeline: { startDate: "", endDate: "" },
        successMetrics: "",
        challenges: "",
        support: "",
        weight: 0,
    });

    const handleKeyActionChange = (value: string, index: number) => {
        const updatedActions = [...nextYearObjective.keyActions];
        updatedActions[index] = value;
        setNextYearObjective({ ...nextYearObjective, keyActions: updatedActions });
    };


    const handleSubmit = () => {
        // Handle submission logic here, e.g., send data to backend or store locally
        console.log("Next Year's Objectives Submitted:", nextYearObjective);
    };
    const [employeeSigned, setEmployeeSigned] = useState(false);
    const [managerSigned, setManagerSigned] = useState(false);
    const [employeeFullName, setEmployeeFullName] = useState("");
    const [managerFullName, setManagerFullName] = useState("");

    const handleEmployeeSign = () => {
        // Mock implementation of obtaining employee's full name (replace with actual logic)
        const fullName = "Employee Full Name"; // Replace with actual data retrieval
        setEmployeeFullName(fullName);
        setEmployeeSigned(true);
    };

    const handleManagerSign = () => {
        // Mock implementation of obtaining manager's full name (replace with actual logic)
        const fullName = "Manager Full Name"; // Replace with actual data retrieval
        setManagerFullName(fullName);
        setManagerSigned(true);
    };

    return (
        <div className="p-5 space-y-5">
            <h2 className="text-xl font-bold">SECTION: LINE MANAGER N+1 COMMENTS (TO BE COMPLETED BY LINE MGR N+1)</h2>
            <Form layout="vertical">
                <Form.Item label="1. Job Knowledge and Skills">
                    <TextArea
                        placeholder="Provide comments on job knowledge and skills."
                        onChange={(e) => setManagerComments({ ...managerComments, jobKnowledgeSkills: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="2. Quality of Work">
                    <TextArea
                        placeholder="Provide comments on the quality of work."
                        onChange={(e) => setManagerComments({ ...managerComments, qualityOfWork: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="3. Productivity">
                    <TextArea
                        placeholder="Provide comments on productivity."
                        onChange={(e) => setManagerComments({ ...managerComments, productivity: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="4. Communication">
                    <TextArea
                        placeholder="Provide comments on communication skills."
                        onChange={(e) => setManagerComments({ ...managerComments, communication: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="5. Teamwork and Collaboration">
                    <TextArea
                        placeholder="Provide comments on teamwork and collaboration."
                        onChange={(e) => setManagerComments({ ...managerComments, teamworkCollaboration: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="6. Initiative and Innovation">
                    <TextArea
                        placeholder="Provide comments on initiative and innovation."
                        onChange={(e) => setManagerComments({ ...managerComments, initiativeInnovation: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="7. Dependability">
                    <TextArea
                        placeholder="Provide comments on dependability."
                        onChange={(e) => setManagerComments({ ...managerComments, dependability: e.target.value })}
                    />
                </Form.Item>
                <Form.Item label="8. Overall Performance">
                    <Rate
                        allowHalf
                        value={managerComments.overallPerformance}
                        onChange={(value) => handleRateChange(value, 'overallPerformance')}
                    />
                </Form.Item>
            </Form>
            <Button type="primary" onClick={() => console.log("Manager Comments Submitted")}>
                Submit Manager Comments
            </Button>
            <div className="p-5 space-y-5">
                <h2 className="text-xl font-bold">SECTION: NEXT YEAR’S OBJECTIVES SETTING (TO BE COMPLETED BY THE LINE MANAGER (N+1))</h2>
                <Form form={form} layout="vertical">
                    <Form.Item label="1. Objective Title">
                        <Input
                            placeholder="Enter objective title"
                            value={nextYearObjective.title}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, title: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="2. Description">
                        <TextArea
                            placeholder="Provide a detailed description"
                            value={nextYearObjective.description}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, description: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="3. Specific Goals">
                        <TextArea
                            placeholder="Enter specific goals"
                            value={nextYearObjective.specificGoals}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, specificGoals: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="4. Key actions to be carried out">
                        {nextYearObjective.keyActions.map((action, index) => (
                            <TextArea
                                key={index}
                                placeholder={`Step ${index + 1}`}
                                value={action}
                                onChange={(e) => handleKeyActionChange(e.target.value, index)}
                            />
                        ))}
                    </Form.Item>
                    <Form.Item label="5. Resources Required">
                        <TextArea
                            placeholder="Enter required resources"
                            value={nextYearObjective.resources}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, resources: e.target.value })}
                        />
                    </Form.Item>

                    <Form.Item label="7. Success Metrics">
                        <TextArea
                            placeholder="Enter success metrics"
                            value={nextYearObjective.successMetrics}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, successMetrics: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="8. Potential Challenges">
                        <TextArea
                            placeholder="Enter potential challenges"
                            value={nextYearObjective.challenges}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, challenges: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="9. Support Needed">
                        <TextArea
                            placeholder="Enter support needed"
                            value={nextYearObjective.support}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, support: e.target.value })}
                        />
                    </Form.Item>
                    <Form.Item label="10. Weight">
                        <Input
                            type="number"
                            placeholder="Enter weight in percentage"
                            value={nextYearObjective.weight}
                            onChange={(e) => setNextYearObjective({ ...nextYearObjective, weight: parseInt(e.target.value, 10) })}
                        />
                    </Form.Item>
                </Form>
                <Button type="primary" onClick={handleSubmit}>
                    Submit Objectives
                </Button>
            </div>
            <div className="p-5 space-y-5">
                <h2 className="text-xl font-bold">SECTION: SIGN OFF OBJECTIVES SETTING (TO BE COMPLETED BY LINE MANAGER N+1 & EMPLOYEE)</h2>

                {/* Employee acknowledgement */}
                <Form.Item>
                    <p>
                        <b>Employee acknowledgement:</b><br />
                        I acknowledge that I have participated in the objective-setting process, and I understand the objectives set for the upcoming review period. I am committed to achieving these goals to the best of my ability.
                    </p>
                    <Button type="primary" onClick={handleEmployeeSign} disabled={employeeSigned}>
                        {employeeSigned ? 'Signed' : 'SIGN'}
                    </Button>
                    {employeeSigned && <p>Signatory: {employeeFullName}, Date: {new Date().toLocaleDateString()}, Time: {new Date().toLocaleTimeString()}</p>}
                </Form.Item>

                {/* Line Manager N+1 acknowledgement */}
                <Form.Item>
                    <p>
                        <b>Line Manager N+1 acknowledgement:</b><br />
                        I confirm that I have reviewed and discussed the objectives with the employee. I will provide the necessary support and resources to help the employee achieve these objectives.
                    </p>
                    <Button type="primary" onClick={handleManagerSign} disabled={managerSigned}>
                        {managerSigned ? 'Signed' : 'SIGN'}
                    </Button>
                    {managerSigned && <p>Signatory: {managerFullName}, Date: {new Date().toLocaleDateString()}, Time: {new Date().toLocaleTimeString()}</p>}
                </Form.Item>
            </div>
        </div>

    );
};

export default ManagerAnnualReview;
