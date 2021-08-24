# 상태 디자인

요소의 마우스 올림, 클릭, 등 대표적인 상태에 따른 스타일 적용법에 대해 설명합니다.

```css
/* base */
.foo {
  color: blue;
}
```

## :hover

마우스가 요소의 올라간 상태일 때 발동합니다.

```css
.foo:hover {
  color: red;
}
```

:::warning
a 요소의 (:link, :visited, :active)가 덮어씁니다.
:::

## :active

요소 클릭 시 잠깐 동안 보이는 상태입니다.

```css
.foo:active {
  color: yellow;
}
```

## :focus

주로 input 태그에 사용자가 요소를 클릭 또는 탭하거나, 키보드 Tab 키로 선택했을 때 발동합니다.

```css
.foo:focus {
  color: gray;
}
```

### Reference

[MDN](https://developer.mozilla.org/en-US/)
