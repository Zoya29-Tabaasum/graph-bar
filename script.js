		function updateGraph() {
			var inputVal = parseFloat(document.querySelector('#inputValue').value);
			var maxVal = parseFloat(document.querySelector('#maxValue').value);
			if (inputVal > maxVal) {
				alert('Input Value cannot be greater than Max Value');
				document.querySelector('#inputValue').value = '';
				document.querySelector('#maxValue').value = '';
				return;
			}
			var inputPercent = inputVal / maxVal * 100;
			var maxPercent = 100;
			document.querySelector('#inputBar').style.height = inputPercent + '%';
			document.querySelector('#maxBar').style.height = maxPercent + '%';
		}
		window.onload = function() {
			document.querySelector('#inputValue').onchange = updateGraph;
			document.querySelector('#maxValue').onchange = updateGraph;
		};
