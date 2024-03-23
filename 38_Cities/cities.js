"use strict";
//Cities:Write a function called describe_city()that accepts the name of a city and its country.
//Call your function  for three different cities.
function describe_city(city, country = 'Default Country.') {
    console.log(` ${city} is in  ${country}`);
}
describe_city('Karachi', 'Pakistan');
describe_city('Tokyo', 'Japan');
describe_city('America');
