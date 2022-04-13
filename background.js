chrome.webRequest.onBeforeRequest.addListener(function (details) {
	
	var parts = details.url.split('?');
	var query = queryString.parse(parts[1]);

	query.share = 'techuplabs';

	return {
		redirectUrl: parts[0] + '?' + queryString.stringify(query)
	};
}, {
	urls: [
		'*://quora.com/*',
		'*://www.quora.com/*'
	],
	types: [
		'main_frame'
	]
}, [
	'blocking'
]);
