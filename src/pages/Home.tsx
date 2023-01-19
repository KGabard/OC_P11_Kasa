import Banner from '../components/Banner'
import homeBanner from '../assets/images/home-banner.jpg'
import HousingCard from '../components/HousingCard'
import HousingList from '../layouts/HousingList'
import useHousingData from '../scripts/hooks/useHousingData'

const Home = () => {
  const { getHousingData } = useHousingData()

  const housingData = getHousingData()

  return (
    <>
      <Banner imageUrl={homeBanner} title="Chez vous, partout et ailleurs" />
      <HousingList>
        {housingData.map((housing) => {
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
