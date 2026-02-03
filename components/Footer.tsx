
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Gentle Energy</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              데이터 기반 교육성과관리와 AI 수업설계를 연결해,<br />
              수업의 변화가 가시적인 성과로 이어지게 만듭니다.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Contact</h4>
            <p className="text-slate-400 text-sm mb-2">Email: okh831@gmail.com</p>
            <p className="text-slate-400 text-sm">Response Time: 48시간 내 회신</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#/expertise" className="hover:text-white transition-colors">Expertise</a></li>
              <li><a href="#/projects" className="hover:text-white transition-colors">Projects & Cases</a></li>
              <li><a href="#/publications" className="hover:text-white transition-colors">Publications</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-xs">
          © {new Date().getFullYear()} Gentle Energy Research Lab. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
