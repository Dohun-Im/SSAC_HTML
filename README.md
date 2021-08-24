# About Front End

https://www.w3schools.com/

## 표기법

- 사용자가 이름을 지정하는 경우
- 여러 단어를 사용해서 이름을 지정하는 경우

```
html-css : Kebab Case

html_css : Snake Case - Python

htmlCss : Camel Case - JavaScript, JAVA, C, C++

HtmlCss : Pascal Case - JavaScript, JAVA, C, C++ (Class)

Front End
- HTML(class, id) : Kebab case

- File/Folder name : Snake case

- Js : Camel case

- Js Class : Pascal case
```

## HTML

### HTML Introduction

https://www.w3schools.com/html/html_intro.asp

> HTML은 웹페이지의 구조를 표시
>
> HTML은 웹페이지의 컨텐츠 표시
>
> - 텍스트 컨텐츠
> - 멀티미디어 컨텐츠 : 이미지, 비디오, 오디오

> \*\*\*CSS나 JS 모두 HTML을 대상으로함

`(backtick 이라는 기호, 소스코드 사용할때 박스안에 넣기)

```
<tagname> CONTENTS </tagname>
** 시작태그만 있는 ELement : Empty Element (ex. <br> , <hr>)
```

### HTML Elements

https://www.w3schools.com/html/html_elements.asp

> 포함관계 -기준에 따라서 조상요소(Ancestor), 부모요소(Parent), 자식요소(child), 자손요소(descendant)

```
<html>
  <body>
    <h1>Web Page</h1>
  </body>
</html>

*html : body의 부모요소, h1의 조상요소

*body : html의 자식요소, h1의 부모요소

