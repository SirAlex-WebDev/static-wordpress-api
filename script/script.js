document.getElementById("submit").onclick = getRestAPI();

async function getRestAPI() {
	var url = document.getElementById("url").value;
	const response = await fetch(url);
	const json = awai
	response.json();
	console.log(json);
}