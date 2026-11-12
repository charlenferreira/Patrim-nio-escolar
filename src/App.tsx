import { useEffect, useState } from 'react';
import { ArrowDown, ArrowUp, Menu, X } from 'lucide-react';

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

const WHY_PRESERVE_CARDS = [
  {
    title: 'Aprender melhor',
    description: 'Um ambiente conservado ajuda a estudar e a se concentrar.',
  },
  {
    title: 'Dinheiro de todos',
    description: 'Reparos usam dinheiro público. Esse valor poderia virar melhorias.',
  },
  {
    title: 'Cidadania',
    description: 'Cuidar do que é coletivo forma cidadãos responsáveis.',
  },
];

const HOW_TO_HELP_ITEMS = [
  'Não risque carteiras e paredes.',
  'Use bem os materiais.',
  'Jogue lixo no lixo.',
  'Avise a direção quando algo estragar.',
];

const LIFE_SPHERES = [
  'da sua rua,',
  'da sua cidade,',
  'do seu trabalho.',
];

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

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
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div id="topo" className="min-h-screen text-stone-900 selection:bg-stone-800 selection:text-stone-50">
      {/* Menu fixo no topo estilo Liquid Glass */}
      <header className="fixed top-2.5 left-0 right-0 z-50 px-3 sm:top-3.5 sm:px-6 lg:px-8">
        <div className="liquid-glass-nav mx-auto flex h-12 max-w-5xl items-center justify-between gap-4 rounded-full px-4 sm:h-14 sm:px-6 lg:gap-8">
          <a
            href="#topo"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="font-display text-base font-semibold tracking-tight text-stone-900 whitespace-nowrap shrink-0 rounded-full px-2 py-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:text-lg"
          >
            Patrimônio Escolar
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden md:flex items-center gap-6 lg:gap-8"
          >
            {NAV_ANCHORS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`relative rounded-full px-2.5 py-1.5 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 ${
                    isActive
                      ? 'text-stone-950'
                      : 'text-stone-700 hover:text-stone-950'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-2.5 bottom-0.5 h-0.5 rounded-full bg-stone-900 transition-opacity duration-150 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          <div className="flex items-center shrink-0">
            <a
              href="#como-ajudar"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('como-ajudar');
              }}
              className="hidden md:inline-flex min-h-[38px] items-center justify-center rounded-full bg-stone-900/90 px-4 py-1.5 text-xs font-semibold text-stone-50 whitespace-nowrap shrink-0 shadow-sm transition-colors duration-150 hover:bg-stone-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
            >
              Participar
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-controls="menu-mobile"
              aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
              className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full text-stone-900 transition-colors duration-150 hover:bg-white/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 md:hidden"
            >
              {mobileMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        {/* Drawer de navegação mobile Liquid Glass */}
        {mobileMenuOpen && (
          <nav
            id="menu-mobile"
            aria-label="Menu de navegação móvel"
            className="liquid-glass-nav mx-auto mt-2 max-w-5xl rounded-[1.75rem] p-2.5 md:hidden"
          >
            <ul className="flex flex-col gap-1">
              {NAV_ANCHORS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }}
                      className={`flex min-h-[44px] items-center justify-between rounded-2xl px-4 py-2.5 text-base font-medium transition-colors duration-150 ${
                        isActive
                          ? 'bg-stone-900/90 text-stone-50 shadow-sm'
                          : 'text-stone-900 hover:bg-white/45'
                      }`}
                    >
                      <span>{item.label}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-5xl px-4 pt-24 pb-16 sm:px-6 sm:pt-32 sm:pb-24 lg:px-8">
        {/* Hero */}
        <section
          aria-labelledby="hero-titulo"
          className="liquid-glass-card rounded-[2.25rem] px-6 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20"
        >
          <div className="max-w-3xl">
            <p className="text-sm font-medium tracking-wide text-stone-700 sm:text-base">
              Preservação do patrimônio escolar | Educação para a vida
            </p>

            <h1
              id="hero-titulo"
              className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight text-stone-950 text-balance sm:text-5xl lg:text-[3.5rem]"
            >
              Cuidar da escola é cuidar do futuro
            </h1>

            <div className="mt-8 border-t border-stone-900/10 pt-8 sm:mt-10 sm:pt-10">
              <button
                type="button"
                onClick={() => scrollToSection('o-que-e')}
                className="inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-full bg-stone-900/95 px-7 py-3 text-base font-semibold text-stone-50 whitespace-nowrap shadow-sm transition-transform duration-150 hover:bg-stone-900 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
              >
                <span>Vamos começar</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </section>

        {/* 01 O que é patrimônio escolar */}
        <section
          id="o-que-e"
          aria-labelledby="secao-01-titulo"
          className="scroll-mt-20 pt-12 sm:scroll-mt-24 sm:pt-18"
        >
          <div className="liquid-glass-card rounded-[2.25rem] p-6 sm:p-10 lg:p-12">
            <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-5">
                <span className="font-display text-2xl font-semibold text-stone-600 tabular-nums sm:text-3xl">
                  01
                </span>
                <h2
                  id="secao-01-titulo"
                  className="mt-2 font-display text-2xl font-semibold leading-snug text-stone-950 text-balance sm:text-3xl"
                >
                  O que é patrimônio escolar
                </h2>
                <p className="mt-4 text-base font-medium leading-relaxed text-stone-700 sm:text-lg">
                  O patrimônio é nosso, a responsabilidade também.
                </p>
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
          </div>
        </section>

        {/* 02 Por que preservar */}
        <section
          id="por-que"
          aria-labelledby="secao-02-titulo"
          className="scroll-mt-20 pt-12 sm:scroll-mt-24 sm:pt-18"
        >
          <div className="mb-6 px-2 sm:mb-8">
            <span className="font-display text-2xl font-semibold text-stone-700 tabular-nums sm:text-3xl">
              02
            </span>
            <h2
              id="secao-02-titulo"
              className="mt-1 font-display text-2xl font-semibold leading-snug text-stone-950 text-balance sm:text-3xl"
            >
              Por que preservar
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {WHY_PRESERVE_CARDS.map((card, index) => (
              <article
                key={card.title}
                className="liquid-glass-card flex flex-col justify-between rounded-[1.85rem] p-6 sm:p-8"
              >
                <div>
                  <span className="text-xs font-semibold tracking-wider text-stone-600 tabular-nums">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-stone-950">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-stone-800">
                    {card.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 03 Como ajudar */}
        <section
          id="como-ajudar"
          aria-labelledby="secao-03-titulo"
          className="scroll-mt-20 pt-12 sm:scroll-mt-24 sm:pt-18"
        >
          <div className="liquid-glass-card rounded-[2.25rem] p-6 sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <span className="font-display text-2xl font-semibold text-stone-600 tabular-nums sm:text-3xl">
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
              {HOW_TO_HELP_ITEMS.map((item, index) => (
                <li
                  key={item}
                  className="flex items-baseline gap-4 py-5 first:pt-6 last:pb-2 sm:gap-6 sm:py-6"
                >
                  <span className="font-display text-xl font-semibold text-stone-600 tabular-nums shrink-0 sm:text-2xl">
                    {index + 1}.
                  </span>
                  <span className="text-lg font-medium leading-relaxed text-stone-900 sm:text-xl">
                    {item}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 04 Educação para a vida */}
        <section
          id="para-a-vida"
          aria-labelledby="secao-04-titulo"
          className="scroll-mt-20 pt-12 sm:scroll-mt-24 sm:pt-18"
        >
          <div className="liquid-glass-card rounded-[2.25rem] p-6 sm:p-10 lg:p-12">
            <span className="font-display text-2xl font-semibold text-stone-600 tabular-nums sm:text-3xl">
              04
            </span>
            <h2
              id="secao-04-titulo"
              className="mt-2 font-display text-2xl font-semibold leading-snug text-stone-950 text-balance sm:text-3xl"
            >
              Educação para a vida
            </h2>

            <p className="mt-6 max-w-2xl font-display text-xl font-medium leading-relaxed text-stone-900 sm:text-2xl">
              O jeito que você cuida da sua escola é o jeito que vai cuidar:
            </p>

            <div className="mt-8 grid grid-cols-1 divide-y divide-stone-900/10 border-t border-stone-900/10 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              {LIFE_SPHERES.map((sphere, index) => (
                <div
                  key={sphere}
                  className="py-5 first:pt-6 last:pb-1 sm:px-6 sm:py-6 sm:first:pl-0 sm:last:pr-0"
                >
                  <span className="text-xs font-semibold tracking-wider text-stone-600 tabular-nums">
                    0{index + 1}
                  </span>
                  <p className="mt-2 font-display text-2xl font-semibold text-stone-950 sm:text-[1.75rem]">
                    {sphere}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fechamento */}
        <section
          aria-label="Mensagem de encerramento"
          className="pt-12 sm:pt-18"
        >
          <div className="liquid-glass-dark rounded-[2.25rem] px-6 py-12 text-center text-stone-50 sm:px-12 sm:py-16">
            <p className="font-display text-2xl font-semibold leading-snug text-balance sm:text-4xl">
              A escola é nossa. Cuide bem dela.
            </p>
          </div>
        </section>
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
            className="liquid-glass-pill-btn inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-stone-900 whitespace-nowrap transition-transform duration-150 hover:bg-white/80 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
      </footer>
    </div>
  );
}
