import { FunctionComponent } from 'react'

type Props = {
  imageUrl: string
  title?: string
}

const Banner: FunctionComponent<Props> = ({ imageUrl, title }) => {
  return (
    <div className="banner" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="banner__overlay"></div>
      {title && <h2 className="banner__title">{title}</h2>}
    </div>
  )
}

export default Banner
