import * as S from "./styles";

const Section = ({styleType, children}) => {
    {
        if (styleType === "FirstMargin") return <S.FirstMargin>{children}</S.FirstMargin>
        else if (styleType === "LastMargin") return <S.LastMargin>{children}</S.LastMargin>
        else if (styleType === "DefaultMargin") return <S.DefaultMargin>{children}</S.DefaultMargin>
        else if (styleType === "SingleMargin") return <S.SingleMargin>{children}</S.SingleMargin>
        else return <></>
    }
}

export default Section;


// style Type 정의
// style Type 에 따라서 다른 Section 컴포넌트를 반환 (if)
// styles.js 파일을 수정해서 section style 정의
// stories.js 파일을 수정해서 스토리북을 동작시킬거야
