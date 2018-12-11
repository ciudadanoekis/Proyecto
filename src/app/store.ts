import { MENSAJE } from './actions';

export interface IAppState{
    mensaje:number;
}

export const INITIAL_STATE: IAppState={
    mensaje:0
}

export function rootReducer(state, action){
    switch(action.type){
        case MENSAJE :return Object.assign({}, state, {mensaje:action.data});
    }
}