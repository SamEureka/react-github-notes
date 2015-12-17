var React = require('react');
var Router = require('react-router');
var Repos = require('./github/Repos');
var UserProfile = require('./github/UserProfile');
var Notes = require('./notes/Notes');

var Profile = React.createClass({
	getInitialState: function(){
		return {
			notes: ["a", "b", "c", "d", "e", "f"],
			bio: {
				name: "SamEureka"},
			repos: [1,2,3,4,5,6]
		}
	},

	render: function(){
		return (
			<div className="row">
				<div className="col-md-4">
					<UserProfile username={this.props.params.username} bio={this.state.bio} />
				</div>
				<div className="col-md-4">
					<Repos repos={this.state.repos} />
				</div>
				<div className="col-md-4">
					<Notes notes={this.state.notes} />
				</div>
			</div>
		)
	}

});

module.exports = Profile;