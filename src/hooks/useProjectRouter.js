import { useEffect, useState } from "react";

const getProjectSlugFromPath = () => {
  const [, basePath, projectSlug] = window.location.pathname.split("/");

  if (basePath !== "projects" || !projectSlug) {
    return null;
  }

  return decodeURIComponent(projectSlug).toLowerCase();
};

export function useProjectRouter() {
  const [selectedProjectId, setSelectedProjectId] = useState(
    getProjectSlugFromPath,
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

  return {
    selectedProjectId,
    navigateToProject,
    navigateToList,
  };
}
