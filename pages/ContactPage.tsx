
import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    type: '특강 / 강의',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct the email components
    const recipient = "okh831@gmail.com";
    const subject = `[Gentle Energy 문의] ${formData.name} / ${formData.organization}`;
    const body = `성함: ${formData.name}
소속: ${formData.organization}
이메일: ${formData.email}
연락처: ${formData.phone}
요청 유형: ${formData.type}

문의 내용:
${formData.message}`;

    // Gmail Web Interface Direct URL
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Fallback standard mailto link
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Attempt to open Gmail web first for a "Direct Gmail" experience
    // Users who are logged into Gmail in their browser will see a direct compose window.
    window.open(gmailUrl, '_blank');
    
    // Also provide the mailto fallback just in case or for native apps
    // window.location.href = mailtoUrl; 

    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (submitted) {
    return (
      <div className="py-40 text-center px-4">
        <div className="max-w-lg mx-auto bg-emerald-50 p-12 rounded-[3rem] border border-emerald-100 shadow-2xl">
          <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
            <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-3xl font-black text-slate-900 mb-6">Gmail 창이 열렸습니다!</h3>
          <p className="text-slate-600 mb-10 text-lg leading-relaxed">
            브라우저의 새 탭에서 Gmail 작성 화면이 나타납니다.<br/>
            내용을 확인하신 후 <strong>보내기</strong> 버튼을 눌러주세요.<br/>
            확인 후 신속히 회신드리겠습니다.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-emerald-700 font-black text-lg underline underline-offset-4 hover:text-emerald-500 transition-colors"
          >
            다시 작성하기
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <h2 className="text-sm font-black text-rose-600 uppercase tracking-widest mb-4">Get In Touch</h2>
            <h3 className="text-5xl font-black text-slate-900 mb-10 leading-tight">강의 / 워크숍 / 컨설팅<br/>직접 문의하기</h3>
            <p className="text-xl text-slate-500 mb-12 font-medium leading-relaxed">
              작성하신 내용은 관리자의 Gmail로 직접 전송됩니다.<br/>
              대학 및 공공기관의 교육 혁신을 위한 구체적인 파트너십을 제안해 주세요.
            </p>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-emerald-100 text-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Direct Email</h4>
                  <p className="text-slate-500 font-medium text-lg">okh831@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Response Time</h4>
                  <p className="text-slate-500 font-medium text-lg">최대 48시간 이내 회신</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-12 rounded-[3rem] shadow-2xl border border-slate-100">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">성함 (Name)</label>
                <input 
                  required 
                  name="name"
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-bold" 
                  placeholder="홍길동" 
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">소속 (Organization)</label>
                <input 
                  required 
                  name="organization"
                  type="text" 
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-bold" 
                  placeholder="OO대학교 OO처" 
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">본인 이메일 (Your Email)</label>
                <input 
                  required 
                  name="email"
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-bold" 
                  placeholder="example@gmail.com" 
                />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">연락처 (Phone)</label>
                <input 
                  required 
                  name="phone"
                  type="tel" 
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-bold" 
                  placeholder="010-0000-0000" 
                />
              </div>
            </div>

            <div className="mb-8">
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">요청 유형 (Request Type)</label>
              <select 
                name="type"
                value={formData.type}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-black text-slate-700"
              >
                <option>특강 / 강의</option>
                <option>실습 워크숍</option>
                <option>성과관리 컨설팅</option>
                <option>단순 자문 / 심사</option>
              </select>
            </div>

            <div className="mb-10">
              <label className="block text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-3">상세 내용 (Message)</label>
              <textarea 
                rows={6} 
                required 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-4 bg-slate-50 border-2 border-slate-100 rounded-2xl focus:outline-none focus:border-emerald-500 focus:bg-white transition-all font-medium leading-relaxed resize-none" 
                placeholder="일정, 대상, 인원, 주제 등 구체적인 상황을 적어주시면 정확한 상담이 가능합니다."
              ></textarea>
            </div>

            <button type="submit" className="w-full py-5 bg-slate-900 text-white font-black text-xl rounded-2xl hover:bg-slate-800 transition-all shadow-2xl active:scale-[0.98] flex items-center justify-center gap-3">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 5.457v13.909c0 .904-.732 1.635-1.636 1.635h-3.819V11.46L12 16.64l-6.545-5.18v9.546H1.636C.732 21 0 20.268 0 19.366V5.457c0-1.298 1.436-2.03 2.45-1.225L12 11.247l9.55-7.015c1.014-.805 2.45-.073 2.45 1.225z"/>
              </svg>
              Gmail로 직접 전송하기
            </button>
            <p className="text-center text-xs text-slate-400 mt-6 font-bold">
              ※ 제출 시 Gmail 작성 창이 새 탭에서 열리며 내용이 자동 입력됩니다.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
