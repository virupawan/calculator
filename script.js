
function onDisplay(value) {
    document.getElementById('box').value += value;
}
function clearDisplay() {
    document.getElementById('box').value = null;
}
function calculate() {
    var box = document.getElementById('box');
    var result = eval(box.value);
    box.value = result;
}
function delDisplay()
{
    var i;
   var val= document.getElementById('box');
   val.value=val.value.slice(0,-1);

}