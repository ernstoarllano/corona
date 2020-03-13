const RecoveryRate = ({ data }) => {
  const { confirmed, recovered } = data
  const rate = parseFloat((recovered.value / confirmed.value) * 100).toFixed(2)

  return <p>Recovery Rate: {rate}%</p>
}

export default RecoveryRate
