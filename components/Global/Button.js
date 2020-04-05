import styled from 'styled-components'

const Anchor = styled.a`
  display: inline-block;
  padding: 10px 30px;
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  background-color: ${({ theme }) => theme.colors.deaths};
  border-radius: 999px;
`

const Button = ({ href, children }) => {
  const scrollTo = ({ target }) => {
    const element = document.querySelector(target.getAttribute('href'))

    element.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
    })
  }

  return (
    <Anchor href={href} onClick={scrollTo}>
      {children}
    </Anchor>
  )
}

export default Button
