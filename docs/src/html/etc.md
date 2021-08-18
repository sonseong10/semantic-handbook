# 기타

좀더 의미론적(semantic)한 사용을 위해, 기타적인 요소, html5에 새로운 요소들을 소개합니다.

## address

주소 정보를 제공할때 좀더 의미론적한 사용법 입니다.

```html
<address>서울특별시 ...</address>

<address>https://github.com/sonseong10</address>
```

## code & pre

보통 상황에서 `<code>`는 짧은 코드 조각(코드 한 줄 정도)을 사용할 때 사용합니다.

```html
<p><code>push()</code>는 배열 맨 뒤에 값을 추가 합니다.</p>
```

`<pre>`는 HTML에 작성한 내용(요소 내 공백문자 포함) 그대로 표현합니다.

```html
<pre>
  무지개 색상은
  빨강색
  주황색
  노랑색
  초록색
  파랑색
  남색
  보라색
  입니다.
</pre>
```

## abbr

축약어 등 함축적인 의미를 사용할때 정확한 의미 전달을 위해 사용 합니다.

```html
<abbr title="만나서 반가워 잘 부탁해">만반잘부</abbr>
```

## br

컨텐츠의 개행(줄 바꿈)이 필요한 경우 사용합니다.

```html
<p>
  이건 아주 긴 글 입니다. <br />
  이건 아주 긴 글 입니다.
</p>
```

## hr

문단 사이에 분리를 위해 줄을 그어야 하는 경우 사용합니다.

```html
<p>이건 아주 긴 글 입니다.</p>

<hr />

<p>이건 아주 긴 글 입니다.</p>
```

:::warning 주의점
시각적인 정보만 아닌 정보적인 의미도 제공 하기때문에
시각적 표현을 위해서라면 적절한 CSS를 사용해야 합니다.
:::

## figure <Badge type="tip" text="HTML5" vertical="middle" />

주로 미디어의 독립적인 콘텐츠를 표현합니다.

```html
<figure>
  <img src="https://..." alt="" />
  <figcaption></figcaption>
</figure>
```

:::tip
대체 택스트가 필요한 경우 figcaption 요소를 사용하며 예제에서는
alt 속성의 값으로 figcaption이 사용 되므로 alt="" 빈값으로 작성해도 괜찮습니다.
:::

## time <Badge type="tip" text="HTML5" vertical="middle" />

시간의 특정 지점 또는 구간을 나타냅니다.

```html
<time datetime="2021-08-12">2021년 8월 21일</time>작성
```

### 속성

- datetime: 적절한 검색 결과나, 알림 같은 특정 기능을 구현할 때 사용할 수 있습니다. 값 형식은 [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/time)에서 확인 바랍니다.

## output <Badge type="tip" text="HTML5" vertical="middle" />

스크립트 등에 의해 수행된 계산의 결과나 사용자의 액션에 의한 결과를 나타낼 때 사용합니다.

```html
<form action="/" oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b"></output>
</form>
```

### 속성

- oninput: input Event 사용을 위해 적용했으며 지금 단계에선 이런게 있다. 정도만 이해하고 넘어가도 괜찮습니다.

## cnaves <Badge type="tip" text="HTML5" vertical="middle" />

canvas 태그는 주로 자바스크립트와 같은 스크립트를 이용하여 그래픽 콘텐츠를 그릴 때 사용합니다. 그래픽 콘텐츠를 위한 컨테이너일 뿐 실제로 그림을 그리는 동작은 스크립트를 사용하여 구현합니다.

```html
<canvas id="myCanvas" style="border: 2px solid black">
  이 문장은 사용자의 웹 브라우저가 canvas 요소를 지원하지 않을 때 나타납니다.
</canvas>
```

- 요소 내부에 존재하는 텍스트는 해당 브라우저가 `<canvas>` 요소를 지원하지 않을 경우 브라우저 화면에 대신 나타나게 됩니다.
