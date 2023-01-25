import instance from "../../../api/request";
import {api} from "../../../common/constants";
import {AppDispatch} from "../../store";
import { getBoards } from "../boards/actions";


export const getBoardsId = (boards_id: string|undefined) => async (dispatch: AppDispatch) => {
    try {
        const response = await instance.get(api.baseURL+"/board/"+boards_id);
    
         dispatch({type: 'GET_BOARD_ID', payload: response});
    } catch (e) {
        dispatch({type: 'ERROR_ACTION_TYPE'});
    }
}


export const changeBoardName = (boards_id: string|undefined, title:string) => async (dispatch: AppDispatch) => {
    try {
        await instance.put(api.baseURL+"/board/"+boards_id,{title:title});
        dispatch(getBoardsId(boards_id));
         dispatch(getBoards());
    
    } catch (e) {
        dispatch({type: 'ERROR_ACTION_TYPE'});
    }
}

export const addList = (boards_id: string|undefined, title:string, position:number) => async (dispatch: AppDispatch) => {
    try {
        await instance.post(api.baseURL+"/board/"+boards_id+"/list",{title:title,position:position});
        dispatch(getBoardsId(boards_id));
         
    
    } catch (e) {
        dispatch({type: 'ERROR_ACTION_TYPE'});
    }
}


