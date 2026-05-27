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
  { title: "스노러닝", slug: "hicosong", award: "Grand Prize" },
  {
    title: "RECLAIM : AI가 찾아주는 소비자 권리",
    slug: "sokeukeu",
    award: "Top Excellence Award",
  },
  {
    title: "숙명여대 배리어프리 지도 VeriWay",
    slug: "fit",
    award: "Excellence Award",
  },
  { title: "Reservia", slug: "nailgent", award: "Excellence Award" },
  { title: "Sol-mate", slug: "solarsystem", award: "Popularity Award" },
  { title: "자소핏", slug: "sisam", award: "Effort Award" },
  { title: "어디두지", slug: "locomoco", award: "Perfect Award" },
];

const projectOverrides = {
  hicosong: {
    subtitle: "AI 기반 대학 학사·학습 통합 관리 서비스",
    summary:
      "졸업 요건 분석부터 일정 관리, 비교과 활동 탐색까지 대학 생활 관리를 통합 제공하는 서비스입니다.",
    tags: ["Campus", "Document AI", "Solar Pro", "Calendar"],
    intro:
      "스노러닝은 졸업 요건 분석부터 일정 관리, 비교과 활동 탐색까지 대학 생활 관리를 통합 제공하는 서비스입니다. 사용자는 졸업 심사 학점 이수표와 강의계획서 PDF를 업로드해 서비스를 이용할 수 있으며, Google Calendar 연동을 통해 주요 학사 일정을 자동 등록할 수 있습니다.",
    problem:
      "학사 정보와 공지가 여러 시스템에 흩어져 있고, 졸업 요건과 이수 현황을 직접 계산해야 합니다. 강의계획서 기반 일정 관리도 수작업으로 해야 하므로 학업 관리 부담과 정보 누락 문제가 존재합니다.",
    solution:
      "스노러닝은 Document AI와 Solar Pro를 활용해 PDF OCR 및 구조 분석으로 졸업 요건 데이터를 추출합니다. 또한 과제, 시험, 비교과 프로그램 일정을 자동 생성하고 Google Calendar와 연동해 주요 학사 일정을 쉽게 관리할 수 있도록 돕습니다.",
    features: [
      {
        title: "졸업 요건 분석",
        description:
          "졸업 심사 학점 이수표를 분석해 졸업 요건과 현재 이수 현황을 확인합니다.",
      },
      {
        title: "비교과 및 학과 공지 통합 조회",
        description:
          "여러 시스템에 흩어진 비교과 활동과 학과 공지를 한곳에서 확인할 수 있게 합니다.",
      },
      {
        title: "학기 일정 자동 관리",
        description:
          "강의계획서와 학사 자료를 기반으로 과제, 시험, 비교과 일정을 자동 등록합니다.",
      },
    ],
  },
  sokeukeu: {
    subtitle:
      "환불·해지 분쟁 상황에서 소비자 권리를 AI가 분석하고 안내하는 서비스",
    summary:
      "계약서와 피해 상황을 분석해 독소조항, 관련 법령, 판례, 피해구제 가이드를 안내합니다.",
    tags: ["Legal Tech", "RAG", "Document AI", "Consumer Rights"],
    intro:
      "RECLAIM은 헬스장 중도 해지, 학원 환불, 항공권 취소, OTT 정기결제 해지 등 일상 속 환불·해지 분쟁 상황에서 소비자 권리를 안내하는 AI 서비스입니다. 사용자가 계약서 이미지 또는 PDF와 피해 상황을 입력하면 관련 법령, 판례, 유사 피해분쟁해결 사례를 검색합니다. 이후 계약서 내 독소조항을 분석하고 피해구제 가이드를 제공하며, 필요 시 한국소비자원 1372 상담센터로 연결할 수 있습니다.",
    problem:
      "1372 상담 인력 부족으로 상담 대기 시간이 길고, 소비자가 계약서와 법률을 이해하기 어렵습니다. 부당한 위약금이나 환불 거부 상황에서도 대응 방법을 모르는 경우가 많으며, 기존 법률 챗봇은 단순 정보 전달 중심이라 실제 피해 상황 대응에 한계가 있습니다.",
    solution:
      "RECLAIM은 Upstage Document Parse로 업로드된 계약서를 OCR 파싱해 텍스트화하고, 조항 단위로 분리해 환불 불가, 위약금, 자동갱신, 면책조항 등 독소조항을 탐지합니다. Upstage Embedding, Qdrant Vector DB, RAG Pipeline으로 사용자 피해 상황과 계약서 핵심 조항에 맞는 법률·판례·분쟁해결 기준을 검색하고, Upstage Solar Pro Chat Model이 피해구제 가이드를 생성합니다. 생성 결과는 Groundedness Validation과 Fact Check Prompt로 실제 검색 문서 기반인지 검증합니다.",
    features: [
      {
        title: "계약서 분석",
        description:
          "계약서 이미지 또는 PDF를 업로드하면 OCR로 텍스트를 추출하고 주요 조항을 분석합니다.",
      },
      {
        title: "독소조항 추출",
        description:
          "환불 불가, 과도한 위약금, 자동갱신, 면책조항 등 소비자에게 불리한 조항을 탐지합니다.",
      },
      {
        title: "판례 및 유사 피해 사례 검색",
        description:
          "피해 상황과 계약서 핵심 조항을 기반으로 관련 법령, 판례, 유사 분쟁해결 사례를 검색합니다.",
      },
      {
        title: "피해구제 가이드 생성",
        description:
          "검색된 법률 자료와 계약 조항을 바탕으로 사용자가 취할 수 있는 대응 절차를 안내합니다.",
      },
      {
        title: "1372 상담센터 연결",
        description:
          "추가 상담이 필요한 경우 한국소비자원 1372 상담센터로 이어질 수 있도록 안내합니다.",
      },
    ],
  },
  fit: {
    subtitle: "AI 기반 배리어프리 경로 안내 서비스",
    summary:
      "휠체어, 목발, 캐리어 이동자 등 이동 약자를 위해 교내 이동 편의성과 안전성을 고려한 경로를 추천합니다.",
    tags: ["Barrier-free", "Campus Map", "Accessibility", "AI Route"],
    intro:
      "VeriWay는 숙명여대 학생들을 위한 AI 기반 배리어프리 지도 서비스입니다. 휠체어 이용자, 목발 사용자, 캐리어 이동자 등 이동 약자를 위한 경로 안내를 제공하고, 엘리베이터, 경사로, 턱 여부, 야간 이동 환경 등을 고려한 경로 추천 기능을 제공합니다.",
    problem:
      "기존 지도 서비스는 최단 거리 중심이며, 교내 엘리베이터, 경사로, 턱 정보가 부족합니다. 캠퍼스 구조가 복잡해 이동 약자에게 불편하고, 야간·우천 환경을 고려한 경로 안내도 부족합니다.",
    solution:
      "VeriWay는 휠체어, 목발, 캐리어 등 사용자 상황별 맞춤 경로를 추천하고 엘리베이터, 경사로, 장애인 화장실 위치를 제공합니다. AI가 이동 편의성과 안전성을 함께 고려해 경로를 판단하며, 누구나 쉽게 사용할 수 있는 직관적인 캠퍼스 지도 UI를 제공합니다.",
    features: [
      {
        title: "AI 기반 배리어프리 경로 추천",
        description:
          "이동 편의성과 안전성을 고려해 이동 약자에게 적합한 교내 경로를 안내합니다.",
      },
      {
        title: "사용자 상황별 맞춤 길찾기",
        description:
          "휠체어, 목발, 캐리어 등 사용자의 이동 상황에 맞는 경로를 추천합니다.",
      },
      {
        title: "엘리베이터 및 경사로 위치 안내",
        description:
          "건물별 엘리베이터와 경사로 위치를 지도에서 확인할 수 있도록 제공합니다.",
      },
      {
        title: "장애인 편의시설 지도 표시",
        description:
          "장애인 화장실 등 필요한 편의시설 정보를 캠퍼스 지도에 표시합니다.",
      },
      {
        title: "교내 건물 이동 경로 안내",
        description:
          "복잡한 캠퍼스 구조 안에서 건물 간 이동 경로를 쉽게 확인할 수 있습니다.",
      },
      {
        title: "직관적인 캠퍼스 지도 UI",
        description:
          "누구나 빠르게 이해하고 사용할 수 있는 지도 중심 인터페이스를 제공합니다.",
      },
    ],
  },
  nailgent: {
    subtitle:
      "비정형 예약 문의를 AI가 이해해 예약·변경·취소까지 자동 처리하는 예약 응대 매니저",
    summary:
      "자연어 예약 문의에서 날짜, 시간, 옵션을 추출하고 결제 확인과 캘린더 등록까지 자동 처리합니다.",
    tags: ["Reservation", "n8n", "Kakao Webhook", "Automation"],
    intro:
      "Reservia는 1인 네일샵 및 소규모 예약 기반 업종을 위한 AI 예약 자동화 서비스입니다. 고객은 카카오톡 등 채팅 환경에서 자연어로 예약 문의를 남길 수 있습니다. AI는 예약 의도, 희망 날짜와 시간, 시술 옵션 등을 추출하고 예약 가능 여부 확인, 누락 정보 재질문, 결제 확인, Google Calendar 등록까지 자동 처리합니다. 사장님은 관리자 페이지에서 예약 현황과 고객 정보를 한눈에 관리할 수 있습니다.",
    problem:
      "1인 네일샵은 시술과 예약 응대를 동시에 처리해야 하고, 문의 채널과 문의 형식이 모두 비정형적입니다. 예약 가능 여부 확인, 옵션 확인, 선입금 확인 등을 수작업으로 처리해야 하며 응답 지연, 예약 누락, 고객 이탈 문제가 발생합니다. 기존 예약 서비스는 자연어 기반의 복잡한 예약 흐름을 처리하기 어렵습니다.",
    solution:
      "Reservia는 Kakao Webhook, n8n Workflow, Solar-pro LLM으로 고객 문의를 수집하고 예약 정보를 구조화합니다. n8n Workflow와 Document Parser를 활용해 신규 예약, 문의, 변경, 취소 등 업무를 분기하고, AWS EC2/RDS/S3, Toss Payments API, Google Calendar API, React, Vite, Vercel 기반으로 예약 가능 여부 확인, 대체 시간 제안, 선입금 확인, Google Calendar 등록을 자동 처리합니다.",
    features: [
      {
        title: "자연어 예약 문의 처리",
        description:
          "카카오톡 등 채팅 환경에서 들어온 비정형 예약 문의를 AI가 이해합니다.",
      },
      {
        title: "예약 정보 Slot 추출",
        description:
          "희망 날짜, 시간, 시술 옵션 등 예약에 필요한 핵심 정보를 추출합니다.",
      },
      {
        title: "누락 정보 자동 재질문",
        description:
          "예약에 필요한 정보가 부족하면 고객에게 필요한 내용을 자동으로 다시 질문합니다.",
      },
      {
        title: "예약 가능 시간 확인 및 대체 시간 제안",
        description:
          "캘린더와 예약 현황을 확인해 가능 시간을 안내하고 대체 시간을 제안합니다.",
      },
      {
        title: "선입금 확인 기반 예약 확정",
        description:
          "결제 확인 절차와 연동해 선입금 완료 후 예약을 확정합니다.",
      },
      {
        title: "Google Calendar 자동 등록",
        description:
          "확정된 예약 일정을 Google Calendar에 자동으로 등록합니다.",
      },
      {
        title: "예약 변경 및 취소 자동 처리",
        description:
          "고객의 변경 또는 취소 요청을 분류하고 필요한 예약 운영 절차를 자동화합니다.",
      },
      {
        title: "Document Parsing 기반 샵 정보 관리",
        description:
          "샵 운영 정보와 시술 정보를 문서 기반으로 관리하고 예약 응대에 활용합니다.",
      },
      {
        title: "관리자 대시보드 제공",
        description:
          "사장님이 예약 현황과 고객 정보를 한눈에 확인할 수 있는 관리 화면을 제공합니다.",
      },
    ],
  },
  solarsystem: {
    subtitle: "사진 한 장으로 시작하는 맞춤형 AI 헬스케어",
    summary:
      "건강 문서와 자세 사진을 AI가 분석해 개인 맞춤 운동 루틴과 실천 일정을 추천하는 헬스케어 보조 서비스입니다.",
    tags: [
      "Healthcare",
      "Document AI",
      "Pose Analysis",
      "Solar LLM",
      "Automation",
    ],
    intro:
      "Sol-mate는 건강 문서와 자세 사진을 AI가 분석해 개인 맞춤 운동 루틴을 추천하는 헬스케어 보조 서비스입니다. 사용자는 인바디 결과지와 자세 사진을 업로드하고 통증 부위나 운동 목표를 입력하면 됩니다. AI는 문서 분석, 자세 체크, 운동 추천, 일정 등록까지 하나의 흐름으로 자동화해 복잡한 건강 정보를 사용자가 직접 해석하지 않아도 자신에게 맞는 운동을 쉽게 시작할 수 있도록 돕습니다.",
    problem:
      "현대인은 장시간 디지털 기기 사용으로 거북목, 목·어깨 통증 등 자세 문제를 자주 겪습니다. 인바디 결과지나 건강검진표에는 중요한 정보가 담겨 있지만 일반 사용자가 이를 해석하기 어렵고, 기존 운동 앱은 건강 문서, 자세 상태, 통증 부위, 운동 목표를 종합적으로 반영하기 어렵습니다. 사용자가 운동 전 문서 해석, 영상 검색, 루틴 구성, 일정 관리까지 직접 해야 하는 진입 장벽도 존재합니다.",
    solution:
      "Sol-mate는 Upstage Document Parse와 Information Extract로 인바디 결과지 등 건강 문서에서 체중, BMI, 체지방률, 골격근량을 추출합니다. MediaPipe 기반 자세 분석으로 어깨 비대칭, 좌우 기울어짐, 거북목 경향을 확인하고, Solar LLM이 건강 정보와 자세 분석 결과, 통증 부위, 운동 목표를 종합해 개인 맞춤 운동 루틴과 주의사항을 추천합니다. 이후 n8n Workflow, Calendar API, FastAPI를 활용해 추천 루틴을 일정으로 등록하고 운동 기록과 주간 리포트를 제공합니다.",
    features: [
      {
        title: "건강 문서 자동 분석",
        description:
          "인바디 결과지 등 건강 문서를 업로드하면 AI가 체중, BMI, 체지방률, 골격근량 등을 추출합니다.",
      },
      {
        title: "자세 사진 기반 분석",
        description:
          "정면·측면 자세 사진을 기반으로 어깨 비대칭, 좌우 기울어짐, 거북목 경향 등을 분석합니다.",
      },
      {
        title: "AI 맞춤 운동 루틴 추천",
        description:
          "건강 정보, 자세 분석 결과, 통증 부위, 운동 목표를 종합해 개인 맞춤 운동 루틴과 주의사항을 추천합니다.",
      },
      {
        title: "운동 일정 자동 등록",
        description:
          "추천 운동 루틴을 캘린더 일정으로 등록해 사용자가 바로 실천할 수 있도록 돕습니다.",
      },
      {
        title: "운동 기록 및 주간 리포트 제공",
        description:
          "운동 수행 기록을 관리하고 주간 리포트로 변화와 실천 현황을 확인할 수 있게 합니다.",
      },
      {
        title: "의료 안전 안내 기능",
        description:
          "사용자가 운동을 시작하기 전 주의사항과 의료 안전 안내를 함께 제공합니다.",
      },
    ],
  },
  sisam: {
    subtitle: "JD 및 프로젝트 분석 기반 자소서 생성 AI Agent",
    summary:
      "사용자의 경험 파일과 JD를 분석해 기업별 인재상에 맞는 자소서 초안과 면접 질문을 생성합니다.",
    tags: ["Career", "Solar LLM", "Document Parse", "Supabase"],
    intro:
      "자소핏은 사용자의 프로젝트·대외활동·스터디 경험 파일과 JD(Job Description)를 기반으로 자소서 초안과 면접 질문을 생성하는 AI 서비스입니다. 사용자의 경험을 구조화된 Experience Unit 형태로 저장하고 기업별 인재상에 맞게 재해석합니다.",
    problem:
      "경험 데이터가 여러 문서에 흩어져 있고, 시간이 지나면 경험 세부 내용이 기억에서 사라집니다. 기업과 직무마다 자소서를 반복 작성해야 하는 부담도 큽니다.",
    solution:
      "자소핏은 Upstage Document Parse API와 Supabase를 활용해 활동 자료를 파싱 및 구조화해 저장합니다. Solar LLM으로 경험을 상황·과제·행동·결과 기반 STAR 구조로 분석하고, JD를 해석해 적합한 경험을 매칭한 뒤 자소서를 생성합니다.",
    features: [
      {
        title: "경험 데이터베이스화",
        description:
          "프로젝트, 대외활동, 스터디 경험 파일을 파싱해 구조화된 Experience Unit으로 저장합니다.",
      },
      {
        title: "STAR 기반 경험 분석",
        description:
          "사용자 경험을 상황, 과제, 행동, 결과 기준으로 정리해 자기소개서에 활용할 수 있게 합니다.",
      },
      {
        title: "JD 기반 자소서 생성",
        description:
          "채용 공고의 요구 역량을 분석해 가장 적합한 경험을 매칭하고 자소서 초안을 생성합니다.",
      },
      {
        title: "면접 예상 질문 생성",
        description:
          "작성된 자소서와 경험 데이터를 바탕으로 면접에서 나올 수 있는 질문을 제안합니다.",
      },
      {
        title: "노션 보고서 자동 발행",
        description:
          "정리된 경험 분석 결과와 생성 내용을 노션 보고서 형태로 자동 발행합니다.",
      },
    ],
  },
  locomoco: {
    subtitle:
      "흩어진 캡처 이미지를 AI가 이해하고 자연어로 찾아주는 이미지 검색 자동화 서비스",
    summary:
      "공지, 과제, 영수증, 장소 링크 등 캡처 이미지를 분석해 핵심 정보를 구조화하고 자연어로 검색합니다.",
    tags: ["Image Search", "Document Parse", "Solar LLM", "Automation"],
    intro:
      "어디두지는 사용자가 저장한 캡처 이미지를 AI가 직접 이해하고 중요한 정보를 자동 구조화하는 서비스입니다. 공지, 과제, 영수증, 장소 링크 등 다양한 캡처 이미지를 분석해 마감 일정, 금액, 제출물 등의 핵심 정보를 추출합니다. 사용자는 자연어 검색으로 원하는 정보를 빠르게 찾을 수 있습니다.",
    problem:
      "캡처 이미지를 저장만 하고 다시 찾기 어렵고, 핵심 정보를 다시 읽어야 해 비효율적입니다. 마감일, 제출물, 금액 등을 놓치는 문제가 발생하며 여러 앱과 채팅방에 정보가 흩어져 있습니다. 기존 갤러리 앱은 실행 정보 중심 구조화 기능이 부족합니다.",
    solution:
      "어디두지는 Document Parse로 이미지 내 텍스트와 문서 구조를 추출하고 Document Classify로 공지, 과제, 영수증 등을 자동 분류합니다. Information Extract를 통해 문서 유형별 스키마 기반 핵심 정보를 추출하고, Rule-based Prioritization과 Confidence Scoring으로 중요 정보를 카드 형태로 정리합니다. 이후 Solar LLM, Query Planning, Evidence-bound Answering으로 자연어 질문 기반 검색과 응답을 제공합니다.",
    features: [
      {
        title: "캡처 자동 이해 및 분류",
        description:
          "캡처 이미지 속 텍스트와 구조를 분석하고 공지, 과제, 영수증 등 유형을 자동 분류합니다.",
      },
      {
        title: "핵심 정보 자동 추출",
        description:
          "문서 유형별 스키마를 기반으로 마감일, 금액, 제출물 등 중요한 정보를 추출합니다.",
      },
      {
        title: "중요 정보 카드화",
        description:
          "우선순위와 신뢰도를 반영해 바로 확인해야 할 정보를 카드 형태로 정리합니다.",
      },
      {
        title: "자연어 기반 캡처 검색",
        description:
          "사용자가 자연어로 질문하면 관련 캡처를 찾아 근거 기반 답변을 제공합니다.",
      },
    ],
  },
};

