export class LocalStorageManager<T> {
	constructor(private key: string) {}

	initState(state: T) {
		if (this.getState()) return this;
		this.setState(state);
		return this;
	}

	setState(state: T) {
		localStorage.setItem(this.key, JSON.stringify(state));
		return this;
	}

	getState(): T {
		return JSON.parse(localStorage.getItem(this.key) as string);
	}

	deleteState() {
		localStorage.removeItem(this.key);
	}
}
