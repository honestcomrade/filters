import { Search } from './components/Search'
import { SearchProvider } from './context/SearchContext'
import { Cards } from './components/Cards'
import './App.css'

function AppContent() {

  return (
    <div className="container">
      <h1>Card List</h1>
      <Search />
      <div className="card-grid">
        <Cards />
      </div>
    </div>
  )
}

function App() {
  return (
    <SearchProvider>
      <AppContent />
    </SearchProvider>
  )
}

export default App
