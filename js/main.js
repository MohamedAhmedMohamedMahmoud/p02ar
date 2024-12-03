// ** Handlers
function menuToggleHandler()
{
    let currentState = document.getElementById('menu').style.display;
    if(currentState === '' || currentState === 'none')
    {
        document.getElementById('menu').style.display = 'flex';
    }
    else
    {
        document.getElementById('menu').style.display = 'none';
    }
}

document.getElementById('menu-btn').addEventListener('click',menuToggleHandler)