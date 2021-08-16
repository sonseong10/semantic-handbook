# CSS 작성 순서

CSS는 `속성:값`으로 요소의 스타일을 정의하기 때문에 따로 규칙은 없습니다.
하지만 유지보수 및 협업 할 때 보다 편한 사용을 위해 기업 별로 CSS 작성 순서가 있습니다.

### 예제

## Mozilla

1. display (표시)
2. list-style
3. position (위치)
4. float
5. clear
6. width / height (크기)
7. padding / margin (간격)
8. border / background (테두리/배경)
9. color / font (글자/정렬)
10. text-decoration
11. text-align / vertical-align
12. white-space
13. other text
14. content (내용)

:::tip
위치 선정 > 윤곽 > 외곽 디테일링 > 채색 > 타이포그래피 와 같이 밖 → 안쪽으로의 흐름이다.
:::

## Naver

1. display(표시)
2. overflow(넘침)
3. float(흐름)
4. position(위치)
5. width/height(크기)
6. padding/margin(간격)
7. border(테두리)
8. background(배경)
9. color/font(글꼴)
10. animation

### Reference

- [MDN](https://developer.mozilla.org/en-US/docs/MDN/Guidelines/Code_guidelines/CSS#favor_longhand_rules_over_terse_shorthand)
- [NHN 마크업 코딩 컨벤션 63p.](https://nuli.navercorp.com/data/convention/NHN_Coding_Conventions_for_Markup_Languages.pdf)
