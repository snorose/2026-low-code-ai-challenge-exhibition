import { useState } from "react";
import { projects } from "./data/projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectList from "./pages/ProjectList";
import "./App.css";

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId,
  );

  if (selectedProject) {
    return (
      <ProjectDetail
        project={selectedProject}
        onBack={() => setSelectedProjectId(null)}
      />
    );
  }

  return (
    <ProjectList projects={projects} onSelectProject={setSelectedProjectId} />
  );
}

export default App;
