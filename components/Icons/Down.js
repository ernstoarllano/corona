import styled from 'styled-components'

const SVGContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  margin-top: 0;
  margin-bottom: auto;
`

const Down = ({ width, height }) => {
  return (
    <SVGContainer>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width={width}
      >
        <path d="M443.5 162.6l-7.1-7.1c-4.7-4.7-12.3-4.7-17 0L224 351 28.5 155.5c-4.7-4.7-12.3-4.7-17 0l-7.1 7.1c-4.7 4.7-4.7 12.3 0 17l211 211.1c4.7 4.7 12.3 4.7 17 0l211-211.1c4.8-4.7 4.8-12.3.1-17z" />
      </svg>
    </SVGContainer>
  )
}

export default Down
