const prop = async () =>
	await import(/* webpackChunkName: "ProdStore" */ './prodStore');

const dev = async () =>
	await import(/* webpackChunkName: "DevStore" */ './devStore');

const initStore = () => {
	return process.env.NODE_ENV === 'production'
		? prop().then((res) => res)
		: dev().then((res) => res);
};

export default (async () => {
	const { configureStore } = await initStore();
	return configureStore({});
})();
