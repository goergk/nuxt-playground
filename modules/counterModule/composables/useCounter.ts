import { useCounterStore } from '../stores/counterStore'

export const useCounter = () => {
	const counterStore = useCounterStore()

	const increment = () => {
		counterStore.setCount(counterStore.getCount + 1)
	}

	const decrement = () => {
		counterStore.setCount(counterStore.getCount - 1)
	}

	return {
		increment,
		decrement,
	}
}
