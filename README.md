# Web3Login

Web3Login은 React와 Styled-Components, MetaMask(메타마스크) 지갑을 활용한 Web3 로그인 데모 프로젝트입니다.

## 주요 기능
- 메타마스크 지갑을 이용한 Web3 로그인
- 로그인/로그아웃 및 인증 상태 관리
- 네비게이션바에 계정 주소 표시
- 테마(다크/라이트) 토글
- 보호된 페이지(Products) 접근 제어
- 친절한 에러/안내 메시지

## 폴더 구조
```
src/
  components/         # Navbar, ProtectedRoute 등 공통 컴포넌트
  context/            # AuthContext, ThemeContext 등 전역 상태
  pages/
    login/            # 로그인 페이지 및 레이아웃
    signin/           # 회원가입 페이지 및 레이아웃
    products/         # 제품 목록 페이지 및 레이아웃
  routes/             # 라우터 설정
  styles/             # 글로벌 스타일, 테마
  App.tsx             # 앱 조립
  index.tsx           # 진입점
```

## 설치 및 실행
```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 프로덕션 빌드
npm run build
```

## 사용 방법
1. **크롬/파이어폭스 브라우저**에서 실행하세요.
2. **MetaMask(메타마스크) 확장 프로그램**을 설치하세요.
3. 로그인 버튼 클릭 → 지갑 선택 → 계정 선택 → Products 페이지로 이동
4. 네비게이션바에서 계정 주소 확인 및 로그아웃 가능

## 주요 코드 설명
- `AuthContext` : 로그인/로그아웃 및 계정 상태 관리
- `Login.tsx` : 메타마스크 연결 및 로그인 처리
- `Navbar.tsx` : 인증 상태/계정 표시, 로그아웃, 테마 토글
- `ProtectedRoute.tsx` : 인증된 사용자만 접근 가능한 페이지 보호

## 참고/주의사항
- 메타마스크가 설치되어 있지 않으면 안내 메시지가 표시됩니다.
- 지원 브라우저(크롬/파이어폭스)에서만 정상 동작합니다.
- 실제 이더리움 네트워크에 트랜잭션을 보내지 않고, 지갑 주소 인증만 수행합니다.

## 라이선스
MIT
