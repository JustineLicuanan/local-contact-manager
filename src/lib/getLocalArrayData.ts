export const getLocalArrayData = (key: string) => {
	try {
		const rawLocalData = localStorage.getItem(key);

		if (!rawLocalData) {
			localStorage.removeItem(key);
			return [];
		}

		const localData = JSON.parse(rawLocalData);

		if (!Array.isArray(localData)) {
			localStorage.removeItem(key);
			return [];
		}

		return localData;
	} catch (err) {
		localStorage.removeItem(key);
		return [];
	}
};
