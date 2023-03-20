import Navs from "./Navs";
import "./App.css";
import { UserContextProvider } from "./Context/UserContext";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <>
      <UserContextProvider>
      <ReactNotifications />
        <Navs />
      </UserContextProvider>
    </>
  );
}

export default App;
