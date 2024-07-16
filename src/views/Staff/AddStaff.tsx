"use client";

import React from "react";
import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import DynamicForm from "../../components/DynamicForm/DynamicForm";

const AddStaff: React.FC = () => {
  interface FormField {
    name: string;
    label: string;
    type: "text" | "select" | "file" | "textarea" | "date" | "profileFile";
    options?: string[];
  }

  const formFields: FormField[] = [
    { name: "identityPhoto", label: "Profile Photo", type: "profileFile" },
    { name: "firstName", label: "First Name", type: "text" },
    { name: "lastName", label: "Last Name", type: "text" },
    { name: "employeeNumber", label: "Employee Number", type: "text" },
    { name: "dateOfBirth", label: "Date of Birth", type: "date" },
    {
      name: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female"],
    },
    {
      name: "civility",
      label: "Title/Civility",
      type: "select",
      options: ["Dr", "Prof", "Miss", "Mr.", "Mrs."],
    },
    { name: "address", label: "Address", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "mobilePhoneNumber", label: "Mobile Phone Number", type: "text" },
    {
      name: "startDatePublicService",
      label: "Start Date of Public Service Function",
      type: "date",
    },
    {
      name: "startDateCurrentEmployer",
      label: "Start Date at Current Employer",
      type: "date",
    },
    { name: "natureOfContract", label: "Nature of Contract", type: "text" },
    {
      name: "functionalDirection",
      label: "Functional Direction/Department",
      type: "text",
    },
    { name: "divisionDepartment", label: "Division/Department", type: "text" },
    { name: "rank", label: "Rank", type: "text" },
    // {
    //   name: "lineMangers",
    //   label: "Line Managers",
    //   type: "select",
    //   options: [
    //     "Top Level managers",
    //     "Middle Level Managers",
    //     "First Line Managers",
    //     "Team Leaders",
    //   ],
    // },
    // {
    //   name: "lineMangersN+1",
    //   label: "Line Managers N+1",
    //   type: "select",
    //   options: [
    //     "Top Level managers",
    //     "Middle Level Managers",
    //     "First Line Managers",
    //     "Team Leaders",
    //   ],
    // },
    {
      name: "lineMangersN+2",
      label: "Line Managers N+2",
      type: "select",
      options: ["John Doe", "Jane Doe", "Marry Jane", "John Doe"],
    },
    {
      name: "directionOfAssignment1",
      label: "Direction of Assignment of Responsibilities No 1",
      type: "text",
    },
    {
      name: "directionOfAssignment2",
      label: "Direction of Assignment of Responsibilities No 2",
      type: "text",
    },
    // {
    //   name: "exportUsers",
    //   label: "Export List Of User",
    //   type: "select",
    //   options: [
    //     "IT Group",
    //     "HR Group",
    //     "Management Group",
    //     "Accounts Group",
    //   ],
    // },
    // {
    //   name: "importUsers",
    //   label: "Import List Of User",
    //   type: "select",
    //   options: [
    //     "Accounts Group",
    //     "IT Group",
    //     "HR Group",
    //     "Management Group",
    //   ],
    // },
    { name: "additionalNotes", label: "Additional Notes", type: "textarea" },
  ];
  const handleSubmit = (formData: FormData) => {
    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <div>
      {/* <HomeBredCurbs title="Add Staff" /> */}
      <HomeBredCurbs title="Add Staff" />
      <Card
        bodyClass="p-4"
        subtitle={""}
        headerslot={
          <button
            style={{ cursor: "pointer" }}
            className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600"
          >
            Add Staff
          </button>
        }
        noborder={false}
        title="Add Details"
      >
        <DynamicForm
          fieldsPerRow={3}
          fields={formFields}
          onSubmit={handleSubmit}
          buttonText="Submit"
        />
        <p className="my-5">OR</p>
        {/* create file upload */}
        <input type="file" />
        <p>Upload Excel File to Add bulk users</p>
      </Card>
    </div>
  );
};

export default AddStaff;
