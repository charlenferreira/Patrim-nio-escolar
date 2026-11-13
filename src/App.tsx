import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';
import { MotionConfig, motion } from 'motion/react';
import {
  CareMaterialsIllustration,
  CitizenshipIllustration,
  CityIllustration,
  CleanDeskIllustration,
  HeritageBookIllustration,
  LearnBetterIllustration,
  NotifyPrincipalIllustration,
  PublicMoneyIllustration,
  RecycleBinIllustration,
  SchoolHeroIllustration,
  StreetIllustration,
  WorkIllustration,
} from './components/Illustrations';

interface NavAnchor {
  id: string;
  label: string;
}

const NAV_ANCHORS: NavAnchor[] = [
  { id: 'o-que-e', label: 'O que é' },
  { id: 'por-que', label: 'Por quê' },
  { id: 'como-ajudar', label: 'Como ajudar' },
  { id: 'para-a-vida', label: 'Para a vida' },
];

const TOPIC_SLOT_WIDTH = 112;

const WHY_PRESERVE_CARDS = [
  {
    title: 'Aprender melhor',
    description: 'Um ambiente conservado ajuda a estudar e a se concentrar.',
    Illustration: LearnBetterIllustration,
  },
  {
    title: 'Dinheiro de todos',
    description: 'Reparos usam dinheiro público. Esse valor poderia virar melhorias.',
    Illustration: PublicMoneyIllustration,
  },
  {
    title: 'Cidadania',
    description: 'Cuidar do que é coletivo forma cidadãos responsáveis.',
    Illustration: CitizenshipIllustration,
  },
];

const HOW_TO_HELP_ITEMS = [
  {
    text: 'Não risque carteiras e paredes.',
    Illustration: CleanDeskIllustration,
  },
  {
    text: 'Use bem os materiais.',
    Illustration: CareMaterialsIllustration,
  },
  {
    text: 'Jogue lixo no lixo.',
    Illustration: RecycleBinIllustration,
  },
  {
    text: 'Avise a direção quando algo estragar.',
    Illustration: NotifyPrincipalIllustration,
  },
];

const LIFE_SPHERES = [
  {
    label: 'Da sua rua',
    Illustration: StreetIllustration,
  },
  {
    label: 'Da sua cidade',
    Illustration: CityIllustration,
  },
  {
    label: 'Do seu trabalho',
    Illustration: WorkIllustration,
  },
];

const EASE_SMOOTH = [0.16, 1, 0.3, 1] as const;

