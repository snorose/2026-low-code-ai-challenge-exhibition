# GA 이벤트 수집 가이드

이 문서는 `2026 Low-Code AI Challenge` 온라인 전시 페이지에서 GA4로 수집하면 좋은 이벤트를 정리한 가이드입니다.

목표는 단순 방문자 수 확인이 아니라, 각 수상작 팀이 포트폴리오에 활용할 수 있는 **관람객 관심 데이터**를 남기는 것입니다.

## 수집 목적

- 어떤 프로젝트가 목록에서 많이 선택되는지 확인
- 프로젝트 상세 페이지를 실제로 얼마나 보는지 확인
- 데모 영상, 배포 서비스, 발표 자료까지 이어지는 관심 행동 확인
- 팀별로 포트폴리오에 넣을 수 있는 정량 지표 제공

UTM은 사용하지 않는다는 전제로 정리했습니다.

## 수집 원칙

- 개인을 식별할 수 있는 정보는 수집하지 않습니다.
- 팀별 비교 순위보다는 각 팀의 프로젝트 반응 데이터를 제공하는 데 집중합니다.
- 모든 프로젝트 이벤트에는 공통 파라미터를 넣어 팀별 분석이 가능하게 합니다.
- GA4 기본 이벤트와 커스텀 이벤트를 함께 사용합니다.

## 공통 파라미터

아래 값은 프로젝트 관련 이벤트에 공통으로 넣는 것을 권장합니다.

| 파라미터        | 예시          | 설명                       |
| --------------- | ------------- | -------------------------- |
| `project_id`    | `hicosong`    | 프로젝트 고유 ID 또는 slug |
| `project_title` | `snolearning` | 프로젝트명                 |
| `team_name`     | `Hicosong`    | 팀명                       |
| `award`         | `Grand Prize` | 수상명                     |
| `route_name`    | `snolearning` | 상세 페이지 라우트명       |

예시:

```js
{
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
  route_name: "snolearning",
}
```

## 최종 수집 이벤트

### 1. `page_view`

페이지 조회 이벤트입니다.

GA4에서 자동 수집될 수 있지만, 현재 프로젝트는 SPA 방식으로 페이지가 전환되므로 상세 페이지 이동이 자동으로 잡히는지 DebugView에서 확인해야 합니다. 자동으로 잡히지 않으면 수동 전송이 필요합니다.

수집 위치:

- 목록 페이지 진입
- 프로젝트 상세 페이지 진입

활용:

- 전체 방문량 확인
- 프로젝트 상세 페이지별 조회수 확인

예시:

```js
gtag("event", "page_view", {
  page_title: "snolearning",
  page_location: window.location.href,
  page_path: "/projects/snolearning",
});
```

### 2. `select_content`

목록에서 프로젝트 카드를 클릭했을 때 수집합니다.

GA4 권장 이벤트 이름이며, 전시 목록에서 어떤 프로젝트가 선택됐는지 확인하는 데 사용합니다.

수집 위치:

- 프로젝트 카드 클릭
- 키보드 Enter 또는 Space로 프로젝트 카드 선택

활용:

- 목록에서 관심을 받은 프로젝트 확인
- 상세 페이지 진입 전 관심도 확인

예시:

```js
gtag("event", "select_content", {
  content_type: "project",
  content_id: "hicosong",
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
});
```

### 3. `view_project_detail`

프로젝트 상세 페이지에 진입했을 때 수집합니다.

`page_view`만으로도 조회수는 볼 수 있지만, 팀별 리포트를 만들기 쉽게 하려면 별도 이벤트로 남기는 것이 좋습니다.

수집 위치:

- 프로젝트 상세 페이지 렌더링 시

활용:

- 팀별 상세 페이지 조회수
- 포트폴리오용 핵심 지표

예시:

```js
gtag("event", "view_project_detail", {
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
  route_name: "snolearning",
});
```

### 4. `click_demo_video`

상세 페이지에서 `YouTube에서 보기` 링크를 클릭했을 때 수집합니다.

수집 위치:

- 데모 영상 외부 링크 클릭

활용:

- 프로젝트 데모에 대한 관심도 확인
- 실제 기능 확인 의도가 있었는지 판단

예시:

```js
gtag("event", "click_demo_video", {
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
  video_url: "https://youtu.be/BOPUQK6A5Qw",
  destination_domain: "youtube.com",
});
```

### 5. `click_project_resource`

프로젝트 자료 링크를 클릭했을 때 수집합니다.

수집 위치:

- 발표 자료 클릭
- 서비스 링크 클릭
- 포스터 이미지 클릭

활용:

- 자료 열람 관심도 확인
- 배포 서비스까지 이동한 관람객 수 확인
- 팀별 포트폴리오 보조 지표 제공

`resource_type` 값:

| 값       | 의미          |
| -------- | ------------- |
| `presentation` | 발표 자료     |
| `deploy`       | 서비스 링크   |
| `poster`       | 포스터 이미지 |

발표 자료 클릭 예시:

```js
gtag("event", "click_project_resource", {
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
  resource_type: "presentation",
  destination_url:
    "https://drive.google.com/file/d/120wMMLLJ7pgKLvl7kRdkdp9rS9yApBCf/view?usp=sharing",
});
```

배포 링크 클릭 예시:

