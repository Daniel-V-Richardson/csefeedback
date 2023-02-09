import "./App.css";
import MainPage from './components/main/main'
import CSEForm3 from "./components/CSEForm3";
import CSEForm5 from "./components/CSEForm5";
import CSEForm7 from "./components/CSEForm7";
import { Route, Routes } from "react-router-dom";
import EmailVerification from "./components/main/EmailVerification";
import Success from "./components/main/Success.jsx"
import PrivateRoute from "./components/main/EmailVerification";
// import Admin from "./components/Admin/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path="/email" element={<EmailVerification/>}/>
          <Route path="/success" element={<Success/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="cse_sem7" element={<CSEForm7 />}/>
            <Route path="cse_sem3" element={<CSEForm3 />} />
            <Route path="cse_sem5" element={<CSEForm5 />} />
          </Route>
          {/* <Route path="admin" element={<Admin />} /> */}
        </Routes>
    </div>
  );
}

export default App;
