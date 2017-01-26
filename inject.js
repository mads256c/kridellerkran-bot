// this is the code which will be injected into a given page...
var storage = chrome.storage.local;

(function() {
	storage.get('bEnabled', function(items) {
		if (items.bEnabled == true)
		{
			storage.get('id', function(items) {
			//console.log(items);
				if (items.id)
				{
					window.location = "vote.php?id=" + items.id;
				}
			});
		}
	});
})();