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


// style Type ����
// style Type �� ���� �ٸ� Section ������Ʈ�� ��ȯ (if)
// styles.js ������ �����ؼ� section style ����
// stories.js ������ �����ؼ� ���丮���� ���۽�ų�ž�
