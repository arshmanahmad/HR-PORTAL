// import { useState, ChangeEvent } from "react";
// import Textinput from "../../components/ui/Textinput";

// Define the type for the props
interface GlobalFilterProps {
  filter: string;
  setFilter: (filterValue: string | undefined) => void;
}
// { filter, setFilter }

const GlobalFilter: React.FC<GlobalFilterProps> = () => {
  // const [value, setValue] = useState<string>(filter);

  // const onChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const newValue = e.target.value;
  //   setValue(newValue);
  //   setFilter(newValue || undefined);
  // };

  return (
    <div>
      {/* <Textinput
        value={value || ""}
        onChange={onChange}
        placeholder="search..."
      /> */}
    </div>
  );
};

export default GlobalFilter;
