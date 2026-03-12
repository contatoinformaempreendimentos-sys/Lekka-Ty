import { LucideIcon } from 'lucide-react';

export interface Meal {
  type: 'Śniadanie' | 'Obiad' | 'Przekąska' | 'Kolacja';
  name: string;
  kcal: number;
  protein: number;
  carbs: number;
  fat: number;
  time: string;
  instructions: string;
}

export interface Workout {
  type: string;
  name: string;
  steps: string[];
}

export interface WellnessTip {
  title: string;
  description: string;
}

export interface Article {
  id: string;
  tag: string;
  title: string;
  excerpt: string;
  content: string;
}

export interface Bonus {
  title: string;
  url: string;
  icon: string;
}

export interface DayPlan {
  day: number;
  meals: Meal[];
  workout: Workout;
  tip: WellnessTip;
}

export interface UserState {
  email: string;
  isLoggedIn: boolean;
  currentDay: number;
  completedTasks: Record<string, boolean>; // key: "d{day}_t{taskIndex}"
  waterIntake: Record<number, number>; // day -> glasses
  fasting: {
    startTime: number | null;
    isActive: boolean;
  };
}
