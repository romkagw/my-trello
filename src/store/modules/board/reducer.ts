import IBoard_id from "../../../common/interfaces/IBoard_id";

const initialState: IBoard_id = {
    title:"",
    users:{id:0,username:""},
    lists:[{
		title:"",
		position:0,
		cards:[{id:0,title:""}],
	}]
};

export default function boardReducer(state = initialState, action: { type: string; payload?: any }) {
	switch (action.type) {
		case 'GET_BOARD_ID':
			return {
				...state,
				...action.payload
			};
			case 'INITIAL_STATE':
				return initialState;
		default: {
			return { ...state };
		}
	}
}
