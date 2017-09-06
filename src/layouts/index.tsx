import Link from "gatsby-link";
import * as React from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import HeaderMenu from "../components/HeaderMenu/HeaderMenu";
import SidebarMenu from "../components/SidebarMenu/SidebarMenu";
import { Segment, Icon, Container, Sidebar, Button } from "semantic-ui-react";
import "../styles/main.scss";
import "../styles/responsive.css";
import "../styles/semantic.min.css";
import "prismjs/themes/prism-okaidia.css";

export const menuItems = [
  { name: "Home", path: "/", exact: true, icon: "home", inverted: true },
  { name: "Account", path: "/account/", exact: true, icon: "info circle" },
  { name: "Documentation", path: "/docs/", exact: false, icon: "newspaper" },
  { name: "Support", path: "/support/", exact: false, icon: "newspaper" },
];

type MuiThemeProvider = React.ComponentClass<any>;

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string;
  };
  children: any;

}

interface DefaultLayoutStates {
  sidebarVisible: boolean;
}

export default class DefaultLayout extends React.PureComponent<DefaultLayoutProps, DefaultLayoutStates> {
  state = { sidebarVisible: false };

  toggleSidebar() {
    this.setState({ sidebarVisible: !this.state.sidebarVisible });
  }

  render() {
    const { pathname } = this.props.location;
    const isHome = pathname === "/";

    // Inject `toggleSidebar` function into children
    const children = React.Children.map(this.props.children(), (child: React.ReactElement<any>) =>
      React.cloneElement(child, { toggleSidebar: this.toggleSidebar.bind(this) }),
    );

    return (
      <Sidebar.Pushable as={Segment}>
        <SidebarMenu Link={Link} pathname={pathname} items={menuItems} visible={this.state.sidebarVisible} />
        <Sidebar.Pusher style={{ minHeight: "100vh" }}>
          {/* Header */}
          {isHome ? "" : <HeaderMenu
            Link={Link} pathname={pathname} items={menuItems}
            toggleSidebar={this.toggleSidebar.bind(this)}
          />}
          <MuiThemeProvider>
            {/* Render children pages */}
            <div style={{ paddingBottom: 60 }}>
              {children}
            </div>
          </MuiThemeProvider>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    );
  }
}
