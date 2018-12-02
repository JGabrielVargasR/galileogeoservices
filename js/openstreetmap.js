var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
		osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		osm = L.tileLayer(osmUrl, {maxZoom: 21, attribution: osmAttrib});
	var map = L.map('map').setView([4.724327, -74.231055], 15).addLayer(osm);
	L.marker([4.724327, -74.231055])
		.addTo(map)
		.bindPopup('Galileo Geoservices S.A.S.')