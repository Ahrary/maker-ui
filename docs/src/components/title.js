/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import Diagram from "./diagram-main"
import MobileDiagram from "./diagram-mobile"
import SideNavDiagram from "./diagram-sidenav"

const renderDiagram = type => {
  switch (type) {
    case "side-nav":
      return <SideNavDiagram type={type} />
    case "tab-bar":
    case "side-nav-toggle":
    case "menu-toggle":
    case "mobile-nav":
      return <MobileDiagram type={type} />
    default:
      return <Diagram type={type} />
  }
}

export default ({ title, children, type }) => (
  <div
    sx={{
      display: "grid",
      gridGap: "60px",
      gridTemplateColumns: ["1fr", ".25fr .75fr"],
      svg: {
        maxWidth: "250px",
      },
      span: {
        fontFamily: "monospace",
        color: "primary",
      },
    }}>
    <div sx={{ textAlign: "center" }}>{renderDiagram(type)}</div>
    <div>
      <Styled.h1>{title}</Styled.h1>
      <Styled.pre>
        import &#123; {title} &#125; from 'gatsby-theme-elements'
      </Styled.pre>
      {children}
    </div>
  </div>
)
