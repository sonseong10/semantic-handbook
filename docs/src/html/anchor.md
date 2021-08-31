# 페이지 이동

현재 위치에서 다른 위치로 이동합니다.

```html
<a href="https://...">someting link</a>
```

## 기억하면 좋은 속성

- href: 링크는 HTTP 기반 URL일 필요는 없습니다. 그래서 `mailto:`, `tel:` 을 활용해서 전화번호, 이메일주소 등 사용 가능합니다.

:::warning 주의
a 태그는 사용을 위해 href({h}ypertext {ref}erence)라는 속성 작성이 필요합니다.
:::

- target: 링크한 URL을 표시할 위치. 가능한 값은 브라우징 맥락으로, 새 브라우저를 열지, 탭에 추가할지를 정할 수 있습니다.
  - \_self: URL을 현재 브라우징 맥락에 표시합니다. 기본값.
  - \_blank: URL을 새로운 브라우징 맥락에 표시합니다. 보통 새 탭이지만, 사용자가 브라우저 설정을 통해 새 창으로 바꿀 수 있습니다.

## 그 외 a 태그에서 사용 가능한 속성

- [Link-MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/a)에서 확인 바랍니다.

### 예제

이곳 이라는 텍스트에 본인이 가고 싶은 주소(ex. naver, google, youtube...)를 입력 후 변화를 확인합니다.

**출력 결과**

![링크연습](../.vuepress/public/images/example/link.jpg)

:::details 복사용 텍스트
나는 이제 떠날거야 이곳으로!
:::
