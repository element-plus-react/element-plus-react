import './style'
import InnerContainer,{InnerContainerProps} from './container'
import Aside from './aside'
import Footer from './footer'
import Header from './header'
import Main from './main'

interface ContainerProps extends React.FC<InnerContainerProps> {
  Aside: typeof Aside
  Footer: typeof Footer
  Header: typeof Header
  Main: typeof Main
}

const Container = InnerContainer as ContainerProps

Container.Aside = Aside
Container.Footer = Footer
Container.Header = Header
Container.Main = Main

export default Container