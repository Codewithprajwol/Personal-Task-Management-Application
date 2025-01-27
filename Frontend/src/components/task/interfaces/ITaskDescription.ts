export interface ITaskDescription{
    description?:string,
}

//todo here i will tell you what you have to do to make proper restriction 

//? first make the interface that component will take 
//? use that interface in FC<interface comes here>
//? if interface is made optional it will not give any error other wise it will give the error and you have to pass that interface key(field) when ever you use that component ...other wise you can set the default value when destructing the pops