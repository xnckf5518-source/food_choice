export const menus = [
  { name: '김치찌개', category: '한식', method: ['외식', '배달'], mood: ['든든한', '칼칼한'], price: 1, spicy: 2, solo: true, note: '국물 한 숟갈로 오늘의 방향을 바로잡는 메뉴.' },
  { name: '제육덮밥', category: '한식', method: ['외식', '배달'], mood: ['든든한', '매운'], price: 1, spicy: 2, solo: true, note: '배고픔이 확실할 때 가장 솔직한 선택.' },
  { name: '비빔밥', category: '한식', method: ['외식', '직접 요리'], mood: ['가벼운', '든든한'], price: 1, spicy: 1, solo: true, note: '깔끔하게 먹고 싶지만 허전하긴 싫을 때.' },
  { name: '삼겹살', category: '한식', method: ['외식'], mood: ['든든한'], price: 3, spicy: 0, solo: false, note: '오늘의 고민을 고기 굽는 소리로 덮는 선택.' },
  { name: '마라탕', category: '중식', method: ['외식', '배달'], mood: ['매운', '칼칼한'], price: 2, spicy: 3, solo: true, note: '자극이 필요한 날, 타협 없는 한 그릇.' },
  { name: '짜장면', category: '중식', method: ['외식', '배달'], mood: ['든든한'], price: 1, spicy: 0, solo: true, note: '생각이 많을수록 클래식이 이긴다.' },
  { name: '짬뽕', category: '중식', method: ['외식', '배달'], mood: ['칼칼한', '매운'], price: 1, spicy: 2, solo: true, note: '얼큰한 국물로 머릿속을 정리하는 방식.' },
  { name: '탕수육', category: '중식', method: ['외식', '배달'], mood: ['든든한'], price: 3, spicy: 0, solo: false, note: '나눠 먹을 사람이 있다면 판결은 거의 끝났다.' },
  { name: '초밥', category: '일식', method: ['외식', '배달'], mood: ['가벼운', '깔끔한'], price: 3, spicy: 0, solo: true, note: '조용히 기분 내고 싶은 날의 깔끔한 답.' },
  { name: '라멘', category: '일식', method: ['외식', '배달'], mood: ['든든한', '칼칼한'], price: 2, spicy: 1, solo: true, note: '혼자 먹어도 장면이 생기는 메뉴.' },
  { name: '돈카츠', category: '일식', method: ['외식', '배달'], mood: ['든든한'], price: 2, spicy: 0, solo: true, note: '바삭함으로 마음을 설득하는 선택.' },
  { name: '우동', category: '일식', method: ['외식', '직접 요리'], mood: ['가벼운', '깔끔한'], price: 1, spicy: 0, solo: true, note: '너무 무겁지 않게 따뜻해지고 싶을 때.' },
  { name: '파스타', category: '양식', method: ['외식', '배달', '직접 요리'], mood: ['깔끔한'], price: 2, spicy: 1, solo: true, note: '대충 먹기는 싫고 분위기는 조금 필요할 때.' },
  { name: '피자', category: '양식', method: ['배달', '외식'], mood: ['든든한'], price: 3, spicy: 0, solo: false, note: '선택지를 넓히고 싶을 때의 둥근 결론.' },
  { name: '햄버거', category: '양식', method: ['외식', '배달'], mood: ['든든한'], price: 2, spicy: 0, solo: true, note: '빠르고 확실하고 후회가 적은 쪽.' },
  { name: '샐러드', category: '양식', method: ['외식', '배달', '직접 요리'], mood: ['가벼운', '깔끔한'], price: 2, spicy: 0, solo: true, note: '몸이 먼저 찬성표를 던지는 메뉴.' },
  { name: '떡볶이', category: '분식', method: ['외식', '배달'], mood: ['매운', '든든한'], price: 1, spicy: 3, solo: true, note: '오늘은 논리보다 소스가 이기는 날.' },
  { name: '김밥', category: '분식', method: ['외식', '직접 요리'], mood: ['가벼운', '깔끔한'], price: 1, spicy: 0, solo: true, note: '간단하지만 은근히 완성도 높은 답.' },
  { name: '라볶이', category: '분식', method: ['외식', '배달'], mood: ['매운', '든든한'], price: 1, spicy: 2, solo: true, note: '분식의 장점을 한 번에 몰아넣은 판결.' },
  { name: '쌀국수', category: '아시안', method: ['외식', '배달'], mood: ['가벼운', '깔끔한'], price: 2, spicy: 0, solo: true, note: '뜨끈하고 산뜻한 쪽으로 기울 때.' },
  { name: '팟타이', category: '아시안', method: ['외식', '배달'], mood: ['깔끔한', '든든한'], price: 2, spicy: 1, solo: true, note: '익숙한 듯 낯선 맛으로 기분 전환.' },
  { name: '카레', category: '아시안', method: ['외식', '배달', '직접 요리'], mood: ['든든한'], price: 1, spicy: 1, solo: true, note: '무난함과 만족감 사이의 안정적인 선택.' }
];

export const categories = ['전체', '한식', '중식', '일식', '양식', '분식', '아시안'];
export const methods = ['상관없음', '외식', '배달', '직접 요리'];
export const moods = ['상관없음', '든든한', '가벼운', '매운', '칼칼한', '깔끔한'];
export const prices = ['상관없음', '저렴하게', '보통', '오늘은 플렉스'];

export const presets = [
  { name: '혼자 빠르게', category: '전체', method: '외식', mood: '든든한', price: '보통', soloOnly: true },
  { name: '매운 걸로', category: '전체', method: '상관없음', mood: '매운', price: '상관없음', soloOnly: false },
  { name: '가볍게', category: '전체', method: '상관없음', mood: '가벼운', price: '보통', soloOnly: true },
  { name: '배달 확정', category: '전체', method: '배달', mood: '든든한', price: '상관없음', soloOnly: false }
];
