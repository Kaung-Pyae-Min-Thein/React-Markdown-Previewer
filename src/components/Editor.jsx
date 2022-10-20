import { EditorStyle } from "../styles";
import { useSelector, useDispatch } from "react-redux";
import { modifyMark } from "../features/markedSlice";

export const Editor = () => {
  const defaultmark = useSelector(state => state.marked.markdown);
  const dispatch = useDispatch();



  const updateMarkdown = (e) => {
    dispatch(modifyMark(e.target.value));
  };

  return (
    <EditorStyle id="editor" value={defaultmark}
      onChange={updateMarkdown} />
  );
};