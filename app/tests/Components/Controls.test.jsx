const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Controls = require('Controls');

describe('Controls',  () => {
	it('should exist',  () => {
		expect(Controls).toExist();
	});

	describe('render',  () => {
		it('should render pause when started',  () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='started'/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			//jquery selector to find a button with the text "Pause" in it.
			var $pauseButton = $el.find('button:contains(Pause)');
			//the number of elements it found.
			expect($pauseButton.length).toBe(1);
		});

		it('should render start when paused',  () => {
			var controls = TestUtils.renderIntoDocument(<Controls countdownStatus='paused'/>);
			var $el = $(ReactDOM.findDOMNode(controls));
			var $startButton = $el.find('button:contains(Start)');
			//the number of elements it found.
			expect($startButton.length).toBe(1);
		});
	});
});