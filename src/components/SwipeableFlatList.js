'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList } from 'react-native';

import SwipeableListItem from './SwipeableListItem';


export default class SwipeableFlatList extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.object).isRequired,
		renderItem: PropTypes.func.isRequired,
		renderLeft: PropTypes.func,
		renderRight: PropTypes.func,
		backgroundColor: PropTypes.string,
	};

	static defaultProps = {
		backgroundColor: '#fff',
	};

	state = {};

	constructor(props) {
		super(props);
	}

	render() {
		const {
			data,
			renderItem,
			renderLeft,
			renderRight,
			backgroundColor,
		} = this.props;
		return (
			<FlatList
				data={data}
				renderItem={({ item }) =>
					<SwipeableListItem
						item={renderItem({ item })}
						left={renderLeft({ item })}
						right={renderRight({ item })}
						backgroundColor={backgroundColor}
					/>
				}
			/>
		);
	}
}
