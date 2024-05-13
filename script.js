const N = 10000;
const stepSize = 10;
const radius = 2;
const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
};
const ctx = canvas.getContext("2d");
function primenuum() {
  const currentLocation = { x: canvas.width - 100, y: canvas.height * 0.6 };
  let direction = "east";
  for (let i = 1; i <= N; i++) {
    ctx.beginPath();
    ctx.moveTo(currentLocation.x, currentLocation.y);
    const prime = isPrime(i);
    if (prime) {
      ctx.arc(currentLocation.x, currentLocation.y, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.moveTo(currentLocation.x, currentLocation.y);
      console.log(prime);
      switch (direction) {
        case "east":
          direction = "north";
          break;
        case "north":
          direction = "west";
          break;
        case "west":
          direction = "south";
          break;
        case "south":
          direction = "east";
          break;
      }
      console.log(i);
    }
    switch (direction) {
      case "east":
        currentLocation.x += stepSize;
        break;
      case "north":
        currentLocation.y -= stepSize;
        break;
      case "west":
        currentLocation.x -= stepSize;
        break;
      case "south":
        currentLocation.y += stepSize;
        break;
    }
    ctx.lineTo(currentLocation.x, currentLocation.y);
    ctx.stroke();
  }
}

function ulamPrimeSpiral(ctx, number) {
  let direction = "east";
  const center = { x: canvas.width / 2, y: canvas.height / 2 };
  let i = 1;
  let j = 1;
  while (i <= number) {
    for (let k = 0; k < j; k++) {
      ctx.beginPath();
      const prime = isPrime(i);
      if (prime) {
        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.moveTo(center.x, center.y);
      i++;
      switch (direction) {
        case "east":
          center.x += stepSize;
          break;
        case "north":
          center.y -= stepSize;
          break;
        case "west":
          center.x -= stepSize;
          break;
        case "south":
          center.y += stepSize;
          break;
      }
      ctx.lineTo(center.x, center.y);
      ctx.stroke();
    }
    switch (direction) {
      case "east":
        direction = "north";
        break;
      case "north":
        direction = "west";
        break;
      case "west":
        direction = "south";
        break;
      case "south":
        direction = "east";
        break;
    }
    for (let k = 0; k < j; k++) {
      const prime = isPrime(i);
      if (prime) {
        ctx.arc(center.x, center.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.moveTo(center.x, center.y);
      i++;
      switch (direction) {
        case "east":
          center.x += stepSize;
          break;
        case "north":
          center.y -= stepSize;
          break;
        case "west":
          center.x -= stepSize;
          break;
        case "south":
          center.y += stepSize;
          break;
      }
      ctx.lineTo(center.x, center.y);
      ctx.stroke();
    }
    switch (direction) {
      case "east":
        direction = "north";
        break;
      case "north":
        direction = "west";
        break;
      case "west":
        direction = "south";
        break;
      case "south":
        direction = "east";
        break;
    }
    j += 1;
  }
}
ulamPrimeSpiral(ctx, N);
