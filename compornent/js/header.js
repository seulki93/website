str = ''
str +='<div class="header">'
str +='   <h1><a href="index.html"><img src="images/logo.png" alt="에니아소프트" /></a></h1>'
str +='   <div class="header_right_group">'
str +='      <p>안녕하세요, <b class="fc1">사용자123</b>님!</p>'
str +='      <ul class="h_icon_group">'
str +='         <li>'
str +='            <button type="button" class="h_btn_bell bell_on">알림</button><!-- 알림 올 시 bell_on 클래스 추가 -->'
str +='            <div class="bell_cont">'
str +='               <div class="ta_r"><button type="button" class="bell_btn">전체알림삭제</button></div>'
str +='               <ul class="mCustomScrollbar" data-mcs-theme="inset-dark">'
str +='                  <li><a href=""><b>[공지사항]</b> 새로운 알림이 있습니다.</a></li>'
str +='                  <li><a href=""><b>[주간보고서 승인]</b> 새로운 알림이 있습니다.</a></li>'
str +='                  <li><a href=""><b>[출장비신청]</b> 새로운 알림이 있습니다.</a></li>'
str +='                  <li><a href=""><b>[공지사항]</b> 새로운 알림이 있습니다.</a></li>'
str +='                  <li><a href=""><b>[자료실]</b> 새로운 알림이 있습니다.</a></li>'
str +='                  <li><a href=""><b>[주간보고서 승인]</b> 새로운 알림이 있습니다.</a></li>'
str +='               </ul>'
str +='            </div>'
str +='         </li>'
str +='         <li>'
str +='            <button type="button" class="h_btn_password btn_layer" data-pop_name="layer_password">비밀번호 변경</button>'
str +='         </li>'
str +='         <li><a href="" class="h_btn_logout">로그아웃</a></li>'
str +='       </ul>'
str +='   </div>'
str +='</div>'

document.write( str );