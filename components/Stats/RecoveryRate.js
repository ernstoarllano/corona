import Card from '../Card/Card'

const RecoveryRate = ({ data: { cases, recovered } }) => {
  return (
    <Card width={33.3333333333} color="recovered">
      <p>Recovery Rate</p>
      <span>{parseFloat((recovered / cases) * 100).toFixed(2)}%</span>
    </Card>
  )
}

export default RecoveryRate
