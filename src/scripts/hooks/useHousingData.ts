import HousingDataFile from '../../data/logements.json'
import { HousingDataType } from '../types/Types'

const useHousingData = () => {
  const getHousingData: () => HousingDataType[] = () => {
    return HousingDataFile ? HousingDataFile : []
  }

  const getCurrentHousingData: (
    currentId: string | undefined
  ) => HousingDataType | undefined = (currentId) => {
    const housingArray = getHousingData()

    return housingArray.find((housing) => housing.id === currentId)
  }

  return { getHousingData, getCurrentHousingData }
}

export default useHousingData
