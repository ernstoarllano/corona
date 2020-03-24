import Card from './Card'

const RecoveryRate = ({ data }) => {
  const { confirmed, recovered } = data
  const rate = parseFloat((recovered.value / confirmed.value) * 100).toFixed(2)

  return (
    <Card>
      <p>Recovery Rate: {rate}%</p>
    </Card>
  )
}

export default RecoveryRate
