import * as S from './styles';

const Label = ({ children, styleType, size }) => {
  const props = {
    styleType,
    size,
  };

  switch (styleType) {
    case "Label": {
      return <S.Labels {...props}>{children}</S.Labels>;
    }
    case "Description": {
      return <S.Description {...props}>{children}</S.Description>;
    }
    default: {
      return <></>;
    }
  }
};

export default Label;
