export function createNaviList() {
  return [
    {
      title: '',
      children: [
        {
          path: '/getting-started',
          key: 'getting-started',
          title: '설치 및 시작',
          description: '개발 목표부터 간단하게 시작하기',
        },
        {
          path: '/pass-data-result',
          key: 'pass-data-result',
          title: '데이터와 결과 주고받기',
          description: '데이터를 주고 받는 방법과 Generic 타입까지',
        },
        {
          path: '/open-strategy',
          key: 'open-strategy',
          title: 'Open Strategy',
          description: '모달이 열리는 방식 지정과 이를 확장하는 방법',
        },
        {
          path: '/options',
          key: 'options',
          title: 'Options',
          description: '간단한 옵션 활용',
        },
      ],
    },
  ];
}
