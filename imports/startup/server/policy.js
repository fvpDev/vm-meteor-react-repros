BrowserPolicy.framing.disallow();
BrowserPolicy.content.disallowInlineScripts();
BrowserPolicy.content.disallowEval();
BrowserPolicy.content.allowInlineStyles();
BrowserPolicy.content.allowFontDataUrl();

let trusted = [
	'*.bbb.org',
	'placehold.it'
];

_.each(trusted, (origin) => {
	origin = "http://" + origin;
	BrowserPolicy.content.allowOriginForAll(origin);
});

let trustedSecure = [
	'*.bootstrapcdn.com',
//  '*.google-analytics.com',
	'*.googleapis.com',
	'*.gstatic.com',
	'placeholdit.imgix.net',
	'*.kadira.io',
	'*.typekit.net'
];

_.each(trustedSecure, (origin) => {
	origin = "https://" + origin;
	BrowserPolicy.content.allowOriginForAll(origin);
});

BrowserPolicy.content.allowEval('https://ajax.googleapis.com'); // for Google Maps to work
BrowserPolicy.content.allowInlineScripts('https://use.typekit.net'); // for Typekit Fonts to work
BrowserPolicy.content.allowInlineScripts('http://seal-atlanta.bbb.org'); // for Typekit Fonts to work