import type { Card as CardType } from '@/types/Card'

export function Card({ title, description, imageUrl }: CardType) {
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
