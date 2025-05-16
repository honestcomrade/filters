import type { Card } from '../types/ICard'

function CardComponent({ title, description, imageUrl }: Card) {
  return (
    <div className="card">
      <img src={imageUrl} alt={title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
    </div>
  )
}

export { CardComponent as Card }
