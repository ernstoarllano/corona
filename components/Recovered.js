import Card from './Card'

const Recovered = ({ data }) => {
  const { recovered } = data

  return (
    <Card>
      <p>Recovered: {recovered.value.toLocaleString()}</p>
    </Card>
  )
}

export default Recovered
