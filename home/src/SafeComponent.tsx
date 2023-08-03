import React from "react";

export default class SafeComponent extends React.Component {
	constructor(props: any) {
		super(props);

		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error: any) {
		return { hasError: true };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
		console.log(`error`, error)
	}

	render() {
		// @ts-ignore
		if (this.state.hasError) {
			return <h1>Something went wrong.</h1>;
		}

		return this.props.children;
	}
}