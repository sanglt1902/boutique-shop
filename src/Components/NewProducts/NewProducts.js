import React, { Component } from 'react';
import NewProductTitle from './NewProductTitle';
import SimpleSlider from './SimpleSlider';


class NewProducts extends Component {
    render() {
        return (
            <div id="fh5co-blog-popular">
			<div class="container">
				<NewProductTitle/>
				<div class="row">
					<SimpleSlider/>
				</div>
			</div>
		</div>
        );
    }
}

export default NewProducts;
