# 표

데이터를 구성할 표를 만들때 사용합니다.

```html
<!-- base -->
<table>
  <tr>
    <th>헤더</th>
    <td>데이터</td>
  </tr>
</table>

<!-- apply  -->
<table>
  <thead>
    <tr>
      <th>점수</th>
    </tr>
  </thead>
  <tbody>
    <td>3.4</td>
  </tbody>
  <tfoot>
    <td>3.4</td>
  </tfoot>
</table>
```

:::warning 주의점
table 사용한다면 반드시 빈값 또는 속성을 사용해서 행렬을 맞춰야 합니다.
:::

### 속성

#### th

- sope: `row`인 경우 행 데이터와 관련있음을 `col`인 경우 행 데이터와 관련있음을 브라우저가 이해 합니다.

#### td

- rowspan: 입력한 수 만큼 추가적으로 행을 더 가집니다.
- colspan: 입력한 수 만큼 추가적으로 열을 더 가집니다.
