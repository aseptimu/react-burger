import reducer, {
    clearConstructor,
    initialState,
    moveIngredient,
    removeIngredient,
    setBun,
    setIngredient,
    TDragAndDropIngredient
} from '../constructor-slice';
import {TIngredient} from "../../utils/types";
import {mockIngredient} from "./constants";
import {expect} from '@jest/globals';

describe('constructor reducers test', () => {
    it('should return the initial state', () => {
        const emptyAction = {type: ''};
        expect(reducer(undefined, emptyAction)).toEqual(initialState);
    })

    it('should handle setBun', () => {
        const newBun: TIngredient = mockIngredient

        const setBunAction = {
            type: setBun.type,
            payload: newBun,
        }

        const result = reducer(initialState, setBunAction);

        expect(result.bun).toEqual(newBun)
    })

    it('should moveIngredient', () => {
        const firstIngredient = {...mockIngredient, _id: '1'};
        const secondIngredient = {...mockIngredient, _id: '2'};

        const currentState = {
            bun: null,
            ingredients: [
                firstIngredient,
                secondIngredient
            ]
        }

        const nextState = {
            bun: null,
            ingredients: [
                secondIngredient,
                firstIngredient
            ]
        }

        const moveIngredientAction = {
            type: moveIngredient.type,
            payload: {dragIndex: 0, hoverIndex: 1},
        };

        const result = reducer(currentState, moveIngredientAction);

        expect(result).toEqual(nextState);
    })

    it('should setIngredient', () => {
        const hoveredIngredient: TDragAndDropIngredient = {
            ingredient: mockIngredient,
            hoverIndex: 0,
        }

        const setIngredientAction = {
            type: setIngredient.type,
            payload: hoveredIngredient,
        }

        const nextState = {
            bun: null,
            ingredients: [{...mockIngredient, nanoid: expect.any(String)}],
        }

        const result = reducer(initialState, setIngredientAction);

        expect(result).toEqual(nextState);
    })

    it('should removeIngredient', () => {
        const removeIngredientAction = {
            type: removeIngredient.type,
            payload: '10',
        }

        const removedIngredient = {...mockIngredient, nanoid: '10'};

        const currentState = {
            bun: null,
            ingredients: [removedIngredient]
        }

        const result = reducer(currentState, removeIngredientAction);

        expect(result).toEqual(initialState);
    })

    it('should clearConstructor', () => {
        const clearConstructorAction = {
            type: clearConstructor.type,
        };

        const currentState = {
            bun: null,
            ingredients: [mockIngredient],
        }

        const result = reducer(currentState, clearConstructorAction);

        expect(result).toEqual(initialState);
    })
})