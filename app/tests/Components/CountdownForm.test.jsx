var expect    = require('expect');
var React     = require('react');
var ReactDOM  = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $         = require('jQuery');

var CountdownForm = require('CountdownForm');


describe('CountdownForm',  () => {

	it('should exist',  () => {
		expect(CountdownForm).toExist();
	});

	it('should call onSetCountdown if valid seconds entered',  () => {
		//spy's are a way to tell if a fucntion has been fired or not. 
		var spy = expect.createSpy();
		//here you pass in the spy to see if it gets called. 
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm  onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		//add a value to the seconds 
		countdownForm.refs.seconds.value = '109';
		//submit the form - this simulates submitting the form
		TestUtils.Simulate.submit($el.find('form')[0]);

		//did the function get called witha value of 109.
		expect(spy).toHaveBeenCalledWith(109);

	});

	it('should not call onSetCountdown if invalid seconds entered',  () => {
		//spy's are a way to tell if a fucntion has been fired or not. 
		var spy = expect.createSpy();
		//here you pass in the spy to see if it gets called. 
		var countdownForm = TestUtils.renderIntoDocument(<CountdownForm  onSetCountdown={spy}/>);
		var $el = $(ReactDOM.findDOMNode(countdownForm));

		//add a value to the seconds that is invalid and should not trigger the function to fire
		countdownForm.refs.seconds.value = 'asdasdf';
		//submit the form - this simulates submitting the form
		TestUtils.Simulate.submit($el.find('form')[0]);

		//did the function get called witha value of 109.
		expect(spy).toNotHaveBeenCalled();

	});

});