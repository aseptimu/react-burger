import reducer, {setFeed} from '../feed-slice';

describe('feed reducers test', () => {
    it('should return the initial state', () => {
        const result = reducer(undefined, {type: ''});

        expect(result).toEqual({});
    })

    it('should setFeed', () => {
        const mockFeed = {
            orders: undefined,
            success: true,
            total: 100,
            totalToday: 50,
        };

        const setFeedAction = {
            type: setFeed.type,
            payload: JSON.stringify(mockFeed),
        }

        const result = reducer({}, setFeedAction);

        expect(result).toEqual(mockFeed)
    })
})