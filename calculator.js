function key(val)
{
    console.log(val)
 document.getElementById('top').value=document.getElementById('top').value+val
 
}
function clr()
{
    document.getElementById('top').value=" "
}
function operation()
{
    var n=document.getElementById('top').value
    var result=eval(n);
    document.getElementById('top').value=result
}