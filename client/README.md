# 도커 사용법

> 도커 실행시킬 때 ps로 꺼진거 확인하고 실행시키세용~~

### 도커 컨테이너 다루기

- 도커 프로세스 확인 : `docker ps`
  - 도커 프로세스 CONTAINER ID 만 확인 : `docker ps -a -q`
- 도커 프로세스 정지 : `docker stop [컨테이너 ID 해시]`
  - 현재 실행중인 프로세스 정지 : `docker stop $(docker ps -a -q)`
- 도커 컨테이너 실행 : `docker run -d -p [포트1]:[포트2] [도커 허브 ID]/[이미지 이름]:[버전]`
  - **포트 1** : 호스트 포트
  - **포트 2** : 컨테이너 내부 포트
  - **도커 허브 ID** : 도커 허브 Repository 에 등록된 계정
  - **도커 이미지 이름** : 도커 허브 해당 Repository 에 등록된 이미지
  - **버전** : 실행 시킬 버전

### 도커 이미지 업데이트

- 도커 이미지 생성 : `docker build -t [도커 허브 ID]/[이미지 이름]:[버전] .`
  - **도커 허브 ID** : 도커 허브 Repository 에 등록된 계정
  - **도커 이미지 이름** : 도커 허브 해당 Repository 에 등록된 이미지
  - **버전** : 지정할 버전
  - `.` : 꼭 마지막에 `.`을 붙여야 함
- 도커 이미지 push to `hub.docker.com` : `docker push [도커 허브 ID]/[이미지 이름]:[버전]`
- 도커 이미지 pull from `hub.docker.com` : `docker pull [도커 허브 ID]/[이미지 이름]:[버전]`
