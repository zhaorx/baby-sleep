/**
 * 判空 Object Array String
 */
export function isEmpty(value) {
  if (value instanceof Object) {
    return Object.keys(value).length === 0;
  }
  if (value instanceof Array) {
    return value.length === 0;
  }
  return value === '' || value === null || value === undefined;
}

/**
 * 获取随机整数
 */
export function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 打乱数组元素顺序
 */
export function shuffle(arr) {
  const _arr = arr.slice();
  for (let i = 0; i < _arr.length; i++) {
    const j = randomInt(0, i);
    const t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
}

/**
 * 防抖函数
 */
export function debounce(func, delay = 200) {
  let timer;

  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}


/**
 * base64 转 Blob
 */
export function dataURLtoBlob(dataurl) {
  var arr = dataurl.split(',');
  var mime = arr[0].match(/:(.*?);/)[1];
  var bstr = atob(arr[1]);
  var n = bstr.length;
  var u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  return new Blob([u8arr], { type: mime });
}