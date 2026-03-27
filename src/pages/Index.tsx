import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/3ae721cb-2861-47ef-bcff-eb8308991548/files/0d6300d5-44c4-43cb-8e8d-e7f0a32660c1.jpg";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "О секции", href: "#about" },
  { label: "Тренеры", href: "#trainers" },
  { label: "Расписание", href: "#schedule" },
  { label: "Достижения", href: "#achievements" },
  { label: "Контакты", href: "#contacts" },
];

const trainers = [
  {
    name: "Алексей Громов",
    rank: "Мастер спорта России",
    experience: "15 лет тренерского стажа",
    groups: "Группа 8–14 лет, 14+ лет",
    emoji: "🥋",
  },
  {
    name: "Дмитрий Ковалёв",
    rank: "КМС по самбо",
    experience: "10 лет тренерского стажа",
    groups: "Группа 5–8 лет",
    emoji: "🏅",
  },
  {
    name: "Виктор Семёнов",
    rank: "Заслуженный тренер",
    experience: "22 года тренерского стажа",
    groups: "Все возрастные группы",
    emoji: "🏆",
  },
];

const schedule = [
  {
    time: "09:00 – 10:00",
    group: "Дети 5–8 лет",
    days: "Пн, Ср, Пт",
    icon: "Baby",
    color: "#c0392b",
  },
  {
    time: "10:00 – 12:00",
    group: "Дети 8–14 лет",
    days: "Вт, Чт, Сб",
    icon: "Users",
    color: "#c0392b",
  },
  {
    time: "15:00 – 17:00",
    group: "Подростки 14+ лет",
    days: "Пн, Ср, Пт",
    icon: "Zap",
    color: "#d4a017",
  },
  {
    time: "18:00 – 20:00",
    group: "Взрослые (все уровни)",
    days: "Пн – Пт",
    icon: "Award",
    color: "#d4a017",
  },
];

const achievements = [
  { number: "200+", label: "Воспитанников" },
  { number: "15", label: "Лет секции" },
  { number: "85", label: "Медалей за год" },
  { number: "12", label: "Чемпионов России" },
];

const achievementList = [
  { year: "2024", title: "Чемпионат России по самбо", result: "2 золотые медали, 3 серебряные" },
  { year: "2023", title: "Первенство ЦФО", result: "1 место в командном зачёте" },
  { year: "2023", title: "Кубок региона", result: "5 призовых мест" },
  { year: "2022", title: "Международный турнир «Золотой пояс»", result: "3 бронзовые медали" },
  { year: "2022", title: "Первенство России среди юниоров", result: "2 серебряные медали" },
];

