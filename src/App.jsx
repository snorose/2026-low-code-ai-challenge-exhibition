import { useEffect, useRef } from "react";
import { projectRoutes } from "./data/projects";
import { useProjectRouter } from "./hooks/useProjectRouter";
import ProjectDetail from "./pages/ProjectDetail";
import ProjectList from "./pages/ProjectList";
import { trackPageView, trackProjectDetail } from "./utils/analytics";

function App() {
  const { selectedProjectId, navigateToProject, navigateToList } =
    useProjectRouter();
  const lastTrackedRouteRef = useRef(null);

  const selectedProject = projectRoutes.find(
    (project) => project.routeName === selectedProjectId,
  );

  useEffect(() => {
    const routeKey = selectedProject
      ? `project:${selectedProject.id}`
      : "project-list";

    if (lastTrackedRouteRef.current === routeKey) return;
    lastTrackedRouteRef.current = routeKey;

    if (selectedProject) {
      trackPageView({
        title: selectedProject.title,
        path: `/projects/${encodeURIComponent(selectedProject.routeName)}`,
      });
      trackProjectDetail(selectedProject);
      return;
    }

    trackPageView({
      title: "2026 Low-Code AI Challenge 수상작",
      path: "/",
    });
  }, [selectedProject]);

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={navigateToList} />;
  }

  return (
    <ProjectList projects={projectRoutes} onSelectProject={navigateToProject} />
  );
}

export default App;
