function distanceFromHqInBlocks(someValue) {
    const hqLocation = 42;
    const distance = Math.abs(someValue - hqLocation);
    return distance;
}

function distanceFromHqInFeet(someValue) {
    const blocks = distanceFromHqInBlocks(someValue);
    const feetPerBlock = 264;
    const distanceFromHqInFeet = blocks * feetPerBlock;
    return distanceFromHqInFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
   const feetPerBlock = 264;
   return Math.abs(endBlock - startBlock) * feetPerBlock;
}

function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // First 400 feet are free
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // Flat fare for a distance over 2000 feet but under 2500 feet
    } else {
      return "cannot travel that far"; // Distance over 2500 feet is not allowed
    }
  }
  