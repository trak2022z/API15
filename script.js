const form = document.querySelector('#capital-form');
const capitalInput = document.querySelector('#capital-input');
const countryData = document.querySelector('#country-data');

form.addEventListener('submit', event => {
	event.preventDefault();

	const capital = capitalInput.value;

	fetch(`https://restcountries.com/v3.1/capital/${capital}`)
	.then(response => response.json())
	.then(data => {
		let countryTable = `
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Capital</th>
						<th>Population</th>
						<th>Region</th>
						<th>Subregion</th>
					</tr>
				</thead>
				<tbody>
		`;

		const country = data[0];
		countryTable += `
			<tr>
				<td>${country.name.common}</td>
				<td>${country.capital[0]}</td>
				<td>${country.population}</td>
				<td>${country.region}</td>
				<td>${country.subregion}</td>
			</tr>
		`;

		countryTable += `
				</tbody>
			</table>
		`;

		countryData.innerHTML = countryTable;
	})
	.catch(error => console.error(error));
});
