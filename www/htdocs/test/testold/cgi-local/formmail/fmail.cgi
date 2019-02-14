#!/usr/local/bin/perl
# ↑加入しているプロバイダの｢perl｣言語が使用できる
# パスを指定します。
#########################################################
#　　　     　fmial.cgi（フォームメールCGI）
#　　　　　     by Anglers-net WebDesign
#               http://anglers-net.com/kyuukyuu
#
#ご利用はフリーですが、次の条件を必ずお守り下さい。
# - 各スクリプトとも著作に係る部分は削除しないこと
# - 有料、無料に関わらず再配布は禁止します。
# - このスクリプトのご利用でトラブル等が発生しても責任を
#   求めないこと
#なお、本スクリプトの著作権は放棄するものではありません。
#########################################################
########################################
$sendmail = '/usr/sbin/sendmail';
# 　 ↑sendmailのパスを指定します
########################################
########################################
require './jcode.pl';
# 　 ↑jcode.plのパスを指定します。当CGIと同じ場所にあればこれでOK
########################################
########################################
#確認画面のテーブルの配色。変えたい場合は適当に変更します。
$bgcolor="WHITE";#ページの背景色
$tableborder="1";#テーブル枠の太さ
$tablebgcolor="WHITE";#テーブル枠の色
$tablecolor = 'BlanchedAlmond';#項目欄の配色
$tablecolor2 = 'WHITE';#記入欄の配色
########################################
########################################
#海外サーバーの時差を指定します
$timediff = '0';
########################################
########################################
#不正アクセスチェック
#自分のページからの発信でないときにエラーを出すものです。
#設定する場合は、$accesscheck = 'on';として下さい。
#設定する場合は、@referers = ('yourdomain.com','www.yourdomain.com');
#この場合、('yourdomain.com','www.yourdomain.com')にドメイン名を入れて下さい。
$accesscheck = 'off';
@referers = ('art-printing.co.jp','www.art-printing.co.jp');
########################################
########################################
#設定はここまで
########################################

$mailheader = './mailheader.txt';
$mailfooter = './mailfooter.txt';
if (!open(DF,"$mailheader")){ &error; }
@DATAH = <DF>;
close(DF);
foreach $lineh (@DATAH) {
$header ="$header$lineh";
}
&jcode'convert(*header,'sjis');
if (!open(DF,"$mailfooter")){ &error; }
@DATAF = <DF>;
close(DF);
foreach $linef (@DATAF) {
$footer ="$footer$linef";
}
&jcode'convert(*footer,'sjis');
########################################

###############################################
#受付日時を取得

($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time + ($timediff * 60 * 60));
if ($min < 10)  { $min = "0$min"; }
if ($hour < 10) { $hour = "0$hour";}
$year = $year+1900; 
$mon++;
$dt = "【受付日】$year年$mon月$mday日";

###############################################
#各種初期設定

$mailname="no title"; 
$mailfrom="MailServer";
$errorh = "0";
$count=4;

########################################
#不正アクセスチェック
if ($accesscheck eq "on")  { &checkaccess;}

###############################################
#フォームデータ処理

if ($ENV{'REQUEST_METHOD'} eq "POST") { read(STDIN, $buffer,
$ENV{'CONTENT_LENGTH'}); }
else { $buffer = $ENV{'QUERY_STRING'}; }
@pairs = split(/&/,$buffer);
foreach $pair (@pairs)
{
($name, $value) = split(/=/, $pair);
$value =~ tr/+/ /;
$value =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
$value =~ s/</&lt;/g;
$value =~ s/>/&gt;/g;
$value =~ s/"/&quot;/g;
# $value =~ s/\n//g;
$value =~ s/\*//g;
$value =~ s/^//g;
$name =~ tr/+/ /;
$name =~ s/%([a-fA-F0-9][a-fA-F0-9])/pack("C", hex($1))/eg;
&jcode'convert(*value,'sjis');
&jcode'convert(*name,'sjis');

 if($name ne "myaddress"){
  if($name ne "backurl"){
   if($name ne "mailtitle"){
    if($name ne "titlegif"){
     if($name ne "backgif"){
      if($name ne "conf"){
       if($name ne "cc"){
        if($name ne "csv"){
         @name1 = split(/\*/,$name);
          $name = @name1[0];
           if (@name1[2] eq "1") {
            $xx =$value;
            &trans;
            $value = $xx;
           }
           if (@name1[1] eq "1") {
            if ($value eq "") {
            @error[$count] = "$nameが記入<FONT SIZE=-1>（または選択）</FONT>されていません<BR>";
            $count = $count+1;
            $errorh = "1";
           }
          }
          if($name eq "E-mail"){
          $xx =$value;
          &trans;
          $value = $xx;
         }
        $value2 = "【$name】$value";
        push(@NEW,$value2);
        $value3 = "<INPUT TYPE=HIDDEN NAME=\"$name\" VALUE=\"$value\"><TR><TD BGCOLOR=\"$tablecolor\" WIDTH=30%>$name</TD><TD BGCOLOR=\"$tablecolor2\" WIDTH=70%>$value</TD></TR>";
        push(@NEW2,$value3);
        $value4 = "$value";
        push(@NEW3,$value4);
        } 
       } 
      }
     } 
    } 
   } 
  } 
 } 
 if($name eq "backurl"){$link=$value};
 if($name eq "myaddress"){$mail_address=$value};
 if($name eq "mailtitle"){$mailname=$value};
 if($name eq "titlegif"){$titlegif=$value};
 if($name eq "backgif"){$backgif=$value};
 if($name eq "conf"){$conf=$value};
 if($name eq "cc"){$cc=$value};
 if($name eq "csv"){$csv=$value};
 if($name eq "E-mail"){
 $emailh="1";
 $email=$value
 }
}

