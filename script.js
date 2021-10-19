var slideIndex = 0;
function slideleft()
{
  document.getElementsByClassName("crousel-div")[slideIndex].style.display = "none";
  slideIndex = (slideIndex - 1 + 3)%3;
  document.getElementsByClassName("crousel-div")[slideIndex].style.display = "block";
}
function slideright()
{
  document.getElementsByClassName("crousel-div")[slideIndex].style.display = "none";
  slideIndex = (slideIndex + 1)%3;
  document.getElementsByClassName("crousel-div")[slideIndex].style.display = "block";
}

var slideIndexMin = 0;
function slideleftmin()
{
  document.getElementsByClassName("crousel-min-div")[slideIndexMin].style.display = "none";
  slideIndexMin = (slideIndexMin - 1 + 2)%2;
  document.getElementsByClassName("crousel-min-div")[slideIndexMin].style.display = "block";
}
function sliderightmin()
{
  document.getElementsByClassName("crousel-min-div")[slideIndexMin].style.display = "none";
  slideIndexMin = (slideIndexMin + 1)%2;
  document.getElementsByClassName("crousel-min-div")[slideIndexMin].style.display = "block";
}

function changeContent(ele_id)
{
  document.getElementsByClassName('active-heading')[0].classList.remove('active-heading');
  document.getElementById(ele_id).style.display = "block";
  document.getElementById(ele_id + '-header').classList.add('active-heading');
  document.getElementsByClassName('headers')[0].style.display = "none";
  document.getElementsByClassName('headers')[0].classList.remove('headers');
  document.getElementById(ele_id).style.display = "block";
  document.getElementById(ele_id).classList.add('headers');
}