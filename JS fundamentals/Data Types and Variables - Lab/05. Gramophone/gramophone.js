function calculating(band, album, song) {
  let rotation = 2.5;
  let totalSec = (album.length * band.length * song.length) / 2;
  console.log(`The plate was rotated ${Math.ceil(totalSec / rotation)} times.`);
}
