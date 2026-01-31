
import React, { useState } from 'react';
import { PUBLICATIONS } from '../constants';

const PublicationsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'paper' | 'report' | 'resource'>('all');

  const filtered = activeTab === 'all' 
    ? PUBLICATIONS 
    : PUBLICATIONS.filter(p => p.type === activeTab);

  const tabs = [
    { id: 'all', label: '전체' },
    { id: 'paper', label: '논문' },
    { id: 'report', label: '정책보고서' },
    { id: 'resource', label: '교육자료/체크리스트' },
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3">Publications</h2>
          <h3 className="text-4xl font-bold text-slate-900 font-serif">연구 및 자료실</h3>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                activeTab === tab.id 
                  ? 'bg-emerald-600 text-white shadow-lg' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filtered.map(item => (
            <div key={item.id} className="group bg-white p-8 rounded-3xl border border-slate-200 hover:border-emerald-600 transition-colors">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-700 px-2 py-0.5 bg-emerald-50 rounded">
                  {item.type}
                </span>
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors">
                {item.title}
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                {item.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {item.keywords.map(kw => (
                  <span key={kw} className="text-[10px] text-slate-400">#{kw}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                <button className="text-xs font-bold text-emerald-700 flex items-center hover:underline">
                  자료 요청 / 다운로드
                  <svg className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
                <span className="text-[10px] text-slate-400 italic">※ 일부 비공개 자료는 요청 시 제공</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicationsPage;
