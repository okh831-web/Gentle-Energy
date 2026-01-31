
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
      imageUrl: 'https://picsum.photos/seed/new/800/600'
    };
    setEditingId('new');
    setEditForm(newProject);
  };

  const handleSave = () => {
    if (!editForm) return;
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
      <div className="flex items-center justify-center min-h-[60vh]">
        <form onSubmit={handleLogin} className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 w-full max-w-sm">
          <h2 className="text-xl font-bold mb-6 text-center">관리자 로그인</h2>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg mb-4"
            placeholder="비밀번호 입력 (3111)"
          />
          <button type="submit" className="w-full py-2 bg-emerald-600 text-white font-bold rounded-lg">확인</button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">포트폴리오 관리</h2>
        <button onClick={startNew} className="bg-emerald-600 text-white px-4 py-2 rounded font-bold">새 사례 추가</button>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {projects.map(p => (
          <div key={p.id} className="bg-white p-6 rounded-xl border shadow-sm flex justify-between items-start">
            <div>
              <div className="text-xs font-bold text-emerald-600 mb-1">{p.category}</div>
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-slate-500 truncate max-w-xl">{p.problem}</p>
            </div>
            <div className="flex gap-2">
              <button onClick={() => startEdit(p)} className="text-sm text-blue-600 font-bold">수정</button>
              <button onClick={() => onDelete(p.id)} className="text-sm text-red-600 font-bold">삭제</button>
            </div>
          </div>
        ))}
      </div>

      {editingId && editForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-2xl font-bold mb-6">{editingId === 'new' ? '새 사례 등록' : '사례 수정'}</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-2">
                <label className="text-xs font-bold text-slate-400">제목</label>
                <input type="text" value={editForm.title} onChange={e => setEditForm({...editForm, title: e.target.value})} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400">카테고리</label>
                <input type="text" value={editForm.category} onChange={e => setEditForm({...editForm, category: e.target.value})} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400">이미지 URL</label>
                <input type="text" value={editForm.imageUrl} onChange={e => setEditForm({...editForm, imageUrl: e.target.value})} className="w-full p-2 border rounded" />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold text-slate-400">문제점 (Problem)</label>
                <textarea value={editForm.problem} onChange={e => setEditForm({...editForm, problem: e.target.value})} className="w-full p-2 border rounded h-24" />
              </div>
              <div className="col-span-2">
                <label className="text-xs font-bold text-slate-400">접근법 (Approach)</label>
                <textarea value={editForm.approach} onChange={e => setEditForm({...editForm, approach: e.target.value})} className="w-full p-2 border rounded h-24" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400">결과 (Result)</label>
                <input type="text" value={editForm.results} onChange={e => setEditForm({...editForm, results: e.target.value})} className="w-full p-2 border rounded" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-400">향후 계획 (Next Step)</label>
                <input type="text" value={editForm.nextSteps} onChange={e => setEditForm({...editForm, nextSteps: e.target.value})} className="w-full p-2 border rounded" />
              </div>
            </div>
            <div className="flex justify-end gap-4 mt-8">
              <button onClick={() => setEditingId(null)} className="px-6 py-2 bg-slate-200 rounded font-bold">취소</button>
              <button onClick={handleSave} className="px-6 py-2 bg-emerald-600 text-white rounded font-bold">저장하기</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPage;
