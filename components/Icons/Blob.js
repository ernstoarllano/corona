import styled from 'styled-components'

const SVG = styled.svg`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Blob = () => {
  return (
    <SVG viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M439 87.2c42.7 24 80.1 59.8 99.1 103.5 19 43.6 19.6 95 10.4 143.6-9.3 48.5-28.4 94.2-58.6 131.7-30.2 37.4-71.6 66.7-119.1 85.3-47.5 18.6-101.1 26.6-147 11.6-45.8-15.1-83.8-53.2-110.9-95-27.1-41.7-43.2-87.1-54.3-135.8-11.1-48.8-17.2-100.9-2.8-148.3 14.4-47.4 49.3-90.1 93.4-113.5C193.3 47 246.7 43 297.4 47.1c50.7 4 98.8 16.2 141.6 40.1z"
        fill="#64e5f9"
      />
    </SVG>
  )
}

export default Blob
