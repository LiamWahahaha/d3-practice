// javascript
d3.select();
d3.selectAll();

d3.select('h1').style('color', 'red')
.attr('class', 'heading')
.text('Updated h1 tag');

//d3.select('body').append('p').text('First Paragraph');
//d3.select('body').append('p').text('Second Paragraph');
//d3.select('body').append('p').text('Third Paragraph');

d3.selectAll('p').style('color', 'blue');

//var dataset = [1,2,3,4,5];
//d3.select('body')
//    .selectAll('p')
//    .data(dataset)
//    .enter()
//    .append('p')
//    .text('D3 is awesome!!');
//    .text(function(d) {return d;});

//var dataset = [80, 100, 56, 120, 180, 30, 40, 120, 160];
var dataset = [1, 2, 3, 4, 5]

var svgWidth = 500, svgHeight = 300, barPadding = 5;
var barWidth = (svgWidth / dataset.length);

var svg = d3.select('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

var yScale = d3.scaleLinear()
    .domain([0, d3.max(dataset)])
    .range([0, svgHeight - 30]);

var barChart = svg.selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('y', function(d) {
        return svgHeight - yScale(d);
    })
    .attr('height', function(d) {
        return yScale(d);
    })
    .attr('width', barWidth - barPadding)
    .attr('transform', function(d, i) {
        var translate = [barWidth * i, 0];
        return 'translate(' + translate + ')';
    });

d3.select('#btn')
    .on('click', function () {
        d3.select('body')
            .append('h3')
            .text('Today is a beautiful day!!');
    });

var text = svg.selectAll('text')
    .data(dataset)
    .enter()
    .append('text')
    .text(function(d) {
        return d;
    })
    .attr('y', function(d, i) {
        return svgHeight - yScale(d) - 2;
    })
    .attr('x', function(d, i) {
        return barWidth * i;
    })
.attr('fill', '#A64C38');
