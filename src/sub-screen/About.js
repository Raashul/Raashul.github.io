import React, { Component } from 'react';

import { IntroText, Text, LineSeparator, HoverLinks } from '../components';
// import { Grid, Row, Col } from 'react-bootstrap';
// import { backgroundText } from '../utils';

// import ProfilePic from '../utils/images/profilepic.jpg';

import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LandingTimeline from '../components/landing/landing-timeline';

class About extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { theme } = this.props;

		return (
			<div className="container" style={{ marginTop: '60px' }}>
				<center>
					<IntroText color={theme.color}>About me: </IntroText>{' '}
				</center>
				<br /> <br />
				<LandingTimeline theme={theme} />
				<div style={{ marginTop: '60px', textAlign: 'center', fontSize: '1.2em', color: `${theme.color}` }}>
					<HoverLinks
						color={theme.color}
						target="_blank"
						href="https://docs.google.com/document/d/1-yFJ7UrkdUuFJzRDqNQuau4w1QBivunxokDapy2b4Kg/edit#"
					>
						Checkout Resume
					</HoverLinks>
				</div>
				<div className="contact-container" style={{ marginTop: '50px', textAlign: 'center', color: `${theme.color}` }}>
					<Text> Let's connect: </Text> <br />
					<a href="mailto:rashul1996@gmail.com?Subject=Hello%There" target="_blank" color={theme.color}>
						<Text>
							{' '}
							<u> rashul1996@gmail.com </u>{' '}
						</Text>
					</a>
					<br /> <br />
					<Text>
						{' '}
						Send me a tweet : &nbsp;
						<HoverLinks
							color={theme.color}
							href="https://twitter.com/intent/tweet?text=Hi%20@Rashul_Cfc%20%20"
							target="_blank"
							color={theme.color}
						>
							<i class="fab fa-twitter fa-2x" color={theme.color} style={{ fontSize: '30px' }} />
						</HoverLinks>
					</Text>
				</div>
			</div>
		);
	}
}

export default About;
