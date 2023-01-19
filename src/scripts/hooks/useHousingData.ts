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

    const filteredHousingArray = housingArray.filter(
      (housing) => housing.id === currentId
    )

    if (filteredHousingArray.length === 0) return undefined

    return housingArray.filter((housing) => housing.id === currentId)[0]
  }

  return { getHousingData, getCurrentHousingData }
}

export default useHousingData
