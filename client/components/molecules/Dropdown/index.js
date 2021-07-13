import * as S from "./styles";
import Link from "../../atoms/Link";

const Drowpdown = ({ data }) => {
  return (
    <S.Container className="item-wrapper">
      {data.map((item) => (
        <S.DropdownItem className="item" key={item.id}>
          <Link styleType="NextLink" href={item.href}>
            {item.name}
          </Link>
        </S.DropdownItem>
      ))}
    </S.Container>
  );
};

export default Drowpdown;
