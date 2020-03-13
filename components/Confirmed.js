const Confirmed = ({ data }) => {
  const { confirmed } = data

  return (
    <div>
      <p>Confirmed: {confirmed.value}</p>
    </div>
  )
}

export default Confirmed
