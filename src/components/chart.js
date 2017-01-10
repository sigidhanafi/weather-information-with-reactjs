import React from 'react';
import _ from 'lodash';
import { Sparklines, SparklinesLine, SparklinesSpots, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
	return _.round(_.sum(data)/data.length);
}

export default (props) => {
	return (
		<div>
			<Sparklines height={120} width={180} data={props.data} >
				<SparklinesLine style={{ strokeWidth: 3, stroke: props.color, fill: props.color }} />
			    <SparklinesSpots size={4}
			        style={{ stroke: props.color, strokeWidth: 3, fill: "white" }} />
			       <SparklinesReferenceLine type="avg" />
			</Sparklines>
			<div>avg : {average(props.data)} {props.units}</div>
		</div>
	);
}