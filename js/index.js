var data_in_server = [   //for example
	{first_name:'f_a', priceUSD:10, priceUAH: 250},
	{first_name:'f_b', priceUSD:10, priceUAH: 250},
	{first_name:'f_c', priceUSD:10, priceUAH: 250},
	{first_name:'f_d', priceUSD:10, priceUAH: 250},
	{first_name:'f_e', priceUSD:10, priceUAH: 250},
	{first_name:'f_f', priceUSD:10, priceUAH: 250},
	{first_name:'f_g', priceUSD:10, priceUAH: 250},
	{first_name:'f_h', priceUSD:10, priceUAH: 250},
	{first_name:'f_i', priceUSD:10, priceUAH: 250},
	{first_name:'f_j', priceUSD:10, priceUAH: 250},
	{first_name:'f_k', priceUSD:10, priceUAH: 250}
];



function TableApi() {
	var data;
	function getData(){  //get data from server
		return data_in_server;
	}

	this.createTable = function() {
		data = getData();
		var tbody = document.createElement('tbody');
	
	var td = document.createElement('td');
		for(var i = 0; i < data.length; i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			td.textContent = i+1;
			tr.appendChild(td);

			for(var key in data[i]) {
				var td = document.createElement('td');
				td.textContent = data[i][key];
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		var table = document.getElementById('report');
		table.appendChild(tbody);
	}

}

window.onload = function() {
	var table = new TableApi();
	table.createTable();
}
