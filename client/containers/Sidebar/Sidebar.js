import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { toggleSideBar } from '../../redux/actions/appActions';

const styles = {
	list: {
		width: 250,
	},
	fullList: {
		width: 'auto',
	},
};

class SwipeableTemporaryDrawer extends React.Component {
	state = {
		left: false,
	};

	toggleDrawer = (open) => () => {
		this.setState({
			left: open,
		});
	};

	render() {
		const { openSideBar, toggleSideBar } = this.props;
		if (!openSideBar) {
			return null;
		}
		const { classes } = this.props;

		const sideList = (
			<div className={classes.list}>
				<List>
					{['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{['All mail', 'Trash', 'Spam'].map((text, index) => (
						<ListItem button key={text}>
							<ListItemIcon>
								{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
							</ListItemIcon>
							<ListItemText primary={text} />
						</ListItem>
					))}
				</List>
			</div>
		);

		return (
			<div>
				<SwipeableDrawer
					open={openSideBar}
					onClose={() => toggleSideBar(false)}
					onOpen={() => toggleSideBar(true)}>
					<div
						tabIndex={0}
						role="button"
						onClick={() => toggleSideBar(false)}
						onKeyDown={() => toggleSideBar(false)}>
						{sideList}
					</div>
				</SwipeableDrawer>
			</div>
		);
	}
}

SwipeableTemporaryDrawer.propTypes = {
	classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	loading: state.app.loading,
	openSideBar: state.app.openSideBar,
});

const mapDispatchToProps = { toggleSideBar };

const connectSide = withStyles(styles)(SwipeableTemporaryDrawer);
export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(connectSide);
