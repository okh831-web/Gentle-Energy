
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import AboutPage from './pages/AboutPage';
import ExpertisePage from './pages/ExpertisePage';
import ProjectsPage from './pages/ProjectsPage';
import PublicationsPage from './pages/PublicationsPage';
import ContactPage from './pages/ContactPage';
import AdminPage from './pages/AdminPage';
import OutputDetailPage from './pages/OutputDetailPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Project } from './types';
import { INITIAL_PROJECTS } from './constants';

const App: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(() => {
    try {
      const saved = localStorage.getItem('edu_portfolio_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.error('Failed to parse projects from localStorage', e);
    }
    return INITIAL_PROJECTS;
  });

  useEffect(() => {
    try {
      localStorage.setItem('edu_portfolio_projects', JSON.stringify(projects));
    } catch (e) {
      console.error('Failed to save projects to localStorage', e);
    }
  }, [projects]);

  const updateProject = (updated: Project) => {
    setProjects(prev => prev.map(p => p.id === updated.id ? updated : p));
  };

  const addProject = (project: Project) => {
    setProjects(prev => [...prev, project]);
  };

  const deleteProject = (id: string) => {
    setProjects(prev => prev.filter(p => p.id !== id));
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage projects={projects} />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/projects" element={<ProjectsPage projects={projects} />} />
            <Route path="/project/:id/output/:index" element={<OutputDetailPage projects={projects} />} />
            <Route path="/publications" element={<PublicationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route 
              path="/admin" 
              element={
                <AdminPage 
                  projects={projects} 
                  onUpdate={updateProject} 
                  onAdd={addProject} 
                  onDelete={deleteProject} 
                />
              } 
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
