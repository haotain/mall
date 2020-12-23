export function debounce(func, delay) {
  let timer = null
  return (...arge) => {
    if (timer) clearTimeout(timer);
    setTimeout(()=> {
      func.apply(this, arge)
    }, delay)
  }
}

