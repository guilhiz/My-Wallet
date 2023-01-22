import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
html, body {
  box-sizing: border-box;
  background-color: ${(props) => props.theme.background};
  line-height: 1;
}

 button {
	:hover {
		opacity: 0.7;
	}
	:active {
		scale: 0.97;
	}
 }
 h1 {
	font-family: 'Saira Stencil One';
	font-weight: 400;
	font-size: 32px;
	line-height: 50px;
  color: ${(props) => props.theme.text};
 }

 h2 {
	font-weight: 700;
	font-size: 26px;
	line-height: 31px;
	color: ${(props) => props.theme.title};
}

input {
	width: 326px;
  height: 58px;
  background: ${(props) => props.theme.input};
  border-radius: 5px;
  margin-bottom: 13px;
  border: none;
	padding-left: 15px;
  ::placeholder {
    font-size: 20px;
    line-height: 23px;
    color: ${(props) => props.theme.text};
    opacity: 1;
  }
}

button {
	width: 326px;
	height: 46px;
	background: ${(props) => props.theme.button};
	border-radius: 5px;
	border: none;
	cursor: pointer;

	font-weight: 700;
	font-size: 20px;
	line-height: 23px;
	color: ${(props) => props.theme.textBtn};
}

a {
    text-decoration: none;
}

*, *:before, *:after {
	font-family: 'Raleway', sans-serif;
  font-weight: 400;
  box-sizing: inherit;
}

`;
