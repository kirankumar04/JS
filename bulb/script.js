function toggleLight() 
{
    var image = document.getElementById('myImage');
    var toggleSwitch = document.getElementById('togBtn');

    if (toggleSwitch.checked) 
    {
        image.src = 'images/bulbon.jpg';
    }
        else
    {
        image.src = 'images/bulboff.jpg';
    }
}
