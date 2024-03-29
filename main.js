<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NAVER</title>
    <link rel="icon" href="image/N.jpeg">
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="wrap">
        <div class="wrap-center">
            <div id="header">
                <button id="header-hamburger">
                    <!-- :before -->
                    <div></div>
                    <span class="blind">확장영역</span>
                    <!-- ::after -->
                </button>
                <button id="header-pay">
                    <!-- ::before -->
                    <div></div>
                    <span class="blind">네이버 페이</span>
                    <!-- ::after -->
                </button>
                <button id="header-alert">
                    <!-- ::before -->
                    <div></div>
                    <span class="blind">알림</span>
                    <!-- ::after -->
                </button>
                <button id="header-talk">
                    <!-- ::before -->
                    <div></div>
                    <span class="blind">톡</span>
                    <!-- ::after -->
                </button>
            </div>
        </div>
    </div> 
    <div id="search">
        <form action="">
            <a id="search-svg" href="https://www.naver.com/">
                <svg viewBox="24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.273 12.845 7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727v12.845z"></path></svg>
            </a>
                <label for="search-input" class="blind">검색어 입력</label>
                <input id="search-input" type="text" placeholder="검색어를 입력하세요" />
            <div id="search-right">
                <button href="#" id="search-keyboard">
                    <span class="blind">입력도구</span>
                </button>
                <button href="#" id="search-recent">
                    <span class="blind">자동완성/최근검색어펼치기</span>
                </button>
                <button id="search-button">
                    <div><span class="blind">검색창</span></div>
                </button>
            </div>
        </form>
    </div>
    <div id="nav">
                <ul>
                    <li>
                        <a href="">
                            <div></div>
                            <span>메일</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>카페</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>블로그</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>쇼핑</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>뉴스</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>증권</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>부동산</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>지도</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span>웹툰</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <div></div>
                            <span class="blind">더보기</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div id="main"></div>
        </div>
    </div>
</body>
</html>
