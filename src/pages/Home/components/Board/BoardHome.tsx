import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteBoard } from '../../../../store/modules/boards/actions';
import { AppDispatch } from '../../../../store/store';
import './board.scss';

function BoardHome(props: { id: number; title: string }) {


	const dispatch: AppDispatch = useDispatch();
	

	
	



	return (
		
		<Link to={`/board/${props.id}`}>
			<div
				className='board-cart'
			>
				<h1>{props.title}</h1>
				<button onClick={e => {
						e.preventDefault();
						dispatch(deleteBoard(props.id));
					}}>
					Удалить
				</button>
			</div>
		</Link>
	);
}

export default BoardHome;
