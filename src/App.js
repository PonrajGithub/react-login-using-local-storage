import React, {useEffect, useState} from "react";
import './App.css';
import Admin from './screen/layout/admin/index.js';
import Login from './screen/view/auth/login';
import loginData from './data.json'
import { BrowserRouter as Router, Route, Routes, Navigate  } from "react-router-dom";
import history from "./history";
// import Home from "./screen/view/admin";
// import NotFound404 from "./screen/component/404NotFound";

function App() {
  const [id, setID] = useState();
  const [accType, setAccType] = useState(false);
  const [name, setAccName] = useState();
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pass, setPass] = useState(true);
  const [sendRequest, setSendRequest] = useState(false);

  //  console.log("Data : ", loginData.accType)

  const handleSubmit = event => {
    event.preventDefault();
    //  console.log("id : ", event.target[0].value);
    setPass(true);
    setLoading(true);
    const id = event.target[0].value;
    const passw = event.target[1].value;

    
      // let bodyLogin = {
      //   email: id,
      //   password: passw
      // };
      // axios
      // .post(process.env.REACT_APP_API_URL + "/api/login", bodyLogin)
      // .then(res => {
      //   // console.log(decodedData.Account);
      //   console.log(jwt.decode(res.data));
      //   var decodedData = jwt.decode(res.data);


      if(passw === loginData.password && id === loginData.email){

        // localStorage.setItem("token", res.data);
          localStorage.setItem("allData", loginData);
    
          if (
            (loginData === undefined ||
              loginData === null ||
              loginData.accType === undefined ||
              loginData.accType === null) &&
            !(
              loginData.accType === "admin"
              // decodedData.Account == 2 ||
              // decodedData.Account == 3
            )
          ) {
            setPass(false);
            setLoading(false);
          } else {
            if (loginData.accType === "admin") {
              // this.setState({ data: decodedData });
              // localStorage.setItem('data', JSON.stringfy(decodedData));
    
              setPass(true);
              // localStorage.setItem('pass', 'true');
    
              setLoading(false);
              // localStorage.setItem('loading', 'false');
    
              setIsLogin(true);
              localStorage.setItem("isLogin", true);
    
              // localStorage.setItem('isLogin', 'true');
              localStorage.setItem("accType", "admin");
              localStorage.setItem("id", loginData.id);
              localStorage.setItem("name", loginData.name);
              setSendRequest(true);
              history.push("/admin");
            }
          }
        }
        
        else{
          setPass(false);
              // localStorage.setItem('pass', 'true');
    
          setLoading(false);
          // localStorage.setItem('loading', 'false');

          setIsLogin(false);
        }

    event.target.reset();
    // if (localStorage.getItem("accType") == "admin") {
    //   return <Admin />;
    // } else {
    //   return <Navigate to="/" />;
    // }
  };
 

  const handleLogout = event => {
    // console.log("logout");
    localStorage.clear();
    window.location.reload(false);
  };
  

  useEffect(() => {
    setID(localStorage.getItem("id"))
    setAccType(localStorage.getItem("accType"))
    setAccName(localStorage.getItem("name"))
    // console.log("id : ", localStorage.getItem("id"))
  });

  // console.log("Local Storage Data : ", localStorage.getItem("accType"))

  return (
        
    <Router>
       
      <Routes>
        <Route path="/" element={
          accType === "admin" ? (
            // <Dashboard />
            <Navigate to="/admin" replace={true}/>
          ) : // <Login OnLogin={this.handleLogin}/>

            accType === "hr" ? (
              // <Dashboard />
              <Navigate to="/hr" replace={true}/>
            ) : //
              accType === "employee" ? (
                // <Dashboard />
                <Navigate to="/employee" replace={true}/>
            ) : (
                <Login
                onSubmit={handleSubmit}
                loading={loading}
                pass={pass}
            />
          )} />

          <Route path="/admin" element={accType==="admin" ?(
          <Admin 
          name={name}
          onLogout={handleLogout}
          />
          ) :(
            <Navigate to="/" replace={true}/>
          )} >
        <Route path="/admin/role" replace={true}/>
        <Route path="/admin/position" replace={true}/>
        </Route>
      </Routes>
    </Router>
  );

}
export default App;
