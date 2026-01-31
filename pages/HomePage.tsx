
import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_STATS, INITIAL_SERVICES } from '../constants';
import { Project } from '../types';

interface HomePageProps {
  projects: Project[];
}

const HomePage: React.FC<HomePageProps> = ({ projects }) => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.2),transparent_70%)]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h2 className="text-emerald-500 font-medium text-lg mb-4 tracking-wide">건양대 교수 · 교육학 박사</h2>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 font-serif leading-tight">
              데이터 기반 교육성과관리와 <br />
              <span className="text-emerald-400">AI 수업설계</span>를 연결하다
            </h1>
            <div className="text-lg text-slate-300 mb-8 leading-relaxed">
              <p className="mb-2">역량기반 교육과정 성과관리, 핵심역량 진단 분석, AI 활용 교수설계(Active Learning 포함)를 통합 지원합니다.</p>
              <p>대학·지자체·기관 대상 강의/워크숍/자문을 진행합니다.</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-10">
              {['에듀테크 교수법', 'AI 기반 수업 구성', '핵심역량 분석', '성과관리 체계화', '현장 적용'].map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium border border-white/20">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-emerald-900/20 text-center">
                강의·워크숍 요청
              </Link>
              <Link to="/projects" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-lg border border-white/20 transition-all text-center">
                프로젝트·사례 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators (Stats) */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {INITIAL_STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm font-semibold text-emerald-700 uppercase tracking-tighter mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3">Services</h2>
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif">제공 서비스</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {INITIAL_SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-50 text-emerald-700 rounded-xl flex items-center justify-center mb-6">
                  {/* Mock Icons */}
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold mb-4 text-slate-900 leading-snug">{service.title}</h4>
                <p className="text-slate-600 text-sm mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-2">
                  {service.outputs.map((out, i) => (
                    <li key={i} className="flex items-center text-xs text-slate-500">
                      <span className="w-1 h-1 bg-emerald-500 rounded-full mr-2"></span>
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3">Methodology</h2>
          <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 font-serif mb-16">추진 프로세스</h3>
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 z-0"></div>
            {[
              { title: '진단', desc: '요구분석 및 현황 파악' },
              { title: '설계', desc: '지표 개발 및 도구 설계' },
              { title: '실행', desc: '수업 운영 및 데이터 수집' },
              { title: '분석', desc: '데이터 통합 및 성과 분석' },
              { title: '환류', desc: '개선안 도출 및 매뉴얼화' },
            ].map((step, idx) => (
              <div key={idx} className="flex-1 w-full lg:w-auto relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-emerald-200">
                    {idx + 1}
                  </div>
                  <h4 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brief Intro */}
      <section className="py-24 bg-emerald-950 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-2xl font-serif italic mb-8 leading-relaxed text-emerald-100">
            "데이터는 단순한 설명이 아니라 실행을 위한 언어입니다."
          </p>
          <p className="text-lg text-emerald-200/80">
            성과관리센터의 일이 전 대학으로 확산될 수 있도록 표준화된 시스템을 구축하고,<br />
            모든 교수자가 AI를 도구 삼아 더욱 가치 있는 교육을 실천하도록 돕는 것이 저의 방향입니다.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
