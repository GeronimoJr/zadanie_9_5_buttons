function downloadElements() {
	var buttons = document.getElementsByClassName('button');
	console.log(buttons);

	var max = buttons.length;

	for(i = 0; i <= max; i++) {
		var text = buttons[i].innerText;
		alert(text);
	}
}

downloadElements();