###############################################
#各種処理
if($titlegif ne ""){$titlegif2="<CENTER><IMG SRC=$titlegif></CENTER>"};
if($backgif ne ""){$backgif2="<BODY BGCOLOR=$bgcolor BACKGROUND=$backgif>";
}else{$backgif2="<BODY BGCOLOR=$bgcolor>";}

if($email ne ""){$mailfrom=$email};

@mail = split(/\,/,$mail_address);
$mail_address1=@mail[0];
$mail_address2=@mail[1];

@mail = split(/\@/,$mail_address1);
if ($mail_address eq "") {
@error[0] = "hiddenのメールアドレスが設定されていません<BR>";
$errorh = "1";}
if (@mail[0] ne "") {
 if (@mail[1] eq "") {
 @error[1] = "hiddenのメールアドレスが正しく設定されてません<BR>";
 $errorh = "1";}
}

@mail = split(/\@/,$mail_address2);
if (@mail[0] ne "") {
 if (@mail[1] eq "") {
 @error[1] = "hiddenのメールアドレスが正しく設定されてません<BR>";
 $errorh = "1";}
}

if($emailh eq "1"){
 @email = split(/\@/,$email);
  if (@email[0] ne "") {
   if (@email[1] eq "") {
   @error[3] = "E-mailが正しく入力されてません<BR>";
  $errorh = "1";}
 }
}

if ($errorh eq "1") { &error;}
if ($conf eq "1") { &conf;}

$new = join("\n",@NEW);
$new3 = join("\,",@NEW3);
if ($csv ne "1") {$new3="";}

###############################################
#メール送信
$message = <<END_OF_MESSAGE;
$new

$dt

$new3

END_OF_MESSAGE

&jcode'convert(*message,'sjis');

if (!open(MAIL,"|$sendmail $mail_address1")) { &error; }
&jis("Subject: $mailname"); print MAIL "$msg\n";
print MAIL "To: $mail_address1\n";
print MAIL "From: $mailfrom\n";
print MAIL "\n";
print MAIL "$message";
close(MAIL);

###############################################
#メール送信2ケ所目
if($mail_address2 ne ""){
$message = <<END_OF_MESSAGE;
$new

$dt

$new3

END_OF_MESSAGE

&jcode'convert(*message,'sjis');

if (!open(MAIL,"|$sendmail $mail_address2")) { &error; }
&jis("Subject: $mailname"); print MAIL "$msg\n";
print MAIL "To: $mail_address2\n";
print MAIL "From: $mailfrom\n";
print MAIL "\n";
print MAIL "$message";
close(MAIL);
}

###############################################
#CCメール送信
if($emailh eq "1"){
 if($cc eq "1"){

$message2 = <<END_OF_MESSAGE;
*******送信内容*******
$new

$dt
END_OF_MESSAGE

&jcode'convert(*message2,'sjis');

if (!open(MAIL,"|$sendmail $email")) { &error; }
&jis("Subject:CC: $mailname"); print MAIL "$msg\n";
print MAIL "To: $email\n";
print MAIL "From: $mail_address1\n";
print MAIL "\n";
print MAIL "$header\n";
print MAIL "$message2";
print MAIL "$footer";
close(MAIL);
}
}

$new = join("<BR>\n",@NEW);

###############################################
#送信後確認画面html

print "Content-type: text/html\n\n";

print <<EOM;

