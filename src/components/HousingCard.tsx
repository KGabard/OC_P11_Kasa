import { FunctionComponent } from 'react'
import { Link } from 'react-router-dom'

type Props = {
  imageUrl: string
  title: string
  id: string
}

const HousingCard: FunctionComponent<Props> = ({ imageUrl, title, id }) => {
  return (
    <div
      className="housing-card"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <Link to={`/housing/${id}`} className='housing-card__link'></Link>
      <div className="housing-card__overlay"></div>
      {title && <h2 className="housing-card__title">{title}</h2>}
    </div>
  )
}

export default HousingCard
