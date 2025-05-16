import { useContext } from "react";
import { SearchContext } from "@/context/SearchContext";
import { cardData } from "@/data/cards";
import { Card } from "@/components/Cards/Card";

export function Cards() {
  const { search } = useContext(SearchContext);

  function getFilteredCards() {
    return cardData
      .filter(card => card.title.toLowerCase().includes(search.toLowerCase()))
  }

  return (
    getFilteredCards().length < 1 ? (
      <div className="no-results">
        <h2>No results found</h2>
      </div>
    ) : (
      <div className="card-grid">
        {getFilteredCards().map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    )
  )
}