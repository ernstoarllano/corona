import Layout from '../components/Layout'
import Hero from '../components/Hero'
import Stats from '../components/Stats'
import CountryOverview from '../components/CountryOverview'
import Prevention from '../components/Prevention'

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Prevention />
      <Stats />
      <CountryOverview />
    </Layout>
  )
}

export default Index
