import { Faculty } from "../public/data-ig";

console.log(copy)

var dates = ['12/6/22-1', '12/6/22-2','13/6/22-1','13/6/22-2', '14/6/22-1','14/6/22-2','15/6/22-1','16/6/22-1', '17/6/22-1','17/6/22-2','18/6/22-1','18/6/22-2'];
var ordering = {};
var copy = [];

copy = Faculty.sort(
    function(a,b){
        var x = parseInt(a['lastServed'],10); var y = parseInt(b['lastServed'],10);
    return ((x < y) ? 1 : ((x > y) ? -1 : 0));
    }
);
console.log("After sort")
console.log(copy)

  for(let i=0; i<dates.length;i++)
  {
      /* if(copy[i].Desig === "Assistant Professor")
      // {
      //     if(copy[i].numSessions < 6)
      //     {
      //       copy[i].numSessions+=1;
      //       ordering[copy[i].id] = dates.shift();
      //     }
      // }

      // else if(copy[i].Desig === "Associate Professor")
      // {
      //     if(copy[i].numSessions < 3)
      //     {
      //       copy[i].numSessions++;
      //       ordering[copy[i].id] = dates.shift();
      //     }
      // }

      // else if(copy[i].Desig === "Professor")
      // {
      //     if(copy[i].numSessions < 1)
      //     {
      //       copy[i].numSessions++;
      //       ordering[copy[i].id] = dates.shift();
      //     }
      // }*/
      
  }

  for(let i=0; i<dates.length;i++)
  {
    let morn=0;
    if(dates[i].includes('-1')) morn = 1;
    for(let j=0; j<copy.length;j++)
      {
        if(copy[j].Desig == "Assistant Professor" && (copy[j].numSessions < 6) && (morn === copy[j].morn || copy[j].numSessions === "0"))
        {
            copy[j].numSessions+=1;
            copy[j].morn = morn;
            copy[j].lastServed = copy.length - j;
            ordering[copy[j].id] = dates[i];
            break;
        }

        else if(copy[j].Desig == "Associate Professor" && (copy[j].numSessions < 3) && (morn === copy[j].morn || copy[j].numSessions === "0"))
        {
            copy[j].numSessions+=1;
            copy[j].morn = morn;
            copy[j].lastServed = copy.length - j;
            ordering[copy[j].id] = dates[i];
            break;
        }

        else if(copy[j].Desig == "Professor" && (copy[j].numSessions < 1) && (morn === copy[j].morn || copy[j].numSessions === "0"))
        {
            copy[j].numSessions+=1;
            copy[j].morn = morn;
            copy[j].lastServed = copy.length - j;
            ordering[copy[j].id] = dates[i];
            break;
        }
      }
  }




export default function parse() {
    return (
      <div> hi </div>
    )
  }
  

console.log(ordering);