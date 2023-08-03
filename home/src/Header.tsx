import React from "react"

export default function Header({ app }: any) {
	return (
		<div className="p-5 bg-blue-500 text-white text-3xl">
			Fidget Spinner World | {app.name}
		</div>
	);
}