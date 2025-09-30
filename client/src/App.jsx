import { useState } from "react";
import axios from "axios";
import Formcom from "./components/Form.jsx";
import TableC from "./components/Table.jsx";

function App() {
  const [enquiry, setEnquiry] = useState([]);

  const getdata = async () => {
    let res = await axios.get('http://localhost:8000/api/get')
    if (res.data.status === "success") {
      setEnquiry(res.data.data);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 flex flex-col ">
        <div className="w-full p-4 h-[10%]  ">
          <h1 className="text-3xl  text-blue-800 text-center font-extrabold">STUDENT PORTAL</h1>
        </div>
        <div className="flex w-full gap-3 px-4 ">
          <div className="bg-gray-300 p-4 w-[30%] rounded-lg ">
            <Formcom getdata={getdata} />
          </div>
          <div className=" p-2 w-[70%]  rounded-lg overflow-hidden">
            <TableC enquiry={enquiry} getdata={getdata} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
