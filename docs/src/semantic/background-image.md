# 이미지 배경처리

웹 페이지를 제작하다보면 이미지로 뒷배경을 처리해야하는 상황이 있습니다.
이때, HTML img 태그로 표현 할 것인가. CSS background-image 속성으로 사용하는가에 대하여 이야기 해 볼려고 합니다.

### HTML 사용

```html
<img class="background" src="https://picsum.photos/600/300" alt="background" />
```

### CSS 사용

```css
.background-img {
  background-image: url("https://picsum.photos/600/300");
}
```

## 차이점

| 구분 | 정보적인 의미 | 비고                                        |
| ---- | :-----------: | ------------------------------------------- |
| HTML |       O       | 스크린 리더값으로 alt 값을 읽어 줍니다.     |
| CSS  |       X       | internet explorer에서는 사용이 불가 합니다. |

## 결론

:::tip
정보적으로 전달해야 하는 이미지는 HTML img 요소를 사용하지만, 시각적으로만 제공하는 이미지인 경우 CSS background-image 속성을 사용하여 처리합니다.
:::
