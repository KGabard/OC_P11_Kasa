import { useNavigate, useParams } from 'react-router-dom'
import Carousel from '../components/Carousel'
import useHousingData from '../scripts/hooks/useHousingData'

const Housing = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { getCurrentHousingData } = useHousingData()
  const currentHousing = getCurrentHousingData(id)
  if (!currentHousing) navigate('/')

  return <>{currentHousing && <Carousel images={currentHousing?.pictures} />}</>
}

export default Housing
