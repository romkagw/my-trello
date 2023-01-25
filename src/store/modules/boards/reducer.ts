import IBoard from '../../../common/interfaces/IBoard';


const initialState: { boards: IBoard[] } = {
	boards: []
};

export default function boardsReducer(state = initialState, action: { type: string; payload?: any }) {
	switch (action.type) {
		case 'UPDATE_BOARDS':
			return {
				...state,
				...action.payload
			};
		default: {
			return { ...state };
		}
	}
}
