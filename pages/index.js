import Layout from '../components/Layout'
import CountrySelector from '../components/CountrySelector'
import Stats from '../components/Stats'

const Index = () => {
  return (
    <Layout>
      <h2>Worldwide Stats</h2>
      <Stats />
      <CountrySelector />
    </Layout>
  )
}

export default Index
