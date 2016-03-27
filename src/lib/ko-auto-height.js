import ko from 'knockout';

function setHeight(element) {
  const windowHeight = window.innerHeight;
  const offset = element.offsetTop;
  const availableSpace = windowHeight - offset;

  element.style.height = `${availableSpace}px`;
}

function init(element) {
  window.addEventListener('resize', () => { setHeight(element); });
}

function update(element, valueAccessor) {
  const autoHeight = ko.utils.unwrapObservable(valueAccessor());

  if (autoHeight) {
    setHeight(element);
    // // TODO: can we not use setTimeout here?
    // window.setTimeout(() => { setHeight(element); }, 50);
  }
}

export default { init, update };
