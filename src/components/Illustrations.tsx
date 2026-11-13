import type { SVGProps } from 'react';

type IllustrationProps = SVGProps<SVGSVGElement>;

export function SchoolHeroIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 240 164"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {/* Nuvens sutis e sol */}
      <circle cx="196" cy="34" r="14" fill="#F2CA78" opacity="0.85" />
      <circle cx="196" cy="34" r="20" fill="#F2CA78" opacity="0.22" />
      <path
        d="M34 42C34 37.5817 37.5817 34 42 34C43.2 34 44.34 34.26 45.36 34.73C46.76 31.36 50.09 29 54 29C59.15 29 63.34 33.11 63.49 38.22C66.62 38.86 69 41.65 69 45C69 48.866 65.866 52 62 52H41C37.134 52 34 48.866 34 45V42Z"
        fill="#FFFFFF"
        opacity="0.75"
      />

      {/* Base do gramado */}
      <ellipse cx="120" cy="146" rx="100" ry="10" fill="#B9CEBE" opacity="0.65" />
      <path d="M26 144H214" stroke="#1B3B2B" strokeWidth="2.5" strokeLinecap="round" />

      {/* Árvore esquerda */}
      <path d="M46 144V116" stroke="#7A5338" strokeWidth="4" strokeLinecap="round" />
      <circle cx="46" cy="102" r="18" fill="#5D8F6E" stroke="#1B3B2B" strokeWidth="2.2" />
      <circle cx="38" cy="108" r="11" fill="#77A787" />
      <circle cx="54" cy="109" r="9" fill="#467658" opacity="0.65" />

      {/* Árvore direita */}
      <path d="M194 144V118" stroke="#7A5338" strokeWidth="4" strokeLinecap="round" />
      <circle cx="194" cy="105" r="16" fill="#5D8F6E" stroke="#1B3B2B" strokeWidth="2.2" />
      <circle cx="187" cy="110" r="9" fill="#77A787" />

      {/* Mastro e bandeira */}
      <path d="M120 34V12" stroke="#1B3B2B" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M120 13L142 18.5L120 24V13Z"
        fill="#255941"
        stroke="#1B3B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Alas laterais da escola */}
      <rect
        x="62"
        y="90"
        width="116"
        height="54"
        rx="8"
        fill="#FAF7F2"
        stroke="#1B3B2B"
        strokeWidth="2.4"
      />
      <path
        d="M56 92L74 74H166L184 92H56Z"
        fill="#C87A53"
        stroke="#1B3B2B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />

      {/* Torre central da escola */}
      <rect
        x="88"
        y="64"
        width="64"
        height="80"
        rx="4"
        fill="#FFFDF9"
        stroke="#1B3B2B"
        strokeWidth="2.4"
      />
      {/* Telhado central */}
      <path
        d="M80 66L120 34L160 66H80Z"
        fill="#C87A53"
        stroke="#1B3B2B"
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M90 62L120 39L150 62" stroke="#E09B78" strokeWidth="2" strokeLinecap="round" />

      {/* Relógio circular no frontão */}
      <circle cx="120" cy="78" r="10" fill="#E6EEF2" stroke="#1B3B2B" strokeWidth="2.2" />
      <path d="M120 73V78L123.5 80" stroke="#255941" strokeWidth="2" strokeLinecap="round" />

      {/* Janelas laterais */}
      <rect x="68" y="102" width="14" height="18" rx="3" fill="#B9D1DF" stroke="#1B3B2B" strokeWidth="2" />
      <path d="M75 102V120M68 111H82" stroke="#1B3B2B" strokeWidth="1.5" />
      <rect x="158" y="102" width="14" height="18" rx="3" fill="#B9D1DF" stroke="#1B3B2B" strokeWidth="2" />
      <path d="M165 102V120M158 111H172" stroke="#1B3B2B" strokeWidth="1.5" />

      {/* Janelas da torre */}
      <rect x="97" y="96" width="12" height="14" rx="2.5" fill="#F2CA78" stroke="#1B3B2B" strokeWidth="1.8" />
      <rect x="131" y="96" width="12" height="14" rx="2.5" fill="#F2CA78" stroke="#1B3B2B" strokeWidth="1.8" />

      {/* Porta em arco */}
      <path
        d="M108 144V124C108 117.373 113.373 112 120 112C126.627 112 132 117.373 132 124V144H108Z"
        fill="#255941"
        stroke="#1B3B2B"
        strokeWidth="2.2"
      />
      <path d="M120 112V144" stroke="#1B3B2B" strokeWidth="1.8" />
      <circle cx="116" cy="130" r="1.5" fill="#F2CA78" />
      <circle cx="124" cy="130" r="1.5" fill="#F2CA78" />

      {/* Arbustos frontais */}
      <path
        d="M72 144C72 137.373 77.3726 132 84 132C88.5 132 92.4 134.5 94.4 138.2C95.6 137.4 97 137 98.5 137C102.6 137 106 140.1 106 144H72Z"
        fill="#3B7A57"
        stroke="#1B3B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M134 144C134 140.1 137.4 137 141.5 137C143 137 144.4 137.4 145.6 138.2C147.6 134.5 151.5 132 156 132C162.6 132 168 137.373 168 144H134Z"
        fill="#3B7A57"
        stroke="#1B3B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HeritageBookIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 180 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <ellipse cx="90" cy="108" rx="74" ry="8" fill="#B9CEBE" opacity="0.55" />

      {/* Globo escolar atrás à direita */}
      <circle cx="136" cy="54" r="22" fill="#7CA3BD" stroke="#1B3B2B" strokeWidth="2.2" />
      <path
        d="M124 44C128 40 136 42 138 48C140 54 132 58 130 64C127 61 121 52 124 44Z"
        fill="#5D8F6E"
      />
      <path
        d="M144 40C149 43 152 51 148 58C145 55 142 47 144 40Z"
        fill="#5D8F6E"
      />
      <path
        d="M118 32C126 24 146 24 154 32M136 76V88M124 88H148"
        stroke="#1B3B2B"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <path d="M114 54C114 68 124 78 136 78C148 78 158 68 158 54" stroke="#DFAD52" strokeWidth="2.4" strokeLinecap="round" />

      {/* Porta-lápis à esquerda */}
      <rect x="24" y="64" width="24" height="34" rx="5" fill="#3B7A57" stroke="#1B3B2B" strokeWidth="2.2" />
      <path d="M29 64V44L33 38L37 44V64" fill="#F2CA78" stroke="#1B3B2B" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M39 64V48H45V64" fill="#C87A53" stroke="#1B3B2B" strokeWidth="1.8" strokeLinejoin="round" />

      {/* Livro aberto em primeiro plano */}
      <path
        d="M44 74C44 70.6863 46.6863 68 50 68H86C91 68 94 72 94 76V104C94 100 90 98 86 98H50C46.6863 98 44 95.3137 44 92V74Z"
        fill="#FFFDF9"
        stroke="#1B3B2B"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
      <path
        d="M144 74C144 70.6863 141.314 68 138 68H102C97 68 94 72 94 76V104C94 100 98 98 102 98H138C141.314 98 144 95.3137 144 92V74Z"
        fill="#FAF7F2"
        stroke="#1B3B2B"
        strokeWidth="2.3"
        strokeLinejoin="round"
      />
      {/* Capa do livro */}
      <path
        d="M40 94V99C40 101.209 41.7909 103 44 103H88C91 103 94 106 94 106C94 106 97 103 100 103H144C146.209 103 148 101.209 148 99V94"
        stroke="#C87A53"
        strokeWidth="4"
        strokeLinecap="round"
      />
      {/* Marcador verde e linhas */}
      <path d="M104 68V87L108 83L112 87V68" fill="#255941" stroke="#1B3B2B" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M54 77H82M54 84H80M54 91H74" stroke="#9BB5A4" strokeWidth="2" strokeLinecap="round" />
      <path d="M118 77H134M118 84H134M104 91H130" stroke="#9BB5A4" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function LearnBetterIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <ellipse cx="60" cy="84" rx="46" ry="6" fill="#B9CEBE" opacity="0.5" />
      {/* Luz suave da luminária */}
      <path d="M78 38L54 76H96L86 38H78Z" fill="#F6DFA8" opacity="0.55" />
      {/* Base da pilha de livros */}
      <rect x="20" y="66" width="54" height="14" rx="4" fill="#3B7A57" stroke="#1B3B2B" strokeWidth="2.1" />
      <path d="M26 73H66" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
      <rect x="26" y="52" width="48" height="14" rx="4" fill="#C87A53" stroke="#1B3B2B" strokeWidth="2.1" />
      <path d="M32 59H64" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />
      <rect x="22" y="38" width="42" height="14" rx="4" fill="#5A7D9A" stroke="#1B3B2B" strokeWidth="2.1" />
      <path d="M28 45H56" stroke="#FAF7F2" strokeWidth="2" strokeLinecap="round" />

      {/* Luminária de mesa */}
      <path d="M76 80H98" stroke="#1B3B2B" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M88 80L94 46L82 32" stroke="#1B3B2B" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M71 35C73 27 81 23 88 26L92 38L71 35Z"
        fill="#DFAD52"
        stroke="#1B3B2B"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <circle cx="80" cy="39" r="4" fill="#FFF3C4" />
    </svg>
  );
}

