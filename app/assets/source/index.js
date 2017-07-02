import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import worksCheck from "./worksCheck";
import Summator from "./sumator";
import Greeter from './greeter';

const summator = new Summator([1, 2, 3]);
console.log(summator.sum());
console.log(summator.sumSquared());
worksCheck.print();

$(() => {
  $('body').append("<div id='greeter'></div>");
  ReactDOM.render(<Greeter />, $("#greeter")[0]);
})
