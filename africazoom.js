var zoom = new Datamap({
  element: document.getElementById("zoom_map"),
  scope: 'world',
  // Zoom in on Africa
  setProjection: function(element) {
    var projection = d3.geo.equirectangular()
      .center([23, -3])
      .rotate([4.4, 0])
      .scale(400)
      .translate([element.offsetWidth / 2, element.offsetHeight / 2]);
    var path = d3.geo.path()
      .projection(projection);

    return {path: path, projection: projection};
  },
  fills: {
    defaultFill: "#ABDDA4",
    gt50: colors(Math.random() * 20),
    eq50: colors(Math.random() * 20),
    lt25: colors(Math.random() * 10),
    gt75: colors(Math.random() * 200),
    lt50: colors(Math.random() * 20),
    eq0: colors(Math.random() * 1),
    pink: '#0fa0fa',
    gt500: colors(Math.random() * 1)
  },
  data: {
    'ZAF': { fillKey: 'gt50' },
    'ZWE': { fillKey: 'lt25' },
    'NGA': { fillKey: 'lt50' },
    'MOZ': { fillKey: 'eq50' },
    'MDG': { fillKey: 'eq50' },
    'EGY': { fillKey: 'gt75' },
    'TZA': { fillKey: 'gt75' },
    'LBY': { fillKey: 'eq0' },
    'DZA': { fillKey: 'gt500' },
    'SSD': { fillKey: 'pink' },
    'SOM': { fillKey: 'gt50' },
    'GIB': { fillKey: 'eq50' },
    'AGO': { fillKey: 'lt50' }
  }
});
zoom.bubbles([
 {name: 'Bubble 1', latitude: 21.32, longitude: -7.32, radius: 45, fillKey: 'gt500'},
 {name: 'Bubble 2', latitude: 12.32, longitude: 27.32, radius: 25, fillKey: 'eq0'},
 {name: 'Bubble 3', latitude: 0.32, longitude: 23.32, radius: 35, fillKey: 'lt25'},
 {name: 'Bubble 4', latitude: -31.32, longitude: 23.32, radius: 55, fillKey: 'eq50'},
], {
 popupTemplate: function(geo, data) {
   return "<div class='hoverinfo'>Bubble for " + data.name + "</div>";
 }
});