export function PublicMoneyIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <ellipse cx="60" cy="84" rx="46" ry="6" fill="#B9CEBE" opacity="0.5" />

      {/* Moeda dourada entrando */}
      <circle cx="52" cy="24" r="9" fill="#DFAD52" stroke="#1B3B2B" strokeWidth="2" />
      <path d="M52 20V28M49.5 22.5C49.5 21.5 54.5 21.5 54.5 23C54.5 24.5 49.5 24.5 49.5 26C49.5 27 54.5 27 54.5 26" stroke="#1B3B2B" strokeWidth="1.4" strokeLinecap="round" />

      {/* Cofrinho */}
      <ellipse cx="52" cy="58" rx="24" ry="18" fill="#E39B76" stroke="#1B3B2B" strokeWidth="2.2" />
      <path d="M44 43H60" stroke="#1B3B2B" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M36 73V80M66 73V80" stroke="#1B3B2B" strokeWidth="2.8" strokeLinecap="round" />
      <path d="M26 55C23 55 21 58 24 61" stroke="#1B3B2B" strokeWidth="2" strokeLinecap="round" />
      <circle cx="66" cy="53" r="2" fill="#1B3B2B" />

      {/* Broto verde representando melhorias */}
      <path d="M90 80V54" stroke="#255941" strokeWidth="2.4" strokeLinecap="round" />
      <path
        d="M90 62C90 54 98 48 106 50C106 58 98 64 90 62Z"
        fill="#5D8F6E"
        stroke="#1B3B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M90 54C90 46 82 40 74 42C74 50 82 56 90 54Z"
        fill="#3B7A57"
        stroke="#1B3B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CitizenshipIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 120 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <ellipse cx="60" cy="84" rx="46" ry="6" fill="#B9CEBE" opacity="0.5" />

      {/* Folhas ao fundo */}
      <path
        d="M28 54C20 46 20 32 30 28C36 38 36 48 28 54Z"
        fill="#6F9E84"
        stroke="#1B3B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M92 54C100 46 100 32 90 28C84 38 84 48 92 54Z"
        fill="#6F9E84"
        stroke="#1B3B2B"
        strokeWidth="2"
        strokeLinejoin="round"
      />

      {/* Globo/coração comunitário central */}
      <circle cx="60" cy="44" r="20" fill="#5A7D9A" stroke="#1B3B2B" strokeWidth="2.2" />
      <path
        d="M48 36C54 33 61 36 62 42C63 48 56 54 50 52C46 48 45 41 48 36Z"
        fill="#5D8F6E"
      />
      <path
        d="M68 32C74 36 77 45 72 52C68 50 66 41 68 32Z"
        fill="#5D8F6E"
      />

      {/* Mãos acolhendo */}
      <path
        d="M28 62C36 62 44 68 56 72C48 78 36 78 24 72L28 62Z"
        fill="#E39B76"
        stroke="#1B3B2B"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      <path
        d="M92 62C84 62 76 68 64 72C72 78 84 78 96 72L92 62Z"
        fill="#C87A53"
        stroke="#1B3B2B"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function CleanDeskIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="32" cy="32" r="28" fill="#E4ECE6" />
      {/* Carteira escolar */}
      <rect x="14" y="28" width="36" height="7" rx="3" fill="#C87A53" stroke="#1B3B2B" strokeWidth="2" />
      <path d="M18 35V49M46 35V49M22 41H42" stroke="#1B3B2B" strokeWidth="2.2" strokeLinecap="round" />
      {/* Livro limpo em cima */}
      <rect x="22" y="21" width="18" height="7" rx="2" fill="#3B7A57" stroke="#1B3B2B" strokeWidth="1.8" />
      {/* Brilho */}
      <path d="M47 16L49 20L53 22L49 24L47 28L45 24L41 22L45 20L47 16Z" fill="#DFAD52" />
    </svg>
  );
}

