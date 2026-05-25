import { useState } from 'react'
import ProjectDetail from './pages/ProjectDetail'
import './App.css'

const projects = [
  {
    id: 'smart-docent-ai',
    title: '스마트 전시 도슨트 AI',
    subtitle: '관람객의 관심사와 동선에 맞춰 전시 작품을 쉽게 설명하는 저코드 AI 서비스',
    summary:
      '전시장에서 관람객이 QR을 스캔하면 AI가 작품 정보, 관람 포인트, 추천 동선을 대화형으로 안내합니다.',
    tags: ['Low-Code', 'AI Chatbot', 'Exhibition', 'UX Automation'],
    intro:
      '스마트 전시 도슨트 AI는 복잡한 전시 정보를 관람객이 이해하기 쉬운 언어로 바꿔 전달하는 프로젝트입니다. 운영자는 저코드 환경에서 작품 데이터와 FAQ를 등록하고, 관람객은 모바일 화면에서 바로 맞춤형 설명을 확인할 수 있습니다.',
    problem:
      '기존 전시 안내는 안내문, 팸플릿, 정해진 도슨트 시간에 의존하는 경우가 많아 관람객마다 다른 질문과 관심사를 충분히 반영하기 어렵습니다. 특히 사람이 몰리는 시간에는 안내 인력이 부족하고, 외국어 안내나 접근성 지원도 제한적입니다.',
    solution:
      '작품 데이터, 전시 공간 정보, 자주 묻는 질문을 AI 응답 흐름과 연결해 관람객이 필요한 순간에 즉시 답변을 받을 수 있도록 설계했습니다. 운영자는 별도 개발 없이 콘텐츠를 수정할 수 있고, 관람객은 자신의 속도에 맞춰 전시를 경험할 수 있습니다.',
    features: [
      {
        title: '맞춤형 작품 설명',
        description: '관람객의 연령대, 관심 주제, 선호 난이도에 맞춰 작품 설명 톤과 길이를 조절합니다.',
      },
      {
        title: '대화형 Q&A',
        description: '작품 의미, 작가 정보, 관람 포인트를 자연어 질문으로 물어볼 수 있습니다.',
      },
      {
        title: '추천 관람 동선',
        description: '남은 관람 시간과 혼잡도를 기준으로 다음 작품과 이동 순서를 제안합니다.',
      },
      {
        title: '운영자 저코드 관리',
        description: '작품 설명, FAQ, 추천 문구를 폼 기반 관리 화면에서 빠르게 수정할 수 있습니다.',
      },
    ],
    demo: {
      title: '데모 영상 준비 중',
      description:
        '추후 유튜브 링크를 연결하면 이 영역에 영상 임베드 또는 썸네일이 표시될 예정입니다.',
    },
    members: [
      { name: '김하린', role: 'PM / 서비스 기획', description: '사용자 흐름과 전시 운영 시나리오를 설계했습니다.' },
      { name: '박준서', role: 'AI 플로우 설계', description: '작품 데이터 기반 응답 구조와 프롬프트 정책을 구성했습니다.' },
      { name: '이서윤', role: 'Frontend', description: '모바일 관람 화면과 관리자 입력 화면의 UI를 구현했습니다.' },
      { name: '최민재', role: 'UX Research', description: '관람객 인터뷰와 문제 정의, 테스트 피드백을 담당했습니다.' },
    ],
    references: [
      '전시 관람객 인터뷰 요약 리포트',
      '국립현대미술관 온라인 전시 해설 사례',
      '접근성 높은 문화 서비스 디자인 가이드',
      'AI 챗봇 응답 품질 테스트 체크리스트',
    ],
  },
  {
    id: 'learning-care-bot',
    title: '학습 케어 챗봇',
    subtitle: '학생의 학습 기록을 분석해 복습 계획과 질문 답변을 제공하는 AI 튜터',
    summary:
      '수업 자료와 오답 데이터를 기반으로 개인별 취약 개념을 찾아 학습 루틴을 제안합니다.',
    tags: ['Education', 'AI Tutor', 'Dashboard'],
    intro:
      '학습 케어 챗봇은 학생이 모르는 개념을 편하게 질문하고, 교사는 학습 상태를 빠르게 확인할 수 있도록 돕는 서비스입니다.',
    problem:
      '학생마다 이해 속도와 질문 방식이 다르지만, 기존 수업 환경에서는 개별 피드백을 충분히 제공하기 어렵습니다.',
    solution:
      '오답 유형과 질문 로그를 AI가 분석해 다음 학습 과제를 제안하고, 교사용 대시보드로 반복되는 어려움을 확인할 수 있게 합니다.',
    features: [
      { title: '오답 기반 추천', description: '자주 틀리는 개념을 묶어 복습 우선순위를 제안합니다.' },
      { title: '24시간 질문 응답', description: '수업 자료 범위 안에서 학생 질문에 단계적으로 답변합니다.' },
      { title: '교사용 리포트', description: '반 전체의 취약 단원과 질문 빈도를 요약합니다.' },
      { title: '학습 루틴 알림', description: '개인별 목표와 진도에 맞춰 복습 알림을 보냅니다.' },
    ],
    demo: {
      title: '데모 영상 준비 중',
      description: '실제 시연 영상의 유튜브 링크를 추후 연결할 예정입니다.',
    },
    members: [
      { name: '정다은', role: 'PM', description: '학습 시나리오와 사용자 요구사항을 정리했습니다.' },
      { name: '윤태호', role: 'Frontend', description: '학생용 챗봇 화면과 교사용 대시보드를 구성했습니다.' },
      { name: '한소민', role: 'AI 설계', description: '학습 자료 검색과 답변 흐름을 설계했습니다.' },
    ],
    references: ['학습자 인터뷰 노트', '오답 유형 분류표', 'AI 튜터 서비스 사례 조사'],
  },
  {
    id: 'local-market-helper',
    title: '전통시장 운영 도우미',
    subtitle: '상인이 상품 홍보 문구와 재고 알림을 쉽게 관리하는 저코드 자동화 도구',
    summary:
      '상품 사진과 가격을 입력하면 홍보 문구, 알림 메시지, 판매 리포트를 자동으로 생성합니다.',
    tags: ['Commerce', 'Automation', 'Local Business'],
    intro:
      '전통시장 운영 도우미는 디지털 마케팅에 익숙하지 않은 상인도 모바일에서 상품 홍보와 고객 알림을 관리할 수 있도록 만든 프로젝트입니다.',
    problem:
      '소규모 상점은 홍보 문구 작성, 고객 공지, 재고 관리에 시간을 많이 쓰지만 별도 운영 도구를 도입하기 어렵습니다.',
    solution:
      '저코드 입력 폼과 AI 문구 생성을 연결해 상품 정보만 입력하면 채널별 홍보 문구와 재고 알림 메시지를 자동으로 만듭니다.',
    features: [
      { title: '상품 홍보 문구 생성', description: '상품명, 가격, 사진 설명을 바탕으로 짧은 홍보 문구를 만듭니다.' },
      { title: '재고 알림', description: '설정한 수량 이하로 내려가면 확인 알림을 표시합니다.' },
      { title: '채널별 메시지', description: '카카오톡, 문자, SNS에 맞는 길이와 톤으로 문구를 변환합니다.' },
      { title: '판매 요약 리포트', description: '주간 인기 상품과 반복 구매 상품을 간단히 보여줍니다.' },
    ],
    demo: {
      title: '데모 영상 준비 중',
      description: '추후 유튜브 링크 연결 시 영상 영역에 표시됩니다.',
    },
    members: [
      { name: '오지훈', role: '기획', description: '시장 상인 인터뷰와 문제 정의를 담당했습니다.' },
      { name: '문채원', role: 'Design', description: '모바일 입력 흐름과 시각 디자인을 구성했습니다.' },
      { name: '서강우', role: 'Frontend', description: '목록, 입력 폼, 리포트 화면을 구현했습니다.' },
    ],
    references: ['지역 상권 디지털 전환 사례', '상인 인터뷰 질문지', '모바일 알림 메시지 작성 가이드'],
  },
]

function App() {
  const [selectedProjectId, setSelectedProjectId] = useState(null)
  const selectedProject = projects.find((project) => project.id === selectedProjectId)

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProjectId(null)} />
  }

  return (
    <main className="project-list-page">
      <section className="list-hero">
        <p className="project-kicker">2026 Low-Code AI Challenge Exhibition</p>
        <h1>프로젝트 목록</h1>
        <p>
          전시 프로젝트를 선택하면 상세 페이지에서 소개, 문제 정의, 해결 방식, 핵심 기능,
          데모 영상, 팀원, 참고 자료를 확인할 수 있습니다.
        </p>
      </section>

      <section className="project-list" aria-label="프로젝트 목록">
        {projects.map((project) => (
          <button
            className="project-card"
            key={project.id}
            type="button"
            onClick={() => setSelectedProjectId(project.id)}
          >
            <span className="project-card__meta">{project.tags.slice(0, 2).join(' / ')}</span>
            <strong>{project.title}</strong>
            <span>{project.summary}</span>
            <span className="project-card__link">상세 보기</span>
          </button>
        ))}
      </section>
    </main>
  )
}

export default App
