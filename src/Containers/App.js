import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from '../Components/SearchBar';
import ImageList from '../Components/ImageList';


//element-ui
import { i18n } from 'element-react';
import locale from 'element-react/src/locale/lang/en';
i18n.use(locale);

class App extends Component {
	state = {
		images: []
	};
	onSearchSubmit = async (imageSearch) => {
		const result = await unsplash.get('https://api.unsplash.com/search/photos', {
			params: { query: imageSearch }
		});
		// .then((response) => {
		this.setState({
			images: result.data.results
		});
		// });
	};
	render() {
		return (
			<div className="App">
				<SearchBar onSubmit={this.onSearchSubmit} />
				<ImageList images={this.state.images}/>
			</div>
		);
	}
}
export default App;