export function CareMaterialsIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="32" cy="32" r="28" fill="#E4ECE6" />
      {/* Lápis e régua */}
      <path d="M21 34V18L25 13L29 18V34" fill="#DFAD52" stroke="#1B3B2B" strokeWidth="1.9" strokeLinejoin="round" />
      <rect x="33" y="16" width="9" height="19" rx="2" fill="#5A7D9A" stroke="#1B3B2B" strokeWidth="1.9" />
      <path d="M33 21H36M33 26H36" stroke="#FAF7F2" strokeWidth="1.5" strokeLinecap="round" />
      {/* Copo organizador */}
      <rect x="18" y="30" width="28" height="20" rx="5" fill="#3B7A57" stroke="#1B3B2B" strokeWidth="2.1" />
      <path d="M24 37H40" stroke="#A7C7B2" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function RecycleBinIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="32" cy="32" r="28" fill="#E4ECE6" />
      {/* Tampa */}
      <rect x="17" y="18" width="30" height="6" rx="3" fill="#255941" stroke="#1B3B2B" strokeWidth="2" />
      <path d="M27 18V15C27 14 28 13 29 13H35C36 13 37 14 37 15V18" stroke="#1B3B2B" strokeWidth="2" />
      {/* Corpo da lixeira */}
      <path
        d="M20 24H44L41 49C40.8 50.6 39.5 52 37.8 52H26.2C24.5 52 23.2 50.6 23 49L20 24Z"
        fill="#3B7A57"
        stroke="#1B3B2B"
        strokeWidth="2.1"
        strokeLinejoin="round"
      />
      {/* Folhinha branca */}
      <path
        d="M32 43C32 37 36 33 40 34C40 39 36 43 32 43Z"
        fill="#FAF7F2"
      />
      <path d="M28 33V43M32 31V44" stroke="#A7C7B2" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function NotifyPrincipalIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <circle cx="32" cy="32" r="28" fill="#E4ECE6" />
      {/* Prancheta */}
      <rect x="18" y="16" width="26" height="34" rx="5" fill="#FAF7F2" stroke="#1B3B2B" strokeWidth="2.1" />
      <rect x="25" y="13" width="12" height="6" rx="2.5" fill="#C87A53" stroke="#1B3B2B" strokeWidth="1.8" />
      <path d="M24 26H38M24 33H38M24 40H32" stroke="#5A7D9A" strokeWidth="2.1" strokeLinecap="round" />
      {/* Selo de alerta positivo */}
      <circle cx="44" cy="43" r="9" fill="#DFAD52" stroke="#1B3B2B" strokeWidth="2" />
      <path d="M44 39V44M44 47H44.01" stroke="#1B3B2B" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

