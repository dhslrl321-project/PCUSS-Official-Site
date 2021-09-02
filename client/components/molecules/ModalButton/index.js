import { useState } from "react";

import * as S from "./styles";

import Modal from "../Modal";

const ModalButton = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <S.Container>
      <S.Span onClick={openModal}>{children}</S.Span>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </S.Container>
  );
};

export default ModalButton;
