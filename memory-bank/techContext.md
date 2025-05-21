# Tech Context: BMAD-METHOD

## Technologie użyte
- Node.js (skrypty budujące, generowanie agentów webowych)
- React (panel startowy, webowy interfejs)
- Vite lub Next.js (szybki development, SSR opcjonalny)
- Tailwind CSS lub własny minimalny CSS (responsywność, mobile-first)
- JSZip (eksport projektu jako ZIP)
- Markdown (szablony, opisy agentów, dokumentacja)

## Wymagania środowiskowe
- Node.js >= 16 (do uruchamiania skryptów build-*.js)
- Przeglądarka wspierająca ES6+ i Web APIs (panel startowy)
- Brak wymagań backendowych dla panelu startowego

## Zależności
- Brak zewnętrznych zależności npm dla skryptów build-*.js (lub minimalne, do potwierdzenia)
- Panel startowy: React, JSZip, Tailwind (lub CSS)

## Ograniczenia techniczne
- Panel startowy działa w 100% po stronie klienta (brak backendu)
- Eksport projektu jako ZIP, bez możliwości bezpośredniego pushowania do git (instrukcja do ręcznego wykonania)
- Integracja z agentami BMAD przez kopiowanie plików/person do projektu
- Możliwość łatwego rozszerzania o kolejne technologie i szablony 