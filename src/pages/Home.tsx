import Banner from '../components/Banner'
import homeBanner from '../assets/images/home-banner.jpg'
import HousingCard from '../components/HousingCard'
import HousingList from '../layouts/HousingList'
import { HousingDataType } from '../scripts/types/Types'
import { useEffect, useState } from 'react'
import { HousingApi } from '../scripts/api/HousingApi'

const Home = () => {
  const [housingArray, setHousingArray] = useState<HousingDataType[]>([])
  const housingApi = new HousingApi('mockData/housings.json')

  useEffect(() => {
    async function getHousingData() {
      const fetchHousingArray = await housingApi.getHousings()
      if (fetchHousingArray) setHousingArray(fetchHousingArray)
    }
    getHousingData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Banner imageUrl={homeBanner} title="Chez vous, partout et ailleurs" />
      <HousingList>
        {housingArray.map((housing) => {
          return (
            <HousingCard
              key={housing.id}
              id={housing.id}
              title={housing.title}
              imageUrl={housing.cover}
            />
          )
        })}
      </HousingList>
    </>
  )
}

export default Home
