  
$(document).ready(function() {
   


    $('header').load('include/header.html', function(){
        // gnb 를 mo_gnb_box에 삽입
        let gnbHtml = $('.gnb').html();
        $('.mo_gnb_box .mo_gnb').html(gnbHtml);
  
        let index = $('#visual').length;
        if (index > 0) {
            $('header .logo img').attr('src', 'images/logo.png');
            $('header .logo img').attr('alt', '메인');
        } else {
            $('header .logo img').attr('src', 'images/sub_logo.png');
            $('header .logo img').attr('alt', '서브');

        }
        

        //sub 페이지 구분해서 sub 클래스 추가
        let url = window.location.href; 
        if(url.indexOf('sub') > 0){
            $('.mo_menu').addClass('sub');
        }


        $('.mo_menu').click(function() {
            $('.mo_menu').toggleClass('on');
            $('.mo_gnb_box').fadeToggle();
            $('.mo_gnb_box').toggleClass('on');
        });

        //mobile menu
        $('.mo_gnb > li > a').click(function(){
            $('.mo_gnb .lnb').slideUp(300);
            $(this).siblings('.lnb').stop().slideToggle(300);
            return false;
        })

    })


    
    $('footer').load('include/footer.html', function(){
    })

    $('#section1 li').mouseenter(function() {
        $(this).addClass('on').siblings().removeClass('on')
        // clearInterval(autoRolling)
        RollingNumber = $(this).index()//마우스 올린 형제 번호 구하기
        /* let = imgsrc = $(this).find('figure img').attr('src')
        console.log(imgsrc)
        $('.big_img img').attr('src', imgsrc)
        }) 글자크게보기*/
    })

    $('#section1 li').mouseleave(function() {

        $(this).removeClass('on')
        // autoRolling = setInterval(imgRolling, 2000)
    })

    let RollingNumber = 0
    // let autoRolling = setInterval(imgRolling, 2000)
     
    function imgRolling(){
        RollingNumber++
        if(RollingNumber >= 4) RollingNumber = 0

        $('.small_img li').eq(RollingNumber).addClass('on').siblings().removeClass('on')
        let imgsrc = 
        $('.small_img li').eq(RollingNumber).find('figure img').attr('src')
        $('.big_img img').attr('src', imgsrc)
        
    }   

    // $('.big_img').mouseenter(function() {
    //     $(this).addClass('on').delay(1000)
    //     setTimeout(() => {
    //         $('.big_img').removeClass('on')
    //         return false;

    //     }, 1000);
    // }) 글씨가 옆으로 나옴




    document.addEventListener('DOMContentLoaded', function() {
        const productImage = document.getElementById('productImage');
        const magnifyingGlass = document.getElementById('magnifyingGlass');

        productImage.addEventListener('mousemove', function(e) {
            const rect = productImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 확대경 위치 설정
            magnifyingGlass.style.left = `${x - magnifyingGlass.offsetWidth / 10}px`;
            magnifyingGlass.style.top = `${y - magnifyingGlass.offsetHeight / 5}px`;

            // 이미지 확대 위치 조정
            magnifyingGlass.style.backgroundPosition = `-${x * 1}px -${y * 1}px`;
        });

        productImage.addEventListener('mouseenter', function() {
            magnifyingGlass.style.display = 'block';
            magnifyingGlass.style.transform = 'scale(1.5)';
            
        });

        productImage.addEventListener('mouseleave', function() {
            magnifyingGlass.style.display = 'none';
            magnifyingGlass.style.transform = 'scale(1)';
        
        
        });
    });

   

    $(window).resize(function(){  
        let winW = $(window).width();
        
        if(winW > 768){
            $('.mo_gnb_box').hide();
            $('.mo_gnb_box').removeClass('on');
            $('.mo_menu').removeClass('on');
        }
    })

    $('.sub_menu ul').mouseenter(function(){
        $(this).css({'border-bottom': '5px solid #767676' , 'padding-bottom':'3vw'})   
        $(this).siblings().css({'border-bottom': '5px solid #fff' , 'padding-bottom':'3vw'})   
       
      
   
        
    
    })

    $('.save .check').click(function(){
        $(this).toggleClass('on');
        
       

})


$('footer').load('include/footer.html', function(){
})




$('.gnb li').mouseenter(function() {
    $(this).children().css({'font-weight': 700 , 'color': '#000'})

})

$('.gnb li').mouseleave(function() {
    $(this).children().css({'font-weight': 500 , 'color': '#666'})

})

$('#section1 .centerbox1200 .menu > li').mouseenter(function() {
    $(this).children().css({'font-weight': 700 , 'color': '#000'})
    $(this).css({ 'border-bottom': '3px solid #000'})    

})

$('#section1 .centerbox1200 .menu > li').mouseleave(function() {
    $(this).children().css({'font-weight': 500 , 'color': '#767676'})
    $(this).css({ 'border-bottom': '0px solid #000'})    

})


$('.floating_menu a').eq(0).click(function() {
    $('html, body').animate({scrollTop:0})
    return false;
})




let floatLength = $('.floating_menu.sub').length
    
if(floatLength > 1){  //메인페이지인경우 실행
    $(window).scroll(function(){
        let scrollTop = $(this).scrollTop();
        let winH = $(window).height();
        $('.floating_menu a').removeClass('on');
        
        $('.floating_menu a').not('src').each(function(){
            let target = $(this).attr('href')
            let targetPos = $(target).offset().top;
            
    
                return false
             
        })
    })
}


// $('.floating_menu a').click(function(){
//     let target = $(this).attr('href');
//     let targetpos = $(target).offset().top
//     $('html, body').animate({scrollTop: targetpos}, 3000);   
   
   
   
//     return false;
    

    
// })



if(window.innerWidth <= 768){
    document.addEventListener('DOMContentLoaded', function() {
        const productImage = document.getElementById('productImage');
        const magnifyingGlass = document.getElementById('magnifyingGlass');

        productImage.addEventListener('mousemove', function(e) {
            const rect = productImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 확대경 위치 설정
            magnifyingGlass.style.left = `${x - magnifyingGlass.offsetWidth / 1}px`;
            magnifyingGlass.style.top = `${y - magnifyingGlass.offsetHeight / 1}px`;

            // 이미지 확대 위치 조정
            magnifyingGlass.style.backgroundPosition = `-${x * 13}px -${y * 10}px`;
        });

        productImage.addEventListener('mouseenter', function() {
            magnifyingGlass.style.display = 'block';
            magnifyingGlass.style.transform = 'scale(1.2)';
            
        });

        productImage.addEventListener('mouseleave', function() {
            magnifyingGlass.style.display = 'none';
            magnifyingGlass.style.transform = 'scale(1)';
        
        
        });
    
    });



  


}




$('.gnb li').mouseenter(function() {
    $(this).children().css({'font-weight': 700 , 'color': '#000'})

})

$('.gnb li').mouseleave(function() {
    $(this).children().css({'font-weight': 500 , 'color': '#666'})

})

$('#section1 .centerbox1200 .menu > li').mouseenter(function() {
    $(this).children().css({'font-weight': 700 , 'color': '#000'})
    $(this).css({ 'border-bottom': '3px solid #000'})    

})

$('#section1 .centerbox1200 .menu > li').mouseleave(function() {
    $(this).children().css({'font-weight': 500 , 'color': '#767676'})
    $(this).css({ 'border-bottom': '0px solid #000'})    

})



if(window.innerWidth <= 768){
    document.addEventListener('DOMContentLoaded', function() {
        const productImage = document.getElementById('productImage');
        const magnifyingGlass = document.getElementById('magnifyingGlass');

        productImage.addEventListener('mousemove', function(e) {
            const rect = productImage.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // 확대경 위치 설정
            magnifyingGlass.style.left = `${x - magnifyingGlass.offsetWidth / 1}px`;
            magnifyingGlass.style.top = `${y - magnifyingGlass.offsetHeight / 1}px`;

            // 이미지 확대 위치 조정
            magnifyingGlass.style.backgroundPosition = `-${x * 13}px -${y * 10}px`;
        });

        productImage.addEventListener('mouseenter', function() {
            magnifyingGlass.style.display = 'block';
            magnifyingGlass.style.transform = 'scale(1.2)';
            
        });

        productImage.addEventListener('mouseleave', function() {
            magnifyingGlass.style.display = 'none';
            magnifyingGlass.style.transform = 'scale(1)';
        
        
        });
    
    });



  


}

    let spotmenu = $('.spotmenu').clone();
    $('.mo_nav').prepend(spotmenu);

    $('#photo').change(function() {
        let filepath = $(this).val().split('\\')
        let filelength = filepath.length;
        $('.file_name').text(filepath[filelength-1]);
    })


    //게시판쓰기//
    $('#secret').click(function() {
    $('.public_pw').prop('readonly' ,false) //prop = 있는값설정//
    $('.public_pw').css({background:'#fff'})
    })
    $('#public').click(function() {
        $('.public_pw').prop('readonly' ,true) //prop = 있는값설정//
        $('.public_pw').val('') //prop = 있는값설정//
        $('.public_pw').css({background:'#ddd'})
    


    })
})