export default function App() {
  const [activeSection, setActiveSection] = useState<string>(NAV_ANCHORS[0].id);

  useEffect(() => {
    const sectionIds = NAV_ANCHORS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const activeIndex = Math.max(
    0,
    NAV_ANCHORS.findIndex((item) => item.id === activeSection)
  );

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    setActiveSection(NAV_ANCHORS[0].id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <div id="topo" className="min-h-screen text-stone-900 selection:bg-[#255941] selection:text-stone-50">
        {/* Barra superior ampliada estilo Liquid Glass com trilha deslizante de tópicos */}
        <header className="fixed top-2.5 left-0 right-0 z-50 px-3 sm:top-3.5 sm:px-6 lg:px-8">
          <div className="liquid-glass-nav mx-auto flex max-w-2xl flex-col items-center rounded-[1.85rem] px-3 pt-2 pb-2 sm:px-6 sm:pt-2.5 sm:pb-2.5">
            <a
              href="#topo"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="font-display text-sm font-semibold tracking-tight text-stone-950 whitespace-nowrap rounded-full px-3 py-0.5 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#255941] sm:text-base"
            >
              Patrimônio Escolar
            </a>

            <nav
              aria-label="Navegação principal"
              className="topic-track-mask relative mt-1 h-8 w-full overflow-hidden"
            >
              <motion.div
                className="absolute top-0 left-1/2 flex h-full items-center"
                animate={{ x: -(activeIndex * TOPIC_SLOT_WIDTH + TOPIC_SLOT_WIDTH / 2) }}
                transition={{ duration: 0.45, ease: EASE_SMOOTH }}
              >
                {NAV_ANCHORS.map((item, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      aria-current={isActive ? 'location' : undefined}
                      style={{ width: `${TOPIC_SLOT_WIDTH}px` }}
                      className={`inline-flex h-7 shrink-0 items-center justify-center rounded-full px-2 text-xs whitespace-nowrap transition-[filter,opacity,transform,color,background-color] duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#255941] sm:text-[13px] ${
                        isActive
                          ? 'scale-100 bg-white/55 font-semibold text-[#1E4A36] opacity-100 blur-none shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]'
                          : 'scale-95 font-medium text-stone-800 opacity-45 blur-[1.4px] hover:opacity-80 hover:blur-none'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </motion.div>
            </nav>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 pt-28 pb-16 sm:px-6 sm:pt-34 sm:pb-24 lg:px-8">
          {/* Hero */}
          <motion.section
            aria-labelledby="hero-titulo"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            className="liquid-glass-card rounded-[2.25rem] px-6 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16"
          >
            <div className="flex flex-col items-center text-center lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:text-left">
              <div className="order-2 max-w-2xl lg:order-1">
                <p className="text-sm font-medium tracking-wide text-stone-700 sm:text-base">
                  Preservação do patrimônio escolar | Educação para a vida
                </p>

                <h1
                  id="hero-titulo"
                  className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-stone-950 text-balance sm:text-5xl lg:text-[3.35rem]"
                >
                  Cuidar da escola é cuidar do futuro
                </h1>

                <div className="mt-8 border-t border-stone-900/10 pt-7 sm:mt-9 sm:pt-8">
                  <button
                    type="button"
                    onClick={() => scrollToSection('o-que-e')}
                    className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-[#255941] px-7 py-3 text-base font-semibold text-stone-50 whitespace-nowrap shadow-sm transition-all duration-150 hover:bg-[#1D4633] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#255941]"
                  >
                    <span>Vamos começar</span>
                    <ArrowDown className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, delay: 0.1, ease: EASE_SMOOTH }}
                className="order-1 mb-5 shrink-0 lg:order-2 lg:mb-0"
              >
                <SchoolHeroIllustration className="h-36 w-52 sm:h-44 sm:w-64 lg:h-52 lg:w-72" />
              </motion.div>
            </div>
          </motion.section>

          {/* 01 O que é patrimônio escolar */}
          <section
            id="o-que-e"
            aria-labelledby="secao-01-titulo"
            className="scroll-mt-24 pt-12 sm:scroll-mt-28 sm:pt-18"
          >
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH }}
              className="liquid-glass-card rounded-[2.25rem] p-6 sm:p-10 lg:p-12"
            >
              <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="flex flex-col justify-between lg:col-span-5">
                  <div>
                    <span className="font-display text-2xl font-semibold text-[#255941] tabular-nums sm:text-3xl">
                      01
                    </span>
                    <h2
                      id="secao-01-titulo"
                      className="mt-2 font-display text-2xl font-semibold leading-snug text-stone-950 text-balance sm:text-3xl"
                    >
                      O que é patrimônio escolar
                    </h2>
                    <p className="mt-3 text-base font-medium leading-relaxed text-stone-700 sm:text-lg">
                      O patrimônio é nosso, a responsabilidade também.
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, delay: 0.12, ease: EASE_SMOOTH }}
                    className="mt-6 flex justify-center lg:justify-start"
                  >
                    <HeritageBookIllustration className="h-28 w-44 sm:h-32 sm:w-48" />
                  </motion.div>
                </div>

                <div className="space-y-5 border-t border-stone-900/10 pt-6 text-base leading-relaxed text-stone-800 sm:text-lg lg:col-span-7 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
                  <p>
                    Patrimônio escolar é tudo o que a escola tem e que serve a todos: o prédio, os materiais, os espaços.
                  </p>
                  <p>
                    Isso inclui as salas de aula, a quadra, a biblioteca, as carteiras, os livros, os computadores.
                  </p>
                  <p className="font-medium text-stone-950">
                    Nada disso é de uma única pessoa, e sim de toda a comunidade: alunos, professores, funcionários e famílias.
                  </p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* 02 Por que preservar (retângulos com texto à esquerda e desenho à direita) */}
          <section
            id="por-que"
            aria-labelledby="secao-02-titulo"
            className="scroll-mt-24 pt-12 sm:scroll-mt-28 sm:pt-18"
          >
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, ease: EASE_SMOOTH }}
              className="mb-6 px-2 sm:mb-8"
            >
              <span className="font-display text-2xl font-semibold text-[#255941] tabular-nums sm:text-3xl">
                02
              </span>
              <h2
                id="secao-02-titulo"
                className="mt-1 font-display text-2xl font-semibold leading-snug text-stone-950 text-balance sm:text-3xl"
              >
                Por que preservar
              </h2>
            </motion.div>

            <div className="flex flex-col gap-4 sm:gap-5">
              {WHY_PRESERVE_CARDS.map(({ title, description, Illustration }, index) => (
                <motion.article
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.06, ease: EASE_SMOOTH }}
                  className="liquid-glass-card flex items-center justify-between gap-4 rounded-[1.85rem] p-6 sm:gap-8 sm:px-10 sm:py-8"
                >
                  <div className="min-w-0 flex-1 text-left">
                    <span className="text-xs font-semibold tracking-wider text-[#255941] tabular-nums">
                      0{index + 1}
                    </span>
                    <h3 className="mt-1.5 font-display text-xl font-semibold text-stone-950 sm:text-2xl">
                      {title}
                    </h3>
                    <p className="mt-2 max-w-xl text-base leading-relaxed text-stone-800 sm:text-lg">
                      {description}
                    </p>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, delay: 0.1 + index * 0.06, ease: EASE_SMOOTH }}
                    className="shrink-0"
                  >
                    <Illustration className="h-20 w-24 sm:h-24 sm:w-28" />
                  </motion.div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* 03 Como ajudar */}
          <section
            id="como-ajudar"
            aria-labelledby="secao-03-titulo"
            className="scroll-mt-24 pt-12 sm:scroll-mt-28 sm:pt-18"
          >
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH }}
              className="liquid-glass-card rounded-[2.25rem] p-6 sm:p-10 lg:p-12"
            >
              <div className="max-w-2xl">
                <span className="font-display text-2xl font-semibold text-[#255941] tabular-nums sm:text-3xl">
                  03
                </span>
                <h2
                  id="secao-03-titulo"
                  className="mt-2 font-display text-2xl font-semibold leading-snug text-stone-950 text-balance sm:text-3xl"
                >
                  Como ajudar
                </h2>
              </div>

              <ol className="mt-8 divide-y divide-stone-900/10 border-t border-stone-900/10">
                {HOW_TO_HELP_ITEMS.map(({ text, Illustration }, index) => (
                  <motion.li
                    key={text}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.45, delay: index * 0.06, ease: EASE_SMOOTH }}
                    className="flex items-center justify-between gap-4 py-4 first:pt-5 last:pb-1 sm:gap-6 sm:py-5"
                  >
                    <div className="flex items-baseline gap-3 sm:gap-4">
                      <span className="font-display text-xl font-semibold text-[#255941] tabular-nums shrink-0 sm:text-2xl">
                        {index + 1}.
                      </span>
                      <span className="text-base font-medium leading-relaxed text-stone-900 sm:text-xl">
                        {text}
                      </span>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.45, delay: 0.08 + index * 0.06, ease: EASE_SMOOTH }}
                      className="shrink-0"
                    >
                      <Illustration className="h-12 w-12 sm:h-14 sm:w-14" />
                    </motion.div>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          </section>

          {/* 04 Educação para a vida (sem vírgulas, inicial maiúscula, texto à esquerda e desenho à direita) */}
          <section
            id="para-a-vida"
            aria-labelledby="secao-04-titulo"
            className="scroll-mt-24 pt-12 sm:scroll-mt-28 sm:pt-18"
          >
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: EASE_SMOOTH }}
              className="liquid-glass-card rounded-[2.25rem] p-6 sm:p-10 lg:p-12"
            >
              <span className="font-display text-2xl font-semibold text-[#255941] tabular-nums sm:text-3xl">
                04
              </span>
              <h2
                id="secao-04-titulo"
                className="mt-2 font-display text-2xl font-semibold leading-snug text-stone-950 text-balance sm:text-3xl"
              >
                Educação para a vida
              </h2>

              <p className="mt-5 max-w-2xl font-display text-xl font-medium leading-relaxed text-stone-900 sm:text-2xl">
                O jeito que você cuida da sua escola é o jeito que vai cuidar:
              </p>

              <div className="mt-8 divide-y divide-stone-900/10 border-t border-stone-900/10">
                {LIFE_SPHERES.map(({ label, Illustration }, index) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.48, delay: index * 0.06, ease: EASE_SMOOTH }}
                    className="flex items-center justify-between gap-4 py-5 first:pt-6 last:pb-1 sm:gap-8 sm:py-6"
                  >
                    <div className="min-w-0 flex-1 text-left">
                      <span className="text-xs font-semibold tracking-wider text-[#255941] tabular-nums">
                        0{index + 1}
                      </span>
                      <p className="mt-1 font-display text-2xl font-semibold text-stone-950 sm:text-3xl">
                        {label}
                      </p>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{ duration: 0.48, delay: 0.08 + index * 0.06, ease: EASE_SMOOTH }}
                      className="shrink-0"
                    >
                      <Illustration className="h-16 w-24 sm:h-20 sm:w-28" />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* Fechamento */}
          <motion.section
            aria-label="Mensagem de encerramento"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, ease: EASE_SMOOTH }}
            className="pt-12 sm:pt-18"
          >
            <div className="liquid-glass-green rounded-[2.25rem] px-6 py-12 text-center text-stone-50 sm:px-12 sm:py-16">
              <p className="font-display text-2xl font-semibold leading-snug text-balance sm:text-4xl">
                A escola é nossa. Cuide bem dela.
              </p>
            </div>
          </motion.section>
        </main>

        {/* Rodapé */}
        <footer className="border-t border-white/45 bg-white/20 backdrop-blur-xl">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6 lg:px-8">
            <p className="text-sm font-medium text-stone-900 text-center sm:text-left">
              Preservação do patrimônio escolar | Educação para a vida
            </p>

            <button
              type="button"
              onClick={scrollToTop}
              className="liquid-glass-pill-btn inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-[#1E4A36] whitespace-nowrap transition-transform duration-150 hover:bg-white/80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#255941]"
            >
              <span>Voltar ao topo</span>
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </footer>
      </div>
    </MotionConfig>
  );
}
