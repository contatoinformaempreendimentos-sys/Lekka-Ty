import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Check, 
  ChevronLeft, 
  ChevronRight, 
  Utensils, 
  Timer, 
  Dumbbell, 
  Droplets, 
  BookOpen, 
  User,
  Clock,
  Flame,
  Zap,
  ArrowLeft,
  LogOut
} from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { getDayPlan, articles, bonuses } from './data/content';
import { UserState, DayPlan, Article } from './types';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const TOTAL_DAYS = 365;

export default function App() {
  const [state, setState] = useState<UserState>(() => {
    const saved = localStorage.getItem('lekka_premium_state');
    if (saved) return JSON.parse(saved);
    return {
      email: '',
      isLoggedIn: false,
      currentDay: 1,
      completedTasks: {},
      waterIntake: {},
      fasting: {
        startTime: null,
        isActive: false,
      }
    };
  });

  const [activeTab, setActiveTab] = useState<'diet' | 'fasting' | 'fitness' | 'habits' | 'learn'>('diet');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [loginEmail, setLoginEmail] = useState('');
  const [fastingTime, setFastingTime] = useState('00:00:00');
  const [fastingProgress, setFastingProgress] = useState(0);

  // Sync state to localStorage
  useEffect(() => {
    localStorage.setItem('lekka_premium_state', JSON.stringify(state));
  }, [state]);

  // Fasting Timer Logic
  useEffect(() => {
    let interval: number;
    if (state.fasting.isActive && state.fasting.startTime) {
      interval = window.setInterval(() => {
        const diff = Date.now() - state.fasting.startTime!;
        const h = Math.floor(diff / 3600000);
        const m = Math.floor((diff % 3600000) / 60000);
        const s = Math.floor((diff % 60000) / 1000);
        setFastingTime(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`);
        
        // 16 hours target = 57600000 ms
        const progress = Math.min((diff / 57600000) * 100, 100);
        setFastingProgress(progress);
      }, 1000);
    } else {
      setFastingTime('00:00:00');
      setFastingProgress(0);
    }
    return () => clearInterval(interval);
  }, [state.fasting.isActive, state.fasting.startTime]);

  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollerRef.current) {
      const activeBtn = scrollerRef.current.querySelector(`[data-day="${state.currentDay}"]`);
      if (activeBtn) {
        activeBtn.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [state.currentDay]);

  const currentDayPlan = useMemo(() => getDayPlan(state.currentDay), [state.currentDay]);

  const handleLogin = () => {
    if (loginEmail.includes('@') && loginEmail.length > 3) {
      setState(prev => ({ ...prev, email: loginEmail, isLoggedIn: true }));
    }
  };

  const handleLogout = () => {
    setState({
      email: '',
      isLoggedIn: false,
      currentDay: 1,
      completedTasks: {},
      waterIntake: {},
      fasting: { startTime: null, isActive: false }
    });
  };

  const toggleTask = (taskId: string) => {
    setState(prev => ({
      ...prev,
      completedTasks: {
        ...prev.completedTasks,
        [taskId]: !prev.completedTasks[taskId]
      }
    }));
  };

  const updateWater = (day: number, amount: number) => {
    setState(prev => ({
      ...prev,
      waterIntake: {
        ...prev.waterIntake,
        [day]: (prev.waterIntake[day] || 0) === amount ? amount - 1 : amount
      }
    }));
  };

  const toggleFasting = () => {
    setState(prev => ({
      ...prev,
      fasting: {
        isActive: !prev.fasting.isActive,
        startTime: !prev.fasting.isActive ? Date.now() : null
      }
    }));
  };

  if (!state.isLoggedIn) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-slate-300 p-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full max-w-[414px] bg-white rounded-3xl p-8 shadow-2xl text-center"
        >
          <h1 className="font-serif text-4xl text-primary mb-2">Lekka Ty</h1>
          <p className="text-slate-500 text-sm mb-10 leading-relaxed">
            Witaj w swoim programie Premium na 180 dni. Podaj e-mail z zamówienia, aby uzyskać dostęp.
          </p>
          <input 
            type="email" 
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            placeholder="Twój adres e-mail"
            className="w-full p-4 border-2 border-slate-100 rounded-2xl mb-6 focus:border-primary outline-none transition-colors font-medium"
          />
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-primary text-white rounded-2xl font-bold text-lg shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            Rozpocznij Transformację
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-300">
      <div className="w-full max-w-[414px] h-screen md:h-[90vh] bg-bg-app relative overflow-hidden flex flex-col md:rounded-[40px] md:border-[8px] md:border-slate-800 shadow-2xl">
        
        {/* Header */}
        <header className="bg-white px-6 pt-8 pb-4 flex justify-between items-center border-b border-slate-50 z-10">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">Twój Codzienny Plan</span>
            <h2 className="font-serif text-2xl font-bold text-accent">Cześć!</h2>
          </div>
          <div className="flex gap-2">
            <button onClick={handleLogout} className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
              <LogOut size={18} />
            </button>
            <div className="w-11 h-11 rounded-full bg-primary-light border-2 border-primary flex items-center justify-center text-primary font-extrabold text-lg">
              {state.email.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* Day Scroller */}
        <div className="bg-white border-b border-slate-100 sticky top-0 z-10">
          <div ref={scrollerRef} className="flex overflow-x-auto no-scrollbar px-6 py-4 gap-3">
            {Array.from({ length: TOTAL_DAYS }, (_, i) => i + 1).map(day => (
              <button
                key={day}
                data-day={day}
                onClick={() => setState(prev => ({ ...prev, currentDay: day }))}
                className={cn(
                  "flex-shrink-0 w-16 py-3 rounded-2xl border transition-all duration-200 text-center",
                  state.currentDay === day 
                    ? "bg-primary border-primary shadow-lg shadow-primary/20" 
                    : "bg-bg-app border-slate-100"
                )}
              >
                <span className={cn("text-[9px] font-bold uppercase block mb-1", state.currentDay === day ? "text-white/70" : "text-slate-400")}>Dzień</span>
                <span className={cn("text-lg font-extrabold", state.currentDay === day ? "text-white" : "text-accent")}>{day}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto px-6 pt-6 pb-32 no-scrollbar">
          <AnimatePresence mode="wait">
            {activeTab === 'diet' && (
              <motion.div 
                key="diet"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-xl font-bold text-accent">Menu na dziś</h3>
                {currentDayPlan.meals.map((meal, idx) => {
                  const taskId = `d${state.currentDay}_m${idx}`;
                  const isDone = state.completedTasks[taskId];
                  return (
                    <div 
                      key={idx}
                      className={cn(
                        "bg-white rounded-3xl p-5 border-l-4 transition-all duration-300 shadow-sm",
                        isDone ? "border-success opacity-60" : "border-primary"
                      )}
                    >
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <span className={cn("text-[10px] font-extrabold uppercase tracking-wider mb-1 block", isDone ? "text-success" : "text-primary")}>
                            {meal.type}
                          </span>
                          <h4 className="font-bold text-accent leading-snug pr-4">{meal.name}</h4>
                        </div>
                        <button 
                          onClick={() => toggleTask(taskId)}
                          className={cn(
                            "w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all",
                            isDone ? "bg-success border-success" : "bg-white border-slate-200"
                          )}
                        >
                          {isDone && <Check size={16} className="text-white stroke-[3]" />}
                        </button>
                      </div>
                      <div className="flex flex-wrap gap-2 mb-4">
                        <div className="bg-slate-50 px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-500">
                          🔥 <span className="text-accent">{meal.kcal}</span> kcal
                        </div>
                        <div className="bg-slate-50 px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-500">
                          🥩 <span className="text-accent">{meal.protein}g</span> B
                        </div>
                        <div className="bg-slate-50 px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-500">
                          🌾 <span className="text-accent">{meal.carbs}g</span> W
                        </div>
                        <div className="bg-slate-50 px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-500">
                          🥑 <span className="text-accent">{meal.fat}g</span> T
                        </div>
                        <div className="bg-slate-50 px-3 py-1.5 rounded-xl text-[10px] font-bold text-slate-500">
                          ⏱️ <span className="text-accent">{meal.time}</span>
                        </div>
                      </div>
                      <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                        <p className="text-xs text-slate-600 font-medium leading-relaxed whitespace-pre-wrap">
                          <span className="font-bold text-primary block mb-1">Przepis:</span>
                          {meal.instructions}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            )}

            {activeTab === 'fasting' && (
              <motion.div 
                key="fasting"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="flex flex-col items-center py-2 space-y-6"
              >
                <h3 className="font-serif text-xl font-bold text-accent w-full text-left">Post Przerywany</h3>
                
                {/* Fasting Plan Info Card */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-50 w-full">
                  <h4 className="font-bold text-accent mb-4 text-center">Twój Plan: 16:8</h4>
                  <div className="flex justify-between items-center text-sm">
                    <div className="text-center flex-1">
                      <span className="block text-2xl mb-1">🍽️</span>
                      <span className="font-bold text-primary">8 godzin</span>
                      <span className="text-[10px] text-slate-400 uppercase block">Okno żywieniowe</span>
                    </div>
                    <div className="w-px h-12 bg-slate-100"></div>
                    <div className="text-center flex-1">
                      <span className="block text-2xl mb-1">⏳</span>
                      <span className="font-bold text-accent">16 godzin</span>
                      <span className="text-[10px] text-slate-400 uppercase block">Czas postu</span>
                    </div>
                  </div>
                </div>

                {/* Timer */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-50 w-full flex flex-col items-center">
                  <div className="relative w-64 h-64 flex items-center justify-center">
                    {/* Progress Ring */}
                    <svg className="absolute inset-0 w-full h-full -rotate-90">
                      <circle 
                        cx="128" cy="128" r="116" 
                        className="stroke-slate-100 fill-none stroke-[12]"
                      />
                      <circle 
                        cx="128" cy="128" r="116" 
                        className="stroke-primary fill-none stroke-[12] transition-all duration-1000"
                        strokeDasharray={728.8}
                        strokeDashoffset={728.8 - (728.8 * fastingProgress) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    
                    <div className="text-center z-10">
                      <span className={cn("text-xs font-extrabold uppercase tracking-[0.2em] mb-2 block", state.fasting.isActive ? "text-primary" : "text-slate-400")}>
                        {state.fasting.isActive ? "Trwa Post" : "Gotowa?"}
                      </span>
                      <span className="text-4xl font-extrabold text-accent tabular-nums">{fastingTime}</span>
                    </div>
                  </div>

                  <button 
                    onClick={toggleFasting}
                    className={cn(
                      "w-full mt-8 py-4 rounded-2xl font-extrabold text-lg shadow-lg transition-all active:scale-95",
                      state.fasting.isActive 
                        ? "bg-red-500 text-white shadow-red-500/20" 
                        : "bg-success text-white shadow-success-500/20"
                    )}
                  >
                    {state.fasting.isActive ? "Zakończ Post" : "Zacznij Post"}
                  </button>
                  
                  <p className="mt-6 text-center text-slate-400 text-xs leading-relaxed">
                    W czasie postu pij tylko wodę, czarną kawę lub herbatę bez cukru i mleka.
                  </p>
                </div>

                {/* Water Tracker */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-50 w-full">
                  <div className="text-center mb-6">
                    <h4 className="font-bold text-accent mb-1">Nawodnienie (Cel: 2L)</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Kliknij szklankę po wypiciu 250ml</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 justify-items-center">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => updateWater(state.currentDay, i + 1)}
                        className={cn(
                          "text-3xl transition-all duration-300 transform active:scale-125",
                          (state.waterIntake[state.currentDay] || 0) > i ? "grayscale-0 opacity-100 scale-110" : "grayscale opacity-20 scale-100"
                        )}
                      >
                        💧
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'fitness' && (
              <motion.div 
                key="fitness"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-xl font-bold text-accent">Aktywność fizyczna</h3>
                <div className={cn(
                  "bg-white rounded-3xl p-6 border-l-4 transition-all duration-300 shadow-sm",
                  state.completedTasks[`d${state.currentDay}_w`] ? "border-success opacity-60" : "border-primary"
                )}>
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className={cn("text-[10px] font-extrabold uppercase tracking-wider mb-1 block", state.completedTasks[`d${state.currentDay}_w`] ? "text-success" : "text-primary")}>
                        {currentDayPlan.workout.type}
                      </span>
                      <h4 className="font-bold text-accent text-lg leading-snug">{currentDayPlan.workout.name}</h4>
                    </div>
                    <button 
                      onClick={() => toggleTask(`d${state.currentDay}_w`)}
                      className={cn(
                        "w-10 h-10 rounded-full border-2 flex items-center justify-center transition-all",
                        state.completedTasks[`d${state.currentDay}_w`] ? "bg-success border-success" : "bg-white border-slate-200"
                      )}
                    >
                      {state.completedTasks[`d${state.currentDay}_w`] && <Check size={20} className="text-white stroke-[3]" />}
                    </button>
                  </div>
                  <div className="space-y-4 pt-4 border-t border-dashed border-slate-100">
                    {currentDayPlan.workout.steps.map((step, i) => (
                      <div key={i} className="flex gap-4 items-start">
                        <span className="w-6 h-6 rounded-lg bg-primary-light flex items-center justify-center text-primary text-[10px] font-black flex-shrink-0 mt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-sm text-slate-600 font-medium leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'habits' && (
              <motion.div 
                key="habits"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-6"
              >
                <h3 className="font-serif text-xl font-bold text-accent">Codzienne Nawyki</h3>
                
                {/* Daily Tip Card */}
                <div className="bg-accent rounded-3xl p-6 text-white shadow-xl relative overflow-hidden">
                  <div className="relative z-10">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-2 block">Wskazówka Dnia</span>
                    <h4 className="font-bold text-lg mb-3">{currentDayPlan.tip.title}</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{currentDayPlan.tip.description}</p>
                  </div>
                  <Zap className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 rotate-12" />
                </div>

                {/* Water Tracker */}
                <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-50">
                  <div className="text-center mb-6">
                    <h4 className="font-bold text-accent mb-1">Nawodnienie (Cel: 2L)</h4>
                    <p className="text-slate-400 text-[10px] font-bold uppercase tracking-wider">Kliknij szklankę po wypiciu 250ml</p>
                  </div>
                  <div className="grid grid-cols-4 gap-4 justify-items-center">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <button 
                        key={i}
                        onClick={() => updateWater(state.currentDay, i + 1)}
                        className={cn(
                          "text-3xl transition-all duration-300 transform active:scale-125",
                          (state.waterIntake[state.currentDay] || 0) > i ? "grayscale-0 opacity-100 scale-110" : "grayscale opacity-20 scale-100"
                        )}
                      >
                        💧
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'learn' && (
              <motion.div 
                key="learn"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="space-y-8"
              >
                {/* Bonuses Section */}
                <div>
                  <h3 className="font-serif text-xl font-bold text-accent mb-4">Twoje Bonusy Premium</h3>
                  <div className="grid grid-cols-1 gap-3">
                    {bonuses.map((bonus, idx) => (
                      <a 
                        key={idx} 
                        href={bonus.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-4 bg-gradient-to-r from-primary to-primary/80 text-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-all active:scale-95"
                      >
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center text-xl flex-shrink-0">
                          {bonus.icon}
                        </div>
                        <div className="flex-1 font-bold text-sm leading-tight pr-2">
                          {bonus.title}
                        </div>
                        <ChevronRight className="text-white/70 flex-shrink-0" />
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-accent mb-4">Baza Wiedzy Premium</h3>
                  <div className="space-y-4">
                    {articles.map((art) => (
                      <button 
                        key={art.id}
                        onClick={() => setSelectedArticle(art)}
                        className="w-full text-left bg-white rounded-3xl p-6 shadow-sm border border-slate-50 hover:border-primary/20 transition-all active:scale-[0.98]"
                      >
                        <span className="text-[10px] font-extrabold text-primary uppercase tracking-widest mb-2 block">{art.tag}</span>
                        <h4 className="font-bold text-accent text-lg mb-2 leading-tight">{art.title}</h4>
                        <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">{art.excerpt}</p>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>

        {/* Bottom Navigation */}
        <nav className="absolute bottom-0 left-0 w-full bg-white border-t border-slate-100 flex justify-around items-center px-2 pt-4 pb-8 z-20">
          <NavBtn 
            active={activeTab === 'diet'} 
            onClick={() => setActiveTab('diet')} 
            icon={<Utensils size={22} />} 
            label="Dieta" 
          />
          <NavBtn 
            active={activeTab === 'fasting'} 
            onClick={() => setActiveTab('fasting')} 
            icon={<Timer size={22} />} 
            label="Post" 
          />
          <NavBtn 
            active={activeTab === 'fitness'} 
            onClick={() => setActiveTab('fitness')} 
            icon={<Dumbbell size={22} />} 
            label="Trening" 
          />
          <NavBtn 
            active={activeTab === 'habits'} 
            onClick={() => setActiveTab('habits')} 
            icon={<Droplets size={22} />} 
            label="Nawyki" 
          />
          <NavBtn 
            active={activeTab === 'learn'} 
            onClick={() => setActiveTab('learn')} 
            icon={<BookOpen size={22} />} 
            label="Wiedza" 
          />
        </nav>

        {/* Article Modal */}
        <AnimatePresence>
          {selectedArticle && (
            <motion.div 
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute inset-0 bg-white z-[100] flex flex-col"
            >
              <div className="px-6 pt-12 pb-6 flex items-center border-b border-slate-50">
                <button 
                  onClick={() => setSelectedArticle(null)}
                  className="flex items-center gap-2 text-slate-400 font-bold text-sm uppercase tracking-widest"
                >
                  <ArrowLeft size={20} /> Wróć
                </button>
              </div>
              <div className="flex-1 overflow-y-auto px-6 py-8 no-scrollbar">
                <span className="text-xs font-extrabold text-primary uppercase tracking-widest mb-3 block">{selectedArticle.tag}</span>
                <h2 className="font-serif text-3xl font-bold text-accent mb-8 leading-tight">{selectedArticle.title}</h2>
                <div 
                  className="prose prose-slate max-w-none text-slate-600 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}

function NavBtn({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: React.ReactNode, label: string }) {
  return (
    <button 
      onClick={onClick}
      className={cn(
        "flex flex-col items-center justify-center gap-1.5 w-16 transition-all duration-300",
        active ? "text-primary" : "text-slate-300"
      )}
    >
      <div className={cn("transition-transform duration-300", active && "scale-110")}>
        {icon}
      </div>
      <span className="text-[9px] font-black uppercase tracking-tighter">{label}</span>
      {active && (
        <motion.div 
          layoutId="nav-indicator"
          className="w-1 h-1 rounded-full bg-primary mt-0.5"
        />
      )}
    </button>
  );
}
