import GroupChart1 from "../../components/graphs/GroupChart1";
import Card from "../../components/ui/Card";
import HomeBredCurbs from "../../components/ui/HomeBredCrubs";

const Dashboard = () => {
  return (
    <div>
      <HomeBredCurbs title="Tableau de bord" />
      <div className="grid grid-cols-12 gap-5 mb-5">
        <div className="2xl:col-span-9 lg:col-span-12 col-span-12">
          <Card
            bodyClass="p-4"
            title={""}
            subtitle={""}
            headerslot={""}
            noborder={false}
          >
            <div className="grid md:grid-cols-4 col-span-1 gap-4">
              <GroupChart1 />
            </div>
          </Card>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5"></div>
    </div>
  );
};

export default Dashboard;
