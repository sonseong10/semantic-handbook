# 애니메이션

웹 페이지에 애니메이션 사용법을 안내합니다.

## transform

요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여할 수 있습니다.

```css
/* 회전: 단위, turn, deg */
.foo {
  transform: rotate(0.5turn);
}

/* 크기 조절: (가로 크기, 세로 크기) */
.foo {
  transform: scale(2, 0.5);
}

/* 이동 효과: (x축, y축) */
.foo {
  transform: translate(-100%, -100%);
}
```

## animation

요소의 다양한 변경사항이 있는 경우 사용합니다.

```css
.boo {
  animation: 3s change1;
}

/* Type 1 */
@keyframes change1 {
  from {
    margin-left: 100%;
    width: 300px;
  }

  to {
    margin-left: 0%;
    width: 100px;
  }
}

/* Type 2: 좀더 세밀한 조절이 필요한 경우 */
@keyframes change2 {
  0% {
    color: red;
    background-color: hotpink;
  }

  45% {
    color: blue;
    transform: scale(2);
  }

  100% {
    color: green;
    transform: none;
  }
}
```

## transition

요소의 변화가 스르륵(딜레이) 변화해야 한다면 사용합니다.

```css
.zoo {
  color: black;
  transition: color 300ms ease-in-out;
}

.zoo:hover {
  color: hotpink;
}
```

:::warning
특정 방식(display: none → block)의 변경하는 효과에는 transition을 적용 할 수 없습니다.
:::

### Reference

:::tip
정말 다양하고 많은 옵션들이 있으니 [MDN](https://developer.mozilla.org/en-US/) 사이트에서 필요한 옵션을 찾아 보는 것이 좋습니다.
:::
