# Javascript

## 프로그래밍언어 문법 공부

> 데이터(자료형)
>
> 변수 - 데이터 타입
>
> 명령 구문 - 조건문(분기문), 반복문
>
> 함수
>
> 배열, 객체(object) Class

### Js Data Type

https://www.w3schools.com/js/js_datatypes.asp

> 자바스크립트는 대체적으로 데이터 타입을 구분하지 않음
>
> Boolean 타입은 별도로 구분됨

### Js Variable

> - https://www.w3schools.com/js/js_variables.asp
> - https://www.w3schools.com/js/js_let.asp
> - https://www.w3schools.com/js/js_const.asp

> var : ES5
>
> let , const : ES6

### Js Operator

https://www.w3schools.com/js/js_operators.asp

> a = a + 1
> => a+= 1
> => a++ 모두 같은 의미

### Js Condition

https://www.w3schools.com/js/js_if_else.asp

> 조건문 / 분기문
> if 구문에 사용되는 condition 식은 결과가 true/false로 나올 수 있는 식
> Javascript 에서 0 : false, 그 이외의 정수는 true 를 의미

### Js Switch

https://www.w3schools.com/js/js_switch.asp

> expression은 결과가 true/false 의 형태가 아니고 일반 데이터( 숫자, 문자) 형태

### Js Loop For

https://www.w3schools.com/js/js_loop_for.asp

### Js Loop While

https://www.w3schools.com/js/js_loop_while.asp

> 조건문(분기문), 반복문은 프로그램 알고리즘의 논리적인 흐름에 관여하는 명령구문

### Js Function

https://www.w3schools.com/js/js_functions.asp

> 함수 선언 기본 형식
>
> 함수에 매개변수를 사용하는 방식
>
> 함수에 return 을 사용하는 방식

### Js Arrow Function

https://www.w3schools.com/js/js_arrow_function.asp

### Js Array

https://www.w3schools.com/js/js_arrays.asp

> 배열 데이트를 변수에 대입 => 배열 변수에는 배열데이터가 저장되어 있는 '메모리 위치값'이 저장. (배열데이터 자체가 저장되는 것은 아님)
>
> const 키워드를 사용했을 때 전체 배열 데이터의 변화없이 원소 변경, 추가, 삭제 가능
>
> const 키워드를 사용했을 때 전체 배열 데이터의 변경은 불가능하다!
>
> 배열 데이터도 객체 데이터로 선언됨!

### Js Objetct

https://www.w3schools.com/js/js_objects.asp

> window 브라우저 관련 전역 객체 존재(전체에서 this 쓰면 window객체가 선택됨)

### Js Class

https://www.w3schools.com/js/js_classes.asp

> 클래스는 객체 데이터를 생성할 수 있도록 하는 설계도

### Js this

https://www.w3schools.com/js/js_this.asp

> this 가 사용되는 위치
>
> - Object 안에 있는 method에서 사용 : 포함하는 Object를 가리킴
> - 전역 공간에서 사용 : 전역 객체를 가리킴
> - 함수 공간에서 사용 : 함수 객체를 가리킴

### Javascript에서 사용할 수 있는 객체(제공되는 객체)의 종류

> API : 어플리케이션 프로그래밍을 위해 여러 서비스/프레임워크/라이브러리에서 제공하는 객체 또는 함수
>
> HTML5 API
>
> - geolocation

> ES5/ES6 API(Object) : 내장 객체
>
> - Math, Date, ...

> DOM(Document Object Model)
>
> - HTML Element를 객체로 만든 것

> BOM(Browser Object Model)
>
> - 브라우저와 연관된 객체

> 외부 API
>
> - 지도, API의 객체, 날씨 데이터 API의 객체

### DOM 콘탠츠

> HTML문서에 없던 콘탠츠를 프로그래밍을 통해서 생성 => 동적 생성(Dynamic) 생성

### Finding DOm

> HTML4 에서 사용하던 방식(Id, Class, Tag 모두 구분)
>
> - getElementByID() - 단수임!!
> - getElementsByTagName()
> - getElementsByClassNmae()

> HTML5 : 이전 방식이 복잡해서 변경됨(Id, Class, Tag 구분하지 않아도 됨)
>
> - querySelector()
>
> - querySelectorAll()
>
> - 한 종류의 메소드로 id/class/tag 요소로 접근하는데 모두 사용 가능
> - css selector 사용법과 동일한 방법으로 요소 종류를 구분

### Create, Append Element(Node)

> document.createElement()
>
> document.appendChild()

### Vanila js / jquery

> vanila Js : 라이브러리나 프레임워크 사용없이 순수 자바스크립트로 개발하는 것
>
> jquery : javascript 라이브러리
>
> - $() == $(document).ready() : HTML Element가 모두 렌더링 된 이후에 실행 (defer을 안써줘도 됨)
