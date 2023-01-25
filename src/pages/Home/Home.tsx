import React, { useEffect, useState } from 'react';
import './home.scss';
import { HiPlusSm } from 'react-icons/hi';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getBoards } from '../../store/modules/boards/actions';
import { Modal } from './components/Modal/Modal';
import BoardHome from './components/Board/BoardHome';
import IBoard from '../../common/interfaces/IBoard';
import { Loader } from '../../common/components/Loader/loader';

function Home(): JSX.Element {
	const [modal, setModal] = useState(false);
	const dispatch: AppDispatch = useDispatch();
	const state: { boards: IBoard[] } = useSelector((state: RootState) => state.boards);
	// const [loading, setLoading] = useState(false);

	useEffect(() => {
		dispatch(getBoards());
	}, []);

	return (
		<>
			
				<div className='container'>
					<h2 className='title-home'>Мои доски</h2>
			  
					<div className='block-board'>
						{state.boards.map(({ title, id }) => (
							<BoardHome id={id} title={title} />
						))}

						<button onClick={() => setModal(true)} className='add-new-board'>
							<HiPlusSm size='30px' />
							Добавить новую доску
						</button>


					</div>
				</div>
			

			{modal && <Modal onClose={() => setModal(false)} />}
		</>
	);
}

export default Home;
