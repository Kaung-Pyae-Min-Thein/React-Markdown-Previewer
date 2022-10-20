import { marked } from "marked";
import Prism from 'prismjs';
import { PreviewStyle } from "../styles";
import 'prismjs/themes/prism.css';
import { useSelector } from "react-redux";

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, 'javascript');
  }
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

export const Preview = () => {
  const placeholder = useSelector(state => state.marked.markdown);

  const createMarkup = () => {
    return {
      __html: marked(placeholder, { renderer: renderer })
    };
  };

  return (
    <PreviewStyle id="preview" dangerouslySetInnerHTML={createMarkup()} />
  );
};