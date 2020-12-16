import { Toggle } from "./models";
import { ToggleActionsTypes, TOGGLE_ELEMENT } from "./toggler.actions.types";


const INITIAL_STATE: Toggle = {
    show: false
}


export function toggleReducer(state = INITIAL_STATE, action: ToggleActionsTypes) {
    switch (action.type) {
        case TOGGLE_ELEMENT:
            return {
                ...state,
                show: !state.show
            }
        default:
            return {
                ...state
            }
    }
}
