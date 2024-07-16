import Card from "../../components/ui/Card";
import GroupChart3 from "../../components/chart/group-chart-3";
import SelectMonth from "../../components/chart/SelectMonth";
import Calculation from "../../components/chart/Calculation";
import StackBarChart from "../../components/chart/stack-bar";
// import ExampleTwo from "../../components/table/ExampleTwo";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import Table from "../../components/MainTable/Table";
import { IoMdDownload } from "react-icons/io";
import { IoMdEye } from "react-icons/io";
import { MdOutlineDelete } from "react-icons/md";

const campaigns = [
  {
    name: "Channel",
    value: "roi",
  },
  {
    name: "Email",
    value: "40%",
  },
  {
    name: "Website",
    value: "28%",
  },
  {
    name: "Facebook",
    value: "34%",
  },
  {
    name: "Offline",
    value: "17%",
  },
];

const reportsData = [
  {
    id: 1,
    title: "Report 1",
    description: "this is a description of report 1",
    file: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
  },
  {
    id: 2,
    title: "Report 2",
    description: "this is a description of report 2",
    file: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
  },
  {
    id: 3,
    title: "Report 3",
    description: "this is a description of report 3",
    file: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
  },
  {
    id: 4,
    title: "Report 4",
    description: "this is a description of report 4",
    file: "https://www.clickdimensions.com/links/TestPDFfile.pdf",
  },
];

const Reports = () => {
  return (
    <div>
      <HomeBredCurbs title="Reports" />
      <div className="space-y-5">
        <div className="grid grid-cols-12 gap-5">
          <div className="lg:col-span-8 col-span-12 space-y-5">
            <Card
              bodyClass="p-4"
              subtitle={""}
              headerslot={""}
              noborder={false}
              title=""
            >
              <div className="grid xl:grid-cols-4 lg:grid-cols-2 col-span-1 gap-3">
                <GroupChart3 />
              </div>
            </Card>
            <Card
              bodyClass="p-4"
              subtitle={""}
              headerslot={""}
              noborder={false}
              title=""
            >
              <header className="md:flex md:space-y-0 space-y-4">
                <h6 className="flex-1 text-slate-900 dark:text-white capitalize">
                  Deal distribution by stage
                </h6>
                <div className="flex-none">
                  <SelectMonth />
                </div>
              </header>
              <div className="legend-ring">
                <StackBarChart />
              </div>
            </Card>
          </div>
          <div className="lg:col-span-4 col-span-12 space-y-5">
            <div className="lg:col-span-4 col-span-12 space-y-5">
              <Card
                bodyClass="p-4"
                subtitle={""}
                noborder={false}
                title="Campaigns"
                headerslot={<SelectMonth />}
              >
                <ul className="divide-y divide-slate-100 dark:divide-slate-700">
                  {campaigns.map((item, i) => (
                    <li
                      key={i}
                      className="first:text-xs text-sm first:text-slate-600 text-slate-600 dark:text-slate-300 py-2 first:uppercase"
                    >
                      <div className="flex justify-between">
                        <span>{item.name}</span>
                        <span>{item.value}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
              <Card
                bodyClass="p-4"
                subtitle={""}
                noborder={false}
                title="Work Force Distribution"
                headerslot={<SelectMonth />}
              >
                <div className="legend-ring3">
                  <Calculation />
                </div>
              </Card>
            </div>
          </div>
        </div>

        <Table
          array={reportsData}
          label={["#", "Title", "Description", "Actions"]}
          keysToDisplay={["id", "title", "description"]}
          search="title"
          extraColumns={[
            () => {
              return (
                <>
                  <IoMdDownload size={22} />
                  <IoMdEye size={22} className="mx-5" />
                  <MdOutlineDelete size={22} />
                </>
              );
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Reports;
