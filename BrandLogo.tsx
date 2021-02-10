import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
interface BrandLogo {
  logo: string
}

const BranImage = styled.img`
  width: 2rem;
  padding-bottom: 0.625rem;
`
const marketingSitLink = process.env.REACT_APP_MDPPS_MARKETING_SITE

const BrandLogo: FunctionComponent<BrandLogo> = props => {
  const { logo } = props
  return (
    <a href={marketingSitLink}>
      <BranImage src={logo} alt="Sidebarlogo" />
    </a>
  )
}

export default BrandLogo
