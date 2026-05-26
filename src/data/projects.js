const projects = [
  {
    subtitle:
      "관람객의 관심사와 동선에 맞춰 전시 작품을 쉽게 설명하는 저코드 AI 서비스",
    summary:
      "전시장에서 관람객이 QR을 스캔하면 AI가 작품 정보, 관람 포인트, 추천 동선을 대화형으로 안내합니다.",
    tags: ["Low-Code", "AI Chatbot", "Exhibition", "UX Automation"],
    intro:
      "스마트 전시 도슨트 AI는 복잡한 전시 정보를 관람객이 이해하기 쉬운 언어로 바꿔 전달하는 프로젝트입니다. 운영자는 저코드 환경에서 작품 데이터와 FAQ를 등록하고, 관람객은 모바일 화면에서 바로 맞춤형 설명을 확인할 수 있습니다.",
    problem:
      "기존 전시 안내는 안내문, 팸플릿, 정해진 도슨트 시간에 의존하는 경우가 많아 관람객마다 다른 질문과 관심사를 충분히 반영하기 어렵습니다. 특히 사람이 몰리는 시간에는 안내 인력이 부족하고, 외국어 안내나 접근성 지원도 제한적입니다.",
    solution:
      "작품 데이터, 전시 공간 정보, 자주 묻는 질문을 AI 응답 흐름과 연결해 관람객이 필요한 순간에 즉시 답변을 받을 수 있도록 설계했습니다. 운영자는 별도 개발 없이 콘텐츠를 수정할 수 있고, 관람객은 자신의 속도에 맞춰 전시를 경험할 수 있습니다.",
    features: [
      {
        title: "맞춤형 작품 설명",
        description:
          "관람객의 연령대, 관심 주제, 선호 난이도에 맞춰 작품 설명 톤과 길이를 조절합니다.",
      },
      {
        title: "대화형 Q&A",
        description:
          "작품 의미, 작가 정보, 관람 포인트를 자연어 질문으로 물어볼 수 있습니다.",
      },
      {
        title: "추천 관람 동선",
        description:
          "남은 관람 시간과 혼잡도를 기준으로 다음 작품과 이동 순서를 제안합니다.",
      },
      {
        title: "운영자 저코드 관리",
        description:
          "작품 설명, FAQ, 추천 문구를 폼 기반 관리 화면에서 빠르게 수정할 수 있습니다.",
      },
    ],
    references: {
      ppt: "#",
      deploy: "#",
    },
  },
  {
    subtitle:
      "학생의 학습 기록을 분석해 복습 계획과 질문 답변을 제공하는 AI 튜터",
    summary:
      "수업 자료와 오답 데이터를 기반으로 개인별 취약 개념을 찾아 학습 루틴을 제안합니다.",
    tags: ["Education", "AI Tutor", "Dashboard"],
    intro:
      "학습 케어 챗봇은 학생이 모르는 개념을 편하게 질문하고, 교사는 학습 상태를 빠르게 확인할 수 있도록 돕는 서비스입니다.",
    problem:
      "학생마다 이해 속도와 질문 방식이 다르지만, 기존 수업 환경에서는 개별 피드백을 충분히 제공하기 어렵습니다.",
    solution:
      "오답 유형과 질문 로그를 AI가 분석해 다음 학습 과제를 제안하고, 교사용 대시보드로 반복되는 어려움을 확인할 수 있게 합니다.",
    features: [
      {
        title: "오답 기반 추천",
        description: "자주 틀리는 개념을 묶어 복습 우선순위를 제안합니다.",
      },
      {
        title: "24시간 질문 응답",
        description: "수업 자료 범위 안에서 학생 질문에 단계적으로 답변합니다.",
      },
      {
        title: "교사용 리포트",
        description: "반 전체의 취약 단원과 질문 빈도를 요약합니다.",
      },
      {
        title: "학습 루틴 알림",
        description: "개인별 목표와 진도에 맞춰 복습 알림을 보냅니다.",
      },
    ],
    references: {
      ppt: "#",
      deploy: "#",
    },
  },
  {
    subtitle:
      "상인이 상품 홍보 문구와 재고 알림을 쉽게 관리하는 저코드 자동화 도구",
    summary:
      "상품 사진과 가격을 입력하면 홍보 문구, 알림 메시지, 판매 리포트를 자동으로 생성합니다.",
    tags: ["Commerce", "Automation", "Local Business"],
    intro:
      "전통시장 운영 도우미는 디지털 마케팅에 익숙하지 않은 상인도 모바일에서 상품 홍보와 고객 알림을 관리할 수 있도록 만든 프로젝트입니다.",
    problem:
      "소규모 상점은 홍보 문구 작성, 고객 공지, 재고 관리에 시간을 많이 쓰지만 별도 운영 도구를 도입하기 어렵습니다.",
    solution:
      "저코드 입력 폼과 AI 문구 생성을 연결해 상품 정보만 입력하면 채널별 홍보 문구와 재고 알림 메시지를 자동으로 만듭니다.",
    features: [
      {
        title: "상품 홍보 문구 생성",
        description:
          "상품명, 가격, 사진 설명을 바탕으로 짧은 홍보 문구를 만듭니다.",
      },
      {
        title: "재고 알림",
        description: "설정한 수량 이하로 내려가면 확인 알림을 표시합니다.",
      },
      {
        title: "채널별 메시지",
        description:
          "카카오톡, 문자, SNS에 맞는 길이와 톤으로 문구를 변환합니다.",
      },
      {
        title: "판매 요약 리포트",
        description: "주간 인기 상품과 반복 구매 상품을 간단히 보여줍니다.",
      },
    ],
    references: {
      ppt: "#",
      deploy: "#",
    },
  },
];

const awardTeams = [
  { title: "Hicosong", slug: "hicosong", award: "Grand Prize" },
  { title: "Sokeukeu", slug: "sokeukeu", award: "Top Excellence Award" },
  { title: "FIT", slug: "fit", award: "Excellence Award" },
  { title: "Nailgent", slug: "nailgent", award: "Excellence Award" },
  { title: "SolarSystem", slug: "solarsystem", award: "Popularity Award" },
  { title: "Sisam", slug: "sisam", award: "Effort Award" },
  { title: "LOCOMOCO", slug: "locomoco", award: "Perfect Award" },
];

const members = [
  {
    name: "김하린",
    role: "PM / 서비스 기획",
    description: "사용자 흐름과 전시 운영 시나리오를 설계했습니다.",
  },
  {
    name: "박준서",
    role: "AI 플로우 설계",
    description: "작품 데이터 기반 응답 구조와 프롬프트 정책을 구성했습니다.",
  },
  {
    name: "이서윤",
    role: "Frontend",
    description: "모바일 관람 화면과 관리자 입력 화면의 UI를 구현했습니다.",
  },
  {
    name: "최민재",
    role: "UX Research",
    description: "관람객 인터뷰와 문제 정의, 테스트 피드백을 담당했습니다.",
  },
];

export const projectRoutes = awardTeams.map((team, index) => {
  const template = projects[index % projects.length];

  return {
    ...template,
    id: team.slug,
    slug: team.slug,
    title: team.title,
    award: team.award,
    demo: {
      title: "데모 영상 준비 중",
      description:
        "추후 유튜브 링크를 연결하면 이 영역에 영상 임베드 또는 썸네일이 표시될 예정입니다.",
    },
    members,
  };
});
