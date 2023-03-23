import ClientLiest from "./Profile/Profile"
import users from "../library/user.json"

import "../index.css"


export const App = (props) => {
  return (
    <div>
      <ClientLiest items={users}/>
     
    </div>
  );
};


// import { Profile } from "./Profile/Profile"



// const App = () => {
//   return <Profile />
// }
// export default App




// import Client from "./Profile/Profile"
// import user from "../library/user.json"

// import "../index.css"

// export const App = () => {
//   return (
//     <div>
//     <Client items={user}/>
//     </div>
//   );
// };