export function StreetIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 112 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 72H100" stroke="#1B3B2B" strokeWidth="2.2" strokeLinecap="round" />
      {/* Casinha */}
      <rect x="22" y="42" width="38" height="30" rx="4" fill="#FAF7F2" stroke="#1B3B2B" strokeWidth="2.1" />
      <path d="M18 44L41 24L64 44H18Z" fill="#C87A53" stroke="#1B3B2B" strokeWidth="2.1" strokeLinejoin="round" />
      <rect x="35" y="54" width="12" height="18" rx="3" fill="#255941" stroke="#1B3B2B" strokeWidth="1.8" />
      <rect x="27" y="48" width="7" height="7" rx="1.5" fill="#B9D1DF" stroke="#1B3B2B" strokeWidth="1.5" />
      {/* Árvore da rua */}
      <path d="M80 72V50" stroke="#7A5338" strokeWidth="3.5" strokeLinecap="round" />
      <circle cx="80" cy="40" r="14" fill="#5D8F6E" stroke="#1B3B2B" strokeWidth="2.1" />
      <circle cx="75" cy="44" r="7" fill="#77A787" />
    </svg>
  );
}

export function CityIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 112 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 72H100" stroke="#1B3B2B" strokeWidth="2.2" strokeLinecap="round" />
      {/* Prédios da cidade */}
      <rect x="18" y="34" width="22" height="38" rx="4" fill="#5A7D9A" stroke="#1B3B2B" strokeWidth="2.1" />
      <rect x="24" y="41" width="4" height="5" rx="1" fill="#F2CA78" />
      <rect x="31" y="41" width="4" height="5" rx="1" fill="#F2CA78" />
      <rect x="24" y="51" width="4" height="5" rx="1" fill="#F2CA78" />
      <rect x="31" y="51" width="4" height="5" rx="1" fill="#FAF7F2" />

      <rect x="40" y="22" width="28" height="50" rx="4" fill="#FAF7F2" stroke="#1B3B2B" strokeWidth="2.1" />
      <rect x="46" y="30" width="6" height="6" rx="1.2" fill="#B9D1DF" stroke="#1B3B2B" strokeWidth="1.4" />
      <rect x="56" y="30" width="6" height="6" rx="1.2" fill="#B9D1DF" stroke="#1B3B2B" strokeWidth="1.4" />
      <rect x="46" y="42" width="6" height="6" rx="1.2" fill="#B9D1DF" stroke="#1B3B2B" strokeWidth="1.4" />
      <rect x="56" y="42" width="6" height="6" rx="1.2" fill="#B9D1DF" stroke="#1B3B2B" strokeWidth="1.4" />
      <rect x="49" y="56" width="10" height="16" rx="2" fill="#255941" stroke="#1B3B2B" strokeWidth="1.8" />

      {/* Praça arborizada */}
      <path d="M84 72V54" stroke="#7A5338" strokeWidth="3.2" strokeLinecap="round" />
      <circle cx="84" cy="45" r="12" fill="#3B7A57" stroke="#1B3B2B" strokeWidth="2.1" />
    </svg>
  );
}

