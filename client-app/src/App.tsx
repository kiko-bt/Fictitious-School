import React, { useEffect, useState } from "react";
import axios from "axios";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { List, ListItemText } from "@material-ui/core";

function App() {
  const [courses, setCourses] = useState([]);

  const theme = createMuiTheme({
    typography: {
      fontFamily: ["Source Sans Pro", "sans-serif"].join(","),
    },
  });

  useEffect(() => {
    axios.get("http://localhost:5000/courses").then((res) => {
      console.log(res);
      setCourses(res.data);
    });
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <List>
          {courses.map((course: any) => (
            <ListItemText key={course.id}>{course.companyName}</ListItemText>
          ))}
        </List>
      </ThemeProvider>
    </>
  );
}

export default App;
