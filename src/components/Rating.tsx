import fullStarIcon from '../assets/icons/full-star.svg'
import emptyStarIcon from '../assets/icons/empty-star.svg'

type Props = {
  rating: string
}

const Star = ({ filled }: { filled: boolean }) => {
  return filled ? (
    <img className="star star--full" src={fullStarIcon} alt="étoile pleine" />
  ) : (
    <img className="star star--empty" src={emptyStarIcon} alt="étoile vide" />
  )
}

const Rating = ({ rating }: Props) => {
  const intRating = parseInt(rating)
  let stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(<Star key={i} filled={i < intRating} />)
  }
  return <div className="rating">{stars}</div>
}

export default Rating
