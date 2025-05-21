# BMAD Starter Web

Prosty, responsywny panel startowy do szybkiego rozpoczęcia pracy z metodą BMAD.

## Funkcje
- Wybór agenta (lista z opisami)
- Opis projektu (pole tekstowe)
- Propozycja technologii (automatyczna + możliwość edycji)
- Generowanie struktury katalogów i plików (README, .gitignore, katalogi, pliki agentów BMAD)
- Eksport projektu jako archiwum ZIP
- Instrukcja inicjalizacji repozytorium git (do skopiowania)
- Responsywność (desktop + mobile)

## Technologia
- React (Vite)
- Tailwind CSS (lub prosty CSS)
- JSZip (eksport ZIP)
- Brak backendu

## Uruchomienie lokalne
1. Przejdź do folderu `bmad-starter-web`:
   ```bash
   cd bmad-starter-web
   ```
2. Zainstaluj zależności:
   ```bash
   npm install
   ```
3. Uruchom aplikację developersko:
   ```bash
   npm run dev
   ```
4. Otwórz w przeglądarce: [http://localhost:5173](http://localhost:5173)

## Budowa produkcyjna
```bash
npm run build
```

## Hosting
Aplikację można wrzucić na dowolny hosting statyczny (np. Vercel, Netlify, GitHub Pages). 