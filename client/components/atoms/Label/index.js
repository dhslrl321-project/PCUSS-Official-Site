import React from 'react'
import * as S from './styles';

const Label = ({ children, styleType }) => {
  const props = {
    styleType,
  }
  switch (styleType) {
    case "PrimaryLabel": {
      return <S.PrimaryLabel {...props}>{children}</S.PrimaryLabel>;
    }
    case "SecondaryLabel": {
      return <S.SecondaryLabel {...props}>{children}</S.SecondaryLabel>;
    }
    case "PrimaryDescription": {
      return <S.PrimaryDescription {...props}>{children}</S.PrimaryDescription>;
    }
    case "SecondaryDescription": {
      return <S.SecondaryDescription {...props}>{children}</S.SecondaryDescription>;
    }
    default: {
      return <></>;
    }
  }
};

export default Label;
