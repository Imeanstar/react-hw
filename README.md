###구현 이미지
![image](https://github.com/Imeanstar/react-hw/assets/81348938/29928280-178a-498c-af21-1fe7f887d988)

##code review
###main.jsx
![image](https://github.com/Imeanstar/react-hw/assets/81348938/6c5a3689-ecb5-45c1-a0c4-59ac1de85b6e)
- ReactDom을 통해 Root만들어줌
- Strict mode로 구현 후 Button.jsx로 연결
###Button.jsx
![image](https://github.com/Imeanstar/react-hw/assets/81348938/a37843bd-e8cc-43b8-af54-f674f059e11f)
- 각 components를 import해서 불러옴
- 해당 component div안에 배치
- Fragment안에 배치해도 큰 문제 없을 것 같음(배치상 문제 없을 듯)
- 아쉬운 점 기술( 차후 개선 희망 )
###PrimaryButton.jsx
![image](https://github.com/Imeanstar/react-hw/assets/81348938/6263318e-9189-4422-802e-af6a59286045)
- css.module에 연결하여 사용
- export하여 Button.jsx에 연결
###primaryButton.module.css
![image](https://github.com/Imeanstar/react-hw/assets/81348938/116efa2f-0a9d-4490-8920-12fe048389e2)
- global.css하고 연동해서 크기는 따로 설정하려고했는데, 뭔가 문제가 생겼는지 global이 적용이 안됨
- module.css 두 개를 해서 global.module.css를 해서 ${} ${}로 적용?