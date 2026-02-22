
import React from 'react';
import { INITIAL_BLOG_POSTS } from '../constants';
import { MousePointerClick, MessageSquare } from 'lucide-react';

const BlogPage: React.FC = () => {
  const notices = INITIAL_BLOG_POSTS.filter(post => post.isNotice);
  const posts = INITIAL_BLOG_POSTS.filter(post => !post.isNotice);

  return (
    <div className="bg-[#f9f9f9] min-h-screen py-10">
      <div className="max-w-[1000px] mx-auto bg-white shadow-sm border border-slate-200 overflow-hidden">
        {/* Blog Header Navigation - Button on Left with Icon */}
        <div className="border-b border-slate-200 px-8 py-4 flex justify-start items-center space-x-2">
          <a 
            href="https://blog.naver.com/okh831" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-2 bg-[#00c73c] text-white text-center text-[13px] font-bold rounded-sm hover:bg-[#00b336] transition-colors"
          >
            <span>네이버 블로그 방문하기</span>
            <MousePointerClick size={16} />
          </a>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-[240px] border-r border-slate-100 p-6 bg-white">
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1491841573634-28140fc7ced7?auto=format&fit=crop&q=80&w=400&h=400" 
                alt="Warm Study" 
                className="w-full aspect-square object-cover rounded-sm border border-slate-200 mb-4"
                referrerPolicy="no-referrer"
              />
              <h2 className="text-[16px] font-bold text-slate-800 mb-1">Gentle Energy</h2>
              <p className="text-[12px] text-slate-400 mb-4">okh831 <span className="inline-block w-3 h-3 bg-slate-100 rounded-full text-[8px] text-center leading-3">✎</span></p>
              
              <div className="text-[12px] text-slate-600 leading-relaxed mb-4 space-y-2">
                <p>육군사관학교, 연세대, 아주대 대학원 교육학과를 졸업하고, 미국 인력과정, 한국평생학습정책 담당 등 HRD(인적자원개발) 분야의 전문가임.</p>
                <p>독서운동, 글쓰기 강의, 책쓰기 등 다양한 활동을 펼치고 있음.</p>
                <p>육군 초대 교수학습센터장을 역임하고, 포항공대-고려대를 거쳐 현재는 건양대 교수로 근무 <span className="bg-slate-100 px-1 rounded text-[10px] text-slate-400">EDIT</span></p>
              </div>
              
              <button className="text-[11px] text-slate-400 hover:underline flex items-center mb-4">
                프로필 <span className="ml-1 text-[8px]">▶</span>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-grow p-8 bg-white">
            {/* Blog씨 Section */}
            <div className="mb-8 pb-8 border-b border-slate-100">
              <p className="text-[13px] mb-2"><span className="text-slate-400">From.</span> <span className="text-red-500 font-bold">블로그씨</span></p>
              <p className="text-[15px] text-slate-800 font-medium leading-relaxed">
                지금의 내가, 미래의 나에게! 10년 뒤 더...
              </p>
              <button className="text-[13px] font-bold text-slate-800 mt-2 flex items-center">
                답하기 <span className="ml-1 text-[8px]">▶</span>
              </button>
            </div>

            {/* Guidance Message */}
            <div className="mb-8 p-4 bg-slate-50 border border-slate-100 rounded-sm text-center">
              <p className="text-[14px] text-slate-600">
                아래 내용은 <span className="font-bold text-[#00c73c]">&lt;네이버 블로그 방문하기&gt;</span>를 클릭하면 볼 수 있습니다.
              </p>
            </div>

            {/* Post List Header */}
            <div className="flex justify-between items-center mb-8 pb-2 border-b border-slate-100">
              <div className="text-[14px]">
                <span className="font-bold text-slate-800">책은 새로운 창문</span>
                <span className="text-slate-400 ml-2">{posts.length}개의 글</span>
              </div>
              <button className="text-[12px] text-slate-800 font-bold">목록열기</button>
            </div>

            {/* Posts Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {posts.map((post) => (
                <div key={post.id} className="group cursor-pointer flex flex-col">
                  {post.imageUrl && (
                    <div className="aspect-[4/3] overflow-hidden bg-slate-100 mb-4 border border-slate-100 rounded-sm">
                      <img 
                        src={post.imageUrl} 
                        alt={post.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  )}
                  <h3 className="text-[15px] font-bold text-slate-800 mb-2 line-clamp-2 leading-snug group-hover:underline">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-[12px] text-slate-400">
                    <span>{post.date}</span>
                    <div className="flex items-center space-x-1">
                      <MessageSquare size={12} />
                      <span>{post.comments || 0}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
