import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/users";
import Invoices from "./scenes/invoices";
import Bar from "./scenes/bar";
import Form from "./scenes/profile";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import Login from "./scenes/login/Login";
import Register from "./scenes/register/Register";
import { useSelector, useDispatch } from 'react-redux'
import Profile from "./scenes/profile";
import Users from "./scenes/users";
import Locations from "./scenes/locations";
import MyLocations from "./scenes/mylocation";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const dispatch = useDispatch()
  const { isAdmin } = useSelector(state => state.app);
  const { isLogin } = useSelector(state => state.auth);
  const navigate = useNavigate()
  const pathname = useLocation()
  console.log('pathname', pathname.pathname)


  useEffect(() => {
    if (isLogin === 'false' && pathname.pathname === '/') {
      navigate('/login')
    }
  }, [pathname, isLogin])

  return (
    <>
      {
        isLogin ? <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/users" element={<Users />} />
                  <Route path="/locations" element={<Locations />} />
                  <Route path="/mylocations" element={<MyLocations />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/profile" element={<Profile />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="*" element={<Dashboard />} />


                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider> : <div className="app">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Login />} />
          </Routes>
        </div>
      }

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      // transition:Slide,
      />

    </>

  );
}

export default App;
