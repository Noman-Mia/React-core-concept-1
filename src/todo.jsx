//conditiona rendering

// export default function Todo({task,isDone}){

//     return(
//         <li> task : {task}</li>
//     )
// }

//conditional rendering option:1
// export default function Todo({task,isDone}){
// if(isDone === true){
// return <li>work is done{task}</li>
// }
// else{
//     return <li>you should do work {task} </li>
// }
// }

//condition rendering option:2
// export default function Todo({task,isDone}){
// if(isDone){
//     return <li>finish:{task}</li>
// }
//  return <li>work on:{task}</li>
// }

//conditional rendering :3 ternary operator
// export default function Todo({task,isDone}){
//     return(
//         <li> {isDone ? "done" : "work on"} : {task}</li>
//     )
// }

//conditional rendering option :4 &&
// export default function Todo({task,isDone}){
//     return(
//         <li>{task}: {isDone && "done"}</li>
//     )
// }

//conditional rendering option :5 ||
// export default function Todo({task,isDone}){
//     return(
//         <li>{task}: {isDone || "do it"}</li>
//     )
// }

//conditional rendering option:6
export default function Todo({task,isDone}){
    let listitem;
if(isDone){
listitem = <li>work is done{task}</li>
}
else{
    listitem = <li>you should do work {task} </li>
}
return listitem
}