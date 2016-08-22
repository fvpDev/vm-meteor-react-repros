import { Tracker } from 'meteor/tracker';
import ViewModel from 'viewmodel-react';

// Use Meteor's dependency management
ViewModel.Tracker = Tracker;

ViewModel.global({});

/*
// HTML Elements
ViewModel.addAttributeBinding([
	'id',
	'src', 'alt', // img
	'href', 'title', 'target', // anchor
	'type', 'placeholder', 'autocomplete', // input
	'rows', 'cols', // textarea
]);

// SnapSVG Elements
ViewModel.addAttributeBinding([
	'xlinkHref', // sAnchor
	'viewBox', 'width', 'height', // boxes
	'transform', 'x', 'y', 'cx', 'cy', 'x1', 'y1', 'x2', 'y2', // graphic (endpoints, origins)
	'r', 'rx', 'ry', // circle, ellipse, rect (rounded corners)
	'd', 'points', // path, poly
	'fill', 'fillOpacity', 'fillRule', // fill
	'stroke', 'strokeOpacity', 'strokeWidth', // stroke
	'fontSize', 'textAnchor', 'alignmentBaseline' // text
]);
*/