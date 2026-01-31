
import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';

interface ProjectsPageProps {
  projects: Project[];
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects }) => {
  return (
    <div className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-emerald-700 uppercase tracking-widest mb-3">Projects & Cases</h2>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">프로젝트 및 성과 사례</h3>
          <p className="text-slate-500 max-w-2xl">
            단순한 이론 제안을 넘어 실제 현장에 적용되어 가시적인 변화를 이끌어낸 대표 사례들입니다.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden flex flex-col lg:flex-row">
              <div className="lg:w-1/3 h-72 lg:h-auto overflow-hidden bg-slate-100 flex items-center justify-center relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200';
                  }}
                />
              </div>
              <div className="lg:w-2/3 p-8 lg:p-12">
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-bold uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-8">{project.title}</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Problem (배경)</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Approach (접근)</h5>
                    <p className="text-sm text-slate-600 leading-relaxed">{project.approach}</p>
                  </div>
                </div>

                <div className="mb-8">
                  <h5 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Outputs (산출물)</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.outputs.map((out, i) => (
                      <Link 
                        key={i} 
                        to={`/project/${project.id}/output/${i}`}
                        className="text-xs bg-slate-100 px-3 py-1 rounded text-slate-600 hover:bg-emerald-600 hover:text-white transition-colors border border-transparent hover:border-emerald-700"
                      >
                        {out}
                      </Link>
                    ))}
                  </div>
                </div>

                <div className="p-6 bg-emerald-50 rounded-2xl">
                  <div className="flex gap-8 flex-col sm:flex-row">
                    <div className="flex-1">
                      <h5 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Result (결과)</h5>
                      <p className="text-slate-900 font-bold leading-snug">{project.results}</p>
                    </div>
                    <div className="flex-1 border-t sm:border-t-0 sm:border-l border-emerald-200 pt-4 sm:pt-0 sm:pl-8">
                      <h5 className="text-xs font-bold text-emerald-700 uppercase tracking-widest mb-1">Next Step (향후 계획)</h5>
                      <p className="text-slate-600 text-sm">{project.nextSteps}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
