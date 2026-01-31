
import React from 'react';

const ExpertisePage: React.FC = () => {
  const sections = [
    {
      title: '에듀테크 교수법',
      items: ['Active Learning 기법', 'PBL / TBL / Flipped Learning', '평가 루브릭 개발', '수업계획서 고도화'],
      outputs: ['수업 설계 매핑 점검표', '학생 참여도 진단지', '수업 실습 워크시트'],
      color: 'bg-blue-50 text-blue-700 border-blue-100',
    },
    {
      title: 'AI 기반 수업 구성',
      items: ['수업 목표-활동-평가 정렬', 'AI 보조 과제 설계', '피드백 자동화 워크플로우', '강의자료 제작 자동화'],
      outputs: ['AI 도구 활용 가이드', '자동 피드백 템플릿', '수업 운영 자동화 툴셋'],
      color: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    },
    {
      title: '핵심역량 분석',
      items: ['역량/하위역량 지표 설정', '학과별/집단별 분석', '시사점 도출 및 환류', '데이터 시각화 리포트'],
      outputs: ['분석 대시보드 (BI)', '학과별 인사이트 리포트', '역량 향상 추이 보고서'],
      color: 'bg-purple-50 text-purple-700 border-purple-100',
    },
    {
      title: '교육성과관리 시스템',
      items: ['성과관리 체계(지표/증빙)', '운영 모델 및 매뉴얼 개발', '조직 확산 전략 수립', '교육 질 관리(CQI) 지원'],
      outputs: ['성과관리 운영 매뉴얼', '증빙 자료 표준화 양식', '환류 보고서 템플릿'],
      color: 'bg-amber-50 text-amber-700 border-amber-100',
    },
  ];

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3">Expertise</h2>
          <h3 className="text-4xl font-bold text-slate-900 font-serif">전문 영역</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec, i) => (
            <div key={i} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200">
              <div className={`px-8 py-6 border-b ${sec.color} font-bold text-xl`}>
                {sec.title}
              </div>
              <div className="p-8">
                <div className="mb-8">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">주요 구성 요소</h5>
                  <ul className="space-y-3">
                    {sec.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-slate-700 font-medium">
                        <svg className="h-5 w-5 text-emerald-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-slate-50 p-6 rounded-2xl">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">제공 산출물 예시</h5>
                  <div className="flex flex-wrap gap-2">
                    {sec.outputs.map((out, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-slate-600 border border-slate-200">
                        {out}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExpertisePage;
