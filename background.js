chrome.webRequest.onBeforeRequest.addListener(
    function (details) {
        try {
            const [baseUrl, queryStringPart] = details.url.split('?');
            if (!queryStringPart) {
                return { redirectUrl: details.url };
            }
            const query = queryString.parse(queryStringPart);
            query.share = 'techuplabs';
            const newUrl = `${baseUrl}?${queryString.stringify(query)}`;
            return { redirectUrl: newUrl };
        } catch (error) {
            console.error('Error processing URL:', error);
            return { cancel: false };
        }
    },
    {
        urls: [
            '*://quora.com/*',
            '*://www.quora.com/*'
        ],
        types: ['main_frame']
    },
    ['blocking']
);
