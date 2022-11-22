function init(){
  $(".catg-menu li").on("mouseover",function () {
    const tabId = $(this).attr("data-tab"); 
    
    $("#" + tabId).addClass("active").siblings().removeClass('active');
  })
  $(".tab-menu li").on("click",function () {
    const tabId = $(this).attr("data-tab"); 
    $(this).addClass('active').siblings().removeClass('active');  
    $(".tab-menu img").removeClass('active');
    $(this).children().first().addClass('active');
    $("#" + tabId).addClass("active").siblings().removeClass('active');
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
