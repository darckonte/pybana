var dataset = [1, 2, 3, 4, 5, 6];
var svg = d3.select("body")
  .append("svg")
  .attr("width", 640)
  .attr("height", 320);
var circles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle");
circles.attr("cx", function(d, i){
  return (i * 50) + 25;
  })
  .attr("cy", 500/2)
  .attr("r", function(d)
  {
    return d;
  });