```js
gtag("event", "click_project_resource", {
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
  resource_type: "deploy",
  destination_url: "https://2026-hackathon.snolearning.snorose.com/",
});
```

포스터 클릭 예시:

```js
gtag("event", "click_project_resource", {
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
  resource_type: "poster",
});
```

### 6. `view_project_section`

상세 페이지의 주요 섹션이 화면에 노출됐을 때 수집합니다.

필수는 아니지만, 관람객이 상세 페이지를 어디까지 확인했는지 알고 싶다면 유용합니다.

수집 위치:

- 프로젝트 개요 섹션 노출
- 주요 기능 섹션 노출
- 데모 영상 섹션 노출
- 팀원 소개 섹션 노출
- 프로젝트 자료 섹션 노출

활용:

- 사람들이 상세 페이지를 얼마나 깊게 봤는지 확인
- 프로젝트 소개, 기능, 데모, 자료 중 어떤 정보가 많이 확인됐는지 분석

`section_name` 값:

| 값           | 의미               |
| ------------ | ------------------ |
| `overview`   | 프로젝트 개요      |
| `features`   | 프로젝트 주요 기능 |
| `demo`       | 데모 영상          |
| `team`       | 팀원 소개          |
| `references` | 프로젝트 자료      |

예시:

```js
gtag("event", "view_project_section", {
  project_id: "hicosong",
  project_title: "snolearning",
  team_name: "Hicosong",
  award: "Grand Prize",
  section_name: "demo",
});
```

## 전환 이벤트 기준

전시 페이지에서 가장 의미 있는 행동은 단순 조회보다 **데모 또는 실제 서비스 확인**입니다.

전환 우선순위는 아래처럼 잡는 것을 권장합니다.

| 우선순위 | 이벤트                   | 조건                      | 의미                  |
| -------- | ------------------------ | ------------------------- | --------------------- |
| 1순위    | `click_project_resource` | `resource_type: "deploy"` | 실제 서비스 확인 의도 |
| 2순위    | `click_demo_video`       | -                         | 데모 확인 의도        |
| 3순위    | `click_project_resource` | `resource_type: "presentation"` | 발표 자료 확인 의도   |

## 팀별 리포트 예시

팀에게는 순위표보다 프로젝트별 요약 리포트 형태로 제공하는 것이 좋습니다.

```txt
프로젝트명: snolearning
팀명: Hicosong
수상: Grand Prize

상세 페이지 조회수: 128회
프로젝트 카드 클릭수: 96회
데모 영상 클릭수: 37회
배포 서비스 클릭수: 24회
발표 자료 클릭수: 18회
포스터 이미지 클릭수: 12회
가장 많이 조회된 섹션: 프로젝트 주요 기능
```

## 포트폴리오 문장 예시

팀은 GA 데이터를 아래처럼 포트폴리오에 활용할 수 있습니다.

```txt
2026 Low-Code AI Challenge 온라인 전시에서 snolearning 상세 페이지 128회 조회,
데모 영상 37회 클릭, 배포 서비스 24회 방문을 기록했습니다.
```

```txt
Grand Prize 수상 이후 온라인 전시 페이지에서 snolearning 상세 페이지 진입과
데모 영상 클릭 데이터를 통해 프로젝트에 대한 외부 관심을 확인했습니다.
```

```txt
온라인 전시에서 snolearning의 프로젝트 소개, 주요 기능, 데모 영상 섹션까지의 관람 흐름을 분석해
사용자가 어떤 정보에 관심을 보였는지 확인했습니다.
```

## 분석 지표 예시

GA 이벤트를 조합하면 아래 지표를 만들 수 있습니다.

| 지표             | 계산식                                   | 의미                                   |
| ---------------- | ---------------------------------------- | -------------------------------------- |
| 카드 선택수      | `select_content`                         | 목록에서 프로젝트가 선택된 횟수        |
| 상세 조회수      | `view_project_detail`                    | 프로젝트 상세 페이지 조회 횟수         |
| 데모 클릭률      | `click_demo_video / view_project_detail` | 상세 조회 후 데모를 확인한 비율        |
| 배포 링크 클릭률 | `deploy 클릭수 / view_project_detail`    | 상세 조회 후 실제 서비스를 확인한 비율 |
| 자료 클릭률      | `presentation 클릭수 / view_project_detail` | 상세 조회 후 발표 자료를 확인한 비율   |

## 구현 시 체크리스트

- [ ] GA 측정 ID를 환경변수 또는 설정값으로 관리한다.
- [ ] SPA 라우팅 변경 시 `page_view`가 정상 수집되는지 확인한다.
- [ ] 프로젝트 카드 클릭 시 `select_content`를 전송한다.
- [ ] 상세 페이지 진입 시 `view_project_detail`을 전송한다.
- [ ] YouTube 외부 링크 클릭 시 `click_demo_video`를 전송한다.
- [ ] 발표 자료, 배포 링크, 포스터 클릭 시 `click_project_resource`를 전송한다.
- [ ] 섹션 노출 분석이 필요하면 `view_project_section`을 추가한다.
- [ ] GA DebugView에서 이벤트명과 파라미터가 의도대로 들어오는지 확인한다.

## 권장 최종 이벤트 목록

최종적으로 아래 6개 이벤트를 기준으로 수집합니다.

```txt
page_view
select_content
view_project_detail
click_demo_video
click_project_resource
view_project_section
```
