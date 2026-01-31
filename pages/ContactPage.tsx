
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="py-40 text-center">
        <div className="max-w-lg mx-auto bg-emerald-50 p-12 rounded-3xl border border-emerald-100">
          <div className="w-16 h-16 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">문의가 접수되었습니다.</h3>
          <p className="text-slate-600 mb-8">48시간 내로 기입하신 연락처를 통해 회신드리겠습니다. 긴급한 용무의 경우 이메일로 별도 연락 주시기 바랍니다.</p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-emerald-700 font-bold underline"
          >
            새 문의 작성하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3">Contact</h2>
            <h3 className="text-4xl font-bold text-slate-900 font-serif mb-8">강의 / 워크숍 / 컨설팅 요청</h3>
            <p className="text-slate-600 mb-12">
              대학 및 공공기관의 교육 혁신을 위한 파트너가 되어 드립니다. 
              구체적인 상황을 알려주시면 더욱 최적화된 제안이 가능합니다.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <h4 className="font-bold text-slate-900 mb-4">FAQ</h4>
                <div className="space-y-4">
                  {[
                    '강의 시간은 60/90/120분 중 선택 가능합니다.',
                    '워크숍은 사전 진단 설문을 포함하여 구성할 수 있습니다.',
                    '데이터 분석은 익명화 및 보안 기준을 철저히 준수합니다.',
                    '전국 단위 대면 및 비대면(Zoom/Webex) 진행 가능합니다.',
                  ].map((faq, i) => (
                    <div key={i} className="flex gap-3 text-sm text-slate-500">
                      <span className="text-emerald-600 font-bold">•</span>
                      {faq}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">성함</label>
                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="홍길동" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">소속</label>
                <input required type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="OO대학교 OO처" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">연락처 (이메일)</label>
                <input required type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="email@example.com" />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">연락처 (휴대폰)</label>
                <input required type="tel" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="010-0000-0000" />
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">요청 유형</label>
              <select className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500">
                <option>특강 / 강의</option>
                <option>실습 워크숍</option>
                <option>성과관리 컨설팅</option>
                <option>단순 자문 / 심사</option>
              </select>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">현재 고민 / 요청 상세 (5~8줄 권장)</label>
              <textarea rows={6} required className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="상황에 대한 구체적인 설명을 적어주시면 정확한 상담이 가능합니다."></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors shadow-lg">
              문의 제출하기
            </button>
            <p className="text-center text-[10px] text-slate-400 mt-4 italic underline cursor-help">
              개인정보 수집 및 이용 동의 (문의 처리를 위해서만 사용됩니다)
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
