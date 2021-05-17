import * as S from "./styles";

const Drowpdown = ({ data }) => {

  return (
    <S.Container>
      {data.map(item =>
        <S.DropdownItem className="item" key={item.id}>
          {item.name}
        </S.DropdownItem>
      )}
    </S.Container>
  )
}

export default Drowpdown
