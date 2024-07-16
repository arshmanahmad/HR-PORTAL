import React from "react";
import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import { useTranslation } from "react-i18next";

const EditProfile: React.FC = () => {
  const { t } = useTranslation();
  interface FormField {
    name: string;
    label: string;
    type: "text" | "select" | "file" | "textarea" | "date" | "profileFile";
    options?: string[];
  }

  const formFields: FormField[] = [
    { name: "identityPhoto", label: t("EditProfile.ProfilePhoto"), type: "profileFile" },
    { name: "firstName", label: t("EditProfile.FirstName"), type: "text" },
    { name: "lastName", label: t("EditProfile.LastName"), type: "text" },
    {
      name: "gender",
      label: t("EditProfile.Gender"),
      type: "select",
      options: ["Male", "Female"],
    },
    {
      name: "civility",
      label: t("EditProfile.Title"),
      type: "select",
      options: ["Miss", "Mr.", "Mrs."],
    },
    { name: "address", label: t("EditProfile.Address"), type: "text" },
    { name: "email", label: t("EditProfile.Email"), type: "text" },
    { name: "mobilePhoneNumber", label: t("EditProfile.PhoneNumber"), type: "text" },
    // { name: 'startDatePublicService', label: 'Start Date of Public Service Function', type: 'date' },
    // { name: 'startDateCurrentEmployer', label: 'Start Date at Current Employer', type: 'date' },
    { name: "natureOfContract", label: t("EditProfile.NatureofContract"), type: "text" },
    {
      name: "functionalDirection",
      label: t("EditProfile.FunctionalDirection"),
      type: "text",
    },
    { name: "divisionDepartment", label: t("EditProfile.Division"), type: "text" },
    { name: "rank", label: t("EditProfile.Rank"), type: "text" },
    {
      name: "lineMangers",
      label: t("EditProfile.LineManagers"),
      type: "select",
      options: ["John Doe"],
    },
    {
      name: "lineMangers",
      label: t("EditProfile.LineManagers"),
      type: "select",
      options: ["John Doe"],
    },
    {
      name: "directionOfAssignment1",
      label: t("EditProfile.DirectionOfAssignment1"),
      type: "text",
    },
    {
      name: "directionOfAssignment2",
      label: t("EditProfile.DirectionOfAssignment2"),
      type: "text",
    },
    { name: "additionalNotes", label: t("EditProfile.AdditionalNotes"), type: "textarea" },
  ];
  const handleSubmit = (formData: FormData) => {
    // Handle form submission
    console.log("Form submitted", formData);
  };

  return (
    <div>
      {/* <HomeBredCurbs title="Add Staff" /> */}
      <HomeBredCurbs title={t("EditProfile.Profile")} />
      <Card
        bodyClass="p-4"
        subtitle={""}
        headerslot={""}
        noborder={false}
        title={t("EditProfile.EnterDetails")}
      >
        <DynamicForm
          fieldsPerRow={3}
          fields={formFields}
          onSubmit={handleSubmit}
          buttonText={t("EditProfile.Submit")}
        />
      </Card>
    </div>
  );
};

export default EditProfile;
