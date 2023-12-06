
let ren_num_1 = Math.random()

let adjectives = {
    1 : "Crazy",
    2 : "Amazing",
    3 : "Fire"

}

let shop_name = {
    1 : "Engine",
    2 : "Foods",
    3 : "Garments"
}

let another_word = {
    1 : "Bros",
    2 : "Limited",
    3 : "Hub"
}

let first_name,second_name,third_name;

// first name choose condition check
if (ren_num_1 <= 0.33)
{
    first_name = adjectives["1"];    
}
else if(ren_num_1 > 0.33 && ren_num_1 <= 0.66)
{
    first_name = adjectives["2"];
}
else
{
    first_name = adjectives["3"];
}

// second name choose condition check
let ren_num_2 = Math.random()

if(ren_num_2 < 0.33)
{
    second_name = shop_name["1"];
}
else if(ren_num_2 > 0.33 && ren_num_2 <= 0.66)
{
    second_name = shop_name["2"];
}
else
{
    second_name = shop_name["3"];
}

// third name choose condition check
let ren_num_3 = Math.random()

if (ren_num_3 < 0.33)
{
    third_name = another_word["1"];
}
else if (ren_num_3 > 0.33 && ren_num_3 <= 0.66)
{
    third_name = another_word["2"];
}
else
{
    third_name = another_word["3"]
}
// document.write("Your Business Name is :- "+first_name+ " "+second_name+ " "+third_name)
document.write(`Your Business Name :- ${first_name} ${second_name} ${third_name}<br>`)
console.log(`Your Business Name :- ${first_name} ${second_name} ${third_name}`)