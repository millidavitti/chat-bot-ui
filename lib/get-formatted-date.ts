export default function getFormattedDate() {
	const date = new Date();

	const monthNames = [
		"Jan",
		"Feb",
		"Mar",
		"Apr",
		"May",
		"Jun",
		"Jul",
		"Aug",
		"Sep",
		"Oct",
		"Nov",
		"Dec",
	];

	const month = monthNames[date.getMonth()];
	const day = date.getDate();
	let hours = date.getHours();
	const minutes = date.getMinutes();
	const ampm = hours >= 12 ? "PM" : "AM";

	hours = hours % 12;
	hours = hours ? hours : 12; // the hour '0' should be '12'
	const strTime =
		hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + ampm;

	return `${month} ${day}, ${strTime}`;
}

console.log(getFormattedDate()); // Outputs: "Jan 27, 12:53 PM"
