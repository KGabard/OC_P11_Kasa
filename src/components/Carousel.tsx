import { FunctionComponent, useState } from 'react'
import chevronIcon from '../assets/icons/chevron-up.svg'

type Props = {
  images: string[]
}

type slideType = 'none' | 'right' | 'left'

const Carousel: FunctionComponent<Props> = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [previousImageIndex, setPreviousImageIndex] = useState(
    images.length - 1
  )
  const [nextImageIndex, setNextImageIndex] = useState(
    images.length < 2 ? 0 : 1
  )
  const [isSliding, setIsSliding] = useState<slideType>('none')

  const handlePreviousClick = () => {
    if (isSliding !== 'none') return
    setIsSliding('right')

    setTimeout(() => {
      setNextImageIndex(currentImageIndex)
      setCurrentImageIndex(previousImageIndex)
      let tempIndex = previousImageIndex - 1
      if (tempIndex < 0) tempIndex = images.length - 1
      setPreviousImageIndex(tempIndex)
      setIsSliding('none')
    }, 400)
  }

  const handleNextClick = () => {
    if (isSliding !== 'none') return
    setIsSliding('left')

    setTimeout(() => {
      setPreviousImageIndex(currentImageIndex)
      setCurrentImageIndex(nextImageIndex)
      let tempIndex = nextImageIndex + 1
      if (tempIndex >= images.length) tempIndex = 0
      setNextImageIndex(tempIndex)
      setIsSliding('none')
    }, 400)
  }

  return (
    <div className="carousel">
      <button
        className={`carousel__buttons carousel__buttons--previous ${
          images.length < 2 ? 'hide' : ''
        }`}
        onClick={handlePreviousClick}
      >
        <img className="chevron-icon" src={chevronIcon} alt="chevron" />
      </button>
      <img
        src={images[previousImageIndex]}
        className={`carousel__image carousel__image--previous
        ${isSliding === 'right' ? 'slide-right' : ''}
        ${isSliding === 'left' ? 'slide-left' : ''}`}
        alt="Présentation du logmement"
      />
      <img
        src={images[currentImageIndex]}
        className={`carousel__image carousel__image--current 
        ${isSliding === 'right' ? 'slide-right' : ''}
        ${isSliding === 'left' ? 'slide-left' : ''}`}
        alt="Présentation du logmement"
      />
      <img
        src={images[nextImageIndex]}
        className={`carousel__image carousel__image--next 
        ${isSliding === 'right' ? 'slide-right' : ''}
        ${isSliding === 'left' ? 'slide-left' : ''}`}
        alt="Présentation du logmement"
      />
      <button
        className={`carousel__buttons carousel__buttons--next ${
          images.length < 2 ? 'hide' : ''
        }`}
        onClick={handleNextClick}
      >
        <img className="chevron-icon" src={chevronIcon} alt="chevron" />
      </button>
      <div
        className={`carousel__bullet-points ${images.length < 2 ? 'hide' : ''}`}
      >
        <ul className="carousel__bullet-points__list">
          {images.map((image, imageIndex) => {
            return (
              <li
                key={imageIndex}
                className={`carousel__bullet-points__list__item ${
                  imageIndex === currentImageIndex
                    ? 'carousel__bullet-points__list__item--active'
                    : ''
                } ${
                  imageIndex === currentImageIndex && isSliding === 'right'
                    ? 'slide-left'
                    : ''
                } ${
                  imageIndex === currentImageIndex && isSliding === 'left'
                    ? 'slide-right'
                    : ''
                }`}
              ></li>
            )
          })}
          {/* <li
            className={`carousel__bullet-points__list__item--active`}
          ></li> */}
        </ul>
      </div>
    </div>
  )
}

export default Carousel
