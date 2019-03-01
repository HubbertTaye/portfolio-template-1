// drop down nav menu
// when user clicks on icon button, toggle the show class
document.getElementById('dropBtn').onclick = function() {
  document.getElementsByClassName('dropMenu')[0].classList.toggle('show');
}
//when user clicks on any link in the nav, the nav disappears
const links = document.getElementsByClassName('dropLinks')
for(let i = 0; i < links.length; i++){
  links[i].onclick = function() {
    document.getElementsByClassName('dropMenu')[0].classList.toggle('show');
  }
}

// document.getElementsByClassName('dropLinks').forEach(function(){
//   this.onclick = function(){
//     document.getElementsByClassName('dropMenu')[0].classList.toggle('show');
//   }
// });


// [0, 1, 2].foreach(function (value) {
//   console.log(value);
// });
