# 입력서식

## form

form 요소는 사용자에게 정보를 받아 제출하기 위한 상호작용(대화형 컨트롤)을 포함하는 문서 구획을 나타냅니다.

```html
<form action="">
  <!-- 입력받을 내용 -->
</form>
```

### 속성

- action : 사용자에게 입력받은 내용을 보낼 위치
- method : 양식을 제출할 때 사용할 HTTP 메서드

### HTTP 메서드 <Badge type="tip" text="필수" vertical="top" />

| 명칭   | 역할                                                                                                                | 비고   |
| ------ | ------------------------------------------------------------------------------------------------------------------- | ------ |
| POST   | POST 메서드는 특정 리소스에 엔티티를 제출할 때 쓰입니다. <br /> 이는 종종 서버의 상태의 변화나 부작용을 일으킵니다. | Create |
| GET    | GET을 사용하는 요청은 오직 데이터를 받기만 합니다.                                                                  | Read   |
| PUT    | PUT를 통해 해당 리소스를 수정합니다                                                                                 | Update |
| DELETE | DELETE 메서드는 특정 리소스를 삭제합니다.                                                                           | Delete |

추후 REST API를 이해하기 위해서 반드시 알았으면 하는 정보입니다.
자세한 설명은 [MDN](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)에서 확인 할 수 있습니다.

### 입력받기

```html
<form action="" method="GET">
  <!-- 이안에 소개되는 내용을 넣어서 태스트 해주세요 -->
  <button type="submit">
    제출
  </button>
</form>
```

## input

```html
<input type="" />
```

### 속성

- type: 사용자에게 받을 양식이 어떤 종류인가를 정합니다. 올바른 양식을 위해 작성 해야합니다.
  - 사용가능한 값 : file, date, color, text(default) ⋯ 등이 있습니다.

> 자세한 종류와 설명은 [MDN](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input)에서 확인 할 수 있습니다.

- required: 필수적으로 입력을 받아야 하는 경우 사용하며 빈값인 경우 브라우저가 안내창을 띄워줍니다.

- placeholder: 입력전에 사용자가 무슨 내용을 작성해야 하는지 알 수 있게 도움을 줍니다.

## label

양식의 이름을 붙이는 태그

```html
<!-- Type1 -->
<label for="name">이름</label>
<input type="text" id="name" />

<!-- Type2 -->
<label for="name">
  <input type="text" id="name" />
  이름
</label>
```

### 속성

- for : 연결 하는 요소의 id와 같은 값을 작성해 label과 해당요소를 연결합니다.

### 명시적 과 암시적

- Type1: 명시적 label 태그 사용법이며, label의 연결을 `형제요소`에서 사용합니다.

- Type2: 암시적 label 태그 사용법이며, label의 연결을 `자식요소`에서 사용합니다.

:::tip
둘다 표준 사용법임으로 사용 가능 하지만, 보통은 Type1의 명시적 사용법을 이용합니다.
:::

## radio & checkbox

```html
<!-- radio -->
<label for="male">남성</label>
<input type="radio" name="gender" id="male" value="남성" />
<label for="female">여성</label>
<input type="radio" name="gender" id="female" value="여성" />

<!-- checkbox -->
<label for="soccer">축구</label>
<input type="checkbox" name="sports" id="soccer" value="축구" />
<label for="baseball">야구</label>
<input type="checkbox" name="sports" id="baseball" value="야구" />
```

### 단일값 vs 다중값

`단일값은 radio` 타입을 `다중값은 checkbox` 타입을 사용합니다.

### 속성

- value: 브라우저가 해당 태그가 선택된다면 이해하는 값입니다.
- name: radio, checkbox의 속한 그룹을 브라우저가 이해 할 수 있습니다.
- checked: 선택값을 미리 지정할수 있습니다.

## select

```html
<select name="month">
  <option value="1">1월</option>
  <option value="2">2월</option>
  <option value="3">3월</option>
</select>
```

### 속성

- multiple: 다중값으로 변경해야 하는 경우 사용합니다.

## textarea

장문의 값을 입력 받을때 사용합니다.

```html
<textarea rows="10" cols="3"> </textarea>
```

### 속성

- rows: 입력받을 텍스트의 줄의 수
- cols: 입력받을 텍스트의 너비

:::tip
추후 CSS로 충분히 스타일링이 되기 때문에 굳이 입력하지 않아도 괜찮습니다.
:::

## button

```html
<!-- Type1 -->
<button type="button">버튼</button>
<!-- Type2 -->
<button type="submit">제출</button>
<!-- Type3 -->
<button type="reset">초기화</button>
```

### 속성

| type   | 설명                                                                                                          | 비고 |
| ------ | ------------------------------------------------------------------------------------------------------------- | ---- |
| button | 이벤트를 연결하여 사용자와 인터렉션을 위해 사용합니다.<br/>아무런 이벤트가 없다면 아무런 행동도 하지 않습니다 |      |
| submit | 사용자에게 입력받은 내용을 전달할때 사용합니다.<br/> 그로인해 페이지 이동(화면깜빡임)이 발생합니다.           |      |
| reset  | form 요소안에 사용자에게 입력받은 내용을 전부 초기화 합니다.                                                  |      |

:::tip
button 사용 시 가급적 type 속성은 작성해야 합니다.
form 에서 버튼을 눌렀을 때 양식 데이터를 제출하고, (존재하지 않는) 응답을 불러오려고 시도하는 과정에서 문서의 현재 상태가 사라질 수 있습니다.
:::

### input type="button" 과 button 비교

input 태그의 type으로 button, reset, submit이 있습니다. 그렇지만 button 요소로 사용하는 것을 추천합니다.

- button 요소로 사용하는 경우가 접근성 면에서 좋다고 합니다.
- button의 자식요소로 em, img, 등등 다른 요소들로 버튼을 사용할 수있지만, input type="button" 경우 빈요소이기 때문에 사용 할 수 없습니다.

### a요소 와 button요소 비교

사용자와 특정한 이벤트가 있다면 button 요소를, 어디론가 위치 이동이 필요한경우 a 요소를 사용합니다.

### Reference

소개 하지 못한 다양한 속성이 있으므로, 추가적인 정보가 더 필요 하다면 [MDN](https://developer.mozilla.org/ko/)에서 검색 후 확인 하는 것을 강력 추천합니다.
