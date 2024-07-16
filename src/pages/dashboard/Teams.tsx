import { useState } from "react";
import HomeBredCurbs from "../../components/chart/HomeBredCurbs";
import Modal from "../../components/Modal/Modal";
import { useTranslation } from "react-i18next";

const teams = [
  {
    id: 1,
    title: "Team 1",
    description: "this is a description of team 1",
    members: ["Jane Doe", "John Smith"],
  },
  {
    id: 2,
    title: "Team 2",
    description: "this is a description of team 2",
    members: ["Jane Doe", "John Smith", "Alice"],
  },
];

const Teams = () => {
  const { t } = useTranslation();
  // const fields: FormField[] = [
  //   {
  //     name: "title",
  //     label: "Title",
  //     type: "text",
  //   },

  //   { name: "description", label: "Description", type: "text" },
  //   { name: "code", label: "Code", type: "text" },
  //   {
  //     name: "members",
  //     label: "Members",
  //     type: "select",
  //     options: ["Jane Doe", "John Smith", "Alice", "Bob", "Charlie"],
  //   },
  // ];

  const [showAddModal, setShowAddModal] = useState(false);

  const toggleModal = () => {
    setShowAddModal(!showAddModal);
  };

  // const handleAddTeam = (data: any) => {
  //   console.log(data);
  // };
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // Perform search logic here if needed
  };

  return (
    <>
      <HomeBredCurbs title="Teams" />
      <div className="flex justify-end mb-3 ">
        <button
          className="bg-blue-500 text-white p-2 rounded-lg"
          onClick={toggleModal}
        >
          {t("Teams.AddTeam")}
        </button>
      </div>
      <div className="grid grid-cols-12 gap-3">
        {teams.map((team) => {
          return (
            <div className="rounded-lg col-span-6 bg-white shadow p-5 ">
              <h3 className="text-lg mb-3 font-semibold">{team.title}</h3>
              <p className="mb-3">{team.description}</p>
              <p className="font-semibold mb-2">Members: </p>
              <div className="flex">
                {team.members.map((member) => {
                  return (
                    <div className="bg-gray-200 cursor-pointer p-2 rounded-lg mr-2">
                      {member}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}



      </div>

      {showAddModal && (
        <Modal toggleModal={toggleModal}>
          <h2 className="text-2xl font-bold mb-4 text-gray-800">{t("Teams.AddTeam")}</h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t("Teams.SelectService")}</label>
            <select className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200" multiple>
              <option value="">{t("Teams.SelectService")}</option>
              <option value="1">Development</option>
              <option value="2">Analysis</option>
              <option value="3">Management</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2">{t("Teams.SelectDepartment")}</label>
            <select className="w-full px-3 py-2 border rounded-md focus:ring focus:ring-blue-200" multiple>
              <option value="">{t("Teams.SelectDepartment")}</option>
              <option value="1">IT</option>
              <option value="2">HR</option>
              <option value="3">Accounts Management</option>
            </select>
          </div>

          <div className="relative mb-4">
            <label className="block text-gray-700 mb-2">{t("Teams.SearchEmployee")}</label>
            <input
              type="text"
              placeholder="Search employee..."
              value={searchTerm}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              {/* <FaSearch className="text-gray-400" /> */}
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={toggleModal}
              className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 mr-2"
            >
              {t("Teams.Close")}
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              {t("Teams.Submit")}
            </button>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Teams;
