function simplifyPath(path) {

  let newPath = '';
  let dir = 0;
  let i = path.length - 1;

  while (i >= 0) {
    console.log(path[i])

    if (path[i] === '/' && path[i - 1] && path[i - 1] === '/') {
      console.log('10', i, path[i])
      i--;
    }

    if (path[i] === '/' && path[i - 1] && path[i - 2] && path[i - 1] === '.' && path[i - 2] === '.') {
      console.log('15', i, path[i])
      dir--;
      i -= 4;
    }

    while (dir < 0) {
      console.log('27', i, path[i])
      while (path[i] !== '/' && i >= 0) {
        console.log('29', i, path[i])
        i--;
      }
      console.log('32', i, path[i])
      dir++;
    }

    if (path[i] === '/' && path[i - 1] && path[i - 1] === '.') {
      console.log('22', i, path[i])
      i -= 2;
    }

    console.log('36', i, path[i])
    newPath += path[i];
    i--;

  }

  console.log(newPath)

  return newPath.slice(1, newPath.length).split('').reverse().join('');
}

path = "/home/a/./x/../b//c/"

console.log(simplifyPath(path))