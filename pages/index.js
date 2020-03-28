import Layout from '../components/Layout'
import Stats from '../components/Stats'
import CountryOverview from '../components/CountryOverview'

const Index = () => {
  return (
    <Layout>
      <h1>COVID-19</h1>
      <Stats />
      <CountryOverview />
    </Layout>
  )
}

export default Index
