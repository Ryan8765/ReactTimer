const React     = require('react');
const ReactDOM  = require('react-dom');
const expect    = require('expect');
const $         = require('jQuery');
const TestUtils = require('react-addons-test-utils');

const Countdown = require('Countdown');


describe('Countdown',  () => {

	it('should exist',  () => {
		expect(Countdown).toExist();
	});

	describe('handleSetCountdown',  () => {
		//done tells mocha that this is an asnyc test and it should wait until done is called to stop the test. 
		it('should set state to started and countdown',  (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(10);
			//we know two things 
			expect(countdown.state.count).toBe(10);
			expect(countdown.state.countdownStatus).toBe('started');

			setTimeout( () => {
				expect(countdown.state.count).toBe(9);
				done();
			}, 1001);
		});

		//make sure the timer stops when it gets to zero 
		it('should stop timer at 0',  (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(1);

			setTimeout( () => {
				expect(countdown.state.count).toBe(0);
				done();
			}, 3001);
		});

		it('should pause countdown on paused status',  (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('paused');

			setTimeout( () => {
				expect(countdown.state.count).toBe(3);
				expect(countdown.state.countdownStatus).toBe('paused');
				done();
			}, 3000);
		});

		it('should reset countdown on stopped status',  (done) => {
			var countdown = TestUtils.renderIntoDocument(<Countdown/>);
			countdown.handleSetCountdown(3);
			countdown.handleStatusChange('stopped');

			setTimeout( () => {
				expect(countdown.state.count).toBe(0);
				expect(countdown.state.countdownStatus).toBe('stopped');
				done();
			}, 3000);
		});


	});


});