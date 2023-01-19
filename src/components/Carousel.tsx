import { FunctionComponent, useState } from 'react'

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

  console.log(images)

  const handlePreviousClick = () => {
    if (isSliding !== 'none') return
    setIsSliding('left')

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
    setIsSliding('right')

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
        className="carousel__buttons carousel__buttons--previous"
        onClick={handlePreviousClick}
      >
        &lt;
      </button>
      <img
        src={images[nextImageIndex]}
        className={`carousel__image carousel__image--next 
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
        src={images[previousImageIndex]}
        className={`carousel__image carousel__image--previous 
        ${isSliding === 'right' ? 'slide-right' : ''}
        ${isSliding === 'left' ? 'slide-left' : ''}`}
        alt="Présentation du logmement"
      />
      <button
        className="carousel__buttons carousel__buttons--next"
        onClick={handleNextClick}
      >
        &gt;
      </button>
    </div>
  )
}

export default Carousel