<html><head><title>送信完了</title></head>
$backgif2
$titlegif2
<CENTER><TABLE WIDTH=450 BORDER=0 BGCOLOR=$tablecolor2><TR><TD>
<BR><center>次の内容で送信が完了しました<BR><BR></CENTER>
<CENTER><TABLE BORDER=0 WIDTH=450><TR><TD>
$new<BR><BR>
</TD></TR></TABLE></CENTER>
EOM

if($emailh eq "1"){
 if($cc eq "1"){
 print"<center>また、この内容のコピーを<BR>$email<BR>あてに送信しましたのでご確認下さい。<BR>件名は「CC:$mailname」です。</center><BR><BR>\n";
 }
}

print <<EOM;

<SCRIPT Language="JavaScript">
<!--
function PageBack(){
history.back();
}
//-->
</SCRIPT>
<FORM>
<CENTER><A HREF=\"$link\">戻る</A></CENTER>
</FORM>
</TD></TR></TABLE></CENTER>
</body></html>

EOM

exit;

###############################################
#確認画面html
sub conf {
$new2 = join("\n",@NEW2);

print "Content-type: text/html\n\n";

print <<EOM;

<html><head><title>確認です</title></head>
$backgif2
$titlegif2
<BR><CENTER>
<center>内容の確認です</CENTER>
<FORM ACTION="./fmail.cgi" METHOD=POST>
<INPUT TYPE=HIDDEN NAME=myaddress VALUE=\"$mail_address\">
<INPUT TYPE=HIDDEN NAME=backurl VALUE=\"$link\">
<INPUT TYPE=HIDDEN NAME=mailtitle VALUE=\"$mailname\">
<INPUT TYPE=HIDDEN NAME=titlegif VALUE=\"$titlegif\">
<INPUT TYPE=HIDDEN NAME=backgif VALUE=\"$backgif\">
<INPUT TYPE=HIDDEN NAME=cc VALUE=\"$cc\">
<INPUT TYPE=HIDDEN NAME=csv VALUE=\"$csv\">
<CENTER><TABLE BORDER=$tableborder BGCOLOR=$tablebgcolor WIDTH=450>
<TR bgcolor=$tablecolor><TD WIDTH=30%><CENTER>項目</CENTER></TD><TD WIDTH=70%><CENTER>ご記入または選択内容</CENTER></TD></TR>
$new2
</TABLE></CENTER>
<BR>
<CENTER><INPUT TYPE=submit VALUE="送信する"></CENTER>
<BR>
<SCRIPT Language="JavaScript">
<!--
function PageBack(){
history.back();
}
//-->
</SCRIPT>
<FORM>
<CENTER><INPUT type="button" value="前のページに戻り入力しなおす"
onClick="PageBack()">
</CENTER></FORM>
<td class="text-14px"><img src="img/privacy_01.gif" width="141" height="15"></td>
                                                        </tr>
                                                        <tr>
                                                          <td class="text-12px-2">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                          <td bgcolor="#007CE4" class="text-12px-2"><table width="100%" border="0" cellspacing="1" cellpadding="0">
                                                            <tr>
                                                              <td><table width="100%" border="0" cellpadding="8" cellspacing="0" bgcolor="#FFFFFF">
                                                                <tr>
                                                                  <td colspan="2" class="style1"><p class="text-12px-2 style1">当社は印刷物の企画・製作（外部委託を含む）を核として、あらゆるメディアを提供するために、情報の取得、加工、伝達を事業活動とします。<br>
                                                                    当社は、個人情報保護の理念を明確にし、次の事項を含む個人情報保護方針を定め、これを実行し維持します。また、社長はこの方針を文書化し、役員及び従業者に周知させると共に、ホームページなどで一般の人が入手可能とします。 </p>                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                  <td colspan="2" class="style1"><table width="100%" border="0" cellspacing="0" cellpadding="5">
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15" valign="bottom" class="text-12px-2"><font color="#666666" class="text-12px-2">1.</font><br> </td>
                                                                      <td colspan="2" valign="bottom" class="text-12px-2"><p class="style1"><span class="text-12px-2 style1">事業内容及び規模を考慮して個人情報の取得、利用、及び提供を行います。</span><br>
                                                                      </p>                                                                        </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td>&nbsp;</td>
                                                                      <td class="text-12px-2"><span class="style1">1)<br>
                                                                          <br>
                                                                        2)<br>
                                                                        3)<br>
                                                                        <br>
                                                                        4)<br>
                                                                        5)</span><br></td>
                                                                      <td class="style1">個人情報の取得は、当社の正当な事業の範囲内で取得目的を明確にし、その目的の達成に必要な限度において行い、目的外利用はしません。<br>
