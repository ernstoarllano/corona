const Deaths = ({ data }) => {
  const { deaths } = data

  return (
    <div>
      <p>Deaths: {deaths.value}</p>
    </div>
  )
}

export default Deaths
