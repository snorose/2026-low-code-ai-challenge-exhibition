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
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  const navigateToProject = (projectName) => {
    window.history.pushState(
      {},
      "",
      `/projects/${encodeURIComponent(projectName)}`,
    );
    setSelectedProjectId(projectName);
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  };

  return {
    selectedProjectId,
    navigateToProject,
    navigateToList,
  };
}
