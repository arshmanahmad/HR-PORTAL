import Icon from "../../ui/Icon";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../ui/Dropdown";
import { MenuItem } from "@headlessui/react";
import user_image from "../../../assets/images/all-img/user.png";

const ProfileLabel = () => {
  const session = {
    user: {
      name: "Mohamed",
    },
  };
  return (
    <div className="flex items-center">
      <div className="flex-1 ltr:mr-[10px] rtl:ml-[10px]">
        <div className="lg:h-8 lg:w-8 h-7 w-7 rounded-full">
          <img
            src={user_image}
            alt=""
            className="block w-full h-full object-cover rounded-full"
          />
        </div>
      </div>
      <div className="flex-none text-slate-600 dark:text-white text-sm font-normal items-center lg:flex hidden overflow-hidden text-ellipsis whitespace-nowrap">
        <span className="overflow-hidden text-ellipsis whitespace-nowrap w-[85px] block">
          {session?.user?.name}
        </span>
        <span className="text-base inline-block ltr:ml-[10px] rtl:mr-[10px]">
          <Icon
            icon="heroicons-outline:chevron-down"
            className={undefined}
            width={undefined}
            rotate={undefined}
            hFlip={undefined}
            vFlip={undefined}
          ></Icon>
        </span>
      </div>
    </div>
  );
};

const Profile = () => {
  const navigate = useNavigate();
  const deconnect = async () => {};
  const ProfileMenu = [
    {
      label: "Mon Profile",
      icon: "heroicons-outline:user",

      action: () => {
        navigate("/dashboard/profile");
      },
    },
    {
      label: "Mes demandes",
      icon: "heroicons-outline:helpers",
      action: () => {
        navigate("/dashboard/profile");
      },
    },
  ];

  return (
    <Dropdown label={ProfileLabel()} classMenuItems="w-[180px] top-[58px]">
      {ProfileMenu.map((item, index) => (
        <MenuItem key={index}>
          {({ active }) => (
            <div
              onClick={() => item.action()}
              className={`${
                active
                  ? "bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50"
                  : "text-slate-600 dark:text-slate-300"
              } `}
            >
              <div className={`block cursor-pointer px-4 py-2`}>
                <div className="flex items-center">
                  <span className="block text-xl ltr:mr-3 rtl:ml-3">
                    <Icon
                      icon={item.icon}
                      className={undefined}
                      width={undefined}
                      rotate={undefined}
                      hFlip={undefined}
                      vFlip={undefined}
                    />
                  </span>
                  <span className="block text-sm">{item.label}</span>
                </div>
              </div>
            </div>
          )}
        </MenuItem>
      ))}
      <MenuItem>
        <div
          onClick={() => {
            deconnect();
          }}
          className={`"bg-slate-100 text-slate-900 dark:bg-slate-600 dark:text-slate-300 dark:bg-opacity-50 hover:bg-red-400`}
        >
          <div className={`block cursor-pointer px-4 py-2`}>
            <div className="flex items-center">
              <span className="block text-xl ltr:mr-3 rtl:ml-3">
                <Icon
                  icon={"heroicons-outline:logout"}
                  className={undefined}
                  width={undefined}
                  rotate={undefined}
                  hFlip={undefined}
                  vFlip={undefined}
                />
              </span>
              <span className="block text-sm ">deconnexion</span>
            </div>
          </div>
        </div>
      </MenuItem>
    </Dropdown>
  );
};

export default Profile;
