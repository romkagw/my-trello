import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { ICloseModal } from '../../../../common/interfaces/ICloseModal';
import './modal.scss';
import {addBoards} from "../../../../store/modules/boards/actions";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../../../store/store";

export function Modal({ onClose }: ICloseModal) {


  const [nameBoard, setNameBoard] = useState('');
  const [nameError, setNameError] = useState('');
  const [validForma, setValidForm] = useState(false);

  useEffect(() => {
    if (nameError) {
      setValidForm(false);
    } else {
      setValidForm(true);
    }
  }, [nameError]);

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameBoard(e.target.value);
    const re = /^[А-я\w\s-.іїєґ]*$/;
    if (!re.test(e.target.value)) {
      setNameError('Введено не коректное название');
    } else {
      setNameError('');
    }
  };

  const dispatch:AppDispatch = useDispatch();
  const fetchAdd = () => {

    if (nameBoard.trim().length === 0) {
      setNameError('Имя не должно быть пустым');
      return;
    }
   dispatch(addBoards(nameBoard));

    onClose();
  };

  return (
    <>
      <div onClick={onClose} className="backdrop"></div>
      <form className='modal-board' onSubmit={e => e.preventDefault}>
        <GrClose className="btn-close" onClick={onClose} size="15px" />
        <div className="name-error">{nameError}</div>
        <input
          onChange={nameHandler}
          value={nameBoard}
          name="nameBoard"
          type="text"
          placeholder="Введите название доски"
          className="modal-input"
        />
        <button onClick={fetchAdd} className="btn-create-board" type={"submit"} disabled={!validForma}>
          Создать доску
        </button>
      </form>
    </>
  );
}
