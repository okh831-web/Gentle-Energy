import { Project, Publication, Stat, Service } from './types';

export const INITIAL_STATS: Stat[] = [
  { label: '진행 프로젝트', value: '45+', description: '교육혁신 및 성과관리 솔루션' },
  { label: '진단 분석 규모', value: '12,000+', description: '학생 및 학과 단위 누적 데이터' },
  { label: '강의/워크숍', value: '150+', description: '에듀테크 및 AI 교수법 세션' },
  { label: '협업 기관', value: '30+', description: '대학, 지자체 및 교육 유관기관' },
];

export const INITIAL_SERVICES: Service[] = [
  {
    title: '핵심역량 진단 및 리포트 자동화',
    description: '대학 핵심역량 진단 분석 및 학과별 맞춤형 리포트 생성 체계를 구축합니다.',
    icon: 'BarChart3',
    outputs: ['분석 대시보드', '학과별 요약 리포트', '역량 향상도 분석 가이드'],
  },
  {
    title: '역량기반 성과관리 체계 설계',
    description: 'PDCA/CQI를 포함한 교육과정 성과관리 지표 및 증빙 체계를 설계합니다.',
    icon: 'Settings2',
    outputs: ['성과관리 운영 매뉴얼', '교과/비교과 매핑 점검표', '품질관리 지표'],
  },
  {
    title: 'AI 활용 수업설계 워크숍',
    description: 'AI 도구를 활용한 수업계획서 고도화 및 평가도구 설계를 지원합니다.',
    icon: 'Cpu',
    outputs: ['AI 수업 활용 가이드북', '수업설계 템플릿', '워크숍 운영안'],
  },
  {
    title: '교수역량 강화 프로그램 기획',
    description: '교수자의 디지털 전환 및 교육 혁신을 위한 맞춤형 프로그램을 자문합니다.',
    icon: 'Users',
    outputs: ['역량 진단 도구', '프로그램 설계안', '운영 성과 보고서'],
  },
];

export const INITIAL_PROJECTS: Project[] = [
  {
    id: '1',
    title: '학과별 핵심역량 보고서 자동생성 체계 구축',
    category: '데이터 분석',
    problem: '학과별 보고서가 매년 반복 제작되어 시간과 오류가 누적됨',
    approach: '입력 데이터 표준화 + 자동 리포트 템플릿 + 검증 체크리스트',
    outputs: ['자동화 엑셀 템플릿', 'R기반 분석 스크립트', '표준 리포트 양식'],
    results: '제작 시간 80% 단축, 누락/오류 95% 감소, 교수·학과 피드백 루프 형성',
    nextSteps: '공유-평가-환류까지 연결되는 미니앱화',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '2',
    title: '역량-교과/비교과-전공역량 매핑 적정성 진단',
    category: '성과관리',
    problem: '교육과정 간의 연계성이 모호하여 데이터 기반의 질 관리가 어려움',
    approach: '텍스트 마이닝 기법을 활용한 키워드 매칭 분석 및 전문가 델파이 조사',
    outputs: ['매핑 적정성 보고서', '연계성 강화 가이드라인', '통합 역량 지도'],
    results: '전공 역량 정렬도 40% 향상, 학과별 교육과정 개편 근거 마련',
    nextSteps: 'LMS 연동을 통한 실시간 역량 취득 현황 모니터링',
    imageUrl: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?auto=format&fit=crop&q=80&w=1200',
  },
  {
    id: '3',
    title: 'AI 도구를 활용한 액티브러닝 수업 재설계 워크숍',
    category: '에듀테크',
    problem: '전통적 강의 방식에서 벗어나지 못해 학생 참여도 및 역량 함양 저하',
    approach: '생성형 AI를 활용한 학습 활동 시뮬레이션 및 실습 위주 액티브러닝 설계',
    outputs: ['AI 기반 수업설계안', '학습자 반응형 활동지', '평가 루브릭'],
    results: '워크숍 만족도 4.9/5.0, 수업 설계 적용 의사 92% 확보',
    nextSteps: '교수법별 AI 활용 사례집 발간 및 학내 확산',
    imageUrl: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=1200',
  },
];

export const PUBLICATIONS: Publication[] = [
  {
    id: 'p1',
    type: 'paper',
    title: '대학생의 핵심역량 변화 추이 분석: 데이터 기반 성과관리 관점에서',
    summary: '5년간의 종단 데이터를 활용하여 학생들의 역량 발달 패턴을 분석하고 교육적 시사점을 도출한 연구',
    keywords: ['핵심역량', '종단분석', '성과관리'],
  },
  {
    id: 'p2',
    type: 'report',
    title: 'AI 리터러시 함양을 위한 교수학습 모델 개발 연구',
    summary: '생성형 AI 시대의 교수자 필수 역량을 정의하고 이를 개발하기 위한 교육 모델을 제시한 정책 보고서',
    keywords: ['AI 리터러시', '교수학습모델', '정책연구'],
  },
  {
    id: 'p3',
    type: 'resource',
    title: '[가이드북] 생성형 AI를 활용한 수업 설계 체크리스트',
    summary: '교수자가 수업 준비 단계에서 AI를 효과적이고 윤리적으로 활용할 수 있도록 돕는 실천적 가이드라인',
    keywords: ['AI 수업설계', '체크리스트', '실무가이드'],
  },
];