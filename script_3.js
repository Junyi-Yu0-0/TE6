console.log("Exercise 3");

var size = 8;
var cb = '';

for (i = 0; i < size; i++) {
  for (j = 0; j < size; j++) {
    if ((j+i) % 2 == 0) {
      cb += ' ';
    } else {
      cb += '#';
    }
  }
  cb += '\n';
}
console.log(cb);
