import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/homecomponents/HomePage";
import LoginPage from "./components/loginComponents/LoginPage";
import LoginHome from "./components/loginComponents/LoginHome";
import Layout from "./components/loginComponents/Layout";
import DisplayAllUsers from "./components/loginComponents/DisplayAllUsers";
import DisplayPastEvents from "./components/loginComponents/DisplayPastEvents";
import AddUser from "./components/loginComponents/AddUser";
import CreateEvent from "./components/loginComponents/CreateEvent";
import DisplayOngoingEvent from "./components/loginComponents/DisplayOngoingEvent";
import DisplayUpcomingEvents from "./components/loginComponents/DisplayUpcomingEvents";
import DisplayEventDetails from "./components/loginComponents/DisplayEventDetails";
import { UserHome } from "./components/userComponents/UserHome";
import UserProfile from "./components/userComponents/UserProfile";
import UserNav from "./components/userComponents/UserNav";
import PageNotFound from "./PageNotFound";
import UpdatePassword from "./components/userComponents/UpdatePassword";
import UserPastEvents from "./components/userComponents/UserPastEvents";
import UserDisplayEvent from "./components/userComponents/UserDisplayEvent";
// import User
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/login" element={<LoginPage></LoginPage>}></Route>
        <Route
          path="/admin"
          element={
            <Layout>
              <LoginHome></LoginHome>{" "}
            </Layout>
          }
        ></Route>

        <Route
          path="/admin/adduser"
          element={
            <Layout>
              <AddUser></AddUser>
            </Layout>
          }
        ></Route>
        <Route
          path="/admin/displaypastevents"
          element={
            <Layout>
              <DisplayPastEvents></DisplayPastEvents>
            </Layout>
          }
        ></Route>
        <Route
          path="/admin/displayallusers"
          element={
            <Layout>
              <DisplayAllUsers></DisplayAllUsers>
            </Layout>
          }
        >
          {" "}
        </Route>
        <Route
          path="/admin/createevent"
          element={
            <Layout>
              <CreateEvent></CreateEvent>
            </Layout>
          }
        ></Route>
        <Route
          path="/admin/displayupcomingevents"
          element={
            <Layout>
              <DisplayUpcomingEvents></DisplayUpcomingEvents>
            </Layout>
          }
        ></Route>
        <Route
          path="/admin/displayongoingevents"
          element={
            <Layout>
              <DisplayOngoingEvent></DisplayOngoingEvent>
            </Layout>
          }
        ></Route>
        <Route
          path="/admin/displayeventdetails"
          element={
            <Layout>
              <DisplayEventDetails></DisplayEventDetails>
            </Layout>
          }
        ></Route>
        <Route
          path="/userhome"
          element={
            <Layout>
              <UserHome></UserHome>
            </Layout>
          }
        ></Route>
        <Route
          path="/userprofile"
          element={
            <Layout>
              <UserProfile></UserProfile>
            </Layout>
          }
        ></Route>
        <Route
          path="/userpastevents"
          element={
            <Layout>
              <UserPastEvents></UserPastEvents>
            </Layout>
          }
        ></Route>

        <Route
          path="*"
          element={
            <Layout>
              <PageNotFound></PageNotFound>
            </Layout>
          }
        >
          {" "}
        </Route>
        <Route
          path="/updatepassword"
          element={<UpdatePassword></UpdatePassword>}
        ></Route>
        <Route
          path="/eventdisplay"
          element={
            <Layout>
              <UserDisplayEvent></UserDisplayEvent>
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
