import axios from 'axios';
export default axios.create({
	baseUrl: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 3a445c1e01f6c96a9bd02d10227a0a008147a926cd7235d910b2f5869d31e0b0'
	}
});
