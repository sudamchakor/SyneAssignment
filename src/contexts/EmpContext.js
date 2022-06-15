import { createContext, useReducer } from "react";

export const EmpContext = createContext();

const intialState = {
    data: [
        {
            id: 1,
            name: "sudam",
            designation: 'Sr. Associate',
            salary: 25000
        },
        {
            id: 2,
            name: "sudam",
            designation: 'Sr. Associate',
            salary: 25000
        },
        {
            id: 3,
            name: "sudam",
            designation: 'Sr. Associate',
            salary: 25000
        },
        {
            id: 4,
            name: "sudam",
            designation: 'Sr. Associate',
            salary: 25000
        }
    ],
    selEmp: {
        id: new Date().getTime(),
        name: "",
        designation: "",
        salary: 0,
    },
    isReadOnly: false,
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EMP':
            const newState = {
                ...state,
                data: state.data.filter(emp => emp.id !== action.payload.id).concat(action.payload)
            };
            return newState;
        case 'SET_CURR_EMP':
            return {
                ...state,
                selEmp: action.payload
            };
        case 'DELETE_EMP':
            return {
                ...state,
                data: state.data.filter(emp => emp.id !== action.payload)
            };
        case 'UPDATE_EDIT_MODE':
            return {
                ...state,
                isReadOnly: action.payload
            };
        case 'RESET_CURR_EMP':
            return {
                ...state,
                selEmp: action.payload
            };
        default:
            return state;
    }
}

export const EmpContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, intialState);
    return (
        <EmpContext.Provider value={[state, dispatch]}>
            {props.children}
        </EmpContext.Provider>
    )
}
