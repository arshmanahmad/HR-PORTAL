import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import { MdEdit } from "react-icons/md";
import Table from '../../components/MainTable/Table'
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// Define the Staff interface
interface Staff {
  id: number;
  firstName: string;
  lastName: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  hireDate: string;
  status: string;
}

// Sample data for the Staff Table
const staffData: Staff[] = [
  {
    id: 1,
    firstName: "Alice",
    lastName: "Johnson",
    department: "Human Resources",
    position: "HR Manager",
    email: "alice.johnson@example.com",
    phone: "(555) 123-4567",
    hireDate: "2018-03-15",
    status: "Active",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    department: "Finance",
    position: "Accountant",
    email: "bob.smith@example.com",
    phone: "(555) 234-5678",
    hireDate: "2019-07-22",
    status: "Active",
  },
  {
    id: 3,
    firstName: "Carol",
    lastName: "Taylor",
    department: "IT",
    position: "Software Engineer",
    email: "carol.taylor@example.com",
    phone: "(555) 345-6789",
    hireDate: "2020-01-10",
    status: "On Leave",
  },
  {
    id: 4,
    firstName: "David",
    lastName: "Brown",
    department: "Marketing",
    position: "Marketing Specialist",
    email: "david.brown@example.com",
    phone: "(555) 456-7890",
    hireDate: "2017-05-23",
    status: "Active",
  },
  {
    id: 5,
    firstName: "Eva",
    lastName: "Williams",
    department: "Sales",
    position: "Sales Manager",
    email: "eva.williams@example.com",
    phone: "(555) 567-8901",
    hireDate: "2016-09-12",
    status: "Active",
  },
  {
    id: 6,
    firstName: "Frank",
    lastName: "White",
    department: "Operations",
    position: "Operations Manager",
    email: "frank.white@example.com",
    phone: "(555) 678-9012",
    hireDate: "2015-04-10",
    status: "Active",
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Green",
    department: "Research and Development",
    position: "R&D Specialist",
    email: "grace.green@example.com",
    phone: "(555) 789-0123",
    hireDate: "2021-02-18",
    status: "Active",
  },
  {
    id: 8,
    firstName: "Henry",
    lastName: "Black",
    department: "Customer Service",
    position: "Customer Service Representative",
    email: "henry.black@example.com",
    phone: "(555) 890-1234",
    hireDate: "2018-11-05",
    status: "Active",
  },
  {
    id: 9,
    firstName: "Ivy",
    lastName: "King",
    department: "Legal",
    position: "Legal Advisor",
    email: "ivy.king@example.com",
    phone: "(555) 901-2345",
    hireDate: "2017-08-19",
    status: "Active",
  },
  {
    id: 10,
    firstName: "Jack",
    lastName: "Hill",
    department: "Human Resources",
    position: "HR Assistant",
    email: "jack.hill@example.com",
    phone: "(555) 012-3456",
    hireDate: "2019-03-27",
    status: "On Leave",
  },
  {
    id: 11,
    firstName: "Karen",
    lastName: "Walker",
    department: "Finance",
    position: "Financial Analyst",
    email: "karen.walker@example.com",
    phone: "(555) 234-5678",
    hireDate: "2020-06-30",
    status: "Active",
  },
  {
    id: 12,
    firstName: "Leo",
    lastName: "Carter",
    department: "IT",
    position: "Network Administrator",
    email: "leo.carter@example.com",
    phone: "(555) 345-6789",
    hireDate: "2016-12-15",
    status: "Active",
  },
  {
    id: 13,
    firstName: "Mia",
    lastName: "Parker",
    department: "Marketing",
    position: "Content Creator",
    email: "mia.parker@example.com",
    phone: "(555) 456-7890",
    hireDate: "2019-05-22",
    status: "Active",
  },
];

const StaffTable: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate()
  return (
    <div>

      <HomeBredCurbs title="Staff" />
      <div className="space-y-5">
        <Card
          bodyClass="p-4"
          subtitle={""}
          headerslot={
            <button
              onClick={() => navigate("/dashboard/staff/addStaff")}
              style={{ cursor: "pointer" }}
              className="px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white hover:bg-blue-600">{t("Staff.AddStaff")}</button>}
          noborder={false}
          title={t("Staff.StaffMembers")}
        >
          <Table
            routes={["/dashboard/staff"]}
            array={staffData}
            search={"firstName"}
            keysToDisplay={["id", "firstName", "department", "position", "status"]}
            label={[
              "#",
              t("Staff.table.Name"),
              t("Staff.table.Department"),
              t("Staff.table.Position"),
              "Status",
              t("Staff.table.Actions"),
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
                    // onClick={() => navigate(`${"/admin/providers/"}${record.id}`)}
                    className="text-[#ccccc] text-[1.3rem]" />
                );
              },
            ]}
          />
        </Card>


      </div>
    </div>
  );
};

export default StaffTable;
