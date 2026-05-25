import { useEffect, useState } from "react";
import { projectRoutes } from "./data/projects";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectList from "./pages/ProjectList";
import "./App.css";

const getProjectSlugFromPath = () => {
  const [, basePath, projectSlug] = window.location.pathname.split("/");

  if (basePath !== "projects" || !projectSlug) {
    return null;
  }

  return decodeURIComponent(projectSlug).toLowerCase();
};

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(
    getProjectSlugFromPath,
  );
  const selectedProject = projectRoutes.find(
    (project) => project.slug === selectedProjectId,
  );

  useEffect(() => {
    const handlePopState = () => {
      setSelectedProjectId(getProjectSlugFromPath());
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  const navigateToList = () => {
    window.history.pushState({}, "", "/");
    setSelectedProjectId(null);
  };

  const navigateToProject = (projectSlug) => {
    window.history.pushState({}, "", `/projects/${projectSlug}`);
    setSelectedProjectId(projectSlug);
  };

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={navigateToList} />;
  }

  return (
    <ProjectList projects={projectRoutes} onSelectProject={navigateToProject} />
  );
}

export default App;
