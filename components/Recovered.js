const Recovered = ({ data }) => {
  const { recovered } = data

  return (
    <div>
      <p>Recovered: {recovered.value}</p>
    </div>
  )
}

export default Recovered
