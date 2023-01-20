import { FunctionComponent } from 'react'

type Props = {
  imageUrl: string
  title?: string
  version?: 'home-page' | 'about-page'
}

const Banner: FunctionComponent<Props> = ({
  imageUrl,
  title,
  version = 'home-page',
}) => {
  return (
    <div
      className={`banner ${
        version === 'home-page' ? 'banner--home-page' : ''
      } ${version === 'about-page' ? 'banner--about-page' : ''}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="banner__overlay"></div>
      {title && <h2 className="banner__title">{title}</h2>}
    </div>
  )
}

export default Banner
