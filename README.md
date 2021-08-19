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
