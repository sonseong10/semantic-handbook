# HTML 기본골격

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- 웹 페이지에 관한 메타 데이터 -->
    <title>Document</title>
  </head>
  <body>
    <!-- 웹 페이지에 들어갈 내용 -->
  </body>
</html>
```

## DOCTYPE

브라우저에게 해당 페이지는 `HTML5`로 작성된 문서임을 알려줍니다.

```html
<!-- 작성일(2021,08,13) 기준 제일 최신버전 -->
<!DOCTYPE html>
```

## html

```html
<html lang="ko-KR"></html>
```

root 요소라고 부르기도 합니다.

:::warning 주의점
html의 자식요소로는 head 와 body만 작성 가능합니다.
:::

### 속성

- lang: 작성된 웹 페이지가 어느 국가의 언어인지 브라우저에게 안내를 해줍니다.
  - ISO 국가코드로 작성해야하며 코드표는 [WIKI](https://ko.wikipedia.org/wiki/ISO_639-1_%EC%BD%94%EB%93%9C_%EB%AA%A9%EB%A1%9D)를 참고 바랍니다.

## head

```html
<head></head>
```

웹 페이지에 보이지는 않지만, 웹페이지에 관련된 정보를 담고 있습니다.

## title

```html
<title>문서의 대제목</title>
```

브라우저 상단 탭에 보여주는 페이지의 대제목이고 필수적으로 작성해야 하며, SEO(검색엔진)에 도움을 줍니다.

## body

```html
<body></body>
```

웹 페이지에 보이는 컨텐츠 내용을 작성합니다.
