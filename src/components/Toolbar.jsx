import { FaFreeCodeCamp } from 'react-icons/fa';
import { ToolbarStyle } from "../styles";

export const Toolbar = ({ title }) => {
  return (
    <ToolbarStyle>
      <FaFreeCodeCamp />
      <span>
        {title}
      </span>
    </ToolbarStyle>
  );
};