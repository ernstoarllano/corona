import styled from 'styled-components'
import Heart from '../Icons/Heart'

const FooterContainer = styled.footer`
  display: grid;
  place-items: center;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.confirmed};

  p {
    display: inline-flex;
    align-items: center;
  }
`

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        Made with <Heart width={20} height={20} />
      </p>
    </FooterContainer>
  )
}

export default Footer
