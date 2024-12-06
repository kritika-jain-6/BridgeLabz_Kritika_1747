//Event loop
//using the stack
function foo(b){
    const a=10;
    return a+b+11;
}
function bar(x){
    const y=3;
    return foo(x*y);
}
const baz=bar(7);
//console.log(baz);
console.log("Task1:Start");
setTimeout(()=>{
    console.log("Task2: From the queue");
},0);
Promise.resolve().then(()=>{
    console.log("Task3: From Microtask Queue");
    
});
console.log("Task4: find");

class TaskQueue{
    constructor(){
        this.queue=[];
    }
    addTask(task){
        this.queue.push(task);
    }
    processTask(){
        while(this.queue.length>0){
            const task=this.queue.shift();
            task();
        }
    }
}
const myqueue=new TaskQueue();
myqueue.addTask(()=>console.log("Task1: Processed"));
myqueue.addTask(()=>console.log("Task2: Processed"));
myqueue.addTask(()=>console.log("Task3: Processed"));

setTimeout(()=>{
    console.log("Processing Tasks....");
    myqueue.processTask();
    
},1000);

