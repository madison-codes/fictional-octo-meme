import * as React from "react";
import Link from "gatsby-link";
import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import { menuItems } from "../layouts";
import {
  Button,
  Segment,
  Container,
  Grid,
  Header,
  Icon,
} from "semantic-ui-react";

interface IndexPageProps {
  location: {
    pathname: string;
  };
  toggleSidebar: () => void;
}

export default (props: IndexPageProps) =>
  <div>
    {/* Master head */}
    <Segment vertical inverted textAlign="center" className="masthead">
      <HeaderMenu
        Link={Link} pathname={props.location.pathname} items={menuItems} inverted
        toggleSidebar={props.toggleSidebar}
      />
      <Container text>
        <Header inverted as="h1">Gatsby 1.0 - Starter kit</Header>
        <Header inverted as="h2">Typescript - Jest - Semantic UI</Header>
        <button>Get started!</button>
      </Container>
    </Segment>
  </div>;
