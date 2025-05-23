import { useState } from 'react'
import JSZip from 'jszip'

interface ProjectConfig {
  agent: string
  projectName: string
  description: string
  frontend: string
  backend: string
}

function App() {
  const [currentStep, setCurrentStep] = useState(1)
  const [projectConfig, setProjectConfig] = useState<ProjectConfig>({
    agent: '',
    projectName: '',
    description: '',
    frontend: 'React + TypeScript',
    backend: 'Node.js + Express'
  })

  const steps = [
    { id: 1, title: 'Wybór Agenta', description: 'Wybierz rolę i agenta BMAD' },
    { id: 2, title: 'Opis Projektu', description: 'Opisz swój projekt i wybierz technologie' },
    { id: 3, title: 'Konfiguracja', description: 'Ustaw strukturę i parametry projektu' },
    { id: 4, title: 'Generowanie', description: 'Wygeneruj projekt i pobierz ZIP' }
  ]

  const agents = [
    { id: 'dev', name: 'Dev', description: 'Agent deweloperski do implementacji kodu' },
    { id: 'sm', name: 'SM', description: 'Scrum Master do zarządzania procesami agile' },
    { id: 'pm', name: 'PM', description: 'Project Manager do koordynacji projektu' },
    { id: 'po', name: 'PO', description: 'Product Owner do zarządzania produktem' },
    { id: 'analyst', name: 'Analyst', description: 'Analityk do analizy wymagań i procesów' },
    { id: 'architect', name: 'Architect', description: 'Architekt do projektowania systemu' },
    { id: 'design-architect', name: 'Design Architect', description: 'Architekt designu UX/UI' }
  ]

  const generateProjectStructure = async (): Promise<JSZip> => {
    const zip = new JSZip()
    
    // Folder główny projektu
    const projectFolder = zip.folder(projectConfig.projectName || 'bmad-project')
    
    if (!projectFolder) throw new Error('Nie można utworzyć folderu projektu')

    // README.md
    projectFolder.file('README.md', generateReadme())
    
    // package.json (jeśli frontend to React/Vue/Angular)
    if (projectConfig.frontend.includes('React') || projectConfig.frontend.includes('Vue') || projectConfig.frontend.includes('Angular')) {
      projectFolder.file('package.json', generatePackageJson())
    }

    // .gitignore
    projectFolder.file('.gitignore', generateGitignore())

    // Struktura katalogów
    if (projectConfig.frontend.includes('React')) {
      const srcFolder = projectFolder.folder('src')
      srcFolder?.file('App.tsx', generateReactApp())
      srcFolder?.file('main.tsx', generateReactMain())
      srcFolder?.file('index.css', generateBasicCSS())
      
      projectFolder.file('index.html', generateIndexHtml())
      projectFolder.file('vite.config.ts', generateViteConfig())
      projectFolder.file('tsconfig.json', generateTsConfig())
    }

    // Dokumentacja BMAD
    const docsFolder = projectFolder.folder('docs')
    docsFolder?.file('project-brief.md', generateProjectBrief())
    
    // Persona wybranego agenta
    const bmadFolder = projectFolder.folder('.bmad')
    bmadFolder?.file(`${projectConfig.agent}-persona.md`, await fetchAgentPersona(projectConfig.agent))
    
    // Instrukcje BMAD
    bmadFolder?.file('instructions.md', generateBmadInstructions())

    return zip
  }

  const generateReadme = (): string => {
    return `# ${projectConfig.projectName}

${projectConfig.description}

## Technologie

- **Frontend:** ${projectConfig.frontend}
- **Backend:** ${projectConfig.backend}
- **Agent BMAD:** ${projectConfig.agent}

## Pierwsze kroki

1. Zainstaluj zależności:
   \`\`\`bash
   npm install
   \`\`\`

2. Uruchom projekt:
   \`\`\`bash
   npm run dev
   \`\`\`

3. Rozpocznij pracę z agentem BMAD:
   - Sprawdź plik \`.bmad/${projectConfig.agent}-persona.md\`
   - Przeczytaj instrukcje w \`.bmad/instructions.md\`
   - Wykorzystaj dokumentację w folderze \`docs/\`

## Struktura projektu

Projekt został wygenerowany z wykorzystaniem metodologii BMAD (AI-driven agile development).

## Dalsze kroki

1. Zainicjuj repozytorium Git: \`git init\`
2. Dodaj pliki: \`git add .\`
3. Pierwszy commit: \`git commit -m "Initial commit with BMAD structure"\`
4. Skonfiguruj remote repository
5. Rozpocznij pracę z wybranym agentem BMAD
`
  }

  const generatePackageJson = (): string => {
    const dependencies: Record<string, string> = {}
    const devDependencies: Record<string, string> = {}

    if (projectConfig.frontend.includes('React')) {
      dependencies.react = '^18.2.0'
      dependencies['react-dom'] = '^18.2.0'
      devDependencies['@types/react'] = '^18.2.15'
      devDependencies['@types/react-dom'] = '^18.2.7'
      devDependencies['@vitejs/plugin-react'] = '^4.0.3'
      devDependencies.vite = '^4.4.5'
      devDependencies.typescript = '^5.0.2'
    }

    return JSON.stringify({
      name: projectConfig.projectName,
      version: '0.1.0',
      type: 'module',
      scripts: {
        dev: 'vite',
        build: 'tsc && vite build',
        preview: 'vite preview'
      },
      dependencies,
      devDependencies
    }, null, 2)
  }

  const generateGitignore = (): string => {
    return `# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/

# Environment
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo

# OS
.DS_Store
Thumbs.db

# Logs
logs/
*.log

# Runtime data
pids/
*.pid
*.seed
*.pid.lock
`
  }

  const generateReactApp = (): string => {
    return `function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          ${projectConfig.projectName}
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          ${projectConfig.description}
        </p>
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold mb-4">Projekt BMAD</h2>
          <p className="text-gray-600">
            Ten projekt został wygenerowany z wykorzystaniem metodologii BMAD.
            Sprawdź folder <code>.bmad/</code> aby rozpocząć pracę z agentem <strong>${projectConfig.agent}</strong>.
          </p>
        </div>
      </div>
    </div>
  )
}

export default App`
  }

  const generateReactMain = (): string => {
    return `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`
  }

  const generateBasicCSS = (): string => {
    return `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`
  }

  const generateIndexHtml = (): string => {
    return `<!DOCTYPE html>
<html lang="pl">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${projectConfig.projectName}</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`
  }

  const generateViteConfig = (): string => {
    return `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`
  }

  const generateTsConfig = (): string => {
    return JSON.stringify({
      compilerOptions: {
        target: 'ES2020',
        useDefineForClassFields: true,
        lib: ['ES2020', 'DOM', 'DOM.Iterable'],
        module: 'ESNext',
        skipLibCheck: true,
        moduleResolution: 'bundler',
        allowImportingTsExtensions: true,
        resolveJsonModule: true,
        isolatedModules: true,
        noEmit: true,
        jsx: 'react-jsx',
        strict: true,
        noUnusedLocals: true,
        noUnusedParameters: true,
        noFallthroughCasesInSwitch: true
      },
      include: ['src'],
      references: [{ path: './tsconfig.node.json' }]
    }, null, 2)
  }

  const generateProjectBrief = (): string => {
    return `# Project Brief: ${projectConfig.projectName}

## Opis projektu
${projectConfig.description}

## Technologie
- **Frontend:** ${projectConfig.frontend}
- **Backend:** ${projectConfig.backend}

## Agent BMAD
**Wybrany agent:** ${projectConfig.agent}

## Cele projektu
[Tu opisz główne cele i założenia projektu]

## Zakres funkcjonalności
[Tu opisz główne funkcje, które ma realizować aplikacja]

## Kryteria sukcesu
[Tu zdefiniuj mierzalne kryteria sukcesu projektu]

## Timeline
[Tu określ główne milestones i terminy]

---
*Dokument wygenerowany przez BMAD Starter Panel*
`
  }

  const fetchAgentPersona = async (agentId: string): Promise<string> => {
    // W rzeczywistej implementacji, tutaj pobierałbym plik z bmad-agent/personas/
    // Na razie zwracam placeholder
    return `# Persona Agenta: ${agentId.toUpperCase()}

## Rola
Agent ${agentId} w metodologii BMAD

## Kompetencje
[Opis kompetencji agenta]

## Zadania
[Lista głównych zadań agenta]

## Instrukcje
[Szczegółowe instrukcje pracy z agentem]

---
*Plik personas/${agentId}.md z repozytorium BMAD-METHOD*
`
  }

  const generateBmadInstructions = (): string => {
    return `# Instrukcje pracy z BMAD

## Rozpoczęcie pracy

1. **Przeczytaj personę agenta**
   - Sprawdź plik \`${projectConfig.agent}-persona.md\`
   - Zrozum rolę i kompetencje wybranego agenta

2. **Skonfiguruj środowisko**
   - Zainstaluj zależności: \`npm install\`
   - Uruchom projekt: \`npm run dev\`

3. **Rozpocznij współpracę z agentem**
   - Użyj persona agenta w prompt engineering
   - Wykorzystaj szablony dokumentów z folderu \`docs/\`

## Metodologia BMAD

BMAD (Business Methodology for Agile Development) to podejście łączące:
- Agile/Scrum practices
- AI-assisted development
- Structured documentation
- Role-based collaboration

## Dalsze kroki

1. Zainicjuj git repository
2. Zaplanuj pierwszy sprint
3. Rozpocznij pracę z wybranym agentem BMAD
4. Wykorzystaj checklisty i szablony z repozytorium BMAD-METHOD

---
*Więcej informacji: https://github.com/your-org/BMAD-METHOD*
`
  }

  const handleDownloadProject = async () => {
    if (!projectConfig.projectName.trim()) {
      alert('Proszę podać nazwę projektu')
      return
    }

    try {
      const zip = await generateProjectStructure()
      const blob = await zip.generateAsync({ type: 'blob' })
      
      // Utwórz link do pobrania
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${projectConfig.projectName}.zip`
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Błąd podczas generowania projektu:', error)
      alert('Wystąpił błąd podczas generowania projektu')
    }
  }

  const isStepValid = (step: number): boolean => {
    switch (step) {
      case 1: return !!projectConfig.agent
      case 2: return !!projectConfig.projectName.trim() && !!projectConfig.description.trim()
      case 3: return true // Zawsze valid, ma domyślne wartości
      case 4: return true
      default: return false
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            BMAD Starter Panel
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Narzędzie do szybkiego rozpoczęcia projektów z metodologią BMAD. 
            Wybierz agenta, opisz projekt i wygeneruj gotową strukturę.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium ${
                  step.id <= currentStep 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-200 text-gray-400'
                }`}>
                  {step.id}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    step.id <= currentStep ? 'text-blue-600' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 mx-4 ${
                    step.id < currentStep ? 'bg-blue-600' : 'bg-gray-200'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sm:p-8">
          {currentStep === 1 && (
            <AgentSelectionStep 
              agents={agents}
              selectedAgent={projectConfig.agent}
              onSelectAgent={(agent) => setProjectConfig(prev => ({ ...prev, agent }))}
            />
          )}
          {currentStep === 2 && (
            <ProjectDescriptionStep 
              projectConfig={projectConfig}
              onUpdateConfig={setProjectConfig}
            />
          )}
          {currentStep === 3 && (
            <ConfigurationStep 
              projectConfig={projectConfig}
              onUpdateConfig={setProjectConfig}
            />
          )}
          {currentStep === 4 && (
            <GenerationStep 
              projectConfig={projectConfig}
              onDownload={handleDownloadProject}
            />
          )}

          {/* Navigation */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
              disabled={currentStep === 1}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Poprzedni
            </button>
            <button
              onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
              disabled={currentStep === 4 || !isStepValid(currentStep)}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Następny
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Updated step components with props
interface AgentSelectionStepProps {
  agents: Array<{ id: string; name: string; description: string }>
  selectedAgent: string
  onSelectAgent: (agent: string) => void
}

function AgentSelectionStep({ agents, selectedAgent, onSelectAgent }: AgentSelectionStepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Wybór Agenta BMAD</h2>
      <p className="text-gray-600 mb-6">Wybierz rolę i agenta, który będzie wspierał Twój projekt.</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {agents.map((agent) => (
          <div 
            key={agent.id} 
            onClick={() => onSelectAgent(agent.id)}
            className={`border rounded-lg p-4 cursor-pointer transition-all duration-200 relative select-none \
              ${selectedAgent === agent.id 
                ? 'border-2 border-blue-600 bg-blue-100 ring-2 ring-blue-500 shadow-lg' 
                : 'border border-gray-200 hover:border-blue-400 hover:bg-blue-50'}
            `}
            style={{ minHeight: 100 }}
          >
            {selectedAgent === agent.id && (
              <span className="absolute top-2 right-2 bg-blue-600 text-white rounded-full p-1 shadow-md flex items-center justify-center" style={{ width: 28, height: 28 }}>
                <svg width="16" height="16" fill="none" viewBox="0 0 16 16"><path d="M4 8.5l3 3 5-5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
            )}
            <h3 className="font-medium text-gray-900">{agent.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{agent.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

interface ProjectDescriptionStepProps {
  projectConfig: ProjectConfig
  onUpdateConfig: (config: ProjectConfig) => void
}

function ProjectDescriptionStep({ projectConfig, onUpdateConfig }: ProjectDescriptionStepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Opis Projektu</h2>
      <p className="text-gray-600 mb-6">Opisz swój projekt i jego główne założenia.</p>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nazwa projektu</label>
          <input 
            type="text"
            value={projectConfig.projectName}
            onChange={(e) => onUpdateConfig({ ...projectConfig, projectName: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="np. moja-aplikacja-web"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Opis projektu</label>
          <textarea 
            rows={4}
            value={projectConfig.description}
            onChange={(e) => onUpdateConfig({ ...projectConfig, description: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Opisz cel i funkcjonalność swojego projektu..."
          />
        </div>
      </div>
    </div>
  )
}

interface ConfigurationStepProps {
  projectConfig: ProjectConfig
  onUpdateConfig: (config: ProjectConfig) => void
}

function ConfigurationStep({ projectConfig, onUpdateConfig }: ConfigurationStepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Konfiguracja Projektu</h2>
      <p className="text-gray-600 mb-6">Wybierz technologie i ustaw strukturę projektu.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Frontend</label>
          <select 
            value={projectConfig.frontend}
            onChange={(e) => onUpdateConfig({ ...projectConfig, frontend: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>React + TypeScript</option>
            <option>Vue + TypeScript</option>
            <option>Angular</option>
            <option>Vanilla JS</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Backend</label>
          <select 
            value={projectConfig.backend}
            onChange={(e) => onUpdateConfig({ ...projectConfig, backend: e.target.value })}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option>Node.js + Express</option>
            <option>Python + FastAPI</option>
            <option>Java + Spring</option>
            <option>PHP + Laravel</option>
          </select>
        </div>
      </div>
    </div>
  )
}

interface GenerationStepProps {
  projectConfig: ProjectConfig
  onDownload: () => void
}

function GenerationStep({ projectConfig, onDownload }: GenerationStepProps) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Generowanie Projektu</h2>
      <p className="text-gray-600 mb-6">Gotowy do wygenerowania struktury projektu i pobrania plików.</p>
      
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h3 className="font-medium text-gray-900 mb-2">Podsumowanie konfiguracji:</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li><strong>Agent:</strong> {projectConfig.agent}</li>
          <li><strong>Nazwa:</strong> {projectConfig.projectName}</li>
          <li><strong>Frontend:</strong> {projectConfig.frontend}</li>
          <li><strong>Backend:</strong> {projectConfig.backend}</li>
        </ul>
      </div>
      
      <div className="text-center">
        <button 
          onClick={onDownload}
          className="px-6 py-3 text-white bg-green-600 rounded-lg hover:bg-green-700 font-medium"
        >
          🚀 Wygeneruj i Pobierz ZIP
        </button>
        
        <div className="mt-6 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-medium text-blue-900 mb-2">Następne kroki:</h3>
          <ol className="text-sm text-blue-800 text-left space-y-1">
            <li>1. Rozpakuj pobrany plik ZIP</li>
            <li>2. Przejdź do katalogu projektu</li>
            <li>3. Wykonaj: <code className="bg-blue-100 px-1 rounded">git init</code></li>
            <li>4. Zainstaluj zależności: <code className="bg-blue-100 px-1 rounded">npm install</code></li>
            <li>5. Rozpocznij pracę z wybranym agentem BMAD</li>
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App
