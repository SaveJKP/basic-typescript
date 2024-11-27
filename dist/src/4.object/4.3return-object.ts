const position: { lat: number; lng: number } = {
  lat: 13.7563,
  lng: 100.5018,
};

function getPosition(): { lat: number; lng: number } {
  return position;
}

console.log(getPosition());
