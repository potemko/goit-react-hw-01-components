import ClientLiest from "./Profile/Profile"
import users from "../library/user.json"
import StatsLiest from "../components/Statictics/Statistics"
import data from "../library/data.json"


import "../index.css"


export const App = (props) => {
  return (
    <div>
     <ClientLiest items={users}/>
     <StatsLiest title={"new statistics"} items={data}/>
    </div>
  );
};
