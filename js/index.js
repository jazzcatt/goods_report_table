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
	{first_name:'f_k', priceUSD:10, priceUAH: 250},
	{first_name:'f_l', priceUSD:10, priceUAH: 250},
	{first_name:'f_m', priceUSD:10, priceUAH: 250},
	{first_name:'f_n', priceUSD:10, priceUAH: 250},
	{first_name:'f_o', priceUSD:10, priceUAH: 250},
	{first_name:'f_p', priceUSD:10, priceUAH: 250},
	{first_name:'f_q', priceUSD:10, priceUAH: 250},
	{first_name:'f_r', priceUSD:10, priceUAH: 250},
	{first_name:'f_s', priceUSD:10, priceUAH: 250},
	{first_name:'f_t', priceUSD:10, priceUAH: 250},
	{first_name:'f_u', priceUSD:10, priceUAH: 250},
	{first_name:'f_dv', priceUSD:10, priceUAH: 250},
	{first_name:'f_w', priceUSD:10, priceUAH: 250},
	{first_name:'f_x', priceUSD:10, priceUAH: 250},
	{first_name:'f_y', priceUSD:10, priceUAH: 250},
	{first_name:'f_z', priceUSD:10, priceUAH: 250}
	
];



function TableApi() {
	var data;
	var step = 10;              // count of items for one page
	var currentPage = 1; 		
	var countPages;             // count of all pages  

	function getData(){  
	       //get data from server
	    data = data_in_server;
		return data;
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
		getCountPages(data.length);
		var tbody = document.createElement('tbody');
		var table = document.getElementById('report');
		tbody.id = 'report_body';
		table.contains(document.getElementById('report_body')) ? table.removeChild(document.getElementById('report_body')) : null;
		var td = document.createElement('td');

		for(var i = 0; i < step && i < data.length - (currentPage*step-step); i++) {
			var tr = document.createElement('tr');
			var td = document.createElement('td');
			var elemNum = (currentPage * step)+i-step;
			td.innerText = elemNum + 1;
			tr.appendChild(td);

			for(var key in data[elemNum]) {
				var td = document.createElement('td');
				td.innerText = data[elemNum][key];
				tr.appendChild(td);
			}
			tbody.appendChild(tr);
		}
		
		table.appendChild(tbody);
	}

	function tFoodShow() {
		var footer = document.getElementById('table_footer');
		var signature = document.getElementById('signature');
		console.log(footer.style.display);
		currentPage < countPages ? footer.style.display = 'none':footer.style.display = 'table-footer-group';
 		footer.style.display == 'table-footer-group' ? signature.style.display = 'block' : signature.style.display='none';
	}

	function currPageShow() {
		document.getElementById('page_num').innerText = currentPage+' from '+countPages;
	}
	function arrowButtonControl() {
		var right_arrow = document.querySelector('#right_arrow'); 
		var left_arrow = document.querySelector('#left_arrow'); 
		if(countPages == 1) {
			right_arrow.disabled=true;
			left_arrow.disabled=true;
			return;
		}
		if(currentPage > 1 && currentPage == countPages) {
			right_arrow.disabled = true;
			left_arrow.disabled = false;
			return;
		}
		if(currentPage == 1 && countPages != 1) {
			left_arrow.disabled = true;
			right_arrow.disabled = false;
			return;
		}
		if(currentPage != 1 && currentPage != countPages) {
			right_arrow.disabled = false;
			left_arrow.disabled = false;
		}
	}
	this.init = function() {
		getData();
		createTable();
		currPageShow();
		tFoodShow();

		document.getElementById('pagin_bar').onclick = function (e){
			changePage(e);
		}
	}
	 	function changePage(e) {
		var e = e || window.event;                   //for IE 
		var evtTarget = e.target || e.srcElement;
		if(evtTarget.id == 'right_arrow') {
			currentPage +=1;	
		}else{
			currentPage -=1;
		}
		createTable();
		arrowButtonControl();
		currPageShow();
		tFoodShow();
	}

}

window.onload = function() {
	var table = new TableApi();
	table.init();	

}
