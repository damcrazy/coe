import { Faculty } from "./data-ig";

console.log(Faculty)

var dates = ['12/6/22', '12/7/22', '12/8/22', '12/9/22', '12/10/22', '12/11/22'];
var ordering = [];

ordering = Faculty.sort(
    function(a,b){
        var x = parseInt(a['lastServed'],10); var y = parseInt(b['lastServed'],10);
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }
);

export default function parse() {
    return (
      <div> hi </div>
    )
  }
  

console.log(ordering);