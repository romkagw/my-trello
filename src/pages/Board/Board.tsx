import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './board.scss';
import { BsPlusSquareDotted } from 'react-icons/bs';
import List from './components/List/List';
import { useDispatch, useSelector } from 'react-redux';
import { addList, getBoardsId } from '../../store/modules/board/actions';
import { AppDispatch, RootState } from '../../store/store';
import IBoard_id from '../../common/interfaces/IBoard_id';
import { changeBoardName } from '../../store/modules/board/actions';
import { idText } from 'typescript';
import { ModalCreateList } from './components/Modal/ModalCreateList';

export default function Board() {
	const { board_id } = useParams();
	const dispatch: AppDispatch = useDispatch();
	const state: IBoard_id = useSelector((state: RootState) => state.board);
	const [modal, setModal] = useState(false);

	useEffect(() => {
		dispatch(getBoardsId(board_id));
	}, []);

	function a(e: React.FormEvent<HTMLHeadingElement>) {
		const name = e.currentTarget.innerText;
		const re = /^[А-я\w\s-.іїєґ]*$/;
		if (re.test(name)) {
			dispatch(changeBoardName(board_id, name));
		} else {
			return;
		}
	}

	return (
		<div className='board-container'>
			<Link onClick={() => dispatch({ type: 'INITIAL_STATE' })} to='/' className='button-home'>
				Home
			</Link>

			<h1 className='title-board' contentEditable='true' suppressContentEditableWarning={true} onBlur={a}>
				{state.title}
			</h1>

			<div className='board-content'>
				{state.lists.map(el => (
					<div className='board-list'>
						<List title={el.title} cards={el.cards} />{' '}
					</div>
				))}

				{modal ? (
					<ModalCreateList onClose={() => setModal(false)} board_id={board_id} />
				) : (
					<button onClick={() => setModal(true)}>
						<BsPlusSquareDotted size='30px' />
						Добавить колонку
					</button>
				)}
			</div>
		</div>
	);
}
