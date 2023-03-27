import ClientLiest from "./Profile/Profile"
import users from "../library/user.json"
import StatsLiest from "../components/Statictics/Statistics"
import data from "../library/data.json"
import FriendList from "./Friend/Friend"
import friends from "../library/friends.json"
import TransactionHistory from "./Transaction/Transaction"
import transactions from "../library/transactions.json"


import "../index.css"


export const App = (props) => {
  return (
    <div>
     <ClientLiest items={users}/>
     <StatsLiest title={"upload stats"} items={data}/>
     <FriendList title={"friends"} items={friends}/>
     <TransactionHistory title={"Transaction History"} items={transactions}/>
    </div>
  );
};