export function WorkIllustration({ className = '', ...props }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 112 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path d="M12 72H100" stroke="#1B3B2B" strokeWidth="2.2" strokeLinecap="round" />
      {/* Mesa */}
      <rect x="18" y="56" width="76" height="6" rx="3" fill="#C87A53" stroke="#1B3B2B" strokeWidth="2" />
      <path d="M26 62V72M86 62V72" stroke="#1B3B2B" strokeWidth="2.2" strokeLinecap="round" />

      {/* Notebook */}
      <rect x="34" y="32" width="34" height="24" rx="4" fill="#5A7D9A" stroke="#1B3B2B" strokeWidth="2.1" />
      <rect x="39" y="37" width="24" height="14" rx="2" fill="#E6EEF2" />
      <path d="M29 56H73" stroke="#1B3B2B" strokeWidth="2.4" strokeLinecap="round" />

      {/* Caneca */}
      <rect x="20" y="46" width="9" height="10" rx="2" fill="#DFAD52" stroke="#1B3B2B" strokeWidth="1.8" />

      {/* Vasinho verde */}
      <path d="M77 56L79 47H87L89 56H77Z" fill="#FAF7F2" stroke="#1B3B2B" strokeWidth="1.8" strokeLinejoin="round" />
      <path d="M83 47C80 41 75 40 75 35C80 35 83 39 83 47Z" fill="#3B7A57" stroke="#1B3B2B" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M83 47C86 41 91 40 91 35C86 35 83 39 83 47Z" fill="#5D8F6E" stroke="#1B3B2B" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}
