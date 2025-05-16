import { createContext, useState, type ReactNode } from 'react'

interface SearchContextType {
  search: string
  setSearch: (value: string) => void
}

export const SearchContext = createContext<SearchContextType>({
  search: '',
  setSearch: () => { }
})

interface SearchProviderProps {
  children: ReactNode
}

export function SearchProvider({ children }: SearchProviderProps) {
  const [search, setSearch] = useState('')
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
} 