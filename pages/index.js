import Head from 'next/head'
import { AppContext } from '../context/Context'
import Hero from '../components/Hero/Hero'
import SeperatorUp from '../components/Global/SeperatorUp'
import SeperatorDown from '../components/Global/SeperatorDown'
import WorldwideStats from '../components/Stats/WorldwideStats'
import CountryStats from '../components/Stats/CountryStats'
import Prevention from '../components/Prevention/Prevention'
import Footer from '../components/Footer/Footer'

const Index = () => {
  return (
    <>
      <Head>
        <title>COVID-19 Tracker</title>
      </Head>
      <AppContext.Consumer>
        {({ state: { country, countryState } }) => (
          <>
            <Hero />
            <WorldwideStats />
            <SeperatorUp fill="#f9345e" />
            <CountryStats country={country} countryState={countryState} />
            <SeperatorDown fill="#f9345e" />
            <Prevention />
            <SeperatorUp fill="#f9345e" />
            <Footer />
          </>
        )}
      </AppContext.Consumer>
    </>
  )
}

export default Index
