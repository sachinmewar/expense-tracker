import React, { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';
//import data from '../../Data/Data';
// title, amount, date
// const sorted_data = data.sort(function (a, b) {
//    return (a.amount - b.amount);
// });
// var lowestValues = sorted_data.slice(0, 5);
// var highestValues = sorted_data.slice(Math.max(sorted_data.length - 5, 0)).reverse();

class Bar extends Component {
   plot(chart, width, height) {
      // create scales!
      const xScale = d3.scaleBand()
         // domain here will indicate labels in x-axis
         .domain(this.props.data.map(d => d.title))
         //the bar will start from 0 in x-axis and takes the width given to it.
         .range([0, width]);
      const yScale = d3.scaleLinear()
         //domain here indicates labels in y axis.
         .domain([0, d3.max(this.props.data, d => d.amount)])
         // Starting from height and goes towards 0. If the values are interchanged labels on y axis goes upside down. 
         .range([height, 0]);
      //scaleOrdinal(d3.schemeCategory10) will give 10 different consecutive colors.
      const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

      chart.selectAll('.bar')
         .data(this.props.data)
         .enter()
         .append('rect')
         .classed('bar', true)
         .attr('x', d => xScale(d.title))
         .attr('y', d => yScale(d.amount))
         .attr('height', d => (height - yScale(d.amount)))
         .attr('width', d => xScale.bandwidth())
         .style('fill', (d, i) => colorScale(i));

      chart.selectAll('.bar-label')
         .data(this.props.data)
         .enter()
         .append('text')
         .classed('bar-label', true)
         .attr('x', d => xScale(d.title) + xScale.bandwidth() / 2)
         .attr('dx', 0)
         .attr('y', d => yScale(d.amount))
         .attr('dy', -6)
         .text(d => d.amount);

      const xAxis = d3.axisBottom()
         .scale(xScale);

      chart.append('g')
         .classed('x axis', true)
         .attr('transform', `translate(0,${height})`)
         .call(xAxis);

      const yAxis = d3.axisLeft()
         .ticks(5)
         .scale(yScale);

      chart.append('g')
         .classed('y axis', true)
         .attr('transform', 'translate(0,0)')
         .call(yAxis);

      chart.select('.x.axis')
         .append('text')
         .attr('x', width / 2)
         .attr('y', 60)
         .attr('fill', '#000')
         .style('font-size', '20px')
         .style('text-anchor', 'middle')
         .text(this.props.title);

      chart.select('.y.axis')
         .append('text')
         .attr('x', 0)
         .attr('y', 0)
         .attr('transform', `translate(-50, ${height / 2}) rotate(-90)`)
         .attr('fill', '#000')
         .style('font-size', '20px')
         .style('text-anchor', 'middle')
         .text('Amount');

      const yGridlines = d3.axisLeft()
         .scale(yScale)
         .ticks(5)
         .tickSize(-width, 0, 0)
         .tickFormat('')

      chart.append('g')
         .call(yGridlines)
         .classed('gridline', true);
   }

   drawChart() {
      const width = this.props.chartWidth;
      const height = 450;

      const el = new Element('div');
      const svg = d3.select(el)
         .append('svg')
         .attr('id', 'chart')
         .attr('width', width)
         .attr('height', height);

      const margin = {
         top: 100,
         bottom: 100,
         left: 180,
         right: 100
      };

      const chart = svg.append('g')
         .classed('display', true)
         .attr('transform', `translate(${margin.left},${margin.top})`);

      const chartWidth = width - margin.left - margin.right;
      const chartHeight = height - margin.top - margin.bottom;
      this.plot(chart, chartWidth, chartHeight);

      return el.toReact();
   }

   render() {
      return this.drawChart();
   }
}

export default Bar;
