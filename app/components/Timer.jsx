const React = require('react');
const Clock = require('Clock');
const Controls = require('Controls');




var Timer = React.createClass({
	getInitialState: function() {
		return {
			count: 0,
			timerStatus: 'stopped'
		};
	},

	handleStatusChange: function(newStatus) {
		this.setState({timerStatus: newStatus})
	},

	startTimer: function() {
		this.timer = setInterval(() => {
			var newCount = this.state.count + 1;
			this.setState({
				count: newCount
			});
		}, 1000);
	},

	//this function gets called after either props or state variables get updated.
	componentDidUpdate: function(prevProps, prevState) {
		if(this.state.timerStatus !== prevState.timerStatus) {
			switch (this.state.timerStatus) {
				case 'started':
					this.startTimer(); 
					break;
				case 'stopped':
					this.setState({count: 0});
				case 'paused':
					clearInterval(this.timer);
					this.timer = undefined;
					break;
			}
		}
	},

	componentWillUnmount: function() {
		clearInterval(this.timer);
	},


	render: function() {
		var {timerStatus, count} = this.state;
		var {totalSeconds} = this.props;
		return(

			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds= {count}/>
				<Controls countdownStatus={timerStatus} onStatusChange={this.handleStatusChange}/>

			</div>

		);
	}


});


module.exports = Timer;