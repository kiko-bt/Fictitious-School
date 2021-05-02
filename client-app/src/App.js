import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import CourseForm from "./components/CourseForm";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const coursesFromServer = await fetchTasks();
      setTasks(coursesFromServer);
    };

    getData();
  }, []);

  //Fetch Data
  const fetchTasks = async () => {
    const res = await axios.get("http://localhost:5000/courses");
    const data = await res.data;
    return data;
  };

  return (
    <div className="App">
      <NavBar />
      <CourseForm />
    </div>
  );
}

export default App;
