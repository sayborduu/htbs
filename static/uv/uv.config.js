self.__uv$config = {
	prefix: 'https://hypertabs-production-5eb8.up.railway.app/uv/service/',
	bare: `${location.protocol}//hypertabs-production-5eb8.up.railway.app/bare/`,
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: '/uv/uv.handler.js',
	bundle: '/uv/uv.bundle.js',
	config: '/uv/uv.config.js',
	sw: '/uv/uv.sw.js',
};
