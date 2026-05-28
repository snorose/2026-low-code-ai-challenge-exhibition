import { projectRoutes } from "./data/projects";
import { useProjectRouter } from "./hooks/useProjectRouter";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectList from "./pages/ProjectList";

function App() {
  const { selectedProjectId, navigateToProject, navigateToList } =
    useProjectRouter();

  const selectedProject = projectRoutes.find(
    (project) => project.routeName === selectedProjectId,
  );

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={navigateToList} />;
  }

  return (
    <ProjectList projects={projectRoutes} onSelectProject={navigateToProject} />
  );
}

export default App;
