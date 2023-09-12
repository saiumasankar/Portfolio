let b = document.querySelector('.first');
b.addEventListener('mouseover', () => 
{
    let f = document.querySelector('.highschool');
    f.classList.add('show');
    let s = document.querySelector('.skills');
    s.style.marginTop = '100px';
});
b.addEventListener('mouseout', () => 
{
    let f = document.querySelector('.highschool');
    f.classList.remove('show');
    let s = document.querySelector('.skills');
    s.style.marginTop = '60px';
});

let b2 = document.querySelector('.second');
b2.addEventListener('mouseover', () => 
{
    let f = document.querySelector('.intermediate');
    f.classList.add('show');
    let s = document.querySelector('.skills');
    s.style.marginTop = '100px';
});
b2.addEventListener('mouseout', () => 
{
    let f = document.querySelector('.intermediate');
    f.classList.remove('show');
    let s = document.querySelector('.skills');
    s.style.marginTop = '60px';
});

let b3 = document.querySelector('.third');
b3.addEventListener('mouseover', () => 
{
    let f = document.querySelector('.undergraduate');
    f.classList.add('show');
    let s = document.querySelector('.skills');
    s.style.marginTop = '100px';
});
b3.addEventListener('mouseout', () => 
{
    let f = document.querySelector('.undergraduate');
    f.classList.remove('show');
    let s = document.querySelector('.skills');
    s.style.marginTop = '60px';
});