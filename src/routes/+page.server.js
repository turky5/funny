import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load() {

	let reqHeader = new Headers();
	reqHeader.append('X-Master-Key', '$2b$10$b7RAL2sJuISVoLRwMJB.zexLOCzmnvgnV9Simhwe5T2U2JZr4UVLu');
	let initObject = {
		method: 'GET',
		headers: reqHeader
	};

	const req = await fetch('https://api.jsonbin.io/v3/b/634b01f62b3499323bdfbee4/latest', initObject)
		.then(function (response) {
			return response.json();
		})
		.then(function (data) {
			console.log(data.record.userVisets);
			return data;
		})
		.catch(function (err) {
			console.log('Something went wrong!', err);
		});

	const requestOptions = {
		method: 'PUT',
		headers: {
			'Content-Type': 'application/json',
			'X-Master-Key': '$2b$10$b7RAL2sJuISVoLRwMJB.zexLOCzmnvgnV9Simhwe5T2U2JZr4UVLu'
		},
		body: JSON.stringify({ userVisets: req.record.userVisets + 1 })
	};
	fetch('https://api.jsonbin.io/v3/b/634b01f62b3499323bdfbee4', requestOptions);

	if (req) return req;

	throw error(404, 'Not found');
}
