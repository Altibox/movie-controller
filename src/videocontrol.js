import React from 'react';

class VideoControl extends React.Component {
  render() {
  	console.log("isPlaying: "+this.props.isPlaying);
    return <div id="controls">
    		<style>{'#controls span{float:left; margin-right:20px; border:1px solid #333; padding:5px 15px; cursor:pointer;}'}</style>
    		{this.props.isPlaying && 
    			<div>
    				<span onClick={this.props.onEvent.bind('Stop')}>Stop</span>
    				<span onClick={this.props.onEvent.bind('Pause')}>Pause</span>
				</div>
    		}
    		{!this.props.isPlaying &&
    			<div>
    				<span onClick={this.props.onEvent.bind('Play')}><i className="fa fa-play">Play</i></span>
				</div>
    		}
		</div>;
  }
}

export default VideoControl;
