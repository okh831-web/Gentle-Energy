
import React, { useState } from 'react';
import { Project } from '../types';

interface AdminPageProps {
  projects: Project[];
  onUpdate: (project: Project) => void;
  onAdd: (project: Project) => void;
  onDelete: (id: string) => void;
}

const AdminPage: React.FC<AdminPageProps> = ({ projects, onUpdate, onAdd, onDelete }) => {
  const [password, setPassword] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<Project | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === '3111') {
      setIsAuthorized(true);
    } else {
      alert('비밀번호가 틀렸습니다.');
    }
  };

  const startEdit = (p: Project) => {
    setEditingId(p.id);
    setEditForm({ ...p });
  };

  const startNew = () => {
    const newProject: Project = {
      id: Date.now().toString(),
      title: '',
      category: '데이터 분석',
      problem: '',
      approach: '',
      outputs: [],
      results: '',
      nextSteps: '',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200'
    };
    setEditingId('new');
    setEditForm(newProject);
  };

  const handleSave = () => {
    if (!editForm) return;
    if (!editForm.title.trim()) {
      alert('제목을 입력해주세요.');
      return;
    }
    if (editingId === 'new') {
      onAdd(editForm);
    } else {
      onUpdate(editForm);
    }
    setEditingId(null);
    setEditForm(null);
  };

  if (!isAuthorized) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] px-4">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-[2.5rem] shadow-2xl border border-slate-200 w-full max-w-sm">
          <div className="text-center mb-10">
            <div className="w-20 h-20 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-black text-slate-900">관리자 인증</h2>
            <p className="text-slate-500 text-sm mt-2 font-medium">포트폴리오 수정을 위해 비밀번호가 필요합니다.</p>
          </div>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-2xl mb-6 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all font-bold text-center text-lg"
            placeholder="비밀번호 입력"
          />
          <button type="submit" className="w-full py-4 bg-slate-900 text-white font-black rounded-2xl hover:bg-slate-800 transition-all active:scale-95 shadow-xl">
            로그인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-16">
        <div>
          <h2 className="text-4xl font-black text-slate-900 font-serif tracking-tight">포트폴리오 관리</h2>
          <p className="text-slate-500 mt-2 font-medium">사례별 제목 옆의 수정 버튼을 눌러 내용을 편집할 수 있습니다.</p>
        </div>
        <button onClick={startNew} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl font-black shadow-2xl shadow-emerald-100 transition-all flex items-center gap-3 active:scale-95">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          새 사례 추가
        </button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map(p => (
          <div key={p.id} className="group bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-emerald-200 transition-all flex flex-col sm:flex-row items-center gap-8">
            <div className="w-full sm:w-32 h-32 rounded-2xl overflow-hidden bg-slate-100 flex-shrink-0 relative shadow-inner">
              <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="flex-grow min-w-0">
              <div className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-2">{p.category}</div>
              <div className="flex items-center gap-3">
                <h3 className="text-xl font-black text-slate-900 truncate leading-tight">{p.title}</h3>
                <div className="w-6 h-6 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 border border-emerald-100 shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
              <p className="text-slate-500 font-medium truncate max-w-2xl mt-2">{p.problem}</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto mt-4 sm:mt-0">
              <button onClick={() => startEdit(p)} className="flex-1 sm:flex-none px-6 py-3 bg-slate-50 hover:bg-emerald-50 text-emerald-700 font-black rounded-xl text-sm transition-all border border-slate-200 hover:border-emerald-300">수정</button>
              <button onClick={() => { if(confirm('정말 삭제하시겠습니까?')) onDelete(p.id); }} className="flex-1 sm:flex-none px-6 py-3 bg-slate-50 hover:bg-red-50 text-red-600 font-black rounded-xl text-sm transition-all border border-slate-200 hover:border-red-300">삭제</button>
            </div>
          </div>
        ))}
      </div>

      {editingId && editForm && (
        <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-md flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-white rounded-[3rem] w-full max-w-4xl shadow-[0_30px_100px_rgba(0,0,0,0.5)] border border-white/20 animate-in fade-in zoom-in duration-300">
            <div className="px-10 py-8 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-[3rem]">
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-sm ${editingId === 'new' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                  {editingId === 'new' ? '✨' : '📝'}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                    {editingId === 'new' ? '새 프로젝트 사례 등록' : '프로젝트 사례 수정'}
                  </h3>
                  <p className="text-slate-500 text-sm font-medium">데이터를 기반으로 설득력 있는 포트폴리오를 구성하세요.</p>
                </div>
              </div>
              <button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-slate-900 p-2 transition-all hover:bg-slate-200 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-10 max-h-[70vh] overflow-y-auto custom-scrollbar space-y-12">
              {/* Section 1: Core Info */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xs font-black">01</span>
                  <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase">핵심 정보 (Identity)</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">프로젝트 제목</label>
                    <input 
                      type="text" 
                      placeholder="무엇을 구축하셨나요? 명확하고 강렬한 제목을 입력하세요."
                      value={editForm.title} 
                      onChange={e => setEditForm({...editForm, title: e.target.value})} 
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none text-xl font-black transition-all shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">카테고리</label>
                    <select 
                      value={editForm.category} 
                      onChange={e => setEditForm({...editForm, category: e.target.value})} 
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-bold transition-all shadow-sm"
                    >
                      <option>데이터 분석</option>
                      <option>성과관리</option>
                      <option>에듀테크</option>
                      <option>AI 교수법</option>
                      <option>기타 컨설팅</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">대표 이미지 URL</label>
                    <input 
                      type="text" 
                      placeholder="Unsplash 등 이미지 주소를 입력하세요."
                      value={editForm.imageUrl} 
                      onChange={e => setEditForm({...editForm, imageUrl: e.target.value})} 
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-bold text-sm transition-all shadow-sm" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Context */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xs font-black">02</span>
                  <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase">프로젝트 스토리 (Context)</h4>
                </div>
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">기존 문제점 (Problem)</label>
                    <textarea 
                      placeholder="해당 프로젝트를 시작하게 된 배경과 해결이 시급했던 문제를 기술하세요."
                      value={editForm.problem} 
                      onChange={e => setEditForm({...editForm, problem: e.target.value})} 
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none h-40 resize-none font-medium leading-relaxed transition-all shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">해결 접근법 (Approach)</label>
                    <textarea 
                      placeholder="문제를 해결하기 위해 어떤 데이터나 방법론을 사용하셨나요?"
                      value={editForm.approach} 
                      onChange={e => setEditForm({...editForm, approach: e.target.value})} 
                      className="w-full px-6 py-5 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none h-40 resize-none font-medium leading-relaxed transition-all shadow-sm" 
                    />
                  </div>
                </div>
              </div>

              {/* Section 3: Impact */}
              <div className="space-y-8">
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center text-xs font-black">03</span>
                  <h4 className="text-lg font-black text-slate-900 tracking-tight uppercase">성과 및 향후 계획 (Impact)</h4>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">핵심 결과 (Result)</label>
                    <input 
                      type="text" 
                      placeholder="제작 시간 80% 단축 등 수치 위주로 입력하세요."
                      value={editForm.results} 
                      onChange={e => setEditForm({...editForm, results: e.target.value})} 
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-bold transition-all shadow-sm" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">향후 계획 (Next Step)</label>
                    <input 
                      type="text" 
                      placeholder="앞으로 어떤 확장 계획이 있나요?"
                      value={editForm.nextSteps} 
                      onChange={e => setEditForm({...editForm, nextSteps: e.target.value})} 
                      className="w-full px-5 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:border-emerald-500 focus:bg-white outline-none font-bold transition-all shadow-sm" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-10 py-8 border-t border-slate-100 flex justify-end gap-4 bg-slate-50 rounded-b-[3rem]">
              <button 
                onClick={() => setEditingId(null)} 
                className="px-10 py-4 bg-white border-2 border-slate-200 text-slate-600 rounded-2xl font-black hover:bg-slate-100 transition-all active:scale-95"
              >
                취소
              </button>
              <button 
                onClick={handleSave} 
                className="px-12 py-4 bg-slate-900 text-white rounded-2xl font-black hover:bg-slate-800 shadow-2xl transition-all active:scale-95"
              >
                {editingId === 'new' ? '프로젝트 등록 완료' : '변경사항 저장'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
