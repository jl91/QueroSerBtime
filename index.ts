import { HolesCounter } from './src/holes-counter'


const holesCounter = new HolesCounter();
const result = holesCounter.setText('b').getQuantityOfHoles();

console.log(result);