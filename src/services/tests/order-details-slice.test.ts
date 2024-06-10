import reducer, {orderCheckout, TOrder} from '../order-details-slice';
import {mockIngredient} from "./constants";

const initialState: TOrder = {
    number: null,
    isOrderInProgress: false,
}
describe('order details', () => {
    it('should set pending state', () => {
        const store = reducer(initialState, orderCheckout.pending('', [mockIngredient._id]));

        expect(store).toEqual({...initialState, isOrderInProgress: true});
    })

    it('should set order number and reset pending status', () => {
        const store = reducer(initialState, orderCheckout.fulfilled({number: 123}, '', [mockIngredient._id]));

        expect(store).toEqual({number: 123, isOrderInProgress: false});
    })

    it('should console error and reset ingredients', () => {
        const spy = jest.spyOn(console, 'error').mockImplementation(() => {});
        const store = reducer({number: '123', isOrderInProgress: false}, orderCheckout.rejected({name: '', message: ''}, '', [mockIngredient._id]));

        expect(spy).toHaveBeenCalledWith('Error fetching ingredients\n', undefined);
        expect(store).toEqual({number: 'Error', isOrderInProgress: false});
        spy.mockRestore()
    })
})