import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//destructured props, queried user, then accessed attributes specific to user
const UserItem = ({ user: { login, avatar_url, html_url } }) => {
	return (
		<div className="card text-center">
			<img src={avatar_url} className="round-img" style={{ width: '60px' }} alt="" />
			<h3>{login}</h3>

			<div>
				<Link to={`/user/${login}`} className="btn btn-dark btn-sm my-1">
					More
				</Link>
			</div>
		</div>
	);
};

UserItem.propTypes = {
	user: PropTypes.object.isRequired
};
export default UserItem;
// <----------------------------------------- Notes ----------------------------------------->

//EX1. Class-Based Component ----------------------------------------->
// class UserItem extends Component {

// Example with constructor function ------->
// constructor() {
// 	super();
// 	this.state = {
// 		id: 'id',
// 		login: 'mojombo',
// 		avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
// 		html_url: 'https://gibhub.com/mojombo'
// 	};
// }								--------->

// 	render() {
// 		//destructuring to keep from repeating this.state, which is required on listed variables below
// 		const { login, avatar_url, html_url } = this.props.user;
// 		return (
// 			<div className="card text-center">
// 				<img src={avatar_url} className="round-img" style={{ width: '60px' }} />
// 				<h3>{login}</h3>

// 				<div>
// 					<a href={html_url} className="btn btn-dark btn-sm my-1">
// 						More
// 					</a>
// 				</div>
// 			</div>
// 		);
// 	}
// }
