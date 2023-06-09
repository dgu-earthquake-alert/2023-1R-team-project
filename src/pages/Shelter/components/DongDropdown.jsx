// src/components/DongDropdown.js
import React from "react";
import Select from "react-select";

const DongDropdown = ({ gu, dong, setDong, handlePageChange }) => {
  const dongList = {
    "-": ["-"],

    중구: [
      "-",
      "소공동",
      "회현동",
      "명동",
      "필동",
      "장충동",
      "광희동",
      "을지로동",
      "신당동",
      "다산동",
      "약수동",
      "청구동",
      "동화동",
      "황학동",
      "중림동",
    ],
    종로구: [
      "-",
      "청운동",
      "신교동",
      "궁정동",
      "효자동",
      "창성동",
      "통의동",
      "적선동",
      "통인동",
      "누상동",
      "누하동",
      "옥인동",
      "체부동",
      "필운동",
      "내자동",
      "사직동",
      "도렴동",
      "당주동",
      "내수동",
      "세종로",
      "신문로1가",
      "신문로2가",
      "청진동",
      "서린동",
      "수송동",
      "중학동",
      "종로1가",
      "공평동",
      "관훈동",
      "견지동",
      "와룡동",
      "권농동",
      "운니동",
      "익선동",
      "경운동",
      "관철동",
      "인사동",
      "낙원동",
      "종로2가",
      "팔판동",
      "삼청동",
      "안국동",
      "소격동",
      "화동",
      "사간동",
      "송현동",
      "가회동",
      "재동",
      "계동",
      "원서동",
      "훈정동",
      "묘동",
      "봉익동",
      "돈의동",
      "장사동",
      "관수동",
      "종로3가",
      "인의동",
      "예지동",
      "원남동",
      "연지동",
      "종로4가",
      "효제동",
      "종로5가",
      "종로6가",
      "이화동",
      "연건동",
      "충신동",
      "동숭동",
      "혜화동",
      "명륜1가",
      "명륜2가",
      "명륜3가",
      "명륜4가",
      "명륜5가",
      "창신동",
      "숭인동",
    ],
    용산구: [
      "-",
      "후암동",
      "용산2가동",
      "남영동",
      "청파동",
      "원효로1가",
      "원효로2가",
      "효창동",
      "용문동",
      "한강로1가",
      "한강로2가",
      "한강로3가",
      "이촌동",
      "이태원동",
      "한남동",
      "서빙고동",
      "보광동",
      "청암동",
      "한강로동",
    ],
    성동구: [
      "-",
      "왕십리동",
      "마장동",
      "사근동",
      "행당동",
      "응봉동",
      "금호동1가",
      "금호동2가",
      "금호동3가",
      "금호동4가",
      "옥수동",
      "성수동1가",
      "성수동2가",
      "성수동2가",
      "송정동",
      "용답동",
    ],
    광진구: [
      "-",
      "중곡동",
      "능동",
      "구의동",
      "광장동",
      "자양동",
      "화양동",
      "군자동",
    ],
    동대문구: [
      "-",
      "용신동",
      "제기동",
      "전농동",
      "답십리동",
      "장안동",
      "청량리동",
      "회기동",
      "휘경동",
      "이문동",
    ],
    중랑구: ["-", "면목동", "면목본동", "중화동", "묵동", "망우동", "신내동"],
    성북구: [
      "-",
      "성북동",
      "삼선동",
      "동선동",
      "돈암동",
      "안암동",
      "보문동",
      "정릉동",
      "길음동",
      "종암동",
      "월곡동",
      "장위동",
      "석관동",
    ],
    강북구: ["-", "번동", "수유동", "우이동", "인수동"],
    도봉구: ["-", "쌍문동", "방학동", "창동", "도봉동"],
    노원구: ["-", "월계동", "공릉동", "하계동", "중계본동", "중계동", "상계동"],
    은평구: [
      "-",
      "녹번동",
      "불광동",
      "갈현동",
      "구산동",
      "대조동",
      "응암동",
      "역촌동",
      "신사동",
      "증산동",
      "수색동",
    ],
    서대문구: [
      "-",
      "천연동",
      "북아현동",
      "충현동",
      "신촌동",
      "연희동",
      "홍은동",
      "남가좌동",
      "북가좌동",
      "충정로2가",
      "충정로3가",
      "냉천동",
      "신영동",
    ],
    마포구: [
      "-",
      "공덕동",
      "아현동",
      "도화동",
      "신공덕동",
      "마포동",
      "노고산동",
      "신수동",
      "현석동",
      "구수동",
      "창전동",
      "상암동",
      "성산동",
    ],
    양천구: ["-", "목동", "신월동", "신정동"],
    강서구: [
      "-",
      "염창동",
      "등촌동",
      "화곡본동",
      "화곡동",
      "우장산동",
      "까치산동",
      "가양동",
      "발산동",
      "공항동",
      "방화동",
    ],
    구로구: [
      "-",
      "신도림동",
      "구로동",
      "고척동",
      "개봉동",
      "오류동",
      "수궁동",
      "가리봉동",
      "천왕동",
      "항동",
      "가산동",
      "독산동",
    ],
    금천구: ["-", "가산동", "독산동", "시흥동"],
    영등포구: [
      "-",
      "영등포본동",
      "영등포동",
      "여의도동",
      "당산동",
      "양평동",
      "신길동",
      "대림동",
    ],
    동작구: [
      "-",
      "노량진동",
      "상도동",
      "흑석동",
      "사당동",
      "대방동",
      "신대방동",
    ],
    관악구: [
      "-",
      "보라매동",
      "청림동",
      "성현동",
      "행운동",
      "낙성대동",
      "중앙동",
      "인헌동",
      "남현동",
      "서원동",
      "신원동",
      "서림동",
      "신림동",
      "난향동",
      "조원동",
      "대학동",
      "은천동",
      "성북동",
      "청룡동",
      "난곡동",
      "삼성동",
      "미성동",
    ],
    서초구: [
      "-",
      "서초동",
      "잠원동",
      "반포본동",
      "반포동",
      "방배본동",
      "방배동",
      "양재동",
      "내곡동",
    ],
    강남구: [
      "-",
      "개포동",
      "논현동",
      "대치동",
      "도곡동",
      "삼성동",
      "세곡동",
      "수서동",
      "신사동",
      "압구정동",
      "역삼동",
      "일원동",
      "일원본동",
      "자곡동",
      "청담동",
    ],
    송파구: [
      "-",
      "풍납동",
      "거여동",
      "마천동",
      "방이동",
      "오금동",
      "송파동",
      "석촌동",
      "삼전동",
      "가락본동",
      "가락동",
      "문정동",
      "잠실본동",
      "잠실동",
    ],

    강동구: [
      "-",
      "강일동",
      "상일동",
      "명일동",
      "고덕동",
      "암사동",
      "천호동",
      "성내동",
      "길동",
    ],
  };
  const dongs = dongList[gu];

  const options = dongs.map((dongItem) => ({
    value: dongItem,
    label: dongItem,
  }));

  const handleChange = (selectedOption) => {
    setDong(selectedOption.value);
    handlePageChange(1);
  };

  const selectedValue = options.find((option) => option.value === dong);
  const dropdownStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: state.isFocused || state.isHover ? "#052c65" : "#084298",
      border: state.isFocused ? "none" : null,
      width: "110px",
      borderRadius: "10px",
      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      color: "white",
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "#052c65",
      color: "white",
      cursor: "pointer",
    }),
  };
  return (
    <Select
      value={selectedValue}
      onChange={handleChange}
      options={options}
      styles={dropdownStyles}
    />
  );
};

export default DongDropdown;
