function init(){
  // $(".catg-menu li").on("mouseover",function () {
  //   const tabId = $(this).attr("data-tab"); 
    
  //   $("#" + tabId).addClass("active").siblings().removeClass('active');
  // })
  $(".tab-menu li").on("click",function () {
    const tabId = $(this).attr("data-tab"); 
    $(this).addClass('active').siblings().removeClass('active');  
    $(".tab-menu img").removeClass('active');
    $(this).children().first().addClass('active');
    $("#" + tabId).addClass("active").siblings().removeClass('active');
  })
  
  $(".btn-tab li").on("click",function() {
    $(this).addClass('active').siblings().removeClass('active');    
  })

  $(".search-box input").on("focus",function(){
    $(this).parent(".search-box").css('background', '#fff');
    $(this).parent(".search-box").css('border-color', '#003594');
    $(this).siblings(".ic-search").addClass("sel");
  })
  $(".search-box input").on("blur",function(){
    $(this).parent(".search-box").css('background', '#f3f3f3');
    $(this).parent(".search-box").css('border-color', '#f3f3f3');
    $(this).siblings(".ic-search").removeClass('sel');
  })
  
  // 정렬박스 -최신순,조회순,인기순
  $(".sort-box .selected").on("click",function(){
    $(".sort-box").toggleClass("open");
  })
  $(".optionList .optionItem").on("click",function(){
    $(".sort-box .selected .selected-value")[0].innerText = $(this)[0].innerText;
    $(this).addClass('sel').siblings().removeClass('sel');
    $(".sort-box").removeClass("open");
  })
  
  $(".modal-close").on("click", function(){
    $(".modal-container").removeClass('show');
  })
/* tab-change */
$('.tab-change').each(function(){
  var onIdx = $(this).find('li.on').index();
  $(this).next().find('.tab-cont').eq(onIdx).addClass('on');
  $(this).find('a').on('click', function(e){
    var idx = $(this).parent().index();
    $(this).parent().addClass('on').siblings().removeClass('on');
    $(this).closest('.tab-change').next().find('.tab-cont').eq(idx).addClass('on').siblings().removeClass('on');
    e.preventDefault();
  });
});

/* tooltips */
$('.btn-tooltips').on('click', function(e){
  $(this).next().toggleClass('open')
  e.preventDefault();
});

/* check박스가 있는경우 tr컬러지정 */
$('.tbl-board').each(function(){
  var chkbox = $(this).find('td input[type="checkbox"]');
  if(chkbox.length > 0 && $('td .switch-button').length < 0){
    $(this).find('tr input[type="checkbox"]').on('click', function(){
      $(this).closest('tr').toggleClass('bg');
      if($(this).closest('tr').hasClass('bg')){
        $(this).prop('checked', true);
      }else{
        $(this).prop('checked', false);
      };
    });
  };
});



/* 임시 : 위치 및 보기용 : 문제가 될수있으니 개발작업시 삭제 바람 */
$(document).on('click', '[date-type*="popup-call"]', function(e){
  var obj = $(this).attr('date-target');
  popupOpen(obj);
  $(obj).addClass('show');
  e.preventDefault();
});
function popupOpen(obj){
    var url = '../pages/popup_project_mypage.html';
    $.get(url, function(data) {
        if($(obj).length < 1){
          $('.wrapper').append('<div class="popup-temp">' + data + '</div>');
          var htmlcopy = $('.popup-temp').find(obj).clone();
          $('.wrapper').append(htmlcopy);
          $('.popup-temp').remove();
          $(obj).find('.modal-close').on("click", function(){
            $(this).closest(".modal-container").removeClass('show');
          });
        }
    });
  }
/* 임시 : 위치 및 보기용 : 문제가 될수있으니 개발작업시 삭제 바람 */
}


// input delete button
function searchInputDelete() {
  const formSearchInput = document.querySelector('#search-text');
  const formSearchClose = document.querySelector('.btn-input-delete');
  
  formSearchInput.addEventListener('keyup', () => {
    formSearchClose.style.display =  (formSearchInput.value == '') ? "none":"flex" ;    
  });
  
  formSearchClose.addEventListener('click',(e) => {
    e.currentTarget.style.display = "none";
  })
}

// circle progress bar
function circleProgress(RADIUS, bar, per) {
  var CIRCUMFERENCE = 2 * Math.PI * RADIUS;    
  var progress = per / 100;
  var dashoffset = CIRCUMFERENCE * (1 - progress);    
  bar.style.strokeDashoffset = dashoffset;
  bar.style.strokeDasharray = CIRCUMFERENCE;    
}

function progress(bar, per) {
  bar.css("width",per);
}


   /* 토글버튼 */
   $(".switch_toggle").on("click", function () {
    if ($(this).hasClass("active")) {
        $(this).removeClass("active");
        $(this).find('input[type="hidden"]').val("N");
    } else {
        $(this).addClass("active");
        $(this).find('input[type="hidden"]').val("Y");
    }
});
