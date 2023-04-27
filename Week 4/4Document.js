//The document object contains all the HTML elements on the page as objects.
console.log(document);

//log the head element
console.log(document.head);
//log the body element
console.log(document.body);
//I can write directly to the document. Do not do this in production.
//except for testing
document.write(`<h3>Writing to the document</h1>`);

//get all forms on the page
let forms = document.forms;
console.log(forms);

//get all the links on the page
let links = document.links;
console.log(links);

for(let i = 0; i < links.length; i++){
    if(links[i].id == "link1"){
        console.log('This is link 1');
    }
    console.log(`Id: ${links[i].id} Classes: ${links[i].classList}}`);
    //lets change the content of the links
    //innerHTML is a property that allows us to change the content of an element
    links[i].innerHTML = `<em>Hello</em> <strong>from</strong> Link ${i + 1}<br>`;


}

