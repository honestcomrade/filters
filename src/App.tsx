import { Search } from '@/components/Search/Search'
import { SearchProvider } from '@/context/SearchContext'
import { Cards } from '@/components/Cards/Cards'
import './App.css'

export function App() {
  return (
    <SearchProvider>
      <div className="container">
        <h1>Card List</h1>
        <Search />
        <div className="card-grid">
          <Cards />
        </div>
      </div>
    </SearchProvider>
  )
}
