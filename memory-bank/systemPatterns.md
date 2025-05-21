# System Patterns: BMAD-METHOD

## Architektura systemu
- Repozytorium monolityczne z podziałem na logiczne moduły: agenci (bmad-agent), dokumentacja (docs), archiwum (legacy-archive), przykłady (demos), narzędzia budujące (build-agent-cfg.js, build-bmad-web-orchestrator.js), panel startowy (bmad-starter-web).
- Panel startowy jako aplikacja webowa (React, Vite lub Next.js, bez backendu), generująca projekt po stronie klienta (eksport ZIP).
- Integracja panelu z istniejącymi szablonami i personami agentów.

## Kluczowe decyzje techniczne
- Brak backendu – całość logiki generowania projektu po stronie przeglądarki.
- Responsywny design (mobile-first, prosty CSS lub Tailwind).
- Eksport projektu jako archiwum ZIP (np. JSZip).
- Wykorzystanie plików Markdown jako źródła opisów agentów i szablonów dokumentów.
- Możliwość łatwego rozszerzania o kolejne role, szablony i funkcje.

## Wzorce projektowe
- Separation of Concerns: oddzielenie logiki agentów, dokumentacji, narzędzi budujących i panelu startowego.
- DRY: wykorzystanie wspólnych szablonów i plików Markdown w wielu miejscach.
- Plug-and-play: możliwość kopiowania agentów i szablonów do innych projektów.
- User-centric: panel startowy prowadzi użytkownika krok po kroku przez proces inicjalizacji projektu.

## Relacje komponentów
- Panel startowy korzysta z plików agentów i szablonów z bmad-agent/templates oraz bmad-agent/personas.
- Wygenerowany projekt może być rozwijany z użyciem agentów BMAD w IDE lub webowo.
- Dokumentacja i checklisty wspierają cały cykl życia projektu. 