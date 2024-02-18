//**************    1- prompt       *************/
// var num1 =Number(window.prompt('plese enter num1'));
// var num2 = Number(window.prompt('plese enter num2'));
// console.log(num1+num2);
 //  *********************  02 if *******************************/
// var grade= Number(window.prompt("plese enter your dgre"));



// if(  grade >= 85 &&  grade < 100){
//     console.log('exllent');
// }
// else if(  grade >= 75 &&  grade <85){
//     console.log('very good')
// }
// else if(  grade >= 60 &&  grade<75){
//     console.log(' good')
// }
// else if(  grade >= 50 &&  grade <60){
//     console.log("bass")
// }
// else ( 
//     console.log("fill")
// )



// **************************      03 swich        ***************************
//  var rolre = window.prompt('enter user role ');

// switch (rolre){
//      case 'admin' :
//     console.log("you can every thing");
//      break;
//      case  'editor' :
//      console.log("you can edit");
//      break;
//      case  'visitor':
//      console.log("you can see my web site ");
//      break;
//      default :
//      console.log("pleas tray agan");
//      break;
// }



// **********************04 loop for loop ************************************************************
//  for(var x=0; x<=10;x +=1){
//     console.log("helo")
//  }
// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& مثال اصعب سيكا $$$$$$$$$$$$$$$$$$$$$$$$$$$
//  var cartona ='';

// for( var x =0; x<10 ;x +=1){
//    cartona +=`  <div class="itme"> 
//    <div class=" row-cols-md-3 bg-danger " >
//        <p>Lorem ipsum dolor sit amet consectet nemo architecto. Non, consequuntur laboriosam?</p>
//        <h1>se7a</h1>
//    </div>
// ` 
// }
// document.getElementById("demo").innerHTML=cartona;
// *******************06 loop *******************************************
// function avrage (num1,num2){
//   var midel=(num1+num2)/2;
//   console.log(midel);
// }
// var  f =Number(window.prompt("please ent num1"));
// var c =Number(window.prompt("please ent num2"));
// avrage(f,c);
// *******************selfe invoke funcation

// function say(){
//  var x = document.getElementById('demo').Value;
//  alert("hello" +x);
// }
// ******************   08 object      *********************************
// var user ={
//   name: "se7a",
//   age :23,
//   gender:"m",
//       wife:{name:"aya", age:22,dender:"f", cile:{name:"yoyo",age:2,gender:"m"} }

// }
// console.log(user.wife.cile.name);
// ************************    09  array ***********************************
// var colors =["red","green","blue","ornge"];
// for(var i=0; i<colors.length; i++){
//   console.log(colors[i]);
// }
// console.log(colors);
// ************************** 09  array ***************
// var users=[
//   {
//     name:"ahmed",
//     age:32,
//     salary:7000,
//     gender:"M",
//   },
//   {
//     name:"se7a",
//     age:23,
//     salary:9000,
//     gender:"M",
//   },
//   {
//     name:"onon",
//     age:22,
//     salary:8000,
//     gender:"F",
//   },
//   {
//     name:"zezo",
//     age:23,
//     salary:10000,
//     gender:"M",
//   },
// ]
// for(var i=0;i<users.length;i++){
//   if( users[i].gender=="M"){
// console.log("Mr " + users[i].name);
// }

// else {
//     console.log("Mths " + users[i].name);
//     }
// }

// **********************************************************************************
// *************************************************************************************
// **********************************************************************************
// *************************************************************************************
// *****************           11-cruds   ************************************************

var productNameInp = document.getElementById("productNameInp");
var productPriceInp = document.getElementById("productPriceInp");
var productCategoryInp = document.getElementById("productCategoryInp");
var productDescInp = document.getElementById("productDescInp");

var productContainer ;
if (localStorage.getItem('cruds')!=null) {
  productContainer = JSON.parse(localStorage.getItem('cruds'));
  disblayDate( productContainer);
}
else{
  productContainer =[];
}
function AddProduct(){
  if(vailadateProductName()){
    var Product ={
      productName:productNameInp.value,
      productPrice: productPriceInp.value,
      productCategory : productCategoryInp.value,
      productDesc : productDescInp.value,
      }
      console.log(Product);
      productContainer.push(Product);
      console.log(productContainer);
      localStorage.setItem('cruds',JSON.stringify(productContainer)); 
      
      disblayDate(productContainer);
      Clear();
    }
    else {
      alert("enter vailade prodct name");
  }
  
}
function Clear(){
  productNameInp.value =" ";
  productPriceInp.value =" ";
  productCategoryInp.value =" ";
  productDescInp.value =" ";
}

function disblayDate(list){

  temp = ` `
  for(var i=0; i<list.length ;i++ ){

temp += ` <tr>
<th>${i}</th>
<th>${list[i].productName}</th>
<th>${list[i]. productPrice}</th>
<th> ${list[i].productCategory}</th>
<th>${list[i].productDesc}</th>
<th><button class="btn btn-outline-warning btn-sm"onclick=" UPdate(${i})" >UPdate</button> </th>
<th> <button class="btn btn-outline-danger btn-sm" onclick="Delete(${i})">Delete</button> </th>


</tr> `

  }
 document.getElementById("tbody").innerHTML=temp;

}
function Delete(index){
  
  productContainer.splice(index,1);
  localStorage.setItem('cruds', JSON.stringify(productContainer))
  disblayDate(productContainer);
}
    
function UPdate(index){
  productNameInp.value = productContainer[index].productName;
  productPriceInp.value =productContainer[index]. productPrice;
  productCategoryInp.value =productContainer[index].productCategory;
  productDescInp.value =productContainer[index].productDesc;
document.getElementById('UPdate').classList.replace('d-none','d-inline-block');
document.getElementById('add').classList.add('d-none');
}

function AfterUpdate(){
  document.getElementById('add').classList.remove('d-none');
  document.getElementById('UPdate').classList.replace('d-inline-block','d-none');
  disblayDate(productContainer);
  
}

function search(searchString) {
  var searchContainer =[];
for (var i=0; i < productContainer.length;i++) {
  
  if(productContainer[i]. productName.toLowerCase().includes(searchString.toLowerCase())){

    searchContainer.push(productContainer[i]);
disblayDate(searchContainer);
} 
}
}

function vailadateProductName(){
var regx =/^[A-Z][a-z]/;
if(regx.test(productNameInp.value)==true){

  if(productNameInp.classList.contains('is-invalid')){
    productNameInp.classList.replace('is-invalid','is-valid');
  }
return true;
}
else {
  productNameInp.classList.add('is-invalid');
  return false;
}
}
 