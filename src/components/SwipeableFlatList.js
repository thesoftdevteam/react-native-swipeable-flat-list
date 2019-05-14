'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FlatList, PanResponder, View } from 'react-native';

import SwipeableListItem from './SwipeableListItem';


export default class SwipeableFlatList extends Component {
	static propTypes = {
		data: PropTypes.arrayOf(PropTypes.object).isRequired,
		renderItem: PropTypes.func.isRequired,
		renderLeft: PropTypes.func,
		renderRight: PropTypes.func,
		itemBackgroundColor: PropTypes.string,
	};

	static defaultProps = {
		backgroundColor: '#fff',
	};

	constructor(props) {
		super(props);
		this._itemRef = React.createRef();
	}

	_handleOpenChild = (ref) => {
		this._itemRef.?current?.close?.();
		this._itemRef = ref;
	}

	_handleCloseChild = () => {
		this._itemRef = undefined;
	}

	_handleScroll = () => {
		this._itemRef?.close?.();
	}

	render = () => {
		const {
			data,
			renderItem,
			renderLeft,
			renderRight,
			itemBackgroundColor,
			style,
		} = this.props;
		return (
			<FlatList
				{...this.props}
				data={data}
				renderItem={({ item }) =>
					<SwipeableListItem
						item={renderItem({ item })}
						left={renderLeft && renderLeft({ item })}
						right={renderRight && renderRight({ item })}
						backgroundColor={itemBackgroundColor}
						onOpen={this._handleOpenChild}
						onClose={this._handleCloseChild}
					/>
				}
				onScroll={this._handleScroll}
			/>
		);
	}
}
