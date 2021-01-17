import React, { Component } from 'react';
import { Text } from '../index';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

class LandingTimeline extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { theme } = this.props;

		return (
			<VerticalTimeline>
				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: `${theme.journeyBlockOne}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid  #486445' }}
					date="2016"
					iconStyle={{ background: '#486445', color: '#486445' }}
				>
					<Text color={theme.color} size="16px">
						Learned to code for the first time and wrote my first complete project which was a music player android app.
					</Text>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: `${theme.journeyBlockTwo}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid  #3C4A4C' }}
					date="2018"
					iconStyle={{ background: '#3C4A4C', color: '#3C4A4C' }}
				>
					<Text color={theme.color} size="16px">
						Interned at a small team at Yeti, where I built an analytics micro service with <u>Node.js </u> and a
						dashboard user interface with <u> React</u> that tracks user transaction.
					</Text>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: `${theme.journeyBlockThree}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid #786759' }}
					date="2019"
					iconStyle={{ background: '#786759', color: '#786759' }}
				>
					<Text color={theme.color} size="16px">
						After graduating from <u>Caldwell University </u> in May, I started working as a software engineer intern at
						Anra Technologies, where I built multiple RESTful micro services with Node.js.
					</Text>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: `${theme.journeyBlockFour}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid  #48788C' }}
					date="2020"
					iconStyle={{ background: '#48788C', color: '#48788C' }}
				>
					<Text color={theme.color} size="16px">
						I started Full Time at <u> ANRA Technologies</u>, where I worked closely with the front end team. I led the
						dev work on the migration of the front end codebase from aurelia.js to vue.js.
					</Text>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: `${theme.journeyBlockFive}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid  #0F2935' }}
					date="2021"
					iconStyle={{ background: '#0F2935', color: '#0F2935' }}
				>
					<Text color={theme.color} size="16px">
						Currently building and implemeting a beta version of an autonomous drone delievery application.
					</Text>
				</VerticalTimelineElement>
			</VerticalTimeline>
		);
	}
}

export default LandingTimeline;
