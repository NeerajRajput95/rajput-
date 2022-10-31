// //EXAMIN THE DOCUMENT OBJECT
// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[14]);
// document.all[14].textContent='NEERAJ';
// console.log(document.forms[0]);
// console.log(document.links);

// //GETELEMENTBYID
// console.log(document.getElementById('header-title'));
// var headertitle=document.getElementById('header-title');
// var header=document.getElementById('main-header');
// headertitle.textContent='Hello';
// headertitle.innerText='Neeraj';
// console.log(headertitle);
// console.log(headertitle.textContent);
// console.log(headertitle.innerText);
// headertitle.innerHTML='<h3>Hello</h3>';
// headertitle.style.borderBottom='solid 3px #000';
// header.style.borderBlock='solid 3px #000';


// // // //GETELEMEMTBYCLASSNAME//

// var items=document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= 'Hello2';
// items[1].style.fontWeight= 'bold';
// items[2].style.backgroundColor= 'green';

// // //error
// // //items.style.backgroundcolor='red';

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight= 'bold';
//     items[i].style.color='yellow';
//  }

// //GETELEMENTTAGNAME
 
//  var li=document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent= 'Hello2';
// li[1].style.fontWeight= 'bold';
// li[1].style.backgroundColor= 'yellow';
// const node = document.createElement("li");
// node.appendChild(textnode);




// // //error
// //items.style.backgroundcolor='red';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.backgroundColor='#f4f4f4';
//  }

//QUARYSELECTOR

// var header=document.querySelector('#main-header');
// header.style.borderBottom='solid 4px #000';
// var input=document.querySelector('input');
// input.value='Hello world';

// var submit=document.querySelector('input[type="submit"]');
// submit.value='send';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';
// var lastitem=document.querySelector('.list-group-item:last-child');
// lastitem.style.color='green';

// var seconditem=document.querySelector('.list-group-item:nth-child(2)');
//  seconditem.style.backgroundColor='green';
//  var thirditem=document.querySelector('.list-group-item:nth-child(3)');
//  thirditem.style.visibility='hidden';

//QUERYSELECTORALL
// var titles=document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent='Hello';

// var odd=document.querySelectorAll('li:nth-child(odd)');
// var even=document.querySelectorAll('li:nth-child(even)');

// // for(var i=0;i<odd.length;i++)
// // {
//     odd[i].style.backgroundColor='#f4f4f4';
//     even[i].style.backgroundColor='#ccc';
// // }
var seconditm=document.querySelectorAll('.list-group-item');
//console.log(seconditm);
seconditm[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)');

for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor='green';
   
}

