// !!!!!!!!!!!!!!!!!!!! DEBUGG BOX !!!!!!!!!!!!!!!!!!!!
DebuggerON = 1;
if (DebuggerON == 1) {
	setInterval(function () {
		debugbox()
	}, 1000);
	document.write('<div style="background-color: #F4A83D;width: 500px;padding: 0px;position: fixed;bottom: 0px;right: 0px;"><span><div id="variabler"></div></span></div>');
}
function debugbox() {
	if (typeof v1 === 'undefined') {
		v1 = "-";
	}
	if (typeof v2 === 'undefined') {
		v2 = "-";
	}
	if (typeof v3 === 'undefined') {
		v3 = "-";
	}
	if (typeof v4 === 'undefined') {
		v4 = "-";
	}
	if (typeof v5 === 'undefined') {
		v5 = "-";
	}
	if (typeof v6 === 'undefined') {
		v6 = "-";
	}
	document.getElementById("variabler").innerHTML = '<table border="1" cellpadding=0 cellspacing=0 width=100% style="font-size: 12px;"><tbody><tr><td width=100>V1: ' + v1 + '</td><td width=100>V3: ' + v3 + '</td><td width=100>V5: ' + v5 + '</td></tr><tr><td width=100>V2: ' + v2 + '</td><td width=100>V4: ' + v4 + '</td><td width=100>V6: ' + v6 + '</td></tr></tbody></table>';
}
// !!!!!!!!!!!!!!!!!!!! DEBUGG BOX !!!!!!!!!!!!!!!!!!!!