# BMAD Starter Panel

Panel startowy do szybkiego rozpoczęcia projektów z metodologią BMAD (AI-driven agile development).

## 🚀 Funkcje

- **Responsywny UI** - działa na desktop i mobile
- **Wybór agenta BMAD** - 7 dostępnych ról (Dev, SM, PM, PO, Analyst, Architect, Design Architect)
- **Konfiguracja projektu** - nazwa, opis, technologie
- **Generowanie struktury** - kompletny projekt React + TypeScript + Vite
- **Eksport ZIP** - pobierz gotowy projekt
- **Integracja BMAD** - folder `.bmad/` z personą agenta i instrukcjami

## 📋 Wymagania

- Node.js >= 16
- npm lub yarn
- Przeglądarka wspierająca ES6+

## 🛠 Instalacja i uruchomienie

1. **Przejdź do katalogu panelu:**
   ```bash
   cd bmad-starter-web
   ```

2. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

3. **Uruchom serwer deweloperski:**
   ```bash
   npm run dev
   ```

4. **Otwórz w przeglądarce:**
   ```
   http://localhost:5173/
   ```

## 🎯 Jak używać

### Krok 1: Wybór Agenta
- Wybierz jedną z 7 dostępnych ról BMAD
- Każdy agent ma specjalizację i konkretne kompetencje

### Krok 2: Opis Projektu  
- Podaj nazwę projektu (będzie użyta jako nazwa folderu)
- Opisz cel i funkcjonalność projektu

### Krok 3: Konfiguracja
- Wybierz technologie frontend (React, Vue, Angular, Vanilla JS)
- Wybierz technologie backend (Node.js, Python, Java, PHP)

### Krok 4: Generowanie
- Sprawdź podsumowanie konfiguracji
- Kliknij "Wygeneruj i Pobierz ZIP"
- Pobierz gotowy projekt

## 📁 Wygenerowana struktura projektu

```
projekt-nazwa/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── docs/
│   └── project-brief.md
├── .bmad/
│   ├── [agent]-persona.md
│   └── instructions.md
├── package.json
├── vite.config.ts
├── tsconfig.json
├── index.html
├── .gitignore
└── README.md
```

## 🔄 Następne kroki po pobraniu projektu

1. **Rozpakuj ZIP:**
   ```bash
   unzip projekt-nazwa.zip
   cd projekt-nazwa
   ```

2. **Zainicjuj git:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit with BMAD structure"
   ```

3. **Zainstaluj zależności:**
   ```bash
   npm install
   ```

4. **Uruchom projekt:**
   ```bash
   npm run dev
   ```

5. **Rozpocznij pracę z agentem BMAD:**
   - Sprawdź plik `.bmad/[agent]-persona.md`
   - Przeczytaj instrukcje w `.bmad/instructions.md`
   - Wykorzystaj dokumentację w `docs/project-brief.md`

## 🧠 Metodologia BMAD

BMAD (Business Methodology for Agile Development) łączy:
- **Agile/Scrum practices** - sprawdzone metodyki zwinne
- **AI-assisted development** - wsparcie agentów AI w każdej roli
- **Structured documentation** - ustandaryzowana dokumentacja
- **Role-based collaboration** - współpraca oparta na konkretnych rolach

## 🛠 Technologie użyte w panelu

- **React 18** + TypeScript
- **Vite** - szybkie środowisko deweloperskie
- **Tailwind CSS** - utility-first CSS framework
- **JSZip** - generowanie archiwów ZIP w przeglądarce

## 📚 Dostępne agenci BMAD

| Agent | Rola | Specjalizacja |
|-------|------|---------------|
| **Dev** | Developer | Implementacja kodu, architektura techniczna |
| **SM** | Scrum Master | Procesy agile, zarządzanie zespołem |
| **PM** | Project Manager | Koordynacja projektu, zarządzanie zasobami |
| **PO** | Product Owner | Zarządzanie produktem, wymagania biznesowe |
| **Analyst** | Business Analyst | Analiza wymagań, procesy biznesowe |
| **Architect** | System Architect | Architektura systemu, decyzje techniczne |
| **Design Architect** | UX/UI Designer | Design interfejsów, doświadczenie użytkownika |

## 🤝 Współpraca z agentami

Po wygenerowaniu projektu, w folderze `.bmad/` znajdziesz:

- **`[agent]-persona.md`** - opis roli, kompetencji i zadań wybranego agenta
- **`instructions.md`** - instrukcje pracy z metodologią BMAD
- **`docs/project-brief.md`** - szablon brief'u projektu do wypełnienia

## 🔧 Komendy npm

```bash
npm run dev       # Uruchom serwer deweloperski
npm run build     # Zbuduj wersję produkcyjną
npm run preview   # Podgląd wersji produkcyjnej
```

## 📝 Rozwój panelu

Panel jest częścią większego ekosystemu BMAD-METHOD. Aby rozwijać panel:

1. Śledź zmiany w głównym repozytorium
2. Aktualizuj persony agentów zgodnie z najnowszymi wzorcami
3. Rozszerzaj wsparcie dla nowych technologii
4. Dodawaj nowe szablony dokumentów

## 🐛 Znane ograniczenia

- Brak automatycznej inicjalizacji git (ograniczenia przeglądarki)
- Persona agenta generowana jako szablon (planowana integracja z rzeczywistymi plikami)
- Ograniczone wsparcie dla technologii innych niż React

## 🚀 Roadmapa

- [ ] Integracja z rzeczywistymi plikami person z `bmad-agent/personas/`
- [ ] Wsparcie dla większej liczby frameworków
- [ ] Szablony dla różnych typów projektów
- [ ] Testy automatyczne
- [ ] Tryb offline

---

**BMAD-METHOD** - Metodologia zwinnego rozwoju wspomaganego przez AI  
Więcej informacji: [BMAD-METHOD Repository](https://github.com/your-org/BMAD-METHOD)
