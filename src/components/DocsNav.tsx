import * as React from "react";
import { List, ListItem } from 'material-ui/List';
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import Subheader from 'material-ui/Subheader';
import Link from "gatsby-link";

export default class DocsNav extends React.Component<{}, {}> {

    state = {
        open: false,
    };

    handleToggle = () => {
        this.setState({
            open: !this.state.open,
        });
    };

    handleNestedListToggle = (item) => {
        this.setState({
            open: item.state.open,
        });
    };

    render() {
        return (
            <div id='docs-nav'>
                <List>
                    <ListItem 
                        primaryText="Home" 
                        containerElement={<Link to="/support/" />}/>
                </List>
            </div>
        );
    }
}