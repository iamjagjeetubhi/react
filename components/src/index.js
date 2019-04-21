import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetails';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
	return (
		<div className="ui container comments">
			<ApprovalCard>
				<CommentDetail 
				author="Sam" 
				timeAgo="Today at 2:35PM" 
				avatar={faker.image.avatar()}  
				comment="Good Post!" 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Alex" 
					timeAgo="Today at 4:55PM" 
					avatar={faker.image.avatar()} 
					comment="Nice Post!" 
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail 
					author="Jane" 
					timeAgo="Today at 6:00PM" 
					avatar={faker.image.avatar()} 
					comment="Amazing!" 
				/>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector('#root'));