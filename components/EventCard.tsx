
import React from 'react';
import { Event } from '../types';

interface EventCardProps {
  event: Event;
  onRegister: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group h-full flex flex-col">
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img 
          src={event.image} 
          alt={event.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className={`absolute top-4 right-4 text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${event.symposium === 'Fractals' ? 'bg-cyan-600' : 'bg-orange-600'}`}>
          {event.category}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-indigo-600 transition-colors">{event.title}</h3>
        <p className="text-slate-600 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>
        <div className="space-y-2 mb-6 text-sm text-slate-500 flex-grow">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            {event.venue}
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            {event.date} • {event.time}
          </div>
        </div>
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onRegister(event.id);
          }}
          className={`w-full font-semibold py-3 rounded-xl transition-all duration-200 border-2 ${
            event.symposium === 'Fractals' 
              ? 'border-cyan-100 text-cyan-700 hover:bg-cyan-600 hover:text-white hover:border-cyan-600' 
              : 'border-orange-100 text-orange-700 hover:bg-orange-600 hover:text-white hover:border-orange-600'
          }`}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};
