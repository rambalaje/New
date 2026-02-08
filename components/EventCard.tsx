import React from "react";
import { Event } from "../types";

interface EventCardProps {
  event: Event;
  onRegister: (id: string) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onRegister }) => {
  return (
    <div
      className="
        relative h-full flex flex-col overflow-hidden rounded-2xl
        bg-[#0b1d2d]
        border border-yellow-500/60
        shadow-xl
        transition-all duration-300
        hover:-translate-y-1
      "
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />

        {/* Category Badge */}
        <div
          className="
            absolute top-4 right-4
            text-[#0b1d2d] text-[10px] font-black
            px-3 py-1 rounded-full uppercase tracking-widest
            bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500
            shadow-md
          "
        >
          {event.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-black text-yellow-400 mb-2">
          {event.title}
        </h3>

        <p className="text-yellow-300/80 text-sm mb-4 line-clamp-2">
          {event.description}
        </p>

        {/* Meta Info */}
        <div className="space-y-2 mb-6 text-sm text-yellow-200/70 flex-grow">
          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-yellow-400"
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
            {event.venue}
          </div>

          <div className="flex items-center gap-2">
            <svg
              className="w-4 h-4 text-yellow-400"
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
            {event.date} • {event.time}
          </div>
        </div>

        {/* Register Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRegister(event.id);
          }}
          className="
            w-full py-3 rounded-xl font-black
            bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400
            text-[#0b1d2d]
            hover:from-yellow-300 hover:to-yellow-400
            transition-all duration-200
            shadow-md
          "
        >
          Register Now
        </button>
      </div>
    </div>
  );
};
