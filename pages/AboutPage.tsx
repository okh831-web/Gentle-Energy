
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mb-20">
          <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-4">About</h2>
          <h3 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            교육성과관리와 AI 교수설계를 연결하는<br/> 
            교육학 연구자/실천가
          </h3>
          <div className="mt-10 border-l-4 border-slate-100 pl-8">
            <p className="text-2xl lg:text-3xl text-slate-800 leading-snug font-myeongjo font-bold">
              "교육혁신은 아이디어로 끝나면 남는 것이 없다.<br className="hidden lg:block"/> 
              수업과 제도가 바뀌고, 그 변화가 데이터로 확인될 때 지속된다."
            </p>
            <p className="text-lg lg:text-xl text-slate-400 font-serif italic mt-4 leading-relaxed">
              "Educational innovation leaves nothing if it ends with just an idea. <br className="hidden lg:block"/>
              It persists when classes and systems change, and that change is confirmed through data."
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <div>
              <h4 className="flex items-baseline gap-3 border-l-4 border-emerald-600 pl-5 mb-8">
                <span className="text-2xl lg:text-3xl font-black text-slate-900">연구 철학</span>
                <span className="text-lg font-medium text-slate-400 font-serif italic">Research Philosophy</span>
              </h4>
              <p className="text-slate-600 leading-relaxed mb-4 text-lg">
                저는 연구와 현장을 분리하지 않습니다. 교수자 관점의 실행 가능성과 행정/평가 관점의 증빙 가능성을 함께 설계하는 것을 원칙으로 삼습니다. 
              </p>
              <p className="text-slate-600 leading-relaxed text-lg">
                단순히 '좋은 수업'을 제안하는 것이 아니라, 그 수업이 어떤 역량을 키우고 어떻게 측정될 수 있는지에 대한 전 과정을 체계화합니다.
              </p>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-widest block mb-2">Contact Email</span>
                <a href="mailto:okh831@gmail.com" className="text-lg font-bold text-emerald-700 hover:underline">okh831@gmail.com</a>
              </div>
            </div>

            <div>
              <h4 className="flex items-baseline gap-3 border-l-4 border-emerald-600 pl-5 mb-8">
                <span className="text-2xl lg:text-3xl font-black text-slate-900">경력 타임라인</span>
                <span className="text-lg font-medium text-slate-400 font-serif italic">Career Timeline</span>
              </h4>
              <div className="space-y-6">
                {[
                  { 
                    year: 'Present', 
                    role: '교육혁신원 연구교수 및 CTL 운영위원', 
                    desc: '대학 핵심역량 진단 및 데이터 기반 성과관리 총괄',
                    isSmall: true
                  },
                  { year: '2023 - Present', role: '리더십센터 자문위원', desc: '' },
                  { year: '2022 - Present', role: '경제사회연구원 국방위원', desc: '' },
                  { year: '2024', role: '고려대 산학협력교수', desc: '' },
                  { year: '2023 - 2024', role: '포항공대 산학인력양성센터 부센터장', desc: '' },
                  { year: '2021 - 2023', role: '교육사령부 교수학습센터장', desc: '' },
                  { 
                    year: '2022', 
                    role: '교육학 박사 취득', 
                    desc: '전공: HRD/평생교육\n(박사학위 논문: 육군 군사학교 교수역량 모델링 및 요구도 분석 연구)' 
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="text-emerald-700 font-bold text-sm w-32 pt-1 flex-shrink-0">{item.year}</div>
                    <div>
                      <div className="text-slate-900 font-bold">{item.role}</div>
                      {item.desc && (
                        <div className={item.isSmall ? "text-slate-500 text-xs mt-1" : "text-slate-500 text-sm mt-1 whitespace-pre-line"}>
                          {item.desc}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-10 lg:p-14 rounded-[3rem] border border-slate-100 shadow-sm">
            <h4 className="flex flex-col mb-10">
              <span className="text-3xl lg:text-4xl font-black text-slate-900 mb-2">핵심 강점</span>
              <span className="text-xl font-medium text-slate-400 font-serif italic uppercase tracking-wider">Core Strengths</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: '분석역량', desc: '대규모 교육 데이터 분석 및 인사이트 도출' },
                { title: '설계역량', desc: 'AI 융합 수업 설계 및 평가 체계 고도화' },
                { title: '실행역량', desc: '현장 적용 가능한 워크숍 및 컨설팅 운영' },
                { title: '확산역량', desc: '표준 운영 모델 개발 및 조직 내 확산' },
              ].map((strength, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-emerald-600 font-black text-lg mb-3">0{i+1}</div>
                  <div className="text-slate-900 font-black text-xl mb-3">{strength.title}</div>
                  <div className="text-slate-500 text-[15px] font-medium leading-relaxed">{strength.desc}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 p-8 bg-emerald-900 text-white rounded-[2rem] shadow-xl shadow-emerald-900/20">
              <h5 className="font-black text-xl mb-3 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-emerald-400 rounded-full"></span>
                함께 고민하겠습니다.
              </h5>
              <p className="text-emerald-100/90 text-[15px] font-medium leading-relaxed">
                단순 외주 형태가 아닌, 기관의 상황에 맞는 최적의 솔루션을 함께 고민하는 파트너가 되어드리겠습니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
