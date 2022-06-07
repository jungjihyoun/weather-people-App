# 🌦 Weather People App _ front  

Mobile App 'WeatherPeople' Frontend using ReactNative 


***

Abstract
------------
사람들이 직접 경험한 오늘의 날씨정보를 토대로 옷차림을 공유한다면,
내가 직접 느낀 날씨를 기록할 수 있다면 어떨까요?
웨더피플은 날씨에 관련된 경험을 공유하고 , 소통하는 서비스 입니다.

이 레포지토리에는 프론트엔드 코드가 담겨있습니다. 
#### 백엔드에 관련된 내용은 여기서 확인할 수 있습니다: [Click Here][back_link]

[back_link]: https://github.com/jungjihyoun/weather-people-api "백엔드 깃허브"


Composition
-----------
프로젝트의 주요 구성 요소는 다음과 같습니다:      
> * App
>   + assets
>     - fonts
>     - images
>     - svg
>   + components
>       - AppSwiper.js
>       - InputTitle.js
>       - WeatherModal.js
>       - WeatherSelect.js
>       - WeatherPopup.tsx
>       - WeatherTextArea.js
>       - WeatherTextInput.js
>   + constant
>       - mainRoutes.js
>   + graphql
>     - Record.js
>     - USER.js
>   + hooks
>     - useFetchAllUser.js
>     - useFetchDust.js
>     - useFetchGeo.js
>     - useFetchRecord.js
>     - usePostRecord.js
>     - useShortWeather.js
>   + interfaces
>     - user.ts
>   + navigation
>     - AuthStack.js
>     - BottomTab.js
>     - FeedStack.js
>     - HomeStack.js
>     - MainStack.js
>     - PeoplePickStack.js
>     - ProfileStack.js
>     - UploadStack.js
>   +screens
>     + auth
>       + component
>         - LoginDashBoard.js
>         - index.js
>       + container
>         - LoginContainer.js
>       - LoginScreen.js
>       - SplashScreen.js
>       - auth.styled.js
>     + feed
>       + component
>         - Feed.tsx
>         - Feeds.tsx
>         - TopSection.tsx
>         - WeatherInfo.js
>       + container
>         - FeedContainer.tsx
>       - Feed.styled.js
>       - FeedScreen.js
>     + home
>       + component
>         - HotPost.tsx
>         - OutfitPhotos.tsx
>         - OutfitSwiper.tsx
>         - TopSection.tsx
>         - WeatherBoard.js
>         - WeatherPick.js
>       + container
>         - HomeContainer.tsx
>       - Home.styled.js
>       - HomeScreen.js
>     + peoplePick
>       - peoplePick.js
>     + upload
>       + component
>         - DetailRecordSelect.tsx
>         - DetailRecordText.tsx
>         - DetailRecords.tsx
>         - ImageSlides.tsx
>         - TopSection.js
>         - UploadInputArea.js
>       + container
>         - UploadContainer.tsx
>       - Upload.styled.js
>       - UploadScreen.js
>   +utils
>     - API.js
>     - DATE.js
>     - SIDO.js
>     - fetcher.js
>   + styles
>     - globalStyles.js
>   - App.js
> * ios 
> * android 
> * package.json 
> * pakage-lock.json

### Description
#### android
android 폴더에는 android project 파일이 담겨있습니다. android app을 build 할 때 사용합니다.  
#### ios
ios 폴더에는 ios project 파일이 담겨있습니다. ios app을 build 할 때 사용합니다.  
#### App.js
application의 코드가 bundling 됩니다.
#### utils
주요 날씨 정보 및 카카오 api 통신을 위한 주소가 API.js에 정리되어 있습니다. Base url 은 보안을 위해 환경 변수로 관리합니다.ㄴ
날짜 포매팅을 위한 함수를 모듈화 하고 기상청 통신을 위한 주소 모듈이 정리되어 있습니다. fetcher.js에는 graphqlFetcher 및 fetcherWithToken
등 백엔드 통신을 위한 인스턴스를 관리합니다.

#### screens
스크린을 모아둔 파일입니다. 각 스크린들은 컴포넌트들로 이루어져 있습니다.

#### navigation
앱의 화면 전환 및 탐색 기록을 위한 navagator를 관리하는 파일입니다.

#### components
각 스크린에 쓰이는 컴포넌트를 보관한 파일입니다. 각 컴포넌트들은 재사용 가능합니다.

#### assets
이미지와 폰트를 보관하는 파일입니다.

***



## Initial Screen
<img src="https://user-images.githubusercontent.com/55846598/172408658-84ddb903-dfdc-473f-b227-22f372d1b3c0.png" width="200" height="400" />
<img src="https://user-images.githubusercontent.com/55846598/172408704-0b8aa772-181a-428b-8963-e8c8d40770a1.png" width="200" height="400" />


## Installation    

######  1. Install NPM packages
```
npm install
```
######  2. Install pod
```
cd ios && pod install 
```
######  3. Start
```
npm run start
```
######  4. Run simulator
```
npx react-native run-ios / npx react-native run-android
```


---


### License
Distributed under Jihyoun Jung.

### Contact
Jihyoun Jung - jihyoun0602@gmail.com
