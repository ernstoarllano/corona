import Card from './Card'

const Confirmed = ({ data }) => {
  const { confirmed } = data

  return (
    <Card>
      <p>Confirmed: {confirmed.value.toLocaleString()}</p>
    </Card>
  )
}

export default Confirmed
