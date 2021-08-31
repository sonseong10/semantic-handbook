# 브라우저용 CSS

보다 정확한 CSS 적용을 위해 브라우저별 제공하는 속성을 사용합니다.

| 종류    | 설명                                   |
| ------- | -------------------------------------- |
| -moz    | 모질라(Firefox)에 적용합니다.          |
| -o      | Opera에 적용합니다.                    |
| -ms     | 마이크로소프트 IE에 적용합니다.        |
| -webkit | 구글 Chrome, 애플 Safari에 적용합니다. |

## 사용법

```css
.elementClass {
  -moz-border-radius: 2em;
  -ms-border-radius: 2em;
  -o-border-radius: 2em;
  -webkit-border-radius: 2em;
  border-radius: 2em;
}
```
