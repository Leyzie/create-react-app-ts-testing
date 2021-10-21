import {useCounter} from '../useCounter';
import {act, renderHook} from '@testing-library/react-hooks';

describe("useCounter", () => {
	it("increments count by 1", () => {
		const {result} = renderHook(useCounter);

		act(() => {
			result.current.onClick.increment();
		});

		expect(result.current.count).toBe(1);
	});

	it("decrements count by -1", () => {
		const { result } = renderHook(useCounter);

		act(() => {
			result.current.onClick.decrement();
		});

		expect(result.current.count).toBe(-1);
	});
});
