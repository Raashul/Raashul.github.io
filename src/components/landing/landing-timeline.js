import React, { Component } from 'react';
import { Text } from '../index';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button } from 'react-bootstrap';

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
						Wrote my first Hello world in Java. My first ever complete project which was a music player android app.
					</Text>

					<div style={{ marginTop: 10 }}>
						<Button variant="dark" small disabled>
							Java
						</Button>
					</div>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: `${theme.journeyBlockTwo}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid  #3C4A4C' }}
					date="2018"
					iconStyle={{ background: '#3C4A4C', color: '#3C4A4C' }}
				>
					<Text color={theme.color} size="16px">
						I interned at a small startup team at <u>Yeti</u>, where I built an analytics micro service with{' '}
						<u>Node.js </u> and a loyalty program web dashboard with <u> React</u> that tracks user transaction.
					</Text>

					<div style={{ display: 'flex', justifyContent: 'space-evenly', marginTop: 10, overflow: 'auto' }}>
						<Button variant="dark" small disabled>
							Node.js
						</Button>
						<Button variant="dark" small disabled>
							React
						</Button>
						<Button variant="dark" small disabled>
							MySQL
						</Button>
					</div>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--work"
					contentStyle={{ background: `${theme.journeyBlockThree}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid #786759' }}
					date="2019"
					iconStyle={{ background: '#786759', color: '#786759' }}
				>
					<Text color={theme.color} size="16px">
						I graduated my undergrad from <u>Caldwell University </u> in May, and I started working as a software
						engineer intern at
						&nbsp; <u>ANRA Technologies.</u>
					</Text>

					<br />

					<Text color={theme.color} size="16px">
						I built multiple RESTful micro services with Node.js. I also joined the
						front end team in late 2019.
					</Text>

					<div style={{ display: 'flex', marginTop: 10, justifyContent: 'space-evenly', overflow: 'auto' }}>
						<Button variant="dark" small disabled>
							Node.js
						</Button>

						<Button variant="dark" small disabled>
							Vue.js
						</Button>

						<Button variant="dark" small disabled>
							PostgreSQL
						</Button>
						<Button variant="dark" small disabled>
							Aurelia.js
						</Button>
					</div>
				</VerticalTimelineElement>

				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: `${theme.journeyBlockFive}`, color: `${theme.color}` }}
					contentArrowStyle={{ borderRight: '7px solid  #48788C' }}
					date="2020"
					iconStyle={{ background: '#48788C', color: '#48788C' }}
				>
					<Text color={theme.color} size="16px">
					Started my FT role at <u> ANRA Technologies</u> where I worked closely with the front end team. I
						led a team of 4 engineers in the complete migration of the front end codebase from Aurelia.js to Vue.js.

					</Text>
					<br />

					<Text color={theme.color} size="16px">
						Optimize user experiece, reduced page load by 40%, and refined the live drone tracking portal that increased scalability by 3x.
					</Text>
					<div
						className="technologies-tab"
						style={{ display: 'flex', overflow: 'auto', marginTop: 10, justifyContent: 'space-evenly' }}
					>
						<Button variant="dark" small disabled>
							Vue.js
						</Button>
						<Button variant="dark" small disabled>
							Vuex
						</Button>
						<Button variant="dark" small disabled>
							Firebase
						</Button>
						<Button variant="dark" small disabled>
							MQTT
						</Button>

						
					</div>
				</VerticalTimelineElement>
				<VerticalTimelineElement
					className="vertical-timeline-element--education"
					contentStyle={{ background: `${theme.journeyBlockFour}`, color: `${theme.color}` }}

					contentArrowStyle={{ borderRight: '7px solid  #0F2935' }}
					date="2021"
					iconStyle={{ background: '#0F2935', color: '#0F2935' }}
				>
					<Text color={theme.color} size="16px">
					Led the technical team to build a beta version of a drone delivery application which was launched as the &nbsp;
					</Text>
					<Text color={theme.color} size="16px" bold>
					<a target="_blank" href="https://www.anratechnologies.com/home/news/anra-technologies-and-swiggy-make-history-by-launching-first-end-to-end-bvlos-drone-delivery-trials-in-india/">first ever end-to-end BVLOS Drone Delivery Trials in India</a>
					</Text>

					<div style={{ display: 'flex', marginTop: 10, justifyContent: 'space-evenly', overflow: 'auto' }}>
						<Button variant="dark" small disabled>
							React-Native
						</Button>
						<Button variant="dark" small disabled>
							Spring
						</Button>
						<Button variant="dark" small disabled>
							Kafka
						</Button>
						<Button variant="dark" small disabled>
							Redis
						</Button>
					</div>
				</VerticalTimelineElement>
			</VerticalTimeline>
		);
	}
}

export default LandingTimeline;
