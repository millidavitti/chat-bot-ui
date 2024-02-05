export default function pipeline(globalDispatch: any, userInput?: string) {
	globalDispatch({ type: "is_generating_response", status: true });

	if (!userInput)
		setTimeout(async () => {
			globalDispatch({ type: "is_generating_response", status: false });
			globalDispatch({
				type: "chat_response",
				response: [
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pharetra suscipit turpis, sed pellentesque arcu sollicitudin ut. Morbi metus dui, scelerisque id consectetur quis, accumsan id ipsum.",
					(await fetch("https://source.unsplash.com/random/200x200?sig=2")).url,
				],
			});
		}, 6000);
	else
		setTimeout(() => {
			globalDispatch({ type: "is_generating_response", status: false });
			globalDispatch({ type: "chat_response", response: "Finished!" });
		}, 6000);
}
