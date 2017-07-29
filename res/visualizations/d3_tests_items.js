json_data = (100, 234, 5, 23, 65, 78, 23, 43)

function draw_vis(data, width, height){
  var svg = d3.select("body")
    .append("svg")
    .attr("width", width +80)
    .attr("height", height +80);

  var g = svg.append("g").attr("transform", "translate(40, 40)");

  g.append("rect")
    .attr("width", "100%")
    .attr("height", "100%")
    .attr("fill", "#cfcfcf");

  var x = d3.scaleLinear()
    .rangeRound([0, width]);

  var bins = d3.histogram()
    .domain(x.domain())
    .thresholds(x.ticks(20))
    (data);

  var y = d3.scaleLinear()
    .domain([0, d3.max(bins, function(d) { return d.length; })])
    .range([height, 0]);

  var bar = g.selectAll(".bar")
    .data(bins)
    .enter()
    .append("g")
      .attr("class", "bar")
      .attr("transform", function(d) { return "translate(" + x(d.x0) + ", " + y(d.length) + ")"; });

  bar.append("rect")
    .attr("x", 5)
    .attr("width", x(bins[0].x1) - x(bins[0].x0) - 1)
    .attr("height", function(d) { return height - y(d.length); });


    g.append("g")
      .attr("class", "axis axis--x")
      .attr("transform", "translate(0, "+height+")")
      .call(d3.axisBottom(x));
}

draw_vis(json_data, 720, 360)
