import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import Accordion from '../components/Accordion'
import HousingHeader from '../layouts/HousingHeader'
import { HousingDataType } from '../scripts/types/Types'
import { HousingApi } from '../scripts/api/HousingApi'
import Loader from '../components/Loader'

const Housing = () => {
  const { id: currentId } = useParams()
  const navigate = useNavigate()
  const [currentHousing, setCurrentHousing] = useState<
    HousingDataType | undefined
  >(undefined)
  const housingApi = new HousingApi('mockData/housings.json')

  useEffect(() => {
    async function getHousingData() {
      const fetchCurrentHousing = await housingApi.getCurrentHousing(currentId)
      if (fetchCurrentHousing) {
        setCurrentHousing(fetchCurrentHousing)
      } else {
        navigate('/not-found')
      }
    }
    getHousingData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {!currentHousing && <Loader />}
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
              content={currentHousing.description}
              version={'housing-page'}
              open={true}
            />
            <Accordion
              title={'Équipements'}
              content={currentHousing.equipments}
              version={'housing-page'}
              open={true}
            />
          </div>
        </>
      )}
    </>
  )
}

export default Housing
