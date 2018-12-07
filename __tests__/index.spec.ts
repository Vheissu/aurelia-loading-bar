import { configure } from '../src/index';

describe('Index', () => {
    let sut;

    beforeEach(() => {
        sut = configure({
            container: {
                registerInstance: jest.fn(),
            },
            globalResources: () => [],
        } as any);
    });

    it('Placeholder test', () => {
        expect(1).toEqual(jasmine.any(Number));
        expect('test').toEqual('test');
        expect(false).toBeFalsy();
    });
});
