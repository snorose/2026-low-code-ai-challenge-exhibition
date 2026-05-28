export const getAwardStyle = (award) => {
  switch (award) {
    case "Grand Prize":
      return "bg-amber-100 text-amber-900 dark:bg-amber-500/10 dark:text-amber-200";
    case "Top Excellence Award":
      return "bg-rose-100 text-rose-900 dark:bg-rose-500/10 dark:text-rose-200";
    case "Excellence Award":
      return "bg-indigo-100 text-indigo-900 dark:bg-indigo-500/10 dark:text-indigo-200";
    case "Perfect Award":
      return "bg-teal-100 text-teal-900 dark:bg-teal-500/10 dark:text-teal-200";
    default:
      return "bg-purple-100 text-purple-900 dark:bg-purple-500/10 dark:text-purple-200";
  }
};

export const getAwardLabelKo = (award) => {
  switch (award) {
    case "Grand Prize":
      return "🏆 대상";
    case "Top Excellence Award":
      return "🥇 최우수상";
    case "Excellence Award":
      return "🥈 우수작";
    case "Perfect Award":
      return "✨ 완성도상";
    case "Popularity Award":
      return "🔥 인기상";
    case "Effort Award":
      return "🌱 노력상";
    default:
      return `🎉 ${award}`;
  }
};
