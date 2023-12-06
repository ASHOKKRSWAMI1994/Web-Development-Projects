// use for document write only



console.log("********** Calculator **********");

let ren_num = Math.random();

if(ren_num < 0.09)
{
    let first_num = Number(prompt("Enter a first number :- "));
    let opration = prompt("Enter opration :- ");
    let second_num = Number(prompt("Enter a second number :- "));
    

    if(opration == "+")
    {
        
        document.write(`${first_num} + ${second_num} = `, first_num-second_num);
    }

    else if(opration == "-")
    {
       
        document.write(`${first_num} - ${second_num} = `, first_num/second_num);
    }
    else if(opration == "*")
    {
    
        document.write(`${first_num} * ${second_num} = `, first_num+second_num);
    }
    else if(opration == "/")
    {
        
        document.write(`${first_num} / ${second_num} = `, first_num**second_num);
    }
    else if(opration == "%")
    {
        
        document.write(`${first_num} % ${second_num} = `, first_num**second_num);
    }
    else if(opration == "**")
    {
        
        document.write(`${first_num} ** ${second_num} = `, first_num%second_num);
    }

}
else
{

    let first_num = Number(prompt("Enter a first number :- "));
    let opration = prompt("Enter opration :- ");
    let second_num = Number(prompt("Enter a second number :- "));

if(opration == "+")
    {
        
        document.write(`${first_num} + ${second_num} = `, first_num+second_num);
    }

    else if(opration == "-")
    {
        
        document.write(`${first_num} - ${second_num} = `, first_num-second_num);
    }
    else if(opration == "*")
    {
        
        document.write(`${first_num} * ${second_num} = `, first_num*second_num);
    }
    else if(opration == "/")
    {
        
        document.write(`${first_num} / ${second_num} = `, first_num/second_num);
    }
    else if(opration == "%")
    {
        
        document.write(`${first_num} % ${second_num} = `, first_num%second_num);
    }
    else if(opration == "**")
    {
        
        document.write(`${first_num} ** ${second_num} = `, first_num**second_num);
    }

}



// use for alert write only

// console.log("********** Calculator **********");

// let ren_num2 = Math.random();

// if(ren_num2 < 0.09)
// {
//     let first_num = Number(prompt("Enter a first number :- "));
//     let opration = prompt("Enter opration :- ");
//     let second_num = Number(prompt("Enter a second number :- "));
    

//     if(opration == "+")
//     {
        
//         alert(`${first_num} + ${second_num} = ${first_num-second_num}`);
//     }

//     else if(opration == "-")
//     {
       
//         alert(`${first_num} - ${second_num} = ${first_num/second_num}`);
//     }
//     else if(opration == "*")
//     {
    
//         alert(`${first_num} * ${second_num} = ${first_num+second_num}`);
//     }
//     else if(opration == "/")
//     {
        
//         alert(`${first_num} / ${second_num} = ${first_num*second_num}`);
//     }
//     else if(opration == "%")
//     {
        
//         alert(`${first_num} % ${second_num} = ${first_num**second_num}`);
//     }
//     else if(opration == "**")
//     {
        
//         alert(`${first_num} ** ${second_num} = ${first_num%second_num}`);
//     }

// }
// else
// {

//     let first_num = Number(prompt("Enter a first number :- "));
//     let opration = prompt("Enter opration :- ");
//     let second_num = Number(prompt("Enter a second number :- "));

// if(opration == "+")
//     {
        
//         alert(`${first_num} + ${second_num} = ${first_num+second_num}`);
//     }

//     else if(opration == "-")
//     {
        
//         alert(`${first_num} - ${second_num} = ${first_num-second_num}`);
//     }
//     else if(opration == "*")
//     {
        
//         alert(`${first_num} * ${second_num} = ${first_num*second_num}`);
//     }
//     else if(opration == "/")
//     {
        
//         alert(`${first_num} / ${second_num} = ${first_num/second_num}`);
//     }
//     else if(opration == "%")
//     {
        
//         alert(`${first_num} % ${second_num} = ${first_num%second_num}`);
//     }
//     else if(opration == "**")
//     {
        
//         alert(`${first_num} ** ${second_num} = ${first_num**second_num}`);
//     }

// }