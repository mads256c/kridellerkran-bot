var storage = chrome.storage.local;

var checkboxEnabled = document.querySelector('input.enabled');
var textID = document.querySelector("input.id");
var buttonSave = document.querySelector("input.submit");


function loadOptions()
{

	storage.get('bEnabled', function(items) {
		console.log(items);
		if (items.bEnabled)
		{
			checkboxEnabled.checked = items.bEnabled;
		}
	});
		
	storage.get('id', function(items) {
		if (items.id)
		{
			textID.value = items.id;
		}
	});
		
	
}

function saveOptions()
{
	var bEnabled = checkboxEnabled.checked;
	var id = textID.value;
	
	storage.set({'bEnabled': bEnabled}, function() {
	});
	
    storage.set({'id': id}, function() {
	});
	
	
	if (bEnabled == true)
	{
		chrome.browserAction.setBadgeText({text: "TIL"});
		chrome.browserAction.setBadgeBackgroundColor({color: "#5555FF"});
	}
	else
	{
		chrome.browserAction.setBadgeText({text: "FRA"});
		chrome.browserAction.setBadgeBackgroundColor({color: "#FF5555"});
	}
}

document.addEventListener('DOMContentLoaded', function () {
	checkboxEnabled = document.querySelector('input.enabled');
	textID = document.querySelector("input.id");
	buttonSave = document.querySelector("input.submit");
loadOptions();
document.getElementById("submit").addEventListener('click', saveOptions);

document.getElementById("help").addEventListener('click', function() {
	window.open(chrome.runtime.getURL("help.html"));
});

window.addEventListener('click',function(e){
  if(e.target.href!==undefined){
    chrome.tabs.create({url:e.target.href})
  }
})

});