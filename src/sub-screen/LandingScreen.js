import React, { Component } from 'react';

import { IntroText, Text } from '../components/typography';

class LandingScreen extends Component {
	render() {
		const { theme } = this.props;
		return (
			<div className="container" style={{ opacity: 100 }}>
				<div className="intro-container" style={{ paddingTop: 90 }}>
					<IntroText color={theme.color} size="28px">
						Hello and नमस्ते ! 👋
					</IntroText>
					<br /> <br />
					<div style={{ marginTop: 50 }}>
						<IntroText color={theme.color}>
							My name is <b> Rashul Rajbhandari </b>.
						</IntroText>
					</div>
					<Text color={theme.color} size="15px">
						And, I like to build things for the internet.
					</Text>
				</div>
				<div style={{ marginTop: 80 }}>
					<Text color={theme.color}>
						I'm a software engineer who loves to learn and explore new ideas.
						<br /> <br />
						When I'm not in front of my computer, I like to play soccer, cook, and travel.
					</Text>
				</div>
			</div>
		);
	}
}

export default LandingScreen;
