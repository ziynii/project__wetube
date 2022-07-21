
### ✨ 소개

youtube api 를 이용해 만든 youtube clone 웹 사이트입니다.

인기있는 동영상을 메인에 보여주고 동영상 검색기능이 존재합니다

반응형으로 제작해 모바일과 테블릿pc에서도 사용이 가능합니다

<br />

### ✨ Link

**🔗 github**

[https://github.com/ziynii/project__wetube](https://github.com/ziynii/project__wetube)

🔗 **project site**

[https://ziynii.github.io/project__wetube/](https://ziynii.github.io/project__wetube/)


<br />

### ✨ Skill

🔸 **React**

 React와 react-router-dom을 이용해 SPA 웹 어플리케이션을 제작했습니다

🔸 **TypeScript**

 타입스크립트를 이용해 타입에 대한 에러를 방지하고 가독성을 높였습니다

🔸 **Styled-Component**

 Styled-Component로 스타일 작업을 진행했습니다

🔸  **React helmet**

 React-helmet을 이용해 페이지 이동시 타이틀이 변경되도록 제작했습니다

🔸  **Postman**

 postman을 이용해 api통신 목록을 구성하고 api를 테스트 후 프로젝트를 진행했습니다

<br />


### ✨ Desktop


**🔸 홈**

  <img src="https://user-images.githubusercontent.com/85431762/180174770-42421444-1f2a-485b-b3f4-d423771d6668.png" width="700px"/>
  
  **🔸 동영상 상세페이지**
  
  <img src="https://user-images.githubusercontent.com/85431762/180175163-f70ce808-fd43-4fea-a949-a17e64fcd667.png" width="700px"/>
  
  **🔸 검색**
  
  <img src="https://user-images.githubusercontent.com/85431762/180175290-95771ab0-217b-4d16-904e-f0f4621959de.png" width="700px"/>

   


<br />

### ✨ Tablet



**🔸 홈**

  <img src="https://user-images.githubusercontent.com/85431762/180175534-394638c8-990a-41c3-83c5-920fa4aa001b.png" width="500px"/>
  
  **🔸 동영상 상세페이지**
  
  <img src="https://user-images.githubusercontent.com/85431762/180175686-1544bc6b-6a90-4972-adf3-bf94e4d39cfd.png"  width="500px"/>
  
  **🔸 검색**
  
  <img src="https://user-images.githubusercontent.com/85431762/180175778-db219ef3-6b2e-4f36-9453-d9bc38c16669.png"  width="500px"/>


<br />


### ✨ Mobile

**🔸 홈**

  <img src="https://user-images.githubusercontent.com/85431762/180176294-71eaa9b9-6408-4b17-ba5a-cc04067dc185.png"  width="400px"/>
  
  **🔸 동영상 상세페이지**

  <img src="https://user-images.githubusercontent.com/85431762/180176465-f2b8e5ee-7f19-4018-bd6d-dea99e18dcc0.png"  width="400px"/>
  
  **🔸 검색**
  
  <img src="https://user-images.githubusercontent.com/85431762/180176224-4f6b0222-e6dd-45ca-91d5-740aca5a26d2.png" width="400px"/>

   


<br />





### 🌟 Error & Solution

☑️ **반응형에서** **동영상의 사이즈 유지** 

**[ ERROR ]**

스타일링 과정에서 반응형으로 화면의 사이즈를 변경할 때 동영상의 크기가 잘리거나 남는 현상이 발생했습니다.

**[ SOLUTION ]**

유튜브 동영상 비율인 16:9를 반응형에서도 유지하기 위해 iframe을 감싸는 div를 만들어 height를 따로 주지 않고 padding-bottom을 56.25%로 설정한 후, iframe의 width와 height를 각각 100%로 설정해 문제를 해결했고 이미지와 영상의 종횡비를 맞추는 방법을 알게 되었습니다

☑️ **iframe과 sideNav의 z-index**

**[ ERROR ]**

tablet과 mobile 사이즈에서 iframe영역이 sideNav보다 위에 있는 문제가 발생했는데 z-index를 조절해도 해결이 되지 않았습니다

**[ SOLUTION ]**

iframe에 wmode값을 설정해 해결했습니다. wmode의 기본값은 window로 iframe보다 상위에 레이어가 존재할 수 없으므로 iframe위에 레이어를 표시할 수 있는 opaque로 설정했습니다
