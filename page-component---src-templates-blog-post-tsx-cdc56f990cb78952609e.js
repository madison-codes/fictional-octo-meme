webpackJsonp([23],{

/***/ "./node_modules/babel-loader/lib/index.js?{\"plugins\":[\"/Users/madisonkerndt/Documents/workspace/gatsby-web/node_modules/gatsby/dist/utils/babel-plugin-extract-graphql.js\"]}!./node_modules/ts-loader/index.js?{\"compilerOptions\":{\"target\":\"esnext\",\"experimentalDecorators\":true,\"jsx\":\"react\",\"module\":\"commonjs\"},\"transpileOnly\":true}!./src/templates/blog-post.tsx":
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", { value: true });
	const React = __webpack_require__("./node_modules/react/react.js");
	const gatsby_link_1 = __webpack_require__("./node_modules/gatsby-link/index.js");
	const semantic_ui_react_1 = __webpack_require__("./node_modules/semantic-ui-react/dist/commonjs/index.js");
	const BlogTitle_1 = __webpack_require__("./src/components/BlogTitle.tsx");
	exports.default = props => {
	  const { frontmatter, html, timeToRead } = props.data.post;
	  const avatar = frontmatter.author.avatar.children[0];
	  const tags = props.data.post.frontmatter.tags.map(tag => React.createElement(semantic_ui_react_1.Label, { key: tag }, React.createElement(gatsby_link_1.default, { to: `/blog/tags/${tag}/` }, tag)));
	  const recents = props.data.recents.edges.map(({ node }) => {
	    const recentAvatar = node.frontmatter.author.avatar.children[0];
	    const recentCover = node.frontmatter.image.children[0];
	    const extra = React.createElement(semantic_ui_react_1.Comment.Group, null, React.createElement(semantic_ui_react_1.Comment, null, React.createElement(semantic_ui_react_1.Comment.Avatar, { src: recentAvatar.responsiveResolution.src, srcSet: recentAvatar.responsiveResolution.srcSet }), React.createElement(semantic_ui_react_1.Comment.Content, null, React.createElement(semantic_ui_react_1.Comment.Author, { style: { fontWeight: 400 } }, frontmatter.author.id), React.createElement(semantic_ui_react_1.Comment.Metadata, { style: { margin: 0 } }, timeToRead, " min read"))));
	    return React.createElement("div", { key: node.fields.slug, style: { paddingBottom: "1em" } }, React.createElement(semantic_ui_react_1.Card, { as: gatsby_link_1.default, to: node.fields.slug, image: {
	        src: recentCover.responsiveResolution.src,
	        srcSet: recentCover.responsiveResolution.srcSet
	      }, header: node.frontmatter.title, extra: extra }));
	  });
	  return React.createElement(semantic_ui_react_1.Container, null, React.createElement(BlogTitle_1.default, null), React.createElement(semantic_ui_react_1.Segment, { vertical: true, style: { border: "none" } }, React.createElement(semantic_ui_react_1.Item.Group, null, React.createElement(semantic_ui_react_1.Item, null, React.createElement(semantic_ui_react_1.Item.Image, { size: "tiny", shape: "circular", src: avatar.responsiveResolution.src, srcSet: avatar.responsiveResolution.srcSet }), React.createElement(semantic_ui_react_1.Item.Content, null, React.createElement(semantic_ui_react_1.Item.Description, null, frontmatter.author.id), React.createElement(semantic_ui_react_1.Item.Meta, null, frontmatter.author.bio), React.createElement(semantic_ui_react_1.Item.Extra, null, frontmatter.updatedDate, " - ", timeToRead, " min read")))), React.createElement(semantic_ui_react_1.Header, { as: "h1" }, frontmatter.title)), React.createElement(semantic_ui_react_1.Segment, { vertical: true, style: { border: "none" }, dangerouslySetInnerHTML: {
	      __html: html
	    } }), React.createElement(semantic_ui_react_1.Segment, { vertical: true }, tags), React.createElement(semantic_ui_react_1.Segment, { vertical: true }, React.createElement(semantic_ui_react_1.Grid, { padded: true, centered: true }, recents)));
	};
	exports.pageQuery = "** extracted graphql fragment **";

/***/ })

});
//# sourceMappingURL=page-component---src-templates-blog-post-tsx-cdc56f990cb78952609e.js.map