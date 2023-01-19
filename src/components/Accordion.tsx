import { useState } from 'react'
import chevronIcon from '../assets/icons/chevron-up.svg'

type Props = {
  title: string
  description: string
  version?: 'housing-page' | 'about-page'
}

function Accordion({ title, description, version = 'housing-page' }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpening, setIsOpening] = useState(false)

  console.log(version)

  const handleToggleDescription = () => {
    if (isOpening) return
    setIsOpening(true)
    setIsOpen(!isOpen)
    setTimeout(() => {
      setIsOpening(false)
    }, 250)
  }

  return (
    <div className="accordion">
      <div className="accordion__header">
        <h2
          className={`accordion__title ${
            version === 'housing-page' ? 'accordion__title--housing-page' : ''
          } ${version === 'about-page' ? 'accordion__title--about-page' : ''}`}
        >
          {title}
        </h2>
        <img
          className={`accordion__chevron ${
            isOpen ? 'accordion__chevron--open' : ''
          }`}
          src={chevronIcon}
          alt="chevron"
          onClick={handleToggleDescription}
        />
      </div>
      <div
        className={`accordion__description ${
          isOpen || isOpening ? 'accordion__description--open' : ''
        }`}
      >
        <div
          className={`accordion__description__slider ${
            isOpen ? 'accordion__description__slider--open' : ''
          }`}
        >
          <p
            className={`accordion__description__text ${
              version === 'housing-page'
                ? 'accordion__description__text--housing-page'
                : ''
            } ${
              version === 'about-page'
                ? 'accordion__description__text--about-page'
                : ''
            }`}
          >
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
