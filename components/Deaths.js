import Card from './Card'

const Deaths = ({ data }) => {
  const { deaths } = data

  return (
    <Card>
      <p>Deaths: {deaths.value.toLocaleString()}</p>
    </Card>
  )
}

export default Deaths
