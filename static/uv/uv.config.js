self.__uv$config = {
	prefix: 'https://hypertabs-production-5eb8.up.railway.app/uv/service/',
	bare: `${location.protocol}//hypertabs-production-5eb8.up.railway.app/bare/`,
	encodeUrl: Ultraviolet.codec.xor.encode,
	decodeUrl: Ultraviolet.codec.xor.decode,
	handler: 'https://hypertabs-production-5eb8.up.railway.app/uv/uv.handler.js',
	bundle: 'https://hypertabs-production-5eb8.up.railway.app/uv/uv.bundle.js',
	config: 'https://hypertabs-production-5eb8.up.railway.app/uv/uv.config.js',
	sw: 'https://hypertabs-production-5eb8.up.railway.app/uv/uv.sw.js',
};
