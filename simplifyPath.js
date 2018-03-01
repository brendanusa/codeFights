function simplifyPath(path) {

  let newPath = '';
  let dir = 0;
  let i = path.length - 1;

  if (path[i] !== '/') {
    i++;
    path += '/';
  }

  const checkCharacter = () => {

    if (i < 0) {
      return;
    }

    if (path[i] === '/' && path[i - 1] && path[i - 2] && path[i - 1] === '.' && path[i - 2] === '.') {
      dir--;
      i -= 3;
      return checkCharacter();
    }

    if (path[i] === '/' && path[i - 1] && path[i - 1] === '/') {
      i--;
      return checkCharacter();
    }

    if (path[i] === '/' && path[i - 1] && path[i - 1] === '.' && path[i - 2] === '/') {
      i -= 2;
      return checkCharacter();
    }

    if (dir < 0) {
      while (path[i - 1] && path[i - 1] !== '/') {
        i--;
      }
      dir++;
      i--;
      return checkCharacter();
    }

    newPath += path[i];
    i--;
    return checkCharacter();
    
  }

  checkCharacter();

  newPath = newPath.slice(1, newPath.length).split('').reverse().join('');

  if (!newPath[0] || newPath[0] !== '/') {
    return '/' + newPath;
  }

  return newPath;

}

// path = "/a/b/c/../.."

// console.log(simplifyPath(path))