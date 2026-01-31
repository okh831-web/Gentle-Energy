
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
      category: '기타',
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
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-3xl shadow-xl border border-slate-200 w-full max-w-sm">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-slate-900">관리자 인증</h2>
            <p className="text-slate-500 text-sm mt-1">포트폴리오 수정을 위해 비밀번호가 필요합니다.</p>
          </div>
          <input
            type="password"
            autoFocus
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl mb-4 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition-all"
            placeholder="비밀번호 입력 (3111)"
          />
          <button type="submit" className="w-full py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition-colors">
            로그인
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 font-serif">포트폴리오 관리</h2>
          <p className="text-slate-500 mt-1">현재 등록된 사례들을 수정하거나 새로운 사례를 추가할 수 있습니다.</p>
        </div>
        <button onClick={startNew} className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-xl font-bold shadow-lg shadow-emerald-200 transition-all flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
          </svg>
          새 사례 추가
        </button>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {projects.map(p => (
          <div key={p.id} className="group bg-white p-4 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex items-center gap-6">
            <div className="w-24 h-24 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
              <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="flex-grow min-w-0">
              <div className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mb-1">{p.category}</div>
              <h3 className="text-lg font-bold text-slate-900 truncate mb-1">{p.title}</h3>
              <p className="text-sm text-slate-500 truncate max-w-2xl">{p.problem}</p>
            </div>
            <div className="flex gap-2 flex-shrink-0">
              <button onClick={() => startEdit(p)} className="px-4 py-2 bg-slate-50 hover:bg-blue-50 text-blue-600 font-bold rounded-lg text-sm transition-colors border border-slate-200">수정</button>
              <button onClick={() => { if(confirm('정말 삭제하시겠습니까?')) onDelete(p.id); }} className="px-4 py-2 bg-slate-50 hover:bg-red-50 text-red-600 font-bold rounded-lg text-sm transition-colors border border-slate-200">삭제</button>
            </div>
          </div>
        ))}
      </div>

      {editingId && editForm && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center z-[100] p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl w-full max-w-4xl shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="px-8 py-6 border-b border-slate-100 flex justify-between items-center bg-slate-50 rounded-t-3xl">
              <h3 className="text-xl font-bold text-slate-900">
                {editingId === 'new' ? '✨ 새 프로젝트 사례 등록' : '📝 프로젝트 사례 수정'}
              </h3>
              <button onClick={() => setEditingId(null)} className="text-slate-400 hover:text-slate-600 p-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-8 max-h-[75vh] overflow-y-auto">
              {/* 섹션 1: 기본 정보 */}
              <div className="mb-10">
                <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-[10px]">1</span>
                  기본 정보 (Identity)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">프로젝트 제목</label>
                    <input 
                      type="text" 
                      placeholder="예: 학과별 핵심역량 리포트 자동화 체계 구축"
                      value={editForm.title} 
                      onChange={e => setEditForm({...editForm, title: e.target.value})} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-lg font-bold" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">카테고리</label>
                    <select 
                      value={editForm.category} 
                      onChange={e => setEditForm({...editForm, category: e.target.value})} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none"
                    >
                      <option>데이터 분석</option>
                      <option>성과관리</option>
                      <option>에듀테크</option>
                      <option>AI 교수법</option>
                      <option>기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">대표 이미지 URL (Unsplash 권장)</label>
                    <input 
                      type="text" 
                      placeholder="https://images.unsplash.com/..."
                      value={editForm.imageUrl} 
                      onChange={e => setEditForm({...editForm, imageUrl: e.target.value})} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none text-sm" 
                    />
                  </div>
                </div>
              </div>

              {/* 섹션 2: 프로젝트 상세 */}
              <div className="mb-10">
                <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-[10px]">2</span>
                  프로젝트 스토리 (Problem & Approach)
                </h4>
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">기존 문제점 (Problem)</label>
                    <textarea 
                      placeholder="어떤 어려움이 있었나요?"
                      value={editForm.problem} 
                      onChange={e => setEditForm({...editForm, problem: e.target.value})} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-28 resize-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">해결 접근법 (Approach)</label>
                    <textarea 
                      placeholder="어떤 방법론으로 해결했나요?"
                      value={editForm.approach} 
                      onChange={e => setEditForm({...editForm, approach: e.target.value})} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none h-28 resize-none" 
                    />
                  </div>
                </div>
              </div>

              {/* 섹션 3: 성과 및 계획 */}
              <div>
                <h4 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-6 flex items-center gap-2">
                  <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center text-[10px]">3</span>
                  성과 및 환류 (Results & Next Step)
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">핵심 결과 (Result)</label>
                    <input 
                      type="text" 
                      placeholder="예: 제작 시간 80% 단축, 만족도 4.9점 확보"
                      value={editForm.results} 
                      onChange={e => setEditForm({...editForm, results: e.target.value})} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">향후 계획 (Next Step)</label>
                    <input 
                      type="text" 
                      placeholder="예: 전 대학 확산 및 고도화 연구 진행"
                      value={editForm.nextSteps} 
                      onChange={e => setEditForm({...editForm, nextSteps: e.target.value})} 
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-none" 
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="px-8 py-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50 rounded-b-3xl">
              <button 
                onClick={() => setEditingId(null)} 
                className="px-6 py-3 bg-white border border-slate-200 text-slate-600 rounded-xl font-bold hover:bg-slate-50 transition-colors"
              >
                취소
              </button>
              <button 
                onClick={handleSave} 
                className="px-8 py-3 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 shadow-lg shadow-emerald-100 transition-all"
              >
                {editingId === 'new' ? '프로젝트 등록하기' : '변경사항 저장하기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
