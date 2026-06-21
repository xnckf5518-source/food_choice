import './InfoSections.css';

export function InfoSections() {
  return (
    <section className="info-sections" aria-label="사이트 안내">
      <article id="about" className="info-block intro-block">
        <div>
          <p className="info-kicker">About</p>
          <h2>메뉴판결은 메뉴 고민을 줄여주는 무료 웹앱입니다</h2>
        </div>
        <p>
          음식 종류, 먹는 방식, 가격대, 지금 기분, 혼밥 여부를 기준으로 후보 메뉴를 좁히고
          최종 메뉴를 추천합니다. 서버 가입이나 로그인 없이 브라우저에서 바로 사용할 수 있습니다.
        </p>
      </article>

      <div className="info-grid">
        <article className="info-card">
          <h2>검색 노출을 위한 콘텐츠</h2>
          <p>
            메뉴판결은 단순한 랜덤 버튼이 아니라 한식, 중식, 일식, 양식, 분식, 아시안 메뉴를
            상황별로 분류해 보여줍니다. 점심 추천, 저녁 추천, 혼밥 메뉴, 배달 메뉴처럼 사용자가
            실제로 검색하는 고민에 맞춰 내용을 구성했습니다.
          </p>
        </article>

        <article className="info-card">
          <h2>사용 방법</h2>
          <ol>
            <li>빠른 상황 버튼이나 필터를 선택합니다.</li>
            <li>후보 메뉴를 확인하고 싫은 메뉴는 제외합니다.</li>
            <li>판결 시작 버튼으로 오늘 먹을 메뉴를 결정합니다.</li>
          </ol>
        </article>

        <article className="info-card">
          <h2>개인정보 처리방침</h2>
          <p>
            메뉴판결은 회원가입을 받지 않고 이름, 이메일, 위치 같은 개인정보를 서버로 전송하지 않습니다.
            제외한 메뉴와 최근 판결 기록은 사용자의 브라우저 저장소에만 저장됩니다.
          </p>
          <p>
            향후 Google AdSense가 적용되면 Google 및 광고 파트너가 광고 제공과 측정을 위해 쿠키를
            사용할 수 있습니다. 사용자는 브라우저 설정에서 쿠키를 삭제하거나 제한할 수 있습니다.
          </p>
        </article>

        <article className="info-card">
          <h2>광고 운영 원칙</h2>
          <p>
            광고가 적용되더라도 메뉴 버튼, 추천 결과, 후보 목록과 광고 영역은 구분되게 배치합니다.
            광고 클릭을 유도하거나 보상을 약속하는 문구를 사용하지 않고, 팝업이나 강제 이동 광고를
            넣지 않는 방향으로 운영합니다.
          </p>
        </article>
      </div>
    </section>
  );
}
