import { useRef, useState } from 'react'
import chevronIcon from '../assets/icons/chevron-up.svg'

type Props = {
  title: string
  content: string | string[]
  version?: 'housing-page' | 'about-page'
  open?: boolean
}

function Accordion({
  title,
  content,
  version = 'housing-page',
  open = false,
}: Props) {
  const [isOpen, setIsOpen] = useState(open)
  const [isOpening, setIsOpening] = useState(false)
  const contentRef = useRef<HTMLDivElement | null>(null);
  let text: string

  if (Array.isArray(content)) {
    text = content.join('\n')
  } else {
    text = content
  }

  const handleToggleDescription = () => {
    if (isOpening) return
    if (!isOpen) contentRef.current?.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"})
    setIsOpening(true)
    setIsOpen(!isOpen)
    setTimeout(() => {
      setIsOpening(false)
    }, 250)
  }

  return (
    <div className="accordion">
      <div className="accordion__header" onClick={handleToggleDescription}>
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
        />
      </div>
      <div
        ref={contentRef}
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
            style={Array.isArray(content) ? { whiteSpace: 'break-spaces' } : {}}
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Accordion
