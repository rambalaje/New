
export interface Event {
  id: string;
  symposium: 'Fractals' | 'Ivenor';
  title: string;
  category: 'Technical' | 'Non-Technical' | 'Workshop' | 'Management' | 'Cultural';
  description: string;
  venue: string;
  time: string;
  date: string;
  prize: string;
  teamSize: string;
  image: string;
  rules: string[];
  registrationLink: string;
}

export interface ScheduleItem {
  id: string;
  symposium?: 'Fractals' | 'Ivenor' | 'Both';
  time: string;
  activity: string;
  location: string;
  type: 'Keynote' | 'Break' | 'Event' | 'Competition';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}