*h1 : html의 자손요소, body의 자식요소
```

### HTML Attributes

https://www.w3schools.com/html/html_attributes.asp

### HTML Heading

https://www.w3schools.com/html/html_headings.asp

### HTML Paragragh

https://www.w3schools.com/html/html_paragraphs.asp

### HTML HyperLink

https://www.w3schools.com/html/html_links.asp

- a : Anchor(닻)
- href : Hypertext REFerence

### HTML URL

https://www.w3schools.com/html/html_urlencode.asp

인터넷 주소

> - IP(Internet Protocol) 주소 : 192.168.0.1
> - 도메인(Domain Name) 주소 : www.naver.com
> - domain -> DNS(Domain Name Server/System) -> IP

URL(Uniform Resource Locator)

> - 자세한 주소
> - 도메인주소 + 해당 페이지 폴더 위치/ 파일 위치
> - 인터넷 주소를 표현하는 가장 큰 범위
> - 프로토콜 : http, https, ftp ...

### HTML File Path

https://www.w3schools.com/html/html_filepaths.asp

절대 경로

> - 출발 지점에 상관없이 항상 같은 리소스를 찾을 수 있도록 표시하는 주소/경로
> - 장점 : 항상 같은 자원의 위치로 찾아올 수 있음
> - 단점 : 주소 표시 길이가 길다
> - Ex) 도메인주소/파일(폴더) 경로 : https://www.w3schools.com/html/html_filepaths.asp

상대 경로

> - 출발 지점을 기준으로 리소스 경로를 표시하는 주소/경로
> - 장점 : 주소 표시 길이가 상대적으로 짧음
> - 단점 : 기준에 따라서 표시 방식이 매번 달라짐
> - Ex) 파일(폴더) 경로 : html/html_filepaths.asp , ../html/html_filepaths.asp
> - Ex) 루트 상대 경로 : /html/html_filepaths.asp (같은 경로 내에서는 절대경로처럼 동작함)

### HTML Table

https://www.w3schools.com/html/html_tables.asp

Table Generator - 만들고싶은 표 복붙하거나 요소를 적어주면 알아서 코드 작성해준다!

https://www.tablesgenerator.com/html_tables

### HTML List

https://www.w3schools.com/html/html_lists.asp

중첩목록(Nested List) : 여러 수준(Level)으로 구성된 목록

### HTML Images

https://www.w3schools.com/html/html_images.asp

alt : alternative (그림을 설명해주는 간략한 단어, for 시각장애인분들)

### HTML Videos

https://www.w3schools.com/html/html5_video.asp

### HTML Youtube

https://www.w3schools.com/html/html_youtube.asp
Videos 와 비슷하지만! autoplay mute 등은 source 끝에 ?붙이고 autoplay=1 이런식으로 써주어야!

### HTML Semantics (영역 구분이 중요)

https://www.w3schools.com/html/html5_semantic_elements.asp

### HTML Block & Inline

https://www.w3schools.com/html/html_blocks.asp

> 포함관계에 대한 특성
>
> - block 요소 : 다른 block 요소, inline 요소, 콘텐츠 모두 포함 가능
> - inline 요소 : 다른 inline 요소, 콘텐츠 는 포함가능/ block 요소는 포함 불가능
> - 예외 : a 태그 - inline 요소이지만 block 요소도 포함 가능

### HTML Entities

https://www.w3schools.com/html/html_entities.asp

> HTML 마크업 용도로 Fix된 기호는 대체 코드를 사용
> <, >, &, ", '
> 공백을 여러 칸 띄울 때 : 대체코드를 사용
> 브라우저 렌더링용 대체코드 : ex) &copy; => 기업표시

### HTML Id, Class

https://www.w3schools.com/html/html_id.asp
https://www.w3schools.com/html/html_classes.asp

> Id 특성
>
> - 하나의 HTML 문서 내에서 동일한 id 이름을 사용할 수 없음.
> - 하나의 HRML 문서 내에서 고유해야 함.
> - 하나의 HTML Element에 Id 이름을 여러개 붙일 수 없음.
>
> Class 특성
>
> - 하나의 HRML 문서 내에서 동일한 class 이름을 여러번 사용할 수 있음.
> - 하나의 HTML Element에 여러가지 class 이름을 붙일 수 있음.

## CSS

### CSS Introduction

https://www.w3schools.com/css/css_intro.asp

### CSS Syntax

https://www.w3schools.com/css/css_syntax.asp

### CSS Selectors

https://www.w3schools.com/css/css_selectors.asp

> Simple Selector 가 가장 중요 (Element, ID, Class)

### CSS How To

https://www.w3schools.com/css/css_howto.asp

> External( by Link )
> Internal
> Inline (제일 별로 but Js 에서 css를 제어할 때 사용함)

### CSS Text

https://www.w3schools.com/css/css_text.asp

### CSS Font

https://www.w3schools.com/css/css_font.asp

> Web Font 기억!
>
> - Google Font : https://fonts.google.com/ (영문, 한글)
> - Noonnu Font : https://noonnu.cc/ (한글)

### CSS Box Model

https://www.w3schools.com/css/css_boxmodel.asp

> Box Model 구성 요소
>
> - Content(width/height)
> - padding
> - border
> - margin

### CSS width/height

https://www.w3schools.com/css/css_dimension.asp

> width/height 기본특성
>
> - 블럭 요소 : width는 부모요소에 맞춰져서 채워짐, height는 자식요소에 맞춰짐.
> - 인라인 요소 : width/height 적용되지 않음. - 레이아웃 구성 용도로 사용하지 않음
> - 레이아웃 구성은 박스들을 배치하는 것( 세로 배치는 블럭요소의 기본 성질. 따라서 가로 배치가 중요한 이슈 - Flexbox 을 사용한 방식)

> 단위
>
> - px : px 값으로 고정
> - % : 부모요소를 기준으로 특정 비율 크기로 설정

### CSS Padding

https://www.w3schools.com/css/css_padding.asp

### CSS Border

https://www.w3schools.com/css/css_border.asp

> 축약표현 : p { border: 5px solid red;}
> 한 쪽만 지정 : p { border-left: 5px solid red;}

### CSS Margin

https://www.w3schools.com/css/css_margin.asp

### CSS Background

https://www.w3schools.com/css/css_background.asp

> background color / background image

\*\* CSS 상속

> - 부모요소에 적용된 CSS style이 자식요소에 적용되는 것
> - 상속이 되는 property와 되지 않는 property 존재
> - color는 상속됨!

\*\* CSS Color 코드값

> - CSS에서 16진수 코드값과 10진수 코드값을 사용할 수 있음.
> - 16진수 코드값 : #16진수 숫자 6자리
> - 10진수 코드값 : rgb(10진수숫자, 10진수숫자, 10진수숫자)
> - 10진수 코드값 + 투명도 : rgba(10진수숫자, 10진수숫자, 10진수숫자, 0.0 ~ 1.0)

### CSS Flexbox (페이지 내용 꼼꼼하게!)

https://www.w3schools.com/css/css3_flexbox_container.asp

> box 배치 제어를 위한 display:flex 속성 및 배치 관련 속성을 '부모 요소'(not 조상 요소)에 적용함!!

> flex-direction 속성
>
> - 박스 배치 방향 제어 (column, column-reverse, row, row-reverse)
> - 가로배치 세로배치 모두 제어 가능
> - 가로배치가 디폴트 값
> - flex-direction을 column으로 바뀌면 justify content 가 원래 가로정렬기준인데 세로로 바뀜
> - justify-content 와 align-items 의 방향이 flex-direction의 설정에 의해서 뒤바뀔 수 있음
> - 기본적으로 justify-content는 가로방향 정렬 / align-items는 세로방향 정렬

### 반응형 웹

> 반응형 웹 / 적응형 웹 으로 구분
> OSMU(One Source Multi Use) 의 여부로 반응형과 적응형을 구분
> web Front End 에서의 OSMU의 기준은 HTML Source code => Contents
> 반응형 웹 : HTML 소스코드를 하나만 사용하면서 모바일에서도 다른 디자인으로 작동하도록 함
> 적응형 웹 : pc용과 모바일용의 HTML 소스코드가 두개로 따로 존재하면서 리다이렉팅을 통하여 접속기기에 따라 HTML 소스코드로 연결시켜줌

### RWD Viewport

https://www.w3schools.com/css/css_rwd_viewport.asp

### Media Query

https://www.w3schools.com/css/css_rwd_mediaqueries.asp

> @media 키워드를 사용해서 break point를 설정하고, 그에 따른 독립된 코드 블럭을 실행할 수 있게 하는 것
> break point (변경점)

```
Ex) pc 해상도 : 1024px ~ 1920px / mobile 해상도 : 320px ~ 640px

