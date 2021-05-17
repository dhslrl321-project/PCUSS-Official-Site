import { useState } from "react";

import Link from "../../atoms/Link";
import Dropdown from "../Dropdown";

import * as S from "./styles";

const ExpandableNavColumn = ({ data }) => {

  const { name, href, data: columnData } = data;

  const [activeDropdown, setActiveDropdown] = useState(false);

  const handleMouseEnter = () => {
    setActiveDropdown(true);
  }

  const handleMouseLeave = () => {
    setActiveDropdown(false);
  }

  return (
    <S.ExpandableNavItemContainer>
      <S.ExpandableNavItem
        show={activeDropdown}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <Link styleType="NextLink" href={href}>
          {name}
        </Link>
        <Dropdown data={columnData} />
      </S.ExpandableNavItem>
    </S.ExpandableNavItemContainer>
  )
}

export default ExpandableNavColumn
