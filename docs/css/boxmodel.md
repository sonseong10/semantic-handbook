# Box Model

![Box_Model](https://hackernoon.com/hn-images/1*2jZwpWH9XO_QllhEpyGqMA.png)

- position: 요소의 위치
- margin: 컨텐츠의 바깥 여백
- padding: 컨텐츠의 안쪽 여백
- border: 테두리
- content: 요소의 실 크기

## 속기형(Shorthand)

![Shorthand](../.vuepress/public/images/example/shorthand.jpg)

```css
/* Type1 💩 */
div {
  padding-top: 1px;
  padding-right: 2px;
  padding-bottom: 3px;
  padding-left: 4px;
}

/* Type2 ✨ */
div {
  padding: 1px 2px 3px 4px;
}
```

## Box Sizing

```css
div {
  /* border-box, content-box, inherit, initial... */
  box-sizeing: border-box;
}
```

## Box Type

### block

![block](../.vuepress/public/images/example/block.jpg)

1. 본인 옆으로 진행을 맊음.
2. width를 부여한 경우 여백은 margin으로 채움.
3. 부모 height 값이 없다면 자식 height의 총 합.

example: div, h1 ⋯

### inline

![inline](../.vuepress/public/images/example/inline.jpg)

1. 필요한 만큼의 너비를 사용.
2. 남은 여백은 형제요소를 순차적 진행.
3. width, height, margin[padding]-top[bottom] 부여 불가
4. 요소 사이에 약간의 여백이 있긴 합니다.

example: span, img ⋯

### inline-block

![inline-block](../.vuepress/public/images/example/inline-block.jpg)

1. inline, block의 장점을 합친 방법
2. 형제요소를 순차적 진행.
3. width, height, margin[padding]-top[bottom] 부여 가능
4. 요소 사이에 약간의 여백이 있긴 합니다.
