import React, { Component } from 'react';
import SliderItem from './SliderItem/SliderItem.jsx';
import SliderDots from './SliderDots/SliderDots.jsx';
import SliderArrows from './SliderArrows/SliderArrows.jsx';
require('./Slider.css');

export default class Slider extends Component {
	constructor (props) {
		super(props);
		this.state = {
			nowLocal: 0
		}
	}

	//切换
	turn(n) {
		var _n = this.state.nowLocal + n;
		if(_n < 0){
			_n += this.props.items.length;
		}
		if(_n > this.props.items.length - 1){
			_n -= this.props.items.length;
		}
		this.setState({nowLocal: _n})
	}

	//开始轮播
	goPlay() {
		if(this.props.autoPlay) {
			this.autoPlayFlag = setInterval(() => {
				this.turn(1);
			},this.props.delay*1000);
		}
	}

	//结束轮播
	pausePlay() {
    	clearInterval(this.autoPlayFlag);
  	}

  	componentDidMount() {
    	this.goPlay();
  	}

   	render() {
   		let count = this.props.items.length;
   		let itemNodes = this.props.items.map((item,idx) => {
   			return <SliderItem item={item} count={count} key={'item' + idx} />
   		});
   		let arrowNodes = <SliderArrows turn={this.turn.bind(this)} />;
   		let dotNodes = <SliderDots turn={this.turn.bind(this)} count={count} nowLocal={this.state.nowLocal} />;
     	return(
     	    <div className="slider"
     	    	onMouseEnter= {this.props.pause?this.pausePlay.bind(this):null}
     	    	onMouseLeave = {this.props.pause?this.goPlay.bind(this):null}>
     	    	<ul style={{
     	    		left: -780 * this.state.nowLocal + 'px',
              transitionDuration: this.props.speed + "s",
              width: this.props.items.length * 780 +'px'
     	    	}}>
     	    		{itemNodes}
     	    	</ul>
     	    	{this.props.arrows?arrowNodes:null}
        	  {this.props.dots?dotNodes:null}
        	</div>
     	);
   }
};
Slider.defaultProps = {
  speed: 1,
  delay: 2,
  pause: true,
  autoPlay: true,
  dots: true,
  arrows: true,
  items: [],
};
Slider.autoPlayFlag = null;