@media screen and (min-width:1024px) and (max-width:1920px) { ~~ }
@media screen and (min-width:320px) and (max-width:640px) { ~~}
==> 320~ 640은 mobile / 1024~1920 은 pc

Ex) pc 해상도(기준) : 해상도 설정 하지 않음 / tablet 해상도: ~ 900px / mobile 해상도 : ~ 640px

body{color:red;}

@media screen and (max-width:900px){}

@media screen and (max-width:640px){}
==> ~640px 은 mobile / 640~900 은 tablet / 900~ pc
```

\*\* 가운데 배치/정렬 방식

> 가로방향
>
> - text-align:center - 텍스트, 인라인요소
> - margin-left:auto, margin-right:auto - 가로길이가 정해진 블럭요소
> - justify-content:center - flex 박스 배치

> 세로방향
>
> - align-items:center - flex 박스 배치
> - line-height : 텍스트

### CSS Display

https://www.w3schools.com/cssref/pr_class_display.asp

### 복합(조합) 선택자

> div p : 공백 - 자손 선택자 : 자식요소, 자손요소 모두 선택
> div>p : > - 자식 선택자 : 자식요소만 선택

### 가상 클래스(Pseudo-class)

> Element의 상태 구분
>
> - a:link
> - a:visited
> - a:hover
> - a:active

> Element의 특정 요소를 선택
>
> - .list-item:first-child(첫번째 요소 선택)
> - .list-item:last-child(마지막 요소 선택)

### Github 용어 정리

> repository : 저장소
>
> - local repository
> - remote repository

> clone : 복제
>
> - remote repsitory를 local repository로 복제
>
> staging : commit 할 파일을 선택하는 것 (<-> unstaging)
>
> commit : staging 된 파일을 업데이트를 fix(확정) 하는 것
>
> push : commit 된 snapshot(업데이트 완료된 상태)을 remote repository에 업로드(업데이트) 하는 것
>
> pull : remote repository의 상태를 다운로드하여 local repository의 상태를 업데이트 하는 것(fetch + merge)
>
> fetch : remote repository 의 상태를 가져오기만 하는 것
> merge : 가져온 업데이트 된 상태들을 하나로 합치는 것
> pull request : 각각 업데이트 된 서로 다른 개발 내용을 remote repository 관리자가 merge 하도록 요청하는 것
