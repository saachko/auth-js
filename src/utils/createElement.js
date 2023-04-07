// el: string (tag name)
// classNames: sting (classNames divided with space)
// parent: HTMLElement
// dataAttr: [[string, string]]

function createElement(el, classNames, parent, inner, dataAttr) {
  let element = null;
  try {
    element = document.createElement(el);
  } catch {
    throw new Error('Not a proper tag name!');
  }

  if (classNames) {
    element.classList.add(...classNames.split(' '));
  }

  if (parent) {
    parent.append(element);
  }

  if (inner) {
    element.innerHTML = inner;
  }

  if (dataAttr && dataAttr.length) {
    dataAttr.forEach(([attrName, attrValue]) => {
      if (element) {
        if (attrValue === '') {
          element.setAttribute(attrName, '');
        } else if (
          attrName.match(/href|title|target|src|alt|id|type|value|name|for/)
        ) {
          element.setAttribute(attrName, attrValue);
        } else {
          element.dataset[attrName] = attrValue;
        }
      }
    });
  }

  return element;
}

export default createElement;
