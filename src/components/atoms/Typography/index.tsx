// Subcomponentes and style
import * as Styled from './styles'

// Types
export interface ITypographyProps {
  align?: string
  as: keyof typeof Styled.parsedTypographys
  color?: string
  marginBottom?: string
  marginLeft?: string
  marginRight?: string
  marginTop?: string
}

const Typography: React.FC<ITypographyProps> = ({ children, ...rest }) => {
  return <Styled.Container {...rest}>{children}</Styled.Container>
}

export default Typography
