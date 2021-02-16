import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';
//props passing into functional component, also destructured and specifically added in per name
const Search = () => {
	const githubContext = useContext(GithubContext);
	const alertContext = useContext(AlertContext);
	//using useState hook, destructure each piece of state (in this case only 'text'),
	//create method named after piece of state with 'set' before, and set default value inside of setState
	const [
		text,
		setText
	] = useState('');

	const onChange = (e) => {
		//clarifying name value in case of multiple text fields ==> makes this function applicable to them all
		setText(e.target.value);
	};
	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			alertContext.setAlert('Please enter something', 'light');
		} else {
			githubContext.searchUsers(text);
			setText('');
		}
	};
	//------------------------------
	return (
		<div>
			<form onSubmit={onSubmit} className="form">
				<input type="text" name="text" placeholder="Search for Github users" value={text} onChange={onChange} />
				<input type="submit" value="Search" className="btn btn-dark btn-block" />
			</form>
			{/* if this.props.showClear is true, show button */}
			{githubContext.users.length > 0 && (
				<button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>
					Clear
				</button>
			)}
		</div>
	);
};
export default Search;
// <----------------------------------------- Notes ----------------------------------------->
//onChange prior to using hooks --
// const onChange = (e) => {
//clarifying name value in case of multiple text fields ==> makes this function applicable to them all
// this.setState({ [e.target.name]: e.target.value });
// };
