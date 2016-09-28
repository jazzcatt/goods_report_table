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
	var step = 10;              // count of items for one page
	var currentPage = 1; 		
	var countPages;             // count of all pages  

	function getData(){         //get data from server
		return data_in_server;
	}

	function getCountPages(countItems) {
		var count = countItems/step;
		// if digit is float
		if((count ^ 0) !== count) {
			countPages = (count ^ 0)+1;
		}else{
			countPages = count;
		}
	}

	function createTable() {
		data = getData();
		getCountPages(data.length);
		var tbody = document.createElement('tbody');
	
	var td = document.createElement('td');
		for(var i = 0; i < step; i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			td.innerText = i+1;
			tr.appendChild(td);

			for(var key in data[i]) {
				var td = document.createElement('td');
				td.innerText = data[i][key];
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		var table = document.getElementById('report');
		table.appendChild(tbody);
	}

	function tFoodShow() {
		var footer = document.getElementById('table_footer');
		var sinature = document.getElementById('signature');
		currentPage < countPages ? footer.style.display = 'none': footer.style.display = 'block-inline';
		signature.style.display = footer.style.display;
	}

	function currPageShow() {
		document.getElementById('page_num').innerText = currentPage+' from '+countPages;
	}

	this.init = function() {
		createTable();
		currPageShow();
		tFoodShow();	
	}

}

window.onload = function() {
	var table = new TableApi();
	table.init();	
}
