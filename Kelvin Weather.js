//Constant variable that holds the weather forecast for the day in Kelvin(293K)
const kelvin = 289;

//Calculates and stores the celsius equivalent of the temperature in kelvin
let celsius = kelvin - 273;

//Calculates and stores the fahrenheit equivalent of the temperature in celsius
let fahrenheit = celsius * (9/5) + 32

//Rounds down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit`);

//Calculates and stores the newton equivalent of the temperature in celsius
let newton = celsius * (33/100);

//Rounds down the fahrenheit temperature
newton = Math.floor(newton);

console.log(`The temperature is ${newton} degrees Newton`);