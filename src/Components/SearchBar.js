import React, { Component } from 'react';
import { Form, Input, Layout } from 'element-react/next';
import 'element-theme-default';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			form: {
				imageSearch: ''
			}
		};
	}
	onFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSubmit(this.state.form.imageSearch);
	};
	onInputChange(key, value) {
		console.log(key, value);
		this.setState({
			form: Object.assign({}, this.state.form, { [key]: value })
		});
	}
	render() {
		return (
			<Form
				ref="form"
				model={this.state.form}
				className="en-US ImageSearch"
				labelWidth="120"
				onSubmit={this.onFormSubmit}
			>
				<Layout.Row type="flex" className="row-bg" justify="center">
					<Layout.Col span="8">
						<Form.Item label="Image Search" style={{ marginTop: 10, borderReduis: 100 }}>
							<Input
								value={this.state.form.imageSearch}
								onChange={this.onInputChange.bind(this, 'imageSearch')}
							/>
						</Form.Item>
					</Layout.Col>
				</Layout.Row>
			</Form>
		);
	}
}
