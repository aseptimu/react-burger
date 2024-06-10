import reducer, {authUser, getUser, registerUser, TUserState, updateUser, userLogout} from '../user-slice';
import { expect } from '@jest/globals';

const initialState: TUserState = {
    name: '',
    email: '',
    isAuthorized: false,
    isAuthInProgress: false,
};

const mockEmail = 'test@test.ru';
const mockPassword = 'password';
const mockName = 'tester';
const mockAccessToken = 'mockAccessToken';
const mockRefreshToken = 'mockRefreshToken';

describe('user reducers', () => {
    it('should set state "pending" on new user registration', () => {
        const store = reducer(initialState, registerUser.pending('', {}))

        expect(store).toEqual({...initialState, isAuthInProgress: true})
    })

    it('should put new user in store on registration', () => {
        const mockRegisteredUser = {
            success: true,
            user: {name: mockName, email: mockEmail},
            accessToken: mockAccessToken,
            refreshToken: mockRefreshToken
        };

        const store = reducer(initialState, registerUser.fulfilled(mockRegisteredUser, '', {}));

        expect(store).toEqual({
            email: mockRegisteredUser.user.email,
            isAuthInProgress: false,
            isAuthorized: true,
            name: mockRegisteredUser.user.name,
        })
    })

    it('should reset register progress state', () => {
        const store = reducer({...initialState, isAuthInProgress: true}, registerUser.rejected({name: '', message: ''}, '', {}))

        expect(store).toEqual(initialState)
    })

    it('should set state "pending" on user auth', () => {
        const store = reducer(initialState, authUser.pending('', {}))

        expect(store).toEqual({...initialState, isAuthInProgress: true})
    })

    it('should put new user in store on auth', () => {
        const mockRegisteredUser = {
            success: true,
            user: {name: mockName, email: mockEmail},
            accessToken: mockAccessToken,
            refreshToken: mockRefreshToken
        };

        const store = reducer(initialState, authUser.fulfilled(mockRegisteredUser, '', {}));

        expect(store).toEqual({
            email: mockRegisteredUser.user.email,
            isAuthInProgress: false,
            isAuthorized: true,
            name: mockRegisteredUser.user.name,
        })
    })

    it('should reset auth progress state', () => {
        const store = reducer({...initialState, isAuthInProgress: true}, authUser.rejected({name: '', message: ''}, '', {}))

        expect(store).toEqual(initialState)
    })




    it('should set state "pending" on user get', () => {
        const store = reducer(initialState, getUser.pending(''))

        expect(store).toEqual({...initialState, isAuthInProgress: true})
    })

    it('should put new user in store on get user', () => {
        const mockRegisteredUser = {
            success: true,
            user: {name: mockName, email: mockEmail},
            accessToken: mockAccessToken,
            refreshToken: mockRefreshToken
        };

        const store = reducer(initialState, getUser.fulfilled(mockRegisteredUser, ''));

        expect(store).toEqual({
            email: mockRegisteredUser.user.email,
            isAuthInProgress: false,
            isAuthorized: true,
            name: mockRegisteredUser.user.name,
        })
    })

    it('should reset get user progress state', () => {
        const store = reducer({...initialState, isAuthInProgress: true}, getUser.rejected({name: '', message: ''}, ''))

        expect(store).toEqual(initialState)
    })



    it('should set state "pending" on user update', () => {
        const store = reducer(initialState, updateUser.pending('', {name: mockName, email: mockEmail, password: mockPassword}))

        expect(store).toEqual({...initialState, isAuthInProgress: true})
    })

    it('should put new user in store on user update', () => {
        const mockRegisteredUser = {
            success: true,
            user: {name: mockName, email: mockEmail},
            accessToken: mockAccessToken,
            refreshToken: mockRefreshToken
        };

        const store = reducer(initialState, updateUser.fulfilled(mockRegisteredUser, '', {name: mockName, email: mockEmail, password: mockPassword}));

        expect(store).toEqual({
            email: mockRegisteredUser.user.email,
            isAuthInProgress: false,
            isAuthorized: true,
            name: mockRegisteredUser.user.name,
        })
    })

    it('should reset update user progress state', () => {
        const store = reducer({...initialState, isAuthInProgress: true}, updateUser.rejected({name: '', message: ''}, '', {name: mockName, email: mockEmail, password: mockPassword}))

        expect(store).toEqual(initialState)
    })



    it('should set state "pending" on user logout', () => {
        const store = reducer(initialState, userLogout.pending('', ''))

        expect(store).toEqual({...initialState, isAuthInProgress: true})
    })

    it('should put new user in store on user logout', () => {
        const store = reducer({...initialState, email: mockEmail, name: mockName}, userLogout.fulfilled({success: true, message: ''}, '', ''));

        expect(store).toEqual(initialState)
    })

    it('should reset logout user progress state', () => {
        const store = reducer({...initialState, isAuthInProgress: true}, userLogout.rejected({name: '', message: ''}, '', ''))

        expect(store).toEqual(initialState)
    })
})