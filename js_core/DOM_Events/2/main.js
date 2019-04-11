let body = document.querySelector('body');
function getColor() {
    return (
      "#" +
      Math.random()
        .toString(16)
        .slice(2, 8)
    );
  }


  function setBackground() {
    let bgColor = getColor();
  body.style.backgroundColor = bgColor;
  }

  // body.onclick = () => setBackground();
  document.addEventListener('click', setBackground);