個人情報の利用及び提供は、本人が同意を与えた取得目的の範囲内で行います。  　　<br>
個人情報の受託は、十分な個人情報の保護水準を満たしている事業者を選定し、当社の厳正な管理下で行います。<br>
個人情報の管理は、取得目的に応じ必要な範囲内において、正確に最新の状態で行います。  　　<br>
また、取得時に、利用目的の達成に必要な範囲外の添付されてきた個人情報は顧客或いは本人に返却します。 </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">2.</font></td>
                                                                      <td colspan="2" class="text-12px-2"><p class="style1">役員と従業者すべてが、個人情報の取扱いに関する法令、国の定める方針その他の規範を遵守します。そのための定期的教育監督を実施します。</p></td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">3.</font></td>
                                                                      <td colspan="2" class="text-12px-2"><p class="style1">個人情報の漏洩、滅失または毀損の防止及び是正を行います。具体的方法については定期的に見直し、改善します。</p>                                                                        </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">4.</font></td>
                                                                      <td colspan="2" class="text-12px-2 style1">個人情報について苦情及び相談の窓口を設置し、申し出には迅速に対応します。</td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">5.</font></td>
                                                                      <td colspan="2" class="text-12px-2 style1">個人情報保護のための個人情報保護マネジメントシステムを制定し、効果的に実施されるよう定期的かつ継続的に教育し、見直し、改善します。 </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15">&nbsp;</td>
                                                                      <td colspan="2">&nbsp;</td>
                                                                    </tr>
                                                                  </table></td>
                                                                </tr>
                                                                <tr>
                                                                  <td colspan="2" class="text-12px-2">&nbsp;</td>
                                                                </tr>
                                                                <tr>
                                                                  <td width="85%" align="right" class="text-12px-2"><p><font color="#666666">平成17年4月1日</font><br>
                                                                    <font color="#666666">平成17年11月1日<br>
                                                                    平成19年12月10日</font></p>                                                                    </td>
                                                                  <td width="15%" align="right" class="text-12px-2"><div align="left"><font color="#666666">制定　　<br>
                                                                    改訂2版<br>
                                                                    改訂3版</font></div></td>
                                                                </tr>
                                                                <tr>
                                                                  <td colspan="2" align="right" class="text-12px-2"><font color="#666666">アート印刷株式会社<br>
      代表取締役社長　有松　敏樹</font></td>
                                                                </tr>
                                                              </table></td>
                                                            </tr>
                                                          </table></td>
                                                        </tr>
                                                        <tr>
                                                          <td class="text-12px-2">&nbsp;</td>
                                                        </tr>
                                                        <tr>
                                                          <td align="right" class="text-12px-2"><a href="privacy_02.html">＜個人情報に関する問い合わせ先＞</a></td>
                                                        </tr>
                                                        <tr>
                                                          <td class="text-12px-2">&nbsp;</td>
</body></html>

EOM

exit;
}

###############################################
#エラー処理
sub error {

print "Content-type: text/html\n\n";

print <<EOM;

<html><head>
<title>エラー</title></head>
$backgif2
$titlegif2
<CENTER><TABLE WIDTH=450 BORDER=0 BGCOLOR=$tablecolor2><TR><TD>
<BR><CENTER>
エラーです<BR><BR>
EOM

$n = 0;
while ($n <= $count ){
print"@error[$n] \n";
$n++;
}

print <<EOM;
</CENTER>
<BR>
<SCRIPT Language="JavaScript">
<!--
function PageBack(){
history.back();
}
//-->
</SCRIPT>
<FORM>
<CENTER><INPUT type="button" value="前のページに戻る"
onClick="PageBack()">
</CENTER></FORM><BR>
</TD></TR></TABLE></CENTER>
</body>
</html>
EOM

exit;
}

#不正アクセス処理
sub checkaccess {
 foreach $referer (@referers) {
  if ($ENV{'HTTP_REFERER'} =~ m|http?://([^/]*)$referer|i) {
  $accesserror=1;
  last;
  } 
 } 
 if ($accesserror != 1) { 
 @error[1] = "不正なアクセスです<BR>";
 &error
 }
}


sub trans{
 $from='[＠０１-９Ａ-Ｚａ-ｚ．＿－]';
 $to='[@01-9A-Za-z._-]';
 &jcode'convert(*xx, 'euc');
 &jcode'convert(*from, 'euc');
 &jcode'convert(*to, 'euc');
 &jcode'tr(*xx, $from, $to);
 &jcode'convert(*xx, 'sjis');
}

sub jis { $msg = $_[0]; &jcode'convert(*msg, 'jis'); }

