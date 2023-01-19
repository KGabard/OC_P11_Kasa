import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Accordion from '../components/Accordion'
import HousingHeader from '../layouts/HousingHeader'
import useHousingData from '../scripts/hooks/useHousingData'

const Housing = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getCurrentHousingData } = useHousingData()
  const currentHousing = getCurrentHousingData(id)

  useEffect(() => {
    if (!currentHousing) {
      navigate('/')
    }
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      {currentHousing && (
        <>
          <Carousel images={currentHousing?.pictures} />
          <HousingHeader
            title={currentHousing.title}
            location={currentHousing.location}
            host={currentHousing.host}
            tags={currentHousing.tags}
            rating={currentHousing.rating}
          />
          <div className="housing-infos">
            <Accordion
              title={'Description'}
              description={currentHousing.description}
              version={'housing-page'}
            />
          </div>
        </>
      )}
    </>
  )
}

export default Housing
