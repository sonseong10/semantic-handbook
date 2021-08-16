# data 속성

## data-\* 란?

CSS, JavaScript 선택자로 의미론적 사용을 위해 사용합니다.

### data-\* 사용규칙

1. 이름은 xml(대소문자를 구분하지 않음)로 시작하면 안 됩니다.
2. 이름에는 콜론 문자(:)가 포함되어서는 안 됩니다.
3. 이름은 대문자를 포함할 수 없습니다

```html
<ul>
  <li data-name="foo">item 1</li>
  <li data-name="boo" data-js="coo">item 2</li>
  <li data-name="zoo">item 3</li>
</ul>
```

## CSS에서 사용

```css
li[data-name="boo"] {
  color: blue;
}
```

## JavaScript에서 사용

```js
const boo = document.queryselector('li[data-name="boo"]')

boo.dataset.js // "coo"
```

### Reference

- [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*)
- [data 사용법](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes)
