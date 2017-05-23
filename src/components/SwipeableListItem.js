'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Animated,
	PanResponder,
	View,
} from 'react-native';


const SWIPE = {
	ACTION: {
		CLOSELEFT: -2,
		CLOSERIGHT: 2,
		OPENLEFT: 1,
		OPENRIGHT: -1,
	},
	DIRECTION: {
		LEFT: -1,
		RIGHT: 1,
	},
	STATE: {
		CLOSED: 0,
		LEFTOPEN: -1,
		RIGHTOPEN: 1,
	},
};


export default class SwipeableListItem extends Component {
	static propTypes = {
		item: PropTypes.element,
		left: PropTypes.element,
		right: PropTypes.element,
		backgroundColor: PropTypes.string,
	};

	static defaultProps = {
		backgroundColor: '#fff',
	};

	state = {};

	constructor(props) {
		super(props);
		this._panResponder = PanResponder.create({
			onMoveShouldSetPanResponder: (event, gestureState) => this.handleMoveShouldSetPanResponder(event, gestureState),
			onPanResponderGrant: (event, gestureState) => this.handlePanResponderGrant(event, gestureState),
			onPanResponderMove: (event, gestureState) => this.handlePanResponderMove(event, gestureState),
			onPanResponderRelease: (event, gestureState) => this.handlePanResponderEnd(event, gestureState),
			onPanResponderTerminate: (event, gestureState) => this.handlePanResponderEnd(event, gestureState),
		});
	}

	handleMoveShouldSetPanResponder(event, gestureState) {}

	handlePanResponderGrant(event, gestureState) {}

	handlePanResponderMove(event, gestureState) {}

	handlePanResponderEnd(event, gestureState) {}

	render() {
		const {
			item,
			left,
			right,
			backgroundColor,
		} = this.props;
		return (
			<View />
		);
	}
}
