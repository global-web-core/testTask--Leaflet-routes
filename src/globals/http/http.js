import axios from "axios";

const domain = "http://router.project-osrm.org";
const service = "route/v1";
const profile = 'driving' || 'car' || 'bike' || 'foot';
const steps = "steps=true";
const overview = "overview=false";

const request = async (coordinatesForApi) => {
	const url = `${domain}/${service}/${profile}/${coordinatesForApi}?${steps}&${overview}`;

	const fetch = await axios.get(url, {
		headers: {
			'Content-Type': 'application/json',
		}
	})
		.then(function (response) {
			if (response.status === 200) {
				const data = response.data;
				return data;
			}
		})
		.catch(function (error) {
			console.log('Error fetch API project-osrm.org:', error.message);
		});

	return fetch;
};

const get = async (data) => await request(data);

export {
	get
};