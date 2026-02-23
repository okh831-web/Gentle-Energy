
import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_STATS, INITIAL_SERVICES } from '../constants';
import { Project } from '../types';

interface HomePageProps {
  projects: Project[];
}

const HomePage: React.FC<HomePageProps> = ({ projects }) => {
  return (
    <div className="bg-white text-left">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-20 overflow-hidden bg-[#0a101f]">
        <div className="max-w-[1600px] mx-auto px-6 sm:px-10 lg:pl-32 lg:pr-12 relative z-10 w-full">
          <div className="max-w-6xl">
            {/* Top Badge with English Mixed Case */}
            <div className="mb-10 flex flex-wrap items-center gap-4 animate-in fade-in slide-in-from-left duration-700">
              <h2 className="text-emerald-500 font-bold text-xl lg:text-2xl">
                건양대 교수 · 교육학 박사
              </h2>
              <span className="hidden sm:block w-px h-5 bg-slate-700"></span>
              <span className="text-slate-400 text-sm lg:text-base font-medium opacity-80">
                Professor & Ph.D. in Education
              </span>
            </div>
            
            {/* Main Title - Spacing widened from -0.08em to -0.02em */}
            <h1 className="text-4xl lg:text-[5.5rem] font-bold mb-16 leading-[1.15] text-white font-myeongjo tracking-[-0.02em] animate-in fade-in slide-in-from-left duration-1000 delay-100">
              데이터 기반 교육성과관리와<br />
              <span className="text-emerald-400">AI 수업설계</span>를 연결하다
            </h1>
            
            {/* Description with Refined English Captions (Mixed Case) */}
            <div className="space-y-10 mb-20 animate-in fade-in slide-in-from-left duration-1000 delay-300">
              <div className="max-w-4xl">
                <p className="text-xl lg:text-2xl text-slate-100 leading-relaxed font-normal">
                  역량기반 교육과정 성과관리, 핵심역량 진단 분석, AI 활용 교수설계(Active Learning 포함)를 지원합니다.
                </p>
                <p className="text-sm lg:text-[15px] text-slate-500 mt-3 font-medium opacity-80 leading-relaxed">
                  Support for competency-based curriculum management, diagnostic analysis, and AI-integrated instructional design.
                </p>
              </div>
              
              <div className="max-w-4xl">
                <p className="text-xl lg:text-2xl text-slate-100 leading-relaxed font-normal">
                  대학·지자체·기관 대상 강의/워크숍/자문을 진행합니다.
                </p>
                <p className="text-sm lg:text-[15px] text-slate-500 mt-3 font-medium opacity-80 leading-relaxed">
                  Conducting professional lectures, workshops, and consulting for universities and public institutions.
                </p>
              </div>
            </div>
            
            {/* Style Tags */}
            <div className="flex flex-wrap gap-3 mb-20 animate-in fade-in slide-in-from-left duration-1000 delay-500">
              {['에듀테크 교수법', 'AI 기반 수업 구성', '핵심역량 분석', '성과관리 체계화', '현장 적용'].map(tag => (
                <span key={tag} className="px-6 py-3 bg-[#1e293b]/60 rounded-full text-[14px] font-medium text-slate-300 border border-slate-700/40 backdrop-blur-sm hover:border-emerald-500/50 transition-colors cursor-default">
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Buttons with Mixed Case English */}
            <div className="flex flex-col sm:flex-row gap-6 animate-in fade-in slide-in-from-bottom duration-1000 delay-700">
              <Link to="/contact" className="px-14 py-6 bg-[#00a878] hover:bg-emerald-500 text-white font-bold rounded-2xl transition-all text-center flex flex-col items-center justify-center shadow-2xl shadow-emerald-900/30 group">
                <span className="text-2xl">강의·워크숍 요청</span>
                <span className="text-xs font-medium opacity-70 mt-1.5 group-hover:opacity-100 transition-opacity">Request Lectures & Workshops</span>
              </Link>
              <Link to="/projects" className="px-14 py-6 bg-[#1e293b] hover:bg-slate-700 text-white font-bold rounded-2xl border border-slate-600 transition-all text-center flex flex-col items-center justify-center group shadow-xl">
                <span className="text-2xl">프로젝트·사례 보기</span>
                <span className="text-xs font-medium opacity-40 mt-1.5 group-hover:opacity-70 transition-opacity">View Project Case Studies</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-28 border-b border-slate-50 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
            {INITIAL_STATS.map((stat, idx) => (
              <div key={idx} className="text-left group">
                <div className="text-7xl font-bold text-slate-900 mb-4 tracking-tighter group-hover:text-emerald-600 transition-colors">{stat.value}</div>
                <div className="text-sm font-bold text-emerald-700 mb-2 uppercase tracking-[0.2em]">{stat.label}</div>
                <div className="text-[15px] text-slate-400 leading-relaxed font-medium">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 bg-slate-50/40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="mb-24">
            <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-[0.4em] mb-4">Professional Expertise</h2>
            <h3 className="text-5xl lg:text-6xl font-bold text-slate-900 font-myeongjo tracking-tight">제공 서비스</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {INITIAL_SERVICES.map((service, idx) => (
              <div key={idx} className="bg-white p-14 rounded-[3rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <h4 className="text-2xl lg:text-3xl font-bold mb-6 text-slate-900 font-myeongjo group-hover:text-emerald-700 transition-colors leading-tight">{service.title}</h4>
                <p className="text-slate-500 text-[15px] mb-12 leading-relaxed font-medium">{service.description}</p>
                <ul className="space-y-5">
                  {service.outputs.map((out, i) => (
                    <li key={i} className="flex items-start text-[14px] text-slate-400 font-bold uppercase tracking-tight">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full mr-4 mt-2 shadow-sm"></span>
                      {out}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="pt-20 pb-48 bg-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
          <div className="text-[25rem] font-bold text-slate-900 absolute -bottom-32 -right-32 italic">INSIGHT</div>
        </div>
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <p className="text-4xl lg:text-6xl font-myeongjo italic mb-16 text-slate-800 leading-tight tracking-tight">
            "데이터는 단순한 설명이 아니라<br/>실행을 위한 언어입니다."
          </p>
          <div className="w-28 h-2 bg-emerald-500 mx-auto mb-16 rounded-full opacity-30"></div>
          <p className="text-2xl lg:text-3xl text-slate-600 font-medium leading-relaxed max-w-4xl mx-auto mb-10">
            모든 교수자가 AI를 도구 삼아 더욱 가치 있는 교육을 실천하도록 돕는 것이 저의 방향입니다.
          </p>
          <p className="text-slate-400 text-xl font-serif italic opacity-70">Empowering educators to achieve excellence through the strategic use of data and AI.</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
