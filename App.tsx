
import React, { useState, useMemo } from 'react';
import { SYMPOSIUM_NAME, SYMPOSIUM_TAGLINE, EVENTS, SCHEDULE, FRACTALS_EVENTS, IVENOR_EVENTS } from './constants';
import { EventCard } from './components/EventCard';
import { AIChatbot } from './components/AIChatbot';
import { Event } from './types';
import './background.css';


const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'Home' | 'Fractals' | 'Ivenor' | 'Schedule' | 'Register' | 'EventDetail'>('Home');
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [selectedSymposiumForReg, setSelectedSymposiumForReg] = useState<'Fractals' | 'Ivenor'>('Fractals');
  const [selectedEventId, setSelectedEventId] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  const navigateToEventDetail = (id: string) => {
    const event = EVENTS.find(e => e.id === id);
    if (event) {
      setCurrentEvent(event);
      setActiveTab('EventDetail');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleRegisterFromCard = (id: string) => {
    const event = EVENTS.find(e => e.id === id);
    if (event) {
      setSelectedSymposiumForReg(event.symposium);
      setSelectedEventId(id);
      setActiveTab('Register');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const filteredEventsForReg = useMemo(() => {
    return selectedSymposiumForReg === 'Fractals' ? FRACTALS_EVENTS : IVENOR_EVENTS;
  }, [selectedSymposiumForReg]);

  return (
    <div className="min-h-screen flex flex-col bg-transparent">

      {/* 🔥 Animated Background (Pure CSS) */}
<div className="bg-animation">
  <div className="bg-blob cyan"></div>
  <div className="bg-blob orange"></div>
  <div className="bg-blob indigo"></div>
</div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">

      {/* Logo */}
      <span
        className="text-2xl font-black bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent cursor-pointer"
        onClick={() => {
          setActiveTab('Home');
          setMobileMenuOpen(false);
        }}
      >
        {SYMPOSIUM_NAME}
      </span>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        {(['Home', 'Fractals', 'Ivenor', 'Schedule', 'Rules'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`text-sm font-semibold transition-all ${
              activeTab === tab
                ? tab === 'Fractals'
                  ? 'text-cyan-600 font-bold underline decoration-2 underline-offset-8'
                  : tab === 'Ivenor'
                  ? 'text-orange-600 font-bold underline decoration-2 underline-offset-8'
                  : 'text-indigo-600 font-bold'
                : 'text-slate-500 hover:text-slate-800'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg hover:bg-slate-100"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  {/* Mobile Dropdown Menu */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-white border-t border-slate-200 animate-in slide-in-from-top duration-300">
      {(['Home', 'Fractals', 'Ivenor', 'Schedule', 'Rules'] as const).map(tab => (
        <button
          key={tab}
          onClick={() => {
            setActiveTab(tab);
            setMobileMenuOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="block w-full text-left px-6 py-4 text-slate-700 font-semibold hover:bg-slate-100"
        >
          {tab}
        </button>
      ))}
    </div>
  )}
</nav>


      <main className="flex-grow">
        {/* Home Section */}
        {activeTab === 'Home' && (
          <section className="animate-in fade-in duration-700">
            <div className="relative overflow-hidden pt-20 pb-20 lg:pt-32 lg:pb-40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                  <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-wider text-indigo-600 uppercase bg-indigo-50 rounded-full">
                    A Dual Symposium Experience
                  </span>
                  <h1 className="text-5xl lg:text-8xl font-black text-slate-900 tracking-tighter mb-8">
                    FRACTALS & I'VENOR<span className="text-indigo-600">26</span>
                  </h1>
                  <p className="max-w-2xl mx-auto text-xl text-slate-600 mb-12">
                    Two paths. One vision — innovate with <b >Fractals </b>strategize with <b>I'venor</b>. <br /> <div className="font-black text-slate-900" >March 5 & 6</div>
                    
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Fractals Portal */}
                    <div 
                      onClick={() => setActiveTab('Fractals')}
                      className="group cursor-pointer bg-white p-8 rounded-3xl border-2 border-transparent hover:border-cyan-500 transition-all shadow-xl hover:shadow-cyan-100"
                    >
                      <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"/></svg>
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-2">FRACTALS</h3>
                      <p className="text-slate-500 text-sm mb-6">7 Events for circuit breakers, electro minds and tech titans. <br /> <b>March-5 2026</b> </p>
                      <button className="text-cyan-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Fractals <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </button>
                    </div>

                    {/* Ivenor Portal */}
                    <div 
                      onClick={() => setActiveTab('Ivenor')}
                      className="group cursor-pointer bg-white p-8 rounded-3xl border-2 border-transparent hover:border-orange-500 transition-all shadow-xl hover:shadow-orange-100"
                    >
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-2">I'VENOR</h3>
                      <p className="text-slate-500 text-sm mb-6">8 Segments for technorats, creative minds and frenzy vibes. <br /> <b>March-6 2026</b></p>
                      <button className="text-orange-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Ivenor <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10 overflow-hidden">
                <div className="absolute top-1/4 -left-1/4 w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px]"></div>
                <div className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] bg-orange-100/50 rounded-full blur-[100px]"></div>
              </div>
            </div>
          </section>
        )}

        {/* Fractals Section */}
        {activeTab === 'Fractals' && (
          <section className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
            <div className="mb-12 border-l-8 border-cyan-500 pl-6">
              <h2 className="text-5xl font-black text-slate-900 mb-2">FRACTALS</h2>
              <p className="text-slate-600 text-xl">• 7 Events</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FRACTALS_EVENTS.map(event => (
                <div key={event.id} className="relative group cursor-pointer" onClick={() => navigateToEventDetail(event.id)}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <EventCard event={event} onRegister={(id) => { id.stopPropagation(); handleRegisterFromCard(id); }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ivenor Section */}
        {activeTab === 'Ivenor' && (
          <section className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
            <div className="mb-12 border-l-8 border-orange-500 pl-6">
              <h2 className="text-5xl font-black text-slate-900 mb-2">IVENOR</h2>
              <p className="text-slate-600 text-xl">The Management & Cultural Symposium • 8 Events</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {IVENOR_EVENTS.map(event => (
                <div key={event.id} className="relative group cursor-pointer" onClick={() => navigateToEventDetail(event.id)}>
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
                  <EventCard event={event} onRegister={(id) => { id.stopPropagation(); handleRegisterFromCard(id); }} />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Event Detail View */}
        {activeTab === 'EventDetail' && currentEvent && (
          <section className="max-w-6xl mx-auto px-4 py-12 animate-in slide-in-from-bottom-8 duration-500">
            <button 
              onClick={() => setActiveTab(currentEvent.symposium as any)}
              className="mb-8 flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors font-semibold"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Back to {currentEvent.symposium}
            </button>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                  <img src={currentEvent.image} alt={currentEvent.title} className="w-full h-full object-cover" />
                  <div className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-white font-bold text-sm shadow-lg ${currentEvent.symposium === 'Fractals' ? 'bg-cyan-600' : 'bg-orange-600'}`}>
                    {currentEvent.category}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-black text-slate-900">{currentEvent.title}</h1>
                  <p className="text-xl text-slate-600 leading-relaxed">{currentEvent.description}</p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                    <span className={`w-2 h-8 rounded-full ${currentEvent.symposium === 'Fractals' ? 'bg-cyan-500' : 'bg-orange-500'}`}></span>
                    Rules & Regulations
                  </h2>
                  <ul className="space-y-4">
                    {currentEvent.rules.map((rule, idx) => (
                      <li key={idx} className="flex gap-4 text-slate-700">
                        <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentEvent.symposium === 'Fractals' ? 'bg-cyan-50 text-cyan-600' : 'bg-orange-50 text-orange-600'}`}>
                          {idx + 1}
                        </span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm sticky top-24">
                  <h3 className="text-lg font-bold text-slate-900 mb-6">Event Details</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Venue</p>
                        <p className="text-slate-900 font-semibold">{currentEvent.venue}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Time & Date</p>
                        <p className="text-slate-900 font-semibold">{currentEvent.date} • {currentEvent.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Coordinator Number</p>
                        <p className="text-slate-900 font-semibold">{currentEvent.prize}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Team Size</p>
                        <p className="text-slate-900 font-semibold">{currentEvent.teamSize}</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={currentEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 block w-full py-4 rounded-xl text-white font-bold text-center transition-all hover:scale-[1.02] shadow-lg ${currentEvent.symposium === 'Fractals' ? 'bg-cyan-600 hover:bg-cyan-700 shadow-cyan-100' : 'bg-orange-600 hover:bg-orange-700 shadow-orange-100'}`}
                  >
                    Register via Google Form
                  </a>
                  <p className="text-center text-[10px] text-slate-400 mt-4 px-2 uppercase tracking-tighter">Redirects to official registration portal</p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Schedule Section */}
        {activeTab === 'Schedule' && (
          <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-black text-slate-900 mb-12 text-center">Unified Timeline</h2>
            <div className="space-y-8">
              {SCHEDULE.map((item, i) => (
                <div key={item.id} className="relative flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ring-4 ${
                      item.symposium === 'Fractals' ? 'bg-cyan-500 ring-cyan-50' :
                      item.symposium === 'Ivenor' ? 'bg-orange-500 ring-orange-50' :
                      'bg-indigo-600 ring-indigo-50'
                    }`}></div>
                    {i !== SCHEDULE.length - 1 && <div className="w-0.5 flex-grow bg-slate-200 my-2"></div>}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-900 font-bold text-lg">{item.time}</span>
                        <div className="flex gap-2">
                          {item.symposium !== 'Both' && (
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${
                              item.symposium === 'Fractals' ? 'bg-cyan-100 text-cyan-700' : 'bg-orange-100 text-orange-700'
                            }`}>
                              {item.symposium}
                            </span>
                          )}
                          <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">{item.activity}</h3>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/></svg>
                        {item.location}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Registration Section */}
        {activeTab === 'Rules' && (
          <section className="max-w-3xl mx-auto px-4 py-16">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-slate-900 mb-2">Rules for registration</h2>
                
                
              </div>
              <p className="font-black text-slate-900">Important Rules</p>
              <p className="text-slate-800">•	Registration only through the official website and Google Form.
                <br />•	No custom event combinations allowed. <br />•	Duplicate entries are not permitted. <br />•	Use CAPITAL LETTERS while filling the form.
                <br />•	Incomplete or false details may lead to rejection.
                <br />•	Payment is non-refundable and non-transferable.
              </p>
              <br />
              <p className="font-black text-slate-900">Event type selection</p>
              <p className="text-slate-800">Select any one option:
                <br />•	Single Event
                <br />•	Combo (Multiple Events)
                <br />•	Workshops
              </p>
              <br />
              <p className="font-black text-slate-900">Workshop</p>
              <p className="text-stale-800">
                •	Participants can’t attend any technical and non-technical events
                <br />•	Workshop participation is individual.
                <br />•	Each participant must register separately.
                <br />•	No team registration is allowed for workshops.
                <br />•	Each workshop requires separate payment
                <br />•	Registration Fee - 400(per head)
              </p>
              <br />
              <p className="font-black text-slate-900">Fees(Single Event):</p>
              <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th>Members</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>₹200</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>₹300</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>₹400</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <p className="font-black text-slate-900"> Fees (Combo Events):</p>
              <table border={1} cellPadding={10} style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr>
                    <th>Members</th>
                    <th>Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>₹250</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>₹400</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>₹600</td>
                  </tr>
                </tbody>
              </table>
              <br />
              <p className="font-black text-slate-900">Payment proof and submission</p>
              <p className="text-stale-800">
                <br />•	Upload the payment screenshot.
                <br />•	Enter the Transaction ID / UTR Number.
                <br />•	Verify all details.
                <br />•	Click Submit to complete registration.
              </p>













              
              {/* <div className="flex gap-4 mb-8">
                <button 
                  onClick={() => { setSelectedSymposiumForReg('Fractals'); setSelectedEventId(''); }}
                  className={`flex-1 py-4 rounded-xl font-bold text-center border-2 transition-all ${
                    selectedSymposiumForReg === 'Fractals' 
                      ? 'bg-cyan-50 border-cyan-500 text-cyan-700' 
                      : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                  }`}
                >
                  Fractals Track
                </button>
                <button 
                  onClick={() => { setSelectedSymposiumForReg('Ivenor'); setSelectedEventId(''); }}
                  className={`flex-1 py-4 rounded-xl font-bold text-center border-2 transition-all ${
                    selectedSymposiumForReg === 'Ivenor' 
                      ? 'bg-orange-50 border-orange-500 text-orange-700' 
                      : 'bg-white border-slate-100 text-slate-400 hover:border-slate-200'
                  }`}
                >
                  Ivenor Track
                </button>
              </div> */}

              {/* <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert(`Registered for ${selectedEventId}!`); }}>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Select Event ({selectedSymposiumForReg})</label>
                  <select 
                    value={selectedEventId}
                    onChange={(e) => setSelectedEventId(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all"
                    required
                  >
                    <option value="" disabled>Choose an event...</option>
                    {filteredEventsForReg.map(ev => <option key={ev.id} value={ev.id}>{ev.title}</option>)}
                  </select>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="john@college.edu" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">College/Institution</label>
                  <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-indigo-500 outline-none transition-all" placeholder="State Technical University" required />
                </div>
                <button 
                  type="submit" 
                  className={`w-full text-white font-bold py-4 rounded-xl shadow-lg transition-all ${
                    selectedSymposiumForReg === 'Fractals' ? 'bg-cyan-600 hover:bg-cyan-700' : 'bg-orange-600 hover:bg-orange-700'
                  }`}
                >
                  Register Now
                </button>
              </form> */}
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="space-y-4">
            <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              {SYMPOSIUM_NAME}
            </span>
            <p className="text-slate-400 text-sm">
              Connecting Technology and Management through two world-class symposiums.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-cyan-400">Student Chairperson</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Swamynathan S - 99440 43555</li>
              <li>Manickavel G - 78100 89560</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 text-orange-400">Student Secretary</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Gunaselan V - 98942 88912</li>
              <li>Suryani S - 86676 77359</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Designed & Developed by</h4>
            <p className="text-sm text-slate-400">Ram Balaje T<br/>93632 36208 <br />www.linkedin.com/in/ram-balaje</p>
          </div>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
};

export default App;