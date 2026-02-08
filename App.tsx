import React, { useState, useMemo } from "react";
import {
  SYMPOSIUM_NAME,
  SYMPOSIUM_TAGLINE,
  EVENTS,
  SCHEDULE,
  FRACTALS_EVENTS,
  IVENOR_EVENTS,
} from "./constants";
import { EventCard } from "./components/EventCard";
import { AIChatbot } from "./components/AIChatbot";
import { Event } from "./types";
import "./background.css";

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "Home" | "Fractals" | "Ivenor" | "Schedule" | "Rules" | "EventDetail"
  >("Home");
  const [currentEvent, setCurrentEvent] = useState<Event | null>(null);
  const [selectedSymposiumForReg, setSelectedSymposiumForReg] = useState<
    "Fractals" | "Ivenor"
  >("Fractals");
  const [selectedEventId, setSelectedEventId] = useState<string>("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateToEventDetail = (id: string) => {
    const event = EVENTS.find((e) => e.id === id);
    if (event) {
      setCurrentEvent(event);
      setActiveTab("EventDetail");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleRegisterFromCard = (id: string) => {
    const event = EVENTS.find((e) => e.id === id);
    if (event) {
      setSelectedSymposiumForReg(event.symposium);
      setSelectedEventId(id);
      setActiveTab("Register");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const filteredEventsForReg = useMemo(() => {
    return selectedSymposiumForReg === "Fractals"
      ? FRACTALS_EVENTS
      : IVENOR_EVENTS;
  }, [selectedSymposiumForReg]);

  return (
    <div className="min-h-screen flex flex-col bg-[#1f2933]">
      {/* 🔥 Animated Background (Pure CSS) */}
      <div className="bg-animation">
        <div className="bg-blob cyan"></div>
        <div className="bg-blob orange"></div>
        <div className="bg-blob indigo"></div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-[#1f2933] border-b border-yellow-500/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <span
              className="text-2xl font-black cursor-pointer
        bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
        bg-clip-text text-transparent"
              onClick={() => {
                setActiveTab("Home");
                setMobileMenuOpen(false);
              }}
            >
              {SYMPOSIUM_NAME}
            </span>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {(
                ["Home", "Fractals", "Ivenor", "Schedule", "Rules"] as const
              ).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`text-sm font-semibold tracking-wide transition-all
              ${
                activeTab === tab
                  ? "text-yellow-400 border-b-2 border-yellow-400 pb-1"
                  : "text-yellow-300 hover:text-yellow-400"
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
                className="p-2 rounded-lg hover:bg-yellow-500/10"
              >
                <svg
                  className="w-6 h-6 text-yellow-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#1f2933] border-t border-yellow-500/70 animate-in slide-in-from-top duration-300">
            {(["Home", "Fractals", "Ivenor", "Schedule", "Rules"] as const).map(
              (tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`block w-full text-left px-6 py-4 font-semibold transition-all
              ${
                activeTab === tab
                  ? "text-yellow-400 bg-yellow-500/10"
                  : "text-yellow-300 hover:bg-yellow-500/10 hover:text-yellow-400"
              }`}
                >
                  {tab}
                </button>
              ),
            )}
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {/* Home Section */}
        {activeTab === "Home" && (
          <section className="animate-in fade-in duration-700 bg-[#1f2933]">
<div className="relative overflow-hidden pt-6 pb-20 lg:pt-12 lg:pb-40">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center">
                  {/* College + Department Header */}
<div className="mb-8 text-center">
  {/* College Name */}
  <h2
    className="
      text-3xl sm:text-4xl lg:text-5xl
      font-extrabold tracking-[0.25em]
      uppercase
      bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
      bg-clip-text text-transparent
      animate-college-glow
    "
  >
    SONA COLLEGE OF TECHNOLOGY
  </h2>

  {/* Divider */}
  <div className="mt-3 flex justify-center">
    <span className="h-[2px] w-32 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></span>
  </div>

  {/* Department Line */}
  <span
    className="
      inline-block mt-4 px-4 py-1.5
      text-sm font-bold tracking-wider uppercase
      text-yellow-300
      bg-[#1f2933]
      border border-yellow-500/60
      rounded-full
      animate-badge
    "
  >
    Department of Electronics & Communication Engineering,
    Electronics & Computer Engineering,
    Electronics & VLSI Design Technology
  </span>
</div>


                  {/* Hero Title – Image-style Design */}
                  <div className="relative inline-block px-8 py-6">
                    {/* Accent glow lines */}
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 h-[3px] w-24 bg-gradient-to-r from-transparent to-yellow-400 blur-sm"></span>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 h-[3px] w-24 bg-gradient-to-l from-transparent to-cyan-400 blur-sm"></span>

                    {/* Subtitle */}
                    <p
                      className="
  max-w-2xl mx-auto mb-12
  text-4xl text-white
  font-great-vibes
  animate-cursive-reveal
"
                    >
                      National level technical symposium
                    </p>

                    {/* Main Title */}
                    {/* Hero Title – Forged from Fire */}
                    <div className="relative inline-block px-10 py-8 forge-frame">
                      {/* Fire layer */}
                      <span className="forge-fire"></span>

                      {/* Content */}
                      <div className="relative z-10 text-center">
                        {/* <div className="mb-3 text-sm md:text-base font-bold tracking-[0.35em] text-slate-300 uppercase reveal-sub">
      National Level Technical Symposium
    </div> */}

                        <h1
                          className="forge-title
        text-4xl sm:text-6xl lg:text-7xl xl:text-8xl
        font-extrabold tracking-wide
        bg-gradient-to-b from-yellow-200 via-yellow-400 to-orange-500
        bg-clip-text text-transparent
      "
                          style={{
                            WebkitTextStroke: "1px rgba(120,70,20,0.6)",
                          }}
                        >
                          FRACTALS <span className="mx-2 text-white">&</span>{" "}
                          I'VENOR ’26
                        </h1>

                        <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-80"></div>
                      </div>
                    </div>

                    {/* Bottom glow bar */}
                    <div className="mt-4 h-[2px] w-full bg-gradient-to-r from-yellow-400 via-cyan-400 to-yellow-400 opacity-80"></div>
                  </div>

                  <div className="max-w-2xl mx-auto mb-12 text-center">
                    <p className="text-4xl text-white font-great-vibes animate-ink-flow">
                      Two paths. One vision — innovate with Fractals & I'venor
                    </p>

                    <span
                      className="
      block mt-2
      text-4xl text-white
      font-great-vibes
      animate-cursive-reveal-delay
    "
                    >
                      March 5 & 6
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Fractals Portal */}
                    <div
                      onClick={() => setActiveTab("Fractals")}
                      className="group cursor-pointer bg-white p-8 rounded-3xl border-2 border-transparent hover:border-cyan-500 transition-all shadow-xl hover:shadow-cyan-100"
                    >
                      <div className="w-16 h-16 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6 text-cyan-600 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
                          />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-2">
                        FRACTALS
                      </h3>
                      <p className="text-slate-500 text-sm mb-6">
                        7 Events for circuit breakers, electro minds and tech
                        titans. <br /> <b>March-5 2026</b>{" "}
                      </p>
                      <button className="text-cyan-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Fractals{" "}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </div>

                    {/* Ivenor Portal */}
                    <div
                      onClick={() => setActiveTab("Ivenor")}
                      className="group cursor-pointer bg-white p-8 rounded-3xl border-2 border-transparent hover:border-orange-500 transition-all shadow-xl hover:shadow-orange-100"
                    >
                      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mb-6 text-orange-600 group-hover:scale-110 transition-transform">
                        <svg
                          className="w-8 h-8"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 mb-2">
                        I'VENOR
                      </h3>
                      <p className="text-slate-500 text-sm mb-6">
                        8 Segments for technorats, creative minds and frenzy
                        vibes. <br /> <b>March-6 2026</b>
                      </p>
                      <button className="text-orange-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Explore Ivenor{" "}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
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
        {activeTab === "Fractals" && (
          <section className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
            <div className="mb-12 border-l-8 border-cyan-500 pl-6">
              <h2 className="text-5xl font-black text-yellow-500 mb-2">
                FRACTALS
              </h2>
              <p className="text-white text-xl">• 7 Events</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {FRACTALS_EVENTS.map((event) => (
                <div
                  key={event.id}
                  onClick={() => navigateToEventDetail(event.id)}
                  className="
            relative group cursor-pointer
            gold-card gold-fractals
            transition-all duration-300
            hover:-translate-y-2
          "
                >
                  <EventCard
                    event={event}
                    onRegister={(id) => {
                      id.stopPropagation();
                      handleRegisterFromCard(id);
                    }}
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Ivenor Section */}
        {activeTab === "Ivenor" && (
          <section className="max-w-7xl mx-auto px-4 py-16 animate-in fade-in duration-500">
            <div className="mb-12 border-l-8 border-orange-500 pl-6">
              <h2 className="text-5xl font-black text-yellow-500 mb-2">
                IVENOR
              </h2>
              <p className="text-white text-xl">• 8 Events</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {IVENOR_EVENTS.map((event) => (
                <div
                  key={event.id}
                  onClick={() => navigateToEventDetail(event.id)}
                  className="relative group cursor-pointer gold-card gold-ivenor"
                >
                  <div className="relative rounded-2xl bg-black border border-yellow-500/60">
                    <EventCard
                      event={event}
                      onRegister={(id) => {
                        id.stopPropagation();
                        handleRegisterFromCard(id);
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Event Detail View */}
        {activeTab === "EventDetail" && currentEvent && (
          <section className="max-w-6xl mx-auto px-4 py-12 bg-[#1f2933] animate-in slide-in-from-bottom-8 duration-500">
            <button
              onClick={() => setActiveTab(currentEvent.symposium as any)}
              className="mb-8 flex items-center gap-2 text-yellow-300 hover:text-yellow-400 transition-colors font-semibold"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to {currentEvent.symposium}
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl">
                  <img
                    src={currentEvent.image}
                    alt={currentEvent.title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className={`absolute top-6 left-6 px-4 py-1.5 rounded-full text-white font-bold text-sm shadow-lg ${currentEvent.symposium === "Fractals" ? "bg-cyan-600" : "bg-orange-600"}`}
                  >
                    {currentEvent.category}
                  </div>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl lg:text-5xl font-black text-yellow-400">
                    {currentEvent.title}
                  </h1>
                  <p className="text-xl text-yellow-300 leading-relaxed">
                    {currentEvent.description}
                  </p>
                </div>

                <div className="bg-[#1f2933] p-8 rounded-3xl border border-yellow-500">
                  <h2 className="text-2xl font-bold text-yellow-400 mb-6 flex items-center gap-3">
                    <span
                      className={`w-2 h-8 rounded-full ${currentEvent.symposium === "Fractals" ? "bg-cyan-500" : "bg-orange-500"}`}
                    ></span>
                    Rules & Regulations
                  </h2>
                  <ul className="space-y-4">
                    {currentEvent.rules.map((rule, idx) => (
                      <li key={idx} className="flex gap-4 text-yellow-300">
                        <span
                          className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${currentEvent.symposium === "Fractals" ? "bg-cyan-50 text-cyan-600" : "bg-orange-50 text-orange-600"}`}
                        >
                          {idx + 1}
                        </span>
                        {rule}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-[#1f2933] p-8 rounded-3xl border border-yellow-500 sticky top-24">
                  <h3 className="text-lg font-bold text-yellow-400 mb-6">
                    Event Details
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider">
                          Venue
                        </p>
                        <p className="text-yellow-200 font-semibold">
                          {currentEvent.venue}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider">
                          Time & Date
                        </p>
                        <p className="text-yellow-200 font-semibold">
                          {currentEvent.date} • {currentEvent.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider">
                          Coordinator Number
                        </p>
                        <p className="text-yellow-200 font-semibold">
                          {currentEvent.prize}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-indigo-600">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-xs text-yellow-300 font-bold uppercase tracking-wider">
                          Team Size
                        </p>
                        <p className="text-yellow-200 font-semibold">
                          {currentEvent.teamSize}
                        </p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={currentEvent.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 block w-full py-4 rounded-xl text-white font-bold text-center transition-all hover:scale-[1.02] shadow-lg ${currentEvent.symposium === "Fractals" ? "bg-cyan-600 hover:bg-cyan-700 shadow-cyan-100" : "bg-orange-600 hover:bg-orange-700 shadow-orange-100"}`}
                  >
                    Register via Google Form
                  </a>
                  <p className="text-center text-[10px] text-slate-400 mt-4 px-2 uppercase tracking-tighter">
                    Redirects to official registration portal
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Schedule Section */}
        {activeTab === "Schedule" && (
          <section className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-4xl font-black text-yellow-200 mb-12 text-center">
              Unified Timeline
            </h2>
            <div className="space-y-8">
              {SCHEDULE.map((item, i) => (
                <div key={item.id} className="relative flex gap-8 group">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-4 h-4 rounded-full ring-4 ${
                        item.symposium === "Fractals"
                          ? "bg-cyan-500 ring-cyan-50"
                          : item.symposium === "Ivenor"
                            ? "bg-orange-500 ring-orange-50"
                            : "bg-indigo-600 ring-indigo-50"
                      }`}
                    ></div>
                    {i !== SCHEDULE.length - 1 && (
                      <div className="w-0.5 flex-grow bg-yellow-500 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-12">
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-slate-900 font-bold text-lg">
                          {item.time}
                        </span>
                        <div className="flex gap-2">
                          {item.symposium !== "Both" && (
                            <span
                              className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter ${
                                item.symposium === "Fractals"
                                  ? "bg-cyan-100 text-cyan-700"
                                  : "bg-orange-100 text-orange-700"
                              }`}
                            >
                              {item.symposium}
                            </span>
                          )}
                          <span className="text-[10px] uppercase tracking-widest font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-500">
                            {item.type}
                          </span>
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-1">
                        {item.activity}
                      </h3>
                      <p className="text-slate-500 text-sm flex items-center gap-1">
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                        </svg>
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
        {activeTab === "Rules" && (
          <section className="max-w-3xl mx-auto px-4 py-16">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-slate-100">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-black text-slate-900 mb-2">
                  Rules for registration
                </h2>
              </div>
              <p className="font-black text-slate-900">Important Rules</p>
              <p className="text-slate-800">
                • Registration only through the official website and Google
                Form.
                <br />• No custom event combinations allowed. <br />• Duplicate
                entries are not permitted. <br />• Use CAPITAL LETTERS while
                filling the form.
                <br />• Incomplete or false details may lead to rejection.
                <br />• Payment is non-refundable and non-transferable.
              </p>
              <br />
              <p className="font-black text-slate-900">Event type selection</p>
              <p className="text-slate-800">
                Select any one option:
                <br />• Single Event
                <br />• Combo (Multiple Events)
                <br />• Workshops
              </p>
              <br />
              <p className="font-black text-slate-900">Workshop</p>
              <p className="text-stale-800">
                • Participants can’t attend any technical and non-technical
                events
                <br />• Workshop participation is individual.
                <br />• Each participant must register separately.
                <br />• No team registration is allowed for workshops.
                <br />• Each workshop requires separate payment
                <br />• Registration Fee - 400(per head)
              </p>
              <br />
              <p className="font-black text-slate-900">Fees(Single Event):</p>
              <table
                border={1}
                cellPadding={10}
                style={{ borderCollapse: "collapse" }}
              >
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
              <table
                border={1}
                cellPadding={10}
                style={{ borderCollapse: "collapse" }}
              >
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
              <p className="font-black text-slate-900">
                Payment proof and submission
              </p>
              <p className="text-stale-800">
                <br />• Upload the payment screenshot.
                <br />• Enter the Transaction ID / UTR Number.
                <br />• Verify all details.
                <br />• Click Submit to complete registration.
              </p>
              <br />
              <div className="text-center mb-10">
                <a
                  href="https://drive.google.com/file/d/1PCB-7gZznliFAc1zOScgXTBdZGYI8VrQ/view?usp=sharing"
                  download
                  className="
      inline-flex items-center gap-3
      px-6 py-3
      rounded-full
      bg-gradient-to-r from-blue-500 to-cyan-500
      text-white font-semibold tracking-wide
      shadow-lg shadow-cyan-500/30
      transition-all duration-300
      hover:-translate-y-1 hover:shadow-cyan-500/50
      focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-900
    "
                >
                  📄 Download Rules (PDF)
                </a>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      {/* Footer */}
      {/* Footer */}
      <footer className="bg-[#0b1220] text-white py-14">
        <div
          className="max-w-7xl mx-auto px-6
    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4
    gap-16 text-center md:text-left"
        >
          {/* Symposium Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black text-cyan-400">
              Convenor
            </h3>
             <ul className="space-y-3 text-sm text-slate-400">
              <li className="whitespace-nowrap">
                Dr.R.S.Sabeenian HOD/ECE,EXE,EVE
              </li>
            </ul>
             <h4 className="font-bold mb-4 text-cyan-400">
              Staff Coordinators
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="whitespace-nowrap">
                Dr.K.R.Kavitha - Professor & Dy.HOD/ECE
              </li>
              <li className="whitespace-nowrap">
                Dr.M.E.Paramasivam - Associate Professor/ECE
              </li>
              <li className="whitespace-nowrap">
                Dr.M.Senthil Vadivu - Assistnt Professor/ECE 
              </li>
              <li className="whitespace-nowrap">
                Prof.K.Saranya - Assistant Professor/ECE
              </li>
              <li className="whitespace-nowrap">
                Dr.S.Balakrishnan - Assistant Professor/ECE
              </li>

            </ul>
          </div>

          {/* Student Chairperson */}
          <div className="min-w-[220px]">
            <h4 className="font-bold mb-4 text-cyan-400">
              Student Chairperson
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="whitespace-nowrap">
                Swamynathan S – 99440&nbsp;43555
              </li>
              <li className="whitespace-nowrap">
                Manickavel G – 78100&nbsp;89560
              </li>
            </ul>
          </div>

          {/* Student Secretary */}
          <div className="min-w-[220px]">
            <h4 className="font-bold mb-4 text-orange-400">
              Student Secretary
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="whitespace-nowrap">
                Gunaselan V – 98942&nbsp;88912
              </li>
              <li className="whitespace-nowrap">
                Suryani S – 86676&nbsp;77359
              </li>
            </ul>
          </div>

          {/* Developer */}
          <div className="min-w-[220px]">
            <h4 className="font-bold mb-4">Designed & Developed by</h4>
            <p className="text-sm text-slate-400 leading-6 whitespace-nowrap">
              Ram Balaje T <br />
              93632&nbsp;36208 <br />
              <a
                href="https://www.linkedin.com/in/ram-balaje"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                www.linkedin.com/in/ram-balaje
              </a>
            </p>
          </div>

          
          
        </div>
        
      </footer>

      <AIChatbot />
    </div>
  );
};

export default App;
