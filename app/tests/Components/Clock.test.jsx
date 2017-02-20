var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var Clock = require('Clock');


describe('Clock',  () => {

	it('should exist',  () => {
		expect(Clock).toExist();
	});

	describe('render',  () => {


		it('should render clock to output',  () => {
			//converts our component to the actual HTML that is rendered to the browser. 
			var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
			//using jquery - use jQuery to find the "clock" HTML class node (this is the class that is on the outer div of the clock component)
			var $el = $(ReactDOM.findDOMNode(clock));
			//get the clock text
			var actualText = $el.find('.clock-text').text();

			expect(actualText).toBe('01:02');
		});

	});


	describe('formatSeconds',  () => {
		//test formatting to seconds.
		it('should format seconds',  () => {
			//need to render the component to test thigns  This renders the component and allows us to interact with it in the test environment.
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 615;
			var expected = '10:15';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});


		it('should format seconds when min/sec is less than 10',  () => {
			//need to render the component to test thigns  This renders the component and allows us to interact with it in the test environment.
			var clock = TestUtils.renderIntoDocument(<Clock/>);
			var seconds = 61;
			var expected = '01:01';
			var actual = clock.formatSeconds(seconds);

			expect(actual).toBe(expected);
		});
	});





});


