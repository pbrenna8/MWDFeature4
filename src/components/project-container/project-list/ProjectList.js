import React from "react";

// import data and project card functions
import { getProjects } from "../../../services/projects/projects.js";
import { SingleProject } from "./access-project/SingleProject.js";

export function ProjectList() {
  // get data for the projects
  const [projects, setProjects] = React.useState([]);

  React.useEffect(() => {
    return getProjects().then((data) => {
      setProjects(data);
    });
  }, []);

  // button alert for each project
  // TODO: find another mixed functionality for this
  function clickStatus() {
    alert("This project is in process!");
  }

  // return the project cards
  return(
    <ul>
      {projects.map((project) =>(
          <li>
            <SingleProject
              project={project}
              data="Click for Status"
              onChildClick={clickStatus}
            />
          </li>
      ))}
    </ul>
  );
}
