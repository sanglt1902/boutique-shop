import React, { Component } from 'react';
import RecentlyNews from './RecentlyNews';
import NewEventsSlider from './NewEventsSlider';


class SummarySlider extends Component {
    render() {
        return (
            <aside id="fh5co-hero">
                <div className="container">
                    <div className="row">
                        <NewEventsSlider />
                        <RecentlyNews />
                    </div>
                </div>
            </aside>
        );
    }
}

export default SummarySlider;