export default function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div style={{ background: "var(--sambo-dark)", color: "#fff", minHeight: "100vh" }}>

      {/* NAVIGATION */}
      <nav style={{ background: "rgba(13,13,13,0.97)", borderBottom: "1px solid #2a2a2a" }}
        className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="font-oswald text-xl font-bold tracking-widest uppercase"
            style={{ color: "#fff" }}>
            <span style={{ color: "var(--sambo-red)" }}>САМО</span>БО
          </a>

          <div className="hidden md:flex gap-8">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="nav-link font-oswald text-sm tracking-wider uppercase">
                {l.label}
              </a>
            ))}
          </div>

          <a href="#contacts"
            className="hidden md:block font-oswald text-sm tracking-wider uppercase px-5 py-2 font-semibold transition-all duration-300 hover:opacity-80"
            style={{ background: "var(--sambo-red)", color: "#fff", clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)" }}>
            Записаться
          </a>

          <button className="md:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "#fff" }}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div style={{ background: "var(--sambo-dark-2)", borderTop: "1px solid #2a2a2a" }}
            className="md:hidden px-6 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href}
                className="font-oswald text-base tracking-wider uppercase"
                style={{ color: "#ccc" }}
                onClick={() => setMenuOpen(false)}>
                {l.label}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden"
        style={{ minHeight: "100vh", paddingTop: "80px", background: "#0a0f1e" }}>

        {/* Diagonal color blocks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Blue block — left */}
          <div className="absolute" style={{
            top: 0, left: 0, width: "100%", height: "100%",
            background: "#0d1b4b",
            clipPath: "polygon(0 0, 62% 0, 38% 100%, 0 100%)"
          }} />
          {/* Red block — center */}
          <div className="absolute" style={{
            top: 0, left: 0, width: "100%", height: "100%",
            background: "#b01e1e",
            clipPath: "polygon(62% 0, 78% 0, 54% 100%, 38% 100%)"
          }} />
          {/* Gold block — right-center */}
          <div className="absolute" style={{
            top: 0, left: 0, width: "100%", height: "100%",
            background: "#c49010",
            clipPath: "polygon(78% 0, 88% 0, 64% 100%, 54% 100%)"
          }} />
          {/* White block — far right */}
          <div className="absolute" style={{
            top: 0, left: 0, width: "100%", height: "100%",
            background: "#e8ddd0",
            clipPath: "polygon(88% 0, 100% 0, 100% 100%, 64% 100%)"
          }} />
          {/* Dark overlay for readability */}
          <div className="absolute inset-0" style={{
            background: "linear-gradient(to right, rgba(5,8,20,0.82) 0%, rgba(5,8,20,0.55) 55%, rgba(5,8,20,0.15) 100%)"
          }} />
        </div>

        {/* Giant background САМБО text */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
          <span className="font-oswald font-bold select-none"
            style={{
              fontSize: "clamp(120px, 28vw, 320px)",
              color: "rgba(255,255,255,0.03)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              whiteSpace: "nowrap",
              userSelect: "none"
            }}>
            САМБО
          </span>
        </div>

        {/* Thin diagonal speed lines */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[15, 30, 45, 62, 75].map((top, i) => (
            <div key={i} className="absolute" style={{
              top: `${top}%`, left: "-5%", width: "110%",
              height: i === 2 ? "2px" : "1px",
              background: i === 2
                ? "linear-gradient(90deg, transparent, rgba(192,57,43,0.4), transparent)"
                : "linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)",
              transform: "rotate(-6deg)"
            }} />
          ))}
        </div>

        {/* Left accent bar */}
        <div className="absolute top-0 left-0 w-1.5 h-full" style={{ background: "var(--sambo-red)" }} />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 flex items-center" style={{ minHeight: "calc(100vh - 80px)" }}>
          <div style={{ maxWidth: "640px" }}>

            <div className="animate-fade-up flex items-center gap-3 mb-5">
              <div style={{ width: "40px", height: "3px", background: "var(--sambo-red)" }} />
              <span className="font-oswald text-xs tracking-[0.35em] uppercase" style={{ color: "var(--sambo-gold)" }}>
                Секция борьбы · с 2009 года
              </span>
            </div>

            {/* Giant headline */}
            <div className="animate-fade-up-delay-1">
              <div className="font-oswald font-bold leading-none uppercase"
                style={{ fontSize: "clamp(4.5rem, 14vw, 10rem)", color: "#fff", letterSpacing: "-0.02em", lineHeight: 0.88 }}>
                САМ
                <span style={{ color: "var(--sambo-red)" }}>БО</span>
              </div>
              <div className="font-oswald font-bold uppercase mt-1"
                style={{ fontSize: "clamp(1.1rem, 3vw, 2rem)", color: "rgba(255,255,255,0.55)", letterSpacing: "0.25em" }}>
                СИЛА · ДИСЦИПЛИНА · ПОБЕДА
              </div>
            </div>

            <p className="font-roboto mt-7 animate-fade-up-delay-2"
              style={{ fontSize: "1.05rem", color: "rgba(255,255,255,0.6)", maxWidth: "460px", lineHeight: 1.75 }}>
              Группы для детей от&nbsp;<strong style={{ color: "#fff" }}>5 лет</strong> и взрослых. Первое занятие — бесплатно.
            </p>

            <div className="flex flex-wrap gap-4 mt-8 animate-fade-up-delay-3">
              <a href="#contacts"
                className="btn-pulse font-oswald text-sm tracking-[0.15em] uppercase px-8 py-4 font-bold transition-all duration-300 hover:opacity-85"
                style={{
                  background: "var(--sambo-red)", color: "#fff",
                  clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)"
                }}>
                Записаться бесплатно
              </a>
              <a href="#schedule"
                className="font-oswald text-sm tracking-[0.15em] uppercase px-8 py-4 font-bold transition-all duration-300"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.8)",
                  clipPath: "polygon(10px 0%, 100% 0%, calc(100% - 10px) 100%, 0% 100%)"
                }}>
                Расписание
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-14 animate-fade-up-delay-3"
              style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "28px" }}>
              {[["200+", "Спортсменов"], ["15", "Лет секции"], ["85", "Медалей / год"]].map(([n, l]) => (
                <div key={l}>
                  <div className="font-oswald text-4xl font-bold" style={{ color: "#fff" }}>{n}</div>
                  <div className="font-roboto text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.35)" }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{ color: "rgba(255,255,255,0.2)" }}>
          <span className="font-roboto text-xs tracking-widest uppercase">Листай вниз</span>
          <Icon name="ChevronDown" size={18} />
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="stripes-bg py-24" style={{ background: "var(--sambo-dark-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="accent-line">
                <span className="font-oswald text-sm tracking-[0.3em] uppercase" style={{ color: "var(--sambo-red)" }}>
                  О секции
                </span>
              </div>
              <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-2 mb-6"
                style={{ color: "#fff", lineHeight: 1.05 }}>
                Борьба, которая меняет характер
              </h2>
              <p className="font-roboto text-base mb-4" style={{ color: "#999", lineHeight: 1.8 }}>
                Наша секция самбо работает с 2009 года. Мы воспитываем не просто спортсменов — мы формируем личность: смелость, выдержку и умение побеждать.
              </p>
              <p className="font-roboto text-base mb-8" style={{ color: "#999", lineHeight: 1.8 }}>
                Самбо — советское боевое искусство, сочетающее лучшие элементы дзюдо, вольной борьбы и национальных единоборств. Это вид спорта для всех: от малышей до взрослых.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "Shield", text: "Безопасные тренировки" },
                  { icon: "Target", text: "Индивидуальный подход" },
                  { icon: "Trophy", text: "Соревнования" },
                  { icon: "Heart", text: "Дружная атмосфера" },
                ].map(({ icon, text }) => (
                  <div key={text} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center"
                      style={{ background: "rgba(192,57,43,0.15)", border: "1px solid rgba(192,57,43,0.3)", borderRadius: "4px" }}>
                      <Icon name={icon} size={16} style={{ color: "var(--sambo-red)" }} />
                    </div>
                    <span className="font-roboto text-sm" style={{ color: "#ccc" }}>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { age: "5–8 лет", desc: "Основы координации, ловкости и дисциплины. Игровые упражнения и базовые приёмы.", icon: "Baby" },
                { age: "8–14 лет", desc: "Техника борьбы, первые соревнования, развитие характера и командного духа.", icon: "Users" },
                { age: "14+ лет", desc: "Углублённая техника, подготовка к турнирам, работа с весовыми категориями.", icon: "Zap" },
              ].map(({ age, desc, icon }) => (
                <div key={age} className="schedule-card p-6 flex gap-5"
                  style={{
                    background: "var(--sambo-dark-3)", border: "1px solid #2a2a2a",
                    borderLeft: "3px solid var(--sambo-red)"
                  }}>
                  <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center"
                    style={{ background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.25)" }}>
                    <Icon name={icon} size={22} style={{ color: "var(--sambo-red)" }} />
                  </div>
                  <div>
                    <div className="font-oswald text-xl font-bold uppercase mb-1" style={{ color: "#fff" }}>{age}</div>
                    <div className="font-roboto text-sm" style={{ color: "#888", lineHeight: 1.6 }}>{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAND */}
      <section style={{ background: "var(--sambo-red)" }} className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {achievements.map(({ number, label }) => (
              <div key={label}>
                <div className="font-oswald text-5xl font-bold" style={{ color: "#fff" }}>{number}</div>
                <div className="font-roboto text-sm uppercase tracking-widest mt-1" style={{ color: "rgba(255,255,255,0.7)" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRAINERS */}
      <section id="trainers" className="py-24" style={{ background: "var(--sambo-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block accent-line">
              <span className="font-oswald text-sm tracking-[0.3em] uppercase" style={{ color: "var(--sambo-red)" }}>
                Тренерский состав
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-2" style={{ color: "#fff" }}>
              Наши тренеры
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {trainers.map((t) => (
              <div key={t.name} className="trainer-card p-8 text-center"
                style={{ background: "var(--sambo-dark-2)", border: "1px solid #2a2a2a" }}>
                <div className="w-20 h-20 mx-auto mb-5 flex items-center justify-center text-4xl"
                  style={{ background: "rgba(192,57,43,0.12)", border: "2px solid rgba(192,57,43,0.3)", borderRadius: "50%" }}>
                  {t.emoji}
                </div>
                <div className="font-oswald text-2xl font-bold uppercase mb-1" style={{ color: "#fff" }}>{t.name}</div>
                <div className="font-roboto text-sm mb-1" style={{ color: "var(--sambo-red)" }}>{t.rank}</div>
                <div className="font-roboto text-xs mb-4" style={{ color: "#555" }}>{t.experience}</div>
                <div className="font-roboto text-sm px-3 py-1.5 inline-block"
                  style={{ background: "rgba(192,57,43,0.1)", border: "1px solid rgba(192,57,43,0.25)", color: "#aaa" }}>
                  {t.groups}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24" style={{ background: "var(--sambo-dark-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block accent-line">
              <span className="font-oswald text-sm tracking-[0.3em] uppercase" style={{ color: "var(--sambo-red)" }}>
                Расписание
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-2" style={{ color: "#fff" }}>
              Время тренировок
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {schedule.map((s) => (
              <div key={s.time} className="schedule-card p-6 flex items-center gap-6"
                style={{ background: "var(--sambo-dark-3)", border: "1px solid #2a2a2a" }}>
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center"
                  style={{ background: `${s.color}18`, border: `2px solid ${s.color}40` }}>
                  <Icon name={s.icon} size={24} style={{ color: s.color }} />
                </div>
                <div className="flex-1">
                  <div className="font-oswald text-2xl font-bold" style={{ color: "#fff" }}>{s.time}</div>
                  <div className="font-roboto text-base font-medium mb-0.5" style={{ color: "#ccc" }}>{s.group}</div>
                  <div className="font-roboto text-xs uppercase tracking-wider" style={{ color: "#555" }}>{s.days}</div>
                </div>
                <Icon name="ChevronRight" size={18} style={{ color: "#3a3a3a", flexShrink: 0 }} />
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 text-center" style={{ background: "rgba(212,160,23,0.06)", border: "1px solid rgba(212,160,23,0.2)" }}>
            <Icon name="Info" size={18} style={{ color: "var(--sambo-gold)", display: "inline-block", marginRight: "8px", verticalAlign: "middle" }} />
            <span className="font-roboto text-sm" style={{ color: "#aaa" }}>
              Первое пробное занятие — <strong style={{ color: "var(--sambo-gold)" }}>бесплатно</strong>. Приходите в удобное время, снаряжение на первый раз предоставляем.
            </span>
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS */}
      <section id="achievements" className="py-24" style={{ background: "var(--sambo-dark)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block accent-line">
              <span className="font-oswald text-sm tracking-[0.3em] uppercase" style={{ color: "var(--sambo-red)" }}>
                Достижения
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-2" style={{ color: "#fff" }}>
              Наши победы
            </h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {achievementList.map((a, i) => (
              <div key={i} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 flex items-center justify-center font-oswald font-bold text-sm flex-shrink-0"
                    style={{ background: "var(--sambo-red)", color: "#fff" }}>
                    {a.year.slice(2)}
                  </div>
                  {i < achievementList.length - 1 && (
                    <div className="flex-1 w-px mt-2 min-h-8" style={{ background: "#222" }} />
                  )}
                </div>
                <div className="pb-8 flex-1">
                  <div className="font-oswald text-xs uppercase tracking-widest mb-1" style={{ color: "var(--sambo-red)" }}>
                    {a.year}
                  </div>
                  <div className="font-oswald text-xl font-bold mb-1" style={{ color: "#fff" }}>{a.title}</div>
                  <div className="font-roboto text-sm flex items-center gap-2" style={{ color: "#777" }}>
                    <Icon name="Trophy" size={14} style={{ color: "var(--sambo-gold)" }} />
                    {a.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24" style={{ background: "var(--sambo-dark-2)" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block accent-line">
              <span className="font-oswald text-sm tracking-[0.3em] uppercase" style={{ color: "var(--sambo-red)" }}>
                Контакты
              </span>
            </div>
            <h2 className="font-oswald text-4xl md:text-5xl font-bold uppercase mt-2" style={{ color: "#fff" }}>
              Запишись на тренировку
            </h2>
            <p className="font-roboto mt-3 text-base" style={{ color: "#666" }}>
              Первое занятие — бесплатно. Приходи и попробуй!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              {[
                { icon: "MapPin", label: "Адрес", value: "ул. Спортивная, 12, Спортивный комплекс «Арена»" },
                { icon: "Phone", label: "Телефон", value: "+7 (900) 000-00-00" },
                { icon: "Mail", label: "E-mail", value: "sambo@arena-sport.ru" },
                { icon: "Clock", label: "Режим работы", value: "Пн–Пт 9:00–20:00, Сб 9:00–14:00" },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center"
                    style={{ background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.3)" }}>
                    <Icon name={icon} size={18} style={{ color: "var(--sambo-red)" }} />
                  </div>
                  <div>
                    <div className="font-roboto text-xs uppercase tracking-wider mb-0.5" style={{ color: "#555" }}>{label}</div>
                    <div className="font-roboto text-base" style={{ color: "#ddd" }}>{value}</div>
                  </div>
                </div>
              ))}

              <div className="flex gap-3 mt-2">
                {[
                  { icon: "Instagram", label: "Instagram" },
                  { icon: "Youtube", label: "YouTube" },
                  { icon: "Send", label: "Telegram" },
                ].map(({ icon, label }) => (
                  <button key={icon} title={label} className="w-10 h-10 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ background: "rgba(192,57,43,0.12)", border: "1px solid rgba(192,57,43,0.3)", color: "var(--sambo-red)" }}>
                    <Icon name={icon} size={18} />
                  </button>
                ))}
              </div>
            </div>

            <div className="p-8" style={{ background: "var(--sambo-dark-3)", border: "1px solid #2a2a2a" }}>
              <h3 className="font-oswald text-2xl font-bold uppercase mb-6" style={{ color: "#fff" }}>
                Оставь заявку
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-roboto text-xs uppercase tracking-wider block mb-1.5" style={{ color: "#555" }}>
                    Имя ребёнка / ваше имя
                  </label>
                  <input
                    type="text"
                    placeholder="Иван Иванов"
                    className="w-full px-4 py-3 font-roboto text-sm outline-none transition-all duration-300"
                    style={{ background: "#111", border: "1px solid #2a2a2a", color: "#fff" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--sambo-red)")}
                    onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                  />
                </div>
                <div>
                  <label className="font-roboto text-xs uppercase tracking-wider block mb-1.5" style={{ color: "#555" }}>
                    Телефон
                  </label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="w-full px-4 py-3 font-roboto text-sm outline-none transition-all duration-300"
                    style={{ background: "#111", border: "1px solid #2a2a2a", color: "#fff" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--sambo-red)")}
                    onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                  />
                </div>
                <div>
                  <label className="font-roboto text-xs uppercase tracking-wider block mb-1.5" style={{ color: "#555" }}>
                    Возрастная группа
                  </label>
                  <select
                    className="w-full px-4 py-3 font-roboto text-sm outline-none transition-all duration-300 appearance-none cursor-pointer"
                    style={{ background: "#111", border: "1px solid #2a2a2a", color: "#ccc" }}
                    onFocus={(e) => (e.target.style.borderColor = "var(--sambo-red)")}
                    onBlur={(e) => (e.target.style.borderColor = "#2a2a2a")}
                  >
                    <option value="">Выберите группу</option>
                    <option>Дети 5–8 лет</option>
                    <option>Дети 8–14 лет</option>
                    <option>14+ лет / взрослые</option>
                  </select>
                </div>
                <button
                  className="w-full font-oswald text-base tracking-widest uppercase py-4 font-bold transition-all duration-300 hover:opacity-85 mt-2"
                  style={{ background: "var(--sambo-red)", color: "#fff" }}>
                  Записаться на тренировку
                </button>
                <p className="font-roboto text-xs text-center" style={{ color: "#3a3a3a" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--sambo-dark)", borderTop: "1px solid #1a1a1a" }} className="py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-oswald text-lg font-bold tracking-widest uppercase">
            <span style={{ color: "var(--sambo-red)" }}>САМО</span><span style={{ color: "#fff" }}>БО</span>
          </div>
          <div className="font-roboto text-sm" style={{ color: "#333" }}>
            © 2024 Секция борьбы Самбо. Все права защищены.
          </div>
          <div className="flex gap-6">
            {navLinks.slice(0, 4).map((l) => (
              <a key={l.href} href={l.href}
                className="font-roboto text-xs uppercase tracking-wider transition-colors duration-300 hover:text-white"
                style={{ color: "#3a3a3a" }}>
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </footer>

    </div>
  );
}