const DeathRate = ({ data }) => {
  const { confirmed, deaths } = data
  const rate = parseFloat((deaths.value / confirmed.value) * 100).toFixed(2)

  return <p>Mortality Rate: {rate}%</p>
}

export default DeathRate
