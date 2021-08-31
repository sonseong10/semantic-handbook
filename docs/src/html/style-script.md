# 외부 리소스 연결, 스타일, 스크립트

## link

현재 문서와 외부 리소스의 관계를 명시합니다. link는 스타일 시트(CSS)를 연결할 때 제일 많이 사용하지만, 사이트 아이콘("파비콘"), 웹 폰트 연결 등 여러 가지로 쓰일 수 있습니다.

```html
<link rel="" href="" />
```

### 속성

- rel: 현재 문서와 연결한 아이템의 관계가 어떻게 되는지 설명합니다.

  - [링크 유형](https://developer.mozilla.org/ko/docs/Web/HTML/Link_types)

- href: 연결할 아이템의 (절대 or 상대)경로

## style

HTML에서 CSS문법을 사용하여 스타일 적용을 위해 사용합니다.

```html
<style>
  p {
    color: red;
  }
</style>
```

::: warning 주의
스타일 우선순위로 CSS에서 작성한 스타일이 덮어씌이기 때문에 가급적 사용을 삼가하는게 좋습니다.
:::

## script

HTML 문서 내에 JavaScript파일을 첨부, 사용할 때 사용합니다.

```html
<!-- JS첨부 -->
<script src=""></script>

<!-- JS사용 -->
<script>
  alert("Hello Word")
</script>
```

### 속성

- src: 연결할 JavaScript파일 (절대 or 상대)경로

::: warning 주의
JS파일을 받아오는 동안 화면이 멈추므로(렌더링 중단) body 요소 마지막에 작성하는 편이 좋습니다.
:::
