import Card from './Card'

const DeathRate = ({ data }) => {
  const { confirmed, deaths } = data
  const rate = parseFloat((deaths.value / confirmed.value) * 100).toFixed(2)

  return (
    <Card>
      <p>Mortality Rate: {rate}%</p>
    </Card>
  )
}

export default DeathRate
