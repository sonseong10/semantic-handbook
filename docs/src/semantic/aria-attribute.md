# aria 속성

누구나 사용가능한 웹환경을 만들어 나아가기 위한
웹표준과 웹접근성의 필수적으로 사용해야하는 aria에 대해서 알아보겠습니다.

## aria 란?

접근가능한 리치 인터넷 어플리케이션(Accessible Rich Internet Applications, ARIA)은 장애를 가진 사용자가 웹 콘텐츠와 웹 어플리케이션(특히 JavaScript를 사용하여 개발한 경우)에 더 쉽게 접근할 수 있는 방법을 정의하는 여러 특성을 말합니다. [MDN](https://developer.mozilla.org/ko/docs/Web/Accessibility/ARIA)

```html
<div
  id="percent-loaded"
  role="progressbar"
  aria-valuenow="75"
  aria-valuemin="0"
  aria-valuemax="100"
></div>

<div class="visually-hidden" aria-hidden></div>
```

## 왜 사용해야 하는가?

```html
<!-- 💩 -->
<strong class="price">5,000</strong>
```

이라는 가격을 표시하는 strong 요소가 있다면 브라우저 리더기를 사용하는 경우
5,000이라는 말만 들릴뿐 이게 가격을 뜻하는 건지, 리뷰가 5,000개인지 확실하게 알 방법이 없습니다.

```html
<!-- ✨ -->
<strong class="price" aria-label="5,000원">5,000</strong>
```

aria 속성을 사용한다면 5,000이 아닌 5,000원으로 브라우저 리더기가 작동합니다.
