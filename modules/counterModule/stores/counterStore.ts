import { defineStore } from 'pinia'
import { computed, reactive, readonly, type ComputedRef } from 'vue'

export interface ICounterStoreState {
	count: number
}

export interface ICounterStore {
	state: {
		readonly count: number
	}
	setCount: (count: number) => void
	getCount: ComputedRef<number>
}

export const useCounterStore = defineStore('counterStore', (): ICounterStore => {
	const _state = reactive<ICounterStoreState>({
		count: 0,
	})

	const setCount = (count: number) => {
		_state.count = count
	}

	const getCount = computed(() => _state.count)

	return {
		state: readonly(_state),
		setCount,
		getCount,
	}
})
