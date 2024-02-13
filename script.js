function removeTransition(e) {
    if (e.propertyName !== "transform") return;
    e.target.classList.remove("playing");
  }

  function lightLed(pin) {
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", `index.php?pin=${pin}`, true);
    xmlhttp.send();
  }

  function playSound(keyCode) {
    const pin = getGpioPin(keyCode);

    if (pin) {
      lightLed(pin);
      const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
      const key = document.querySelector(`div[data-key="${keyCode}"]`);
      if (!audio) return;

      key.classList.add("playing");
      audio.currentTime = 0;
      audio.play();
    }
  }

  const keys = Array.from(document.querySelectorAll(".key"));

  // Handle transition behavior
  keys.forEach((key) =>
    key.addEventListener("transitionend", removeTransition)
  );

  // Logic for keyboard events
  window.addEventListener("keydown", (e) => playSound(e.keyCode));

  // Logic for click events
  for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", (e) => {
      const keyCode = parseInt(e.target.dataset.key);
      playSound(keyCode);
    });

    keys[i]
      .getElementsByTagName("kbd")[0]
      .addEventListener("click", (e) => {
        const keyCode = parseInt(e.target.parentElement.dataset.key);
        playSound(keyCode);
      });

    keys[i]
      .getElementsByTagName("span")[0]
      .addEventListener("click", (e) => {
        const keyCode = parseInt(e.target.parentElement.dataset.key);
        playSound(keyCode);
      });
  }

  function getGpioPin(keyCode) {
    switch (keyCode) {
      case 81:
        return 4;
        break;
      case 86:
        return 4;
        break;
      case 50:
        return 14;
        break;
      case 71:
        return 14;
        break;
      case 87:
        return 15;
        break;
      case 66:
        return 15;
        break;
      case 51:
        return 17;
        break;
      case 72:
        return 17;
        break;
      case 69:
        return 18;
        break;
      case 78:
        return 18;
        break;
      case 82:
        return 27;
        break;
      case 77:
        return 27;
        break;
      case 53:
        return 22;
        break;
      case 75:
        return 22;
        break;
      case 84:
        return 23;
        break;
      case 188:
        return 23;
        break;
      case 54:
        return 24;
        break;
      case 76:
        return 24;
        break;
      case 90:
        return 10;
        break;
      case 190:
        return 10;
        break;
      case 55:
        return 9;
        break;
      case 192:
        return 9;
        break;
      case 85:
        return 25;
        break;
      case 189:
        return 25;
        break;

      default:
        break;
    }
  }