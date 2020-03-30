import { AppContext } from '../context/Context'
import Hero from '../components/Hero/Hero'
import SeperatorUp from '../components/Global/SeperatorUp'
import SeperatorDown from '../components/Global/SeperatorDown'
import WorldwideStats from '../components/Stats/WorldwideStats'
import CountryStats from '../components/Stats/CountryStats'
import Prevention from '../components/Prevention/Prevention'

const Index = () => {
  return (
    <AppContext.Consumer>
      {({ state: { country } }) => (
        <>
          <Hero />
          <WorldwideStats />
          <SeperatorUp fill="#f9345e" />
          <CountryStats country={country} />
          <SeperatorDown fill="#f9345e" />
          <Prevention />
        </>
      )}
    </AppContext.Consumer>
  )
}

export default Index
