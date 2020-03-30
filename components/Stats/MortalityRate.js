import Card from '../Card/Card'

const MortalityRate = ({ data: { cases, deaths } }) => {
  return (
    <Card width={33.3333333333} color="deaths">
      <p>Mortality Rate</p>
      <span>{parseFloat((deaths / cases) * 100).toFixed(2)}%</span>
    </Card>
  )
}

export default MortalityRate
