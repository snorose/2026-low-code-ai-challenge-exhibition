const isBrowser = () => typeof window !== "undefined";

const compactParams = (params) =>
  Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  );

const getProjectId = (project) =>
  project?.slug ?? project?.id ?? project?.routeName ?? project?.title;

const getDestinationDomain = (url) => {
  if (!isBrowser() || !url) return undefined;

  try {
    const hostname = new URL(url, window.location.origin).hostname.replace(
      /^www\./,
      "",
    );

    if (hostname === "youtu.be" || hostname.endsWith(".youtube.com")) {
      return "youtube.com";
    }

    return hostname;
  } catch {
    return undefined;
  }
};

export const getProjectEventParams = (project) =>
  compactParams({
    project_id: getProjectId(project),
    project_title: project?.title,
    team_name: project?.teamName,
    award: project?.award,
    route_name: project?.routeName,
  });

export const trackEvent = (eventName, params = {}) => {
  if (!isBrowser()) return;

  const eventParams = compactParams(params);

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
};

export const trackPageView = ({ title, path }) => {
  if (!isBrowser()) return;

  trackEvent("page_view", {
    page_title: title ?? document.title,
    page_location: window.location.href,
    page_path: path ?? window.location.pathname,
  });
};

export const trackSelectProject = (project) => {
  const projectId = getProjectId(project);

  trackEvent("select_content", {
    content_type: "project",
    content_id: projectId,
    ...getProjectEventParams(project),
  });
};

export const trackProjectDetail = (project) => {
  trackEvent("view_project_detail", getProjectEventParams(project));
};

export const trackDemoVideo = (project) => {
  const videoUrl = project?.demo?.url;
  if (!videoUrl) return;

  trackEvent("click_demo_video", {
    ...getProjectEventParams(project),
    video_url: videoUrl,
    destination_domain: getDestinationDomain(videoUrl),
  });
};

export const trackProjectResource = (project, resourceType, destinationUrl) => {
  if (!destinationUrl || destinationUrl === "#") return;

  trackEvent("click_project_resource", {
    ...getProjectEventParams(project),
    resource_type: resourceType,
    destination_url: destinationUrl,
  });
};

export const trackProjectSectionView = (project, sectionName) => {
  trackEvent("view_project_section", {
    ...getProjectEventParams(project),
    section_name: sectionName,
  });
};
