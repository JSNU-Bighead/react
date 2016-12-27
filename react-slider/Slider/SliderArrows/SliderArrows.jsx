import React from 'react'
class SliderArrows extends React.Component{
	constructor(props) {
		super(props);
	}

	handleArrowClick(i){
		this.props.turn(i)
	}

	render() {
		return(
			<div className="slider-arrows-wrap">
				<span
					className="slider-arrow slider-arrow-left"
					onClick={this.handleArrowClick.bind(this,-1)}>
					&lt;
				</span>
				<span
					className="slider-arrow slider-arrow-right"
					onClick={this.handleArrowClick.bind(this,1)}>
					&gt;
				</span>
			</div>
		);
	}
}
 export default SliderArrows