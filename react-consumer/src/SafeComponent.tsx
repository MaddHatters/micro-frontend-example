import React from "react";

export default class SafeComponent extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		console.log(`getDerivedStateFromError`)
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(`componentDidCatch error`, error)
	}

	render() {
		// @ts-ignore
		if (this.state.hasError) {
			console.log(`render error`, this.state)
			return <h1>Something went wrong.</h1>;
		}
		console.log(`render fine`, this.state)
		return this.props.children;
	}
}