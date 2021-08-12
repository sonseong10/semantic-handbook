# 미디어

이미지를 제외한 미디어(음악, 영상 등)처리를 설명합니다.

## audio

페이지에 음악 파일을 첨부 할 때 사용합니다.

```html
<!-- 단일 파일 -->
<audio src="(상대or절대)경로"></audio>

<!-- 다중 파일 -->
<audio>
  <!-- 순서대로 매칭된 값을 가져옵니다 -->
  <source src="(상대or절대)경로" type="audio/형식"></source>
  <source src="(상대or절대)경로" type="audio/형식"></source>
  <source src="(상대or절대)경로" type="audio/형식"></source>
  <!-- 그 어떤 형식도 브라우저에서 지원하지 않는 형식이라면 -->
  <p>브라우저에서 지원하는 형식이 아닙니다.</p>
</audio>
```

### 속성

- controls: 파일의 음량조절, 재생버튼 조절을 위해 사용합니다.
- autoplay: 페이지 입장시 자동으로 재생 해줍니다.
- loop: 해당 파일을 반복으로 재생됩니다.
- type: 미디어 형식별 유형을 작성합니다, [MDN](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter)에서 확인 바랍니다.

## video

페이지에 영상 파일을 첨부 할 때 사용합니다.

```html
<!-- 단일 파일 -->
<video src="(상대or절대)경로"></video>

<!-- 다중 파일 -->
<video>
  <!-- 순서대로 매칭된 값을 가져옵니다 -->
  <source src="(상대or절대)경로" type="video/형식"></source>
  <source src="(상대or절대)경로" type="video/형식"></source>
  <source src="(상대or절대)경로" type="video/형식"></source>
  <!-- 그 어떤 형식도 브라우저에서 지원하지 않는 형식이라면 -->
  <p>브라우저에서 지원하는 형식이 아닙니다.</p>
</video>
```

### 속성

- controls: 파일의 음량조절, 재생버튼 조절을 위해 사용합니다.
- autoplay: 페이지 입장시 자동으로 재생 해줍니다.
- loop: 해당 파일을 반복으로 재생됩니다.
- type: 미디어 형식별 유형을 작성합니다, [MDN](https://developer.mozilla.org/en-US/docs/Web/Media/Formats/codecs_parameter)에서 확인 바랍니다.

## iframe

페이지안에서 다른 페이지를 첨부할 경우 사용합니다.

```html
<iframe src="(상대or절대)경로"></iframe>
```
