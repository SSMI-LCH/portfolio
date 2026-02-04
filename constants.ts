import { PortfolioData } from './types';

export const INITIAL_DATA: PortfolioData = {
  hero: {
    headline: "Data Scientist · 제조/품질 혁신 · AI 기반 예지/최적화",
    subheadline: "현장 경험(Manufacturing)과 데이터 과학(Data Science)을 융합하여 실질적인 비즈니스 가치를 창출합니다.",
    tags: ["AI/Big Data", "Manufacturing Innovation", "Predictive Maintenance", "Digital Transformation"]
  },
  highlights: [
    {
      title: "Experience",
      metric_or_fact: "20년 이상",
      detail: "제조 현장 엔지니어부터 빅데이터 사업부 임원까지",
      icon: "briefcase"
    },
    {
      title: "Expertise",
      metric_or_fact: "6 Sigma MBB",
      detail: "데이터 분석과 문제 해결 방법론(TRIZ, TOC) 마스터",
      icon: "badge"
    },
    {
      title: "Innovation",
      metric_or_fact: "3 Patents",
      detail: "AI 기반 이상 탐지 및 모니터링 시스템 발명",
      icon: "lightbulb"
    },
    {
      title: "Impact",
      metric_or_fact: "Cost Saving",
      detail: "공정 최적화 및 불량 개선을 통한 수억원대 절감 사례 다수",
      icon: "trending-up"
    }
  ],
  filters: {
    domains: ["전체", "AI/데이터", "제조/품질", "혁신/방법론", "교육/강의"],
    industries: ["전체", "반도체/디스플레이", "에너지/화학", "IT/데이터", "제조일반"],
    years: [2000, 2026]
  },
  case_studies: [
    {
      id: "cs_01",
      title: "니티놀 제조설비 AI 기반 예지보전 시스템",
      industry: "제조일반",
      domain: "AI/데이터",
      year: "2025",
      problem: "제조 설비의 돌발 고장으로 인한 생산 차질 및 유지보수 비용 증가",
      approach: [
        "설비 센서 데이터 수집 및 전처리",
        "AI 기반 이상 탐지(Anomaly Detection) 모델링",
        "실시간 모니터링 대시보드 구축"
      ],
      stack: ["Python", "Deep Learning", "IoT Sensors"],
      outcomes: ["설비 고장 사전 예측 가능", "다운타임 최소화 및 생산성 향상"],
      transferable_assets: ["이상 탐지 알고리즘", "예지보전 시스템 아키텍처"]
    },
    {
      id: "cs_02",
      title: "태양광 발전소 고장진단 예측 딥러닝 알고리즘",
      industry: "에너지/화학",
      domain: "AI/데이터",
      year: "2022-2023",
      problem: "분산형 발전소의 효율적 관리 어려움 및 패널 고장 조기 발견 필요",
      approach: [
        "발전 데이터 시계열 분석",
        "딥러닝(Deep Learning) 기반 고장 패턴 학습",
        "진단 정확도 향상을 위한 알고리즘 고도화"
      ],
      stack: ["Python", "TensorFlow/PyTorch", "Time-series Analysis"],
      outcomes: ["고장 진단 정확도 향상", "유지보수 효율성 증대"],
      transferable_assets: ["에너지 데이터 분석 모델", "특허 출원(10-2025-0075599)"]
    },
    {
      id: "cs_03",
      title: "다중적층 PCB 휨 및 도금 편차 개선",
      industry: "반도체/디스플레이",
      domain: "제조/품질",
      year: "2025",
      problem: "PCB 제조 공정에서 발생하는 휨(Warpage) 및 도금 두께 편차로 인한 품질 저하",
      approach: [
        "공정 데이터 상관관계 분석",
        "핵심 인자(Key Factor) 도출 및 최적 조건 설정",
        "통계적 공정 관리(SPC) 기법 적용"
      ],
      stack: ["JMP", "Minitab", "Statistical Analysis"],
      outcomes: ["제품 불량률 감소", "공정 안정화 달성"],
      transferable_assets: ["공정 최적화 방법론", "품질 데이터 분석 프레임워크"]
    },
    {
      id: "cs_04",
      title: "자연어 처리 기반 이커머스 데이터 분석",
      industry: "IT/데이터",
      domain: "AI/데이터",
      year: "2020-2021",
      problem: "쇼핑몰 데이터 수집 및 소비자 트렌드 파악의 비효율성",
      approach: [
        "웹 크롤러 개발을 통한 데이터 자동 수집",
        "LSTM/BERT 활용 딥러닝 예측 모형 개발",
        "고객 행동 패턴 분석"
      ],
      stack: ["Python", "NLP (BERT/LSTM)", "Web Crawling"],
      outcomes: ["데이터 기반 마케팅 인사이트 도출", "예측 모델 정확도 확보"],
      transferable_assets: ["텍스트 마이닝 모듈", "수요 예측 모델"]
    },
    {
      id: "cs_05",
      title: "LED 공정 Lead Time 단축 및 비용 절감",
      industry: "반도체/디스플레이",
      domain: "혁신/방법론",
      year: "2010",
      problem: "제조 리드타임 지연 및 공정 비용 과다",
      approach: [
        "대기/유휴 시간 분석 및 제거",
        "Laser Scribing 공정 개선",
        "6 Sigma 방법론 적용"
      ],
      stack: ["6 Sigma", "Process Mining", "Value Stream Mapping"],
      outcomes: ["Lead Time 7일 → 4일 단축", "연간 3억원 비용 절감", "이달의 엔지니어상 수상"],
      transferable_assets: ["공정 단축 표준 프로세스", "원가 절감 가이드라인"]
    },
    {
      id: "cs_06",
      title: "기업 맞춤형 DX/데이터 분석 교육",
      industry: "교육/강의",
      domain: "교육/강의",
      year: "2018-2024",
      problem: "현업 임직원의 데이터 활용 역량 부족",
      approach: [
        "생성형 AI, 빅데이터, Power BI 등 실무 중심 커리큘럼 설계",
        "도메인(제조, 마케팅 등) 맞춤형 실습 진행",
        "코웨이, 한솔제지, 대학 등 다수 출강"
      ],
      stack: ["Gen AI", "Power BI", "Excel", "Data Literacy"],
      outcomes: ["실무 데이터 활용 능력 향상", "사내 데이터 문화 확산"],
      transferable_assets: ["계층별 데이터 교육 교재", "실습 데이터셋"]
    }
  ],
  timeline: [
    {
      period_years: "2022 ~ 현재",
      year_sort: 2024,
      org_or_client: "㈜에스에스엠아이 (SSMI)",
      role: "빅데이터·AI 사업부 상무",
      what_did: ["AI/빅데이터 분석 컨설팅 총괄", "정부 지원 과제 및 민간 기업 DX 프로젝트 수행", "AI 기반 예지보전 솔루션 개발 지휘"],
      domain: "AI/데이터",
      industry: "IT/데이터"
    },
    {
      period_years: "2018 ~ 2021",
      year_sort: 2018,
      org_or_client: "프리랜서 / 전문 강사 / 컨설턴트",
      role: "데이터 과학자 & 전문 강사",
      what_did: ["한국정보화진흥원 빅데이터 과제 수행", "대학 및 기업(한솔, 도레이 등) 빅데이터/AI 강의", "중소기업 스마트팩토리 고도화 컨설팅"],
      domain: "교육/강의",
      industry: "IT/데이터"
    },
    {
      period_years: "2015 ~ 2018",
      year_sort: 2015,
      org_or_client: "코웨이㈜",
      role: "SCM부문 상생협력팀 (협력사 지도)",
      what_did: ["협력사 SRM 전략 및 평가 시스템 재정립", "협력사 품질/공정 개선 지도", "동반성장 지수 최우수 등급 획득 기여"],
      domain: "제조/품질",
      industry: "제조일반"
    },
    {
      period_years: "2010 ~ 2015",
      year_sort: 2010,
      org_or_client: "서울바이오시스 / 서울반도체 자회사",
      role: "QA팀 / 경영혁신팀",
      what_did: ["FAB 공정 품질 관리 및 수율 개선", "ISO/TS16949 시스템 운영", "고객 불량 0% 달성 프로젝트 리드"],
      domain: "제조/품질",
      industry: "반도체/디스플레이"
    },
    {
      period_years: "2005 ~ 2010",
      year_sort: 2005,
      org_or_client: "동우화인켐 / 삼성SDI 협력",
      role: "연구기획 / 6시그마 추진",
      what_did: ["기술 로드맵(TRM) 수립", "전사 6시그마/TRIZ 추진 및 교육", "디스플레이 소재 개발 방법론(DFSS) 구축"],
      domain: "혁신/방법론",
      industry: "반도체/디스플레이"
    }
  ],
  credentials: [
    { type: "patent", name: "AI 기반 태양광 모듈 고장 모니터링 시스템", year: "2025 (출원)", note: "10-2025-0075599" },
    { type: "patent", name: "니티놀 제조설비 인공지능 기반 이상탐지", year: "2025 (출원)", note: "10-2025-0173776" },
    { type: "cert", name: "6 Sigma Master Black Belt (MBB)", year: "2008", note: "에피밸리 / 식스시그마경영연구소" },
    { type: "cert", name: "TRIZ Level 3", year: "2015", note: "GEN3 / 트리즈코리아" },
    { type: "cert", name: "품질경영기사", year: "2006", note: "한국산업인력공단" },
    { type: "award", name: "이달의 엔지니어상", year: "2010", note: "서울옵토디바이스" },
    { type: "award", name: "구미 상공회의소 회장상", year: "2007", note: "생산성 향상 공로" },
    { type: "publication", name: "엑셀 그래프를 활용한 쉬운 보고서 작성", year: "2014", note: "힐튼호텔 세미나" },
    { type: "publication", name: "TOC를 활용한 공정재고 저감", year: "2013", note: "국가인적자원개발컨소시엄 교재" }
  ],
  quick_actions: [
    {
      id: "qa_predictive",
      label: "제조 예지보전 사례",
      description: "AI를 활용한 설비 고장 예측 프로젝트 보기",
      filterPayload: { domain: "AI/데이터", industry: "전체" }
    },
    {
      id: "qa_curriculum",
      label: "강의/교육 커리큘럼",
      description: "기업 및 대학 대상 데이터 분석 강의 경력",
      filterPayload: { domain: "교육/강의", industry: "전체" }
    },
    {
      id: "qa_quality",
      label: "품질혁신 성과",
      description: "6시그마, 불량률 감소 등 제조 혁신 사례",
      filterPayload: { domain: "제조/품질", industry: "전체" }
    },
    {
      id: "qa_methodology",
      label: "방법론/특허/저서",
      description: "TRIZ, TOC, 특허 및 저술 활동 확인",
      filterPayload: { domain: "혁신/방법론", industry: "전체" }
    },
    {
      id: "qa_visualization",
      label: "시각화/자동화 역량",
      description: "Power BI, Excel VBA 등 도구 활용 능력",
      filterPayload: { domain: "전체", industry: "IT/데이터" }
    }
  ],
  disclaimer: "본 포트폴리오는 이춘호 님의 제공된 문서를 바탕으로 AI 어시스턴트가 재구성한 내용입니다. 개인정보(전화번호, 상세주소 등)는 보호를 위해 제거되었습니다."
};