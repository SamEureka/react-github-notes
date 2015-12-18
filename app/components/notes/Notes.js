var React = require('react');
var NotesList = require('./NotesList');
var AddNote = require('./AddNote');

var Notes = React.createClass({
	propTypes: {
		notes: React.PropTypes.array.isRequired,
		username: React.PropTypes.string.isRequired,
		addNote: React.PropTypes.func.isRequired 
	},
	render: function(){
		return (
			<div> 
				<h3> Notes for {this.props.username} </h3>
				<AddNote username={this.props.username} addNote={this.props.addNote} />
				<NotesList notes={this.props.notes} />
			</div>
		)
	}
});

module.exports = Notes;