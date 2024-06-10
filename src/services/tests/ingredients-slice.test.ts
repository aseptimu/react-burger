import reducer, {fetchIngredients} from "../ingredients-slice";
import {mockIngredient} from "./constants";

const initialState = {
    ingredients: [],
}
describe('ingredients slice', () => {
    it('should console info on "pending"', () => {
        const logSpy = jest.spyOn(console, 'info').mockImplementation(() => {});

        reducer(initialState, fetchIngredients.pending(''));
        expect(logSpy).toHaveBeenCalledWith('Pending...');
        logSpy.mockRestore();
    })

    it('should set ingredients', () => {
        const state = reducer(initialState, fetchIngredients.fulfilled(mockIngredient, ''));

        expect(state).toEqual({ingredients: mockIngredient})
    })

    it('should console error and reset ingredients', () => {
        const logSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

        const state = reducer({ingredients: [mockIngredient]}, fetchIngredients.rejected({name: '', message: ''}, ''))
        expect(logSpy).toHaveBeenCalledWith('Error fetching ingredients\n', undefined)
        expect(state).toEqual(initialState);
    })


})