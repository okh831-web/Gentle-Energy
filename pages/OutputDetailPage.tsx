
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Project } from '../types';

interface OutputDetailPageProps {
  projects: Project[];
}

const OutputDetailPage: React.FC<OutputDetailPageProps> = ({ projects }) => {
  const { id, index } = useParams<{ id: string; index: string }>();
  
  const project = projects.find(p => p.id === id);
  if (!project) return <div className="py-40 text-center">프로젝트를 찾을 수 없습니다.</div>;

  const outputIndex = parseInt(index || '0', 10);
  const outputTitle = project.outputs[outputIndex];

  if (!outputTitle) return <div className="py-40 text-center">산출물을 찾을 수 없습니다.</div>;

  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/projects" className="inline-flex items-center text-sm font-bold text-emerald-700 mb-8 hover:underline">
          <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          프로젝트 목록으로 돌아가기
        </Link>
        
        <div className="mb-4">
          <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest">{project.category}</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h2>
        <h3 className="text-xl font-medium text-slate-500 border-b pb-8 mb-12 italic">"{outputTitle}" 산출물 상세</h3>

        <div className="bg-slate-50 rounded-3xl p-12 border border-slate-200 text-center space-y-8">
          <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <div>
            <h4 className="text-2xl font-bold mb-4">해당 자료는 보안 및 저작권 정책에 따라<br/>직접 열람이 제한되어 있을 수 있습니다.</h4>
            <p className="text-slate-500 max-w-md mx-auto leading-relaxed">
              기관 내부용 프로젝트 산출물(엑셀 템플릿, 분석 리포트, 대시보드 구조 등)의 구체적인 내용 확인이 필요하신 경우, 
              문의 페이지를 통해 별도 요청 주시면 공유 가능한 범위 내에서 안내해 드립니다.
            </p>
          </div>
          <div className="pt-4">
            <Link to="/contact" className="px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition-colors shadow-lg shadow-emerald-200 inline-block">
              산출물 공유 문의하기
            </Link>
          </div>
        </div>

        <div className="mt-16">
          <h5 className="font-bold text-slate-900 mb-4">프로젝트 관련 정보</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">핵심 접근</div>
              <div className="text-sm font-medium text-slate-700">{project.approach}</div>
            </div>
            <div className="p-6 bg-white border border-slate-100 rounded-2xl shadow-sm">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">성과 요약</div>
              <div className="text-sm font-medium text-slate-700">{project.results}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutputDetailPage;
