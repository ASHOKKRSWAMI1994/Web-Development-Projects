// random color generator function
function grc() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 15)];
    }
    return color;
  }

  // call random generator function and get value
let a_text_color = grc();
let a_background_color = grc();
const ae = document .getElementsByClassName ("container_div1")[0];
ae.style.color = a_text_color;
ae.style.backgroundColor = a_background_color;


let b_text_color = grc();
let b_background_color = grc();
const be = document .getElementsByClassName ("container_div2")[0];
be.style.color = b_text_color;
be.style.backgroundColor = b_background_color;

let c_text_color = grc();
let c_background_color = grc();
const ce = document .getElementsByClassName ("container_div3")[0];
ce.style.color = c_text_color;
ce.style.backgroundColor = c_background_color;


let d_text_color = grc();
let d_background_color = grc();
const de = document .getElementsByClassName ("container_div4")[0];
de.style.color = d_text_color;
de.style.backgroundColor = d_background_color;

let e_text_color = grc();
let e_background_color = grc();
const ee = document .getElementsByClassName ("container_div5")[0];
ee.style.color = e_text_color;
ee.style.backgroundColor = e_background_color;


let body_background_color = grc();
const body_tag = document .getElementsByTagName ("body")[0];
body_tag.style.backgroundColor = body_background_color;

let container_background_color = grc();
const pp = document .getElementsByClassName ("container")[0];
pp.style.color = e_text_color;
pp.style.backgroundColor = e_background_color;