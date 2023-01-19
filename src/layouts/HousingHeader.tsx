import Tag from '../components/Tag'
import Host from '../components/Host'
import { HostDataType } from '../scripts/types/Types'
import Rating from '../components/Rating'

type Props = {
  title: string
  location: string
  host: HostDataType
  tags: string[]
  rating: string
}

const HousingHeader = ({ title, location, host, tags, rating }: Props) => {
  return (
    <div className="housing-header">
      <div className="housing-header__title-container">
        <h1 className="housing-header__title-container__title">{title}</h1>
        <p className="housing-header__title-container__location">{location}</p>
      </div>
      <div className="housing-header__infos-container">
        <Host host={host} />
        <Rating rating={rating} />
      </div>
      <div className="housing-header__tags-list">
        <ul className="housing-header__tags-list__list">
          {tags.length > 0 &&
            tags.map((tag) => {
              return (
                <li key={tag} className="housing-header__tags-list__list__item">
                  <Tag label={tag} />
                </li>
              )
            })}
        </ul>
      </div>
    </div>
  )
}

export default HousingHeader
