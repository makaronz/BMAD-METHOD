import React from 'react'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-blue-700 mb-2">BMAD Starter Web</h1>
        <p className="text-gray-600">Panel startowy do szybkiego rozpoczęcia pracy z metodą BMAD</p>
      </header>
      <main className="w-full max-w-md bg-white rounded-xl shadow p-6">
        {/* Krok 1: Wybór agenta */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">1. Wybierz agenta</h2>
          <div className="text-gray-500">(Lista agentów pojawi się tutaj)</div>
        </div>
        {/* Krok 2: Opis projektu */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">2. Opisz swój projekt</h2>
          <div className="text-gray-500">(Pole tekstowe na opis projektu)</div>
        </div>
        {/* Krok 3: Propozycja technologii */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">3. Propozycja technologii</h2>
          <div className="text-gray-500">(Sugestia języka i frameworka)</div>
        </div>
        {/* Krok 4: Podsumowanie i generowanie projektu */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">4. Podsumowanie</h2>
          <div className="text-gray-500">(Podsumowanie wyborów i przycisk generowania projektu)</div>
        </div>
        {/* Krok 5: Instrukcja git */}
        <div>
          <h2 className="text-xl font-semibold mb-2">5. Instrukcja git</h2>
          <div className="text-gray-500">(Polecenia do inicjalizacji repozytorium git)</div>
        </div>
      </main>
      <footer className="mt-8 text-xs text-gray-400">BMAD-METHOD &copy; 2025</footer>
    </div>
  )
} 