import React, { useState } from "react";
import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit, MdRemoveRedEye } from "react-icons/md";
import Table from "../../components/MainTable/Table";
import Modal from "../../components/Modal/Modal";
import DynamicForm from "../../components/DynamicForm/DynamicForm";
import profile from "../../assets/images/main-user.png";
import Icon from "../../components/ui/Icon";
import DocPreview from "../../components/DocPreview/DocPreview";
import testPdf from "../../assets/pdf/TestPDFfile.pdf";

export interface FormField {
  name: string;
  label: string;
  type: "text" | "select" | "file" | "profileFile";
  options?: string[]; // Only for 'select' type
}

const fields: FormField[] = [
  {
    name: "category",
    label: "Category",
    type: "select",
    options: [
      "Sick leave",
      "Training certificates & Internships",
      "Pay slip",
      "CV",
      "Degrees",
      "Identification",
      "Official letters",
    ],
  },

  { name: "description", label: "Description", type: "text" },
  {
    name: "document",
    label: "Choose Document ",
    type: "file",
  },
];

interface Staff {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  status: string;
}

const staffData = [
  {
    id: 1,
    description: "This is doc description",
    category: "Sick leave",
  },
  {
    id: 2,
    description: "This is doc description",
    category: "Training certificates & Internships",
  },
  {
    id: 3,
    description: "This is doc description",
    category: "Sick leave",
  },
  {
    id: 4,
    description: "This is doc description",
    category: "Pay Slip",
  },
  {
    id: 5,
    description: "This is doc description",
    category: "CV",
  },
];

const documnetTypes = [
  "Sick leave",
  "Training certificates & Internships",
  "Pay slip",
  "CV",
  "Degrees",
  "Identification",
  "Official letters",
];

const handleFormSubmit = (formData: FormData) => {
  for (let pair of formData.entries()) {
    console.log(pair[0] + ": " + pair[1]);
  }
  // Handle form submission logic here
};

const StaffDetail: React.FC = () => {
  const [modal, setModal] = useState(false);
  const [activeDocumentTab, setActiveDocumentTab] = useState(documnetTypes[0]);
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const toggleModal = () => {
    setModal(!modal);
  };
  const handleView = (staff: Staff) => {
    setSelectedStaff(staff);
    toggleModal();
  };

  return (
    <div>
      {modal && selectedStaff && (
        <Modal size="lg" toggleModal={toggleModal}>
          <div className="p-4 ">
            <h2 className="text-xl font-bold mb-4">Detail</h2>
            <DocPreview fileUrl={testPdf} />
            <div className="flex justify-end">
              <button
                type="button"
                className="mr-2 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
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
          <HomeBredCurbs title="Details" />
          <div className="profiel-wrap px-[35px] pb-10 md:pt-[84px] pt-10 rounded-lg bg-white dark:bg-slate-800 lg:flex lg:space-y-0 space-y-6 justify-between items-end relative z-[1]">
            <div className="bg-slate-900 dark:bg-slate-700 absolute left-0 top-0 md:h-1/2 h-[150px] w-full z-[-1] rounded-t-lg"></div>
            <div className="profile-box flex-none md:text-start text-center">
              <div className="md:flex items-end md:space-x-6 rtl:space-x-reverse">
                <div className="flex-none">
                  <div className="md:h-[186px] md:w-[186px] h-[140px] w-[140px] md:ml-0 md:mr-0 ml-auto mr-auto md:mb-0 mb-4 rounded-full ring-4 ring-slate-100 relative">
                    <img
                      src={profile}
                      alt=""
                      className="w-full h-full object-cover rounded-full"
                    />
                    <div
                      // href="#"
                      className="absolute right-2 h-8 w-8 bg-slate-50 text-slate-600 rounded-full shadow-sm flex flex-col items-center justify-center md:top-[140px] top-[100px]"
                    >
                      <Icon icon="heroicons:pencil-square" />
                    </div>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-2xl font-medium text-slate-900 dark:text-slate-200 mb-[3px]">
                    Albert Flores
                  </div>
                  <div className="text-sm font-light text-slate-600 dark:text-slate-400">
                    Staff Member
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="profile-info-500 md:flex md:text-start text-center flex-1 max-w-[516px] md:space-y-0 space-y-4">
              <div className="flex-1">
                <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                  $32,400
                </div>
                <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                  Total Balance
                </div>
              </div>
              <div className="flex-1">
                <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                  200
                </div>
                <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                  Board Card
                </div>
              </div>
              <div className="flex-1">
                <div className="text-base text-slate-900 dark:text-slate-300 font-medium mb-1">
                  3200
                </div>
                <div className="text-sm text-slate-600 font-light dark:text-slate-300">
                  Calender Events
                </div>
              </div>
            </div> */}
          </div>
          <div className="grid grid-cols-12 gap-6">
            <div className="lg:col-span-6 col-span-12 space-y-5">
              <Card
                bodyClass="p-4"
                subtitle={""}
                headerslot={""}
                noborder={false}
                title="Details"
              >
                <DynamicForm
                  buttonText="Add"
                  fields={fields}
                  onSubmit={handleFormSubmit}
                />
              </Card>
            </div>
            <div className="lg:col-span-6 col-span-12 space-y-5">
              <Card
                bodyClass="p-4"
                subtitle={""}
                headerslot={""}
                noborder={false}
                title="Info"
              >
                <ul className="list space-y-8">
                  <li className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:envelope" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        EMAIL
                      </div>
                      <a
                        href="mailto:someone@example.com"
                        className="text-base text-slate-600 dark:text-slate-50"
                      >
                        info-500@dashcode.com
                      </a>
                    </div>
                  </li>
                  <li className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:phone-arrow-up-right" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        PHONE
                      </div>
                      <a
                        href="tel:0189749676767"
                        className="text-base text-slate-600 dark:text-slate-50"
                      >
                        +1-202-555-0151
                      </a>
                    </div>
                  </li>
                  <li className="flex space-x-3 rtl:space-x-reverse">
                    <div className="flex-none text-2xl text-slate-600 dark:text-slate-300">
                      <Icon icon="heroicons:map" />
                    </div>
                    <div className="flex-1">
                      <div className="uppercase text-xs text-slate-500 dark:text-slate-300 mb-1 leading-[12px]">
                        LOCATION
                      </div>
                      <div className="text-base text-slate-600 dark:text-slate-50">
                        82V4+R5X, Bd de l'Université, Abidjan, Côte d’Ivoire
                      </div>
                    </div>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-5 mt-5">
        <div className="col-span-3">
          {documnetTypes.map((doc) => {
            return (
              <div
                onClick={() => setActiveDocumentTab(doc)}
                className={`rounded-lg  mb-3 shadow w-full p-3 cursor-pointer ${doc === activeDocumentTab
                  ? "bg-[#0f172a] text-white "
                  : "bg-white"
                  }`}
              >
                {doc}
              </div>
            );
          })}
        </div>
        <div className="col-span-9">
          <Card
            bodyClass="p-4"
            subtitle={""}
            headerslot={""}
            noborder={false}
            title="Documents"
          >
            <Table
              array={staffData}
              search={"description"}
              keysToDisplay={["id", "description", "category"]}
              label={["#", "Description", "Category", "Actions"]}
              extraColumns={[
                (staff: Staff) => {
                  return (
                    <div className="flex items-center gap-[0.3rem]">
                      <MdRemoveRedEye
                        className="cursor-pointer text-blue-500"
                        onClick={() => handleView(staff)}
                      />
                      <MdEdit className="text-gray-500 text-[1.3rem]" />
                    </div>
                  );
                },
              ]}
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default StaffDetail;
