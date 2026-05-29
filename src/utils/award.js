export const getAwardStyle = (award) => {
  switch (award) {
    case "Grand Prize":
      return "bg-amber-100 text-amber-900";
    case "Top Excellence Award":
      return "bg-rose-100 text-rose-900";
    case "Excellence Award":
      return "bg-indigo-100 text-indigo-900";
    case "Perfect Award":
      return "bg-teal-100 text-teal-900";
    default:
      return "bg-purple-100 text-purple-900";
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
