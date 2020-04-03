import styled from 'styled-components'

const Anchor = styled.a`
  display: inline-block;
  padding: 15px 30px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.deaths};
  border-radius: 999px;
`

const Button = ({ href, children }) => {
  return <Anchor href={href}>{children}</Anchor>
}

export default Button
