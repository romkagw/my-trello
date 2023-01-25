import React, { useEffect, useState } from 'react';
import { GrClose } from 'react-icons/gr';
import { ICloseModal } from '../../../../common/interfaces/ICloseModal';
import './modalCreateList.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../../../store/store';
import IBoard_id from '../../../../common/interfaces/IBoard_id';
import { addList } from '../../../../store/modules/board/actions';


export function ModalCreateList(props:{ onClose : ()=>void, board_id: string|undefined}) {
	const [nameList, setNameList] = useState('');
	const [nameError, setNameError] = useState('');
	const [validForma, setValidForm] = useState(false);

	const state: IBoard_id = useSelector((state: RootState) => state.board);

	useEffect(() => {
		if (nameError) {
			setValidForm(false);
		} else {
			setValidForm(true);
		}
	}, [nameError]);

	const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNameList(e.target.value);
		const re = /^[А-я\w\s-.іїєґ]*$/;
		if (!re.test(e.target.value)) {
			setNameError('Введено не коректное название');
		} else {
			setNameError('');
		}
	};

	const dispatch: AppDispatch = useDispatch();
	const fetchAdd = () => {
		if (nameList.trim().length === 0) {
			setNameError('Строка не может быть пустой');
			return;
		}
		dispatch(addList(props.board_id, nameList, state.lists.length));
		
	};
    const handleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
       fetchAdd();
       }

	return (
		<>
			<form className='list-form' onSubmit={e => e.preventDefault}>
				<div className='error_massage_modal_list'>{nameError}</div>
				<input
            
					onChange={nameHandler}
					value={nameList}
					name='nameBoard'
					type='text'
					placeholder='Введите заголовок списка'
					className='modal-form'
				/>
				<button className='add_list_btn_modal' onClick={handleClick}  type={'submit'} disabled={!validForma}>
					Добавить список
				</button>
                <button className='close_list_form'>
                 <GrClose onClick={props.onClose} size='15px' />
                </button>
			</form>
		</>
	);
}
