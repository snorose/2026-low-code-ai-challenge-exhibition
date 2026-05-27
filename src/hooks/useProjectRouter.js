import { useEffect, useState } from "react";

const getProjectNameFromPath = () => {
  const [, basePath, encodedProjectName] = window.location.pathname.split("/");

  if (basePath !== "projects" || !encodedProjectName) {
    return null;
  }

  return decodeURIComponent(encodedProjectName);
};

export function useProjectRouter() {
  const [selectedProjectId, setSelectedProjectId] = useState(
    getProjectNameFromPath,
  );

  useEffect(() => {
    const handlePopState = () => {
      setSelectedProjectId(getProjectNameFromPath());
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

  const navigateToProject = (projectName) => {
    window.history.pushState(
      {},
      "",
      `/projects/${encodeURIComponent(projectName)}`,
    );
    setSelectedProjectId(projectName);
  };

  return {
    selectedProjectId,
    navigateToProject,
    navigateToList,
  };
}
