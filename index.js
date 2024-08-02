let username = 'coalition';
let password = 'skill-test';
let auth = btoa(`${username}:${password}`);
console.log(auth);
fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
	headers: {
		'Authorization': `Basic ${auth}`
	}
}).then(function (response) {
	if (response.ok) {
		return response.json();
	}
	throw response;
}).then(function (data) {
	console.log(data);
}).catch(function (error) {
	console.warn(error);
});