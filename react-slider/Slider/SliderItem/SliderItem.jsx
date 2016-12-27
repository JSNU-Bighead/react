import React from 'react'
class SliderItem extends React.Component {
	constructor(props) {
  	  super(props);
  	}
	render() {
		let {count, item} = this.props;
		return (
			<li className="slider-item">
				<img src={item.src} alt={item.alt} />
			</li>
		);
	}
}
 export default SliderItem