const projectMembers = {
  hicosong: [
    {
      name: "문정하",
      role: "컴퓨터과학전공",
      description: "발표, 발표 자료 제작 (개발 참여)",
    },
    {
      name: "신지원",
      role: "컴퓨터과학전공",
      description: "일정 관리, 포스터 제작 (개발 참여)",
    },
    {
      name: "하지원",
      role: "컴퓨터과학전공",
      description: "프론트엔드 및 백엔드 개발 주축",
    },
    {
      name: "제유진",
      role: "컴퓨터과학전공",
      description: "발표 자료 제작 (개발 참여)",
    },
  ],
  sokeukeu: [
    {
      name: "인영서",
      role: "소비자경제학과, 컴퓨터과학 복수전공",
    },
    {
      name: "박주현",
      role: "소비자경제학과, 데이터사이언스학과 복수전공",
    },
    {
      name: "박지해",
      role: "소비자경제학과, 데이터사이언스학과 복수전공",
    },
    {
      name: "장현정",
      role: "소비자경제학과, 데이터사이언스학과 복수전공",
    },
  ],
  fit: [
    {
      name: "이다희",
      role: "컴퓨터과학과",
      description: "데이터 수집 및 기획",
    },
    {
      name: "정주현",
      role: "컴퓨터과학과",
      description: "포스터 제작 및 프론트엔드 개발",
    },
    {
      name: "김나연",
      role: "컴퓨터과학과",
      description: "데이터 수집 및 데이터 구축/연결, 워크플로우 구축",
    },
    {
      name: "유가영",
      role: "컴퓨터과학과",
      description: "백엔드개발 및 AI 개발",
    },
  ],
  nailgent: [
    {
      name: "김지수",
      role: "데이터사이언스 23",
      description: "AI",
    },
    {
      name: "김미지",
      role: "통계학과 22",
      description: "AI",
    },
    {
      name: "정교은",
      role: "컴퓨터과학과 23",
      description: "Frontend, Design",
    },
    {
      name: "남민서",
      role: "데이터사이언스 23",
      description: "Backend, Infra",
    },
  ],
  sisam: [
    {
      name: "금고은",
      role: "IT공학전공",
      description: "백엔드, AI 개발",
    },
    {
      name: "박소요",
      role: "컴퓨터과학전공",
      description: "프론트엔드, AI 개발",
    },
    {
      name: "최예진",
      role: "컴퓨터과학전공",
      description: "백엔드, AI 개발",
    },
  ],
  locomoco: [
    {
      name: "박민지",
      role: "소프트웨어학부",
      description: "PM / n8n 워크플로우 설계",
    },
    {
      name: "김민주",
      role: "인공지능공학부",
      description: "Workflow 개발 및 Upstage API 연동",
    },
    {
      name: "김서진",
      role: "인공지능공학부",
      description: "프론트엔드 개발",
    },
    {
      name: "남예현",
      role: "인공지능공학부",
      description: "Data/QA",
    },
  ],
};

const members = [
  {
    name: "김리원",
    role: null,
    description: "프론트엔드 UI/UX와 사용자 플로우를 구현했습니다.",
  },
  {
    name: "김서영",
    role: null,
    description: "n8n Workflow와 서비스 자동화 흐름을 구현했습니다.",
  },
  {
    name: "박세희",
    role: null,
    description: "AI 문서 분석과 추천 로직을 구현했습니다.",
  },
  {
    name: "안서희",
    role: null,
    description:
      "자세 분석 기능과 서비스 검증 제작, 발표 자료 제작을 담당했습니다.",
  },
];

export const projectRoutes = awardTeams.map((team, index) => {
  const template = projects[index % projects.length];
  const override = projectOverrides[team.slug] ?? {};
  const teamMembers = projectMembers[team.slug] ?? members;

  return {
    ...template,
    ...override,
    id: team.slug,
    slug: team.slug,
    title: team.title,
    award: team.award,
    demo: {
      title: "데모 영상 준비 중",
      description:
        "추후 유튜브 링크를 연결하면 이 영역에 영상 임베드 또는 썸네일이 표시될 예정입니다.",
    },
    members: teamMembers,
  };
});
