// main.js
$(function(){

  // 색상 버튼을 클릭하면 이미지 변경
  var imgUrl = [
    'images/black.webp',
    'images/green.webp',
    'images/gray.webp',
  ]

  // 해당 버튼 클릭시 imgUrl 배열번호로 img태그 src를 변경
  $('.colorOption button.color').on('click', function(){
    var i = $(this).index();
    console.log(i);
    $('#product-detail figure img').attr('src', imgUrl[i]);
  })

  // 메모리 옵션 변경
  var price = 1998700; // 본체가격
  var memoryPrice = 0; // 메모리 추가 가격(100,000)

  $('.price-box .price').text(price.toLocaleString()); // 판매가 표시
  $('.total-price').text(price.toLocaleString()); // 최종판매가

  // select 목록 변경시
  $('#memory').on('change', function(){
    console.log($(this).val());
    // 512이면 price값 10만원 추가 아니면 기본가격
    if($(this).val() == 512) {
      memoryPrice = 100000;
      var totalPrice = (price + memoryPrice).toLocaleString(); // 옵션추가 최종가
      $('.total-price').text(totalPrice);
    } else {
      memoryPrice = 0;
      $('.total-price').text(price.toLocaleString()); // 기본가격
    }
  })
  
  // 수량 계산
  $('.numberOption .count').on('change', function(){
    // totalPrice = 상품가격에 x 수량(val)
    var count = $(this).val();
    console.log(count);
    var totalPrice = (price + memoryPrice) * count;
    $('.total-price').text(totalPrice.toLocaleString());
  })

}); // end $