#!/usr/local/bin/perl
# ���������Ă���v���o�C�_�̢perl����ꂪ�g�p�ł���
# �p�X���w�肵�܂��B
#########################################################
#�@�@�@     �@fmial.cgi�i�t�H�[�����[��CGI�j
#�@�@�@�@�@     by Anglers-net WebDesign
#               http://anglers-net.com/kyuukyuu
#
#�����p�̓t���[�ł����A���̏�����K������艺�����B
# - �e�X�N���v�g�Ƃ�����ɌW�镔���͍폜���Ȃ�����
# - �L���A�����Ɋւ�炸�Ĕz�z�͋֎~���܂��B
# - ���̃X�N���v�g�̂����p�Ńg���u�������������Ă��ӔC��
#   ���߂Ȃ�����
#�Ȃ��A�{�X�N���v�g�̒��쌠�͕���������̂ł͂���܂���B
#########################################################
########################################
$sendmail = '/usr/sbin/sendmail';
# �@ ��sendmail�̃p�X���w�肵�܂�
########################################
########################################
require './jcode.pl';
# �@ ��jcode.pl�̃p�X���w�肵�܂��B��CGI�Ɠ����ꏊ�ɂ���΂����OK
########################################
########################################
#�m�F��ʂ̃e�[�u���̔z�F�B�ς������ꍇ�͓K���ɕύX���܂��B
$bgcolor="WHITE";#�y�[�W�̔w�i�F
$tableborder="1";#�e�[�u���g�̑���
$tablebgcolor="WHITE";#�e�[�u���g�̐F
$tablecolor = 'BlanchedAlmond';#���ڗ��̔z�F
$tablecolor2 = 'WHITE';#�L�����̔z�F
########################################
########################################
#�C�O�T�[�o�[�̎������w�肵�܂�
$timediff = '0';
########################################
########################################
#�s���A�N�Z�X�`�F�b�N
#�����̃y�[�W����̔��M�łȂ��Ƃ��ɃG���[���o�����̂ł��B
#�ݒ肷��ꍇ�́A$accesscheck = 'on';�Ƃ��ĉ������B
#�ݒ肷��ꍇ�́A@referers = ('yourdomain.com','www.yourdomain.com');
#���̏ꍇ�A('yourdomain.com','www.yourdomain.com')�Ƀh���C���������ĉ������B
$accesscheck = 'off';
@referers = ('art-printing.co.jp','www.art-printing.co.jp');
########################################
########################################
#�ݒ�͂����܂�
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
#��t�������擾

($sec,$min,$hour,$mday,$mon,$year,$wday,$yday,$isdst) = localtime(time + ($timediff * 60 * 60));
if ($min < 10)  { $min = "0$min"; }
if ($hour < 10) { $hour = "0$hour";}
$year = $year+1900; 
$mon++;
$dt = "�y��t���z$year�N$mon��$mday��";

###############################################
#�e�평���ݒ�

$mailname="no title"; 
$mailfrom="MailServer";
$errorh = "0";
$count=4;

########################################
#�s���A�N�Z�X�`�F�b�N
if ($accesscheck eq "on")  { &checkaccess;}

###############################################
#�t�H�[���f�[�^����

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
            @error[$count] = "$name���L��<FONT SIZE=-1>�i�܂��͑I���j</FONT>����Ă��܂���<BR>";
            $count = $count+1;
            $errorh = "1";
           }
          }
          if($name eq "E-mail"){
          $xx =$value;
          &trans;
          $value = $xx;
         }
        $value2 = "�y$name�z$value";
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
#�e�폈��
if($titlegif ne ""){$titlegif2="<CENTER><IMG SRC=$titlegif></CENTER>"};
if($backgif ne ""){$backgif2="<BODY BGCOLOR=$bgcolor BACKGROUND=$backgif>";
}else{$backgif2="<BODY BGCOLOR=$bgcolor>";}

if($email ne ""){$mailfrom=$email};

@mail = split(/\,/,$mail_address);
$mail_address1=@mail[0];
$mail_address2=@mail[1];

@mail = split(/\@/,$mail_address1);
if ($mail_address eq "") {
@error[0] = "hidden�̃��[���A�h���X���ݒ肳��Ă��܂���<BR>";
$errorh = "1";}
if (@mail[0] ne "") {
 if (@mail[1] eq "") {
 @error[1] = "hidden�̃��[���A�h���X���������ݒ肳��Ă܂���<BR>";
 $errorh = "1";}
}

@mail = split(/\@/,$mail_address2);
if (@mail[0] ne "") {
 if (@mail[1] eq "") {
 @error[1] = "hidden�̃��[���A�h���X���������ݒ肳��Ă܂���<BR>";
 $errorh = "1";}
}

if($emailh eq "1"){
 @email = split(/\@/,$email);
  if (@email[0] ne "") {
   if (@email[1] eq "") {
   @error[3] = "E-mail�����������͂���Ă܂���<BR>";
  $errorh = "1";}
 }
}

if ($errorh eq "1") { &error;}
if ($conf eq "1") { &conf;}

$new = join("\n",@NEW);
$new3 = join("\,",@NEW3);
if ($csv ne "1") {$new3="";}

###############################################
#���[�����M
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
#���[�����M2�P����
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
#CC���[�����M
if($emailh eq "1"){
 if($cc eq "1"){

$message2 = <<END_OF_MESSAGE;
*******���M���e*******
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
#���M��m�F���html

print "Content-type: text/html\n\n";

print <<EOM;

<html><head><title>���M����</title></head>
$backgif2
$titlegif2
<CENTER><TABLE WIDTH=450 BORDER=0 BGCOLOR=$tablecolor2><TR><TD>
<BR><center>���̓��e�ő��M���������܂���<BR><BR></CENTER>
<CENTER><TABLE BORDER=0 WIDTH=450><TR><TD>
$new<BR><BR>
</TD></TR></TABLE></CENTER>
EOM

if($emailh eq "1"){
 if($cc eq "1"){
 print"<center>�܂��A���̓��e�̃R�s�[��<BR>$email<BR>���Ăɑ��M���܂����̂ł��m�F�������B<BR>�����́uCC:$mailname�v�ł��B</center><BR><BR>\n";
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
<CENTER><A HREF=\"$link\">�߂�</A></CENTER>
</FORM>
</TD></TR></TABLE></CENTER>
</body></html>

EOM

exit;

###############################################
#�m�F���html
sub conf {
$new2 = join("\n",@NEW2);

print "Content-type: text/html\n\n";

print <<EOM;

<html><head><title>���e�̊m�F</title></head>

$backgif2
$titlegif2
<BR><CENTER>
<center>���e�̊m�F�ł�</CENTER>
<FORM ACTION="./fmail.cgi" METHOD=POST>
<INPUT TYPE=HIDDEN NAME=myaddress VALUE=\"$mail_address\">
<INPUT TYPE=HIDDEN NAME=backurl VALUE=\"$link\">
<INPUT TYPE=HIDDEN NAME=mailtitle VALUE=\"$mailname\">
<INPUT TYPE=HIDDEN NAME=titlegif VALUE=\"$titlegif\">
<INPUT TYPE=HIDDEN NAME=backgif VALUE=\"$backgif\">
<INPUT TYPE=HIDDEN NAME=cc VALUE=\"$cc\">
<INPUT TYPE=HIDDEN NAME=csv VALUE=\"$csv\">
<CENTER><TABLE BORDER=$tableborder BGCOLOR=$tablebgcolor WIDTH=450>
<TR bgcolor=$tablecolor><TD WIDTH=30%><CENTER>����</CENTER></TD><TD WIDTH=70%><CENTER>���L���܂��͑I����e</CENTER></TD></TR>
$new2


<table width="100%" bgcolor="#FFFFFF">
                                                                <tr><br>
																  <center>
																  <img src="http://www.art-printing.co.jp/privacy/img/privacy_01.gif" width="141" height="15">
																  <center/>
                                                                  <td colspan="2" class="style1"><p class="text-12px-2 style1">
																  
																  ���Ђ͈�����̊��E����i�O���ϑ����܂ށj���j�Ƃ��āA�����郁�f�B�A��񋟂��邽�߂ɁA���̎擾�A���H�A�`�B�����Ɗ����Ƃ��܂��B<br>
                                                                    ���Ђ́A�l���ی�̗��O�𖾊m�ɂ��A���̎������܂ތl���ی���j���߁A��������s���ێ����܂��B�܂��A�В��͂��̕��j�𕶏������A�����y�я]�Ǝ҂Ɏ��m������Ƌ��ɁA�z�[���y�[�W�Ȃǂň�ʂ̐l������̂��Ƃ��܂��B </p>                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                  <td colspan="2" class="style1"><table width="100%" border="0" cellspacing="0" cellpadding="5">
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15" valign="bottom" class="text-12px-2"><font color="#666666" class="text-12px-2">1.</font><br> </td>
                                                                      <td valign="bottom" class="text-12px-2"><p class="style1"><span class="text-12px-2 style1">���Ɠ��e�y�ыK�͂��l�����Čl���̎擾�A���p�A�y�ђ񋟂��s���܂��B</span><br>
                                                                      </p>                                                                        </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td>&nbsp;</td>
                                                                      <td class="text-12px-2">1)�l���̎擾�́A���Ђ̐����Ȏ��Ƃ͈͓̔��Ŏ擾�ړI�𖾊m�ɂ��A���̖ړI�̒B���ɕK�v�Ȍ��x�ɂ����čs���A�ړI�O���p�͂��܂���B<br>
2)�l���̗��p�y�ђ񋟂́A�{�l�����ӂ�^�����擾�ړI�͈͓̔��ōs���܂��B  �@�@<br>
3)�l���̎���́A���イ���Ȍl���̕ی쐅���𖞂����Ă��鎖�Ǝ҂�I�肵�A���Ђ̌����ȊǗ����ōs���܂��B<br>
4)�l���̊Ǘ��́A�擾�ړI�ɉ����K�v�Ȕ͈͓��ɂ����āA���m�ɍŐV�̏�Ԃōs���܂��B  �@�@<br>
5)�܂��A�擾���ɁA���p�ړI�̒B���ɕK�v�Ȕ͈͊O�̓Y�t����Ă����l���͌ڋq�����͖{�l�ɕԋp���܂��B </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">2.</font></td>
                                                                      <td class="text-12px-2"><p class="style1">�����Ə]�Ǝ҂��ׂĂ��A�l���̎戵���Ɋւ���@�߁A���̒�߂���j���̑��̋K�͂����炵�܂��B���̂��߂̒���I����ē����{���܂��B</p></td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">3.</font></td>
                                                                      <td class="text-12px-2"><p class="style1">�l���̘R�k�A�Ŏ��܂��͚ʑ��̖h�~�y�ѐ������s���܂��B��̓I���@�ɂ��Ă͒���I�Ɍ������A���P���܂��B</p>                                                                        </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">4.</font></td>
                                                                      <td class="text-12px-2 style1">�l���ɂ��ċ��y�ё��k�̑�����ݒu���A�������o�ɂ͐v���ɑΉ����܂��B</td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15"><font color="#666666">5.</font></td>
                                                                      <td class="text-12px-2 style1">�l���ی�̂��߂̌l���ی�}�l�W�����g�V�X�e���𐧒肵�A���ʓI�Ɏ��{�����悤����I���p���I�ɋ��炵�A�������A���P���܂��B </td>
                                                                    </tr>
                                                                    <tr valign="top" class="text-12px-2">
                                                                      <td width="15">&nbsp;</td>
                                                                      <td>&nbsp;</td>
                                                                    </tr>
                                                                  </table></td>
                                                                </tr>
                                                                <tr>
                                                                  <td colspan="2" class="text-12px-2">&nbsp;</td>
                                                                </tr>
                                                                
                                                                <tr>
                                                                  <td colspan="2" align="right" class="text-12px-2">�A�[�g����������<br>
      <img src="https://www.art-printing.co.jp/formmail/img/daihyo-shyatyou.gif"></td></TABLE></CENTER>





<BR>
<CENTER><INPUT TYPE=submit VALUE="�l���ی���j�ɓ��ӂ����M����"></CENTER>
<BR>
<SCRIPT Language="JavaScript">
<!--
function PageBack(){
history.back();
}
//-->
</SCRIPT>
<FORM>
<CENTER><INPUT type="button" value="�O�̃y�[�W�ɖ߂���͂��Ȃ���"
onClick="PageBack()">
</CENTER></FORM>
</body></html>

EOM

exit;
}

###############################################
#�G���[����
sub error {

print "Content-type: text/html\n\n";

print <<EOM;

<html><head>
<title>�G���[</title></head>
$backgif2
$titlegif2
<CENTER><TABLE WIDTH=450 BORDER=0 BGCOLOR=$tablecolor2><TR><TD>
<BR><CENTER>
�G���[�ł�<BR><BR>
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
<CENTER><INPUT type="button" value="�O�̃y�[�W�ɖ߂�"
onClick="PageBack()">
</CENTER></FORM><BR>
</TD></TR></TABLE></CENTER>
</body>
</html>
EOM

exit;
}

#�s���A�N�Z�X����
sub checkaccess {
 foreach $referer (@referers) {
  if ($ENV{'HTTP_REFERER'} =~ m|http?://([^/]*)$referer|i) {
  $accesserror=1;
  last;
  } 
 } 
 if ($accesserror != 1) { 
 @error[1] = "�s���ȃA�N�Z�X�ł�<BR>";
 &error
 }
}


sub trans{
 $from='[���O�P-�X�`-�y��-���D�Q�|]';
 $to='[@01-9A-Za-z._-]';
 &jcode'convert(*xx, 'euc');
 &jcode'convert(*from, 'euc');
 &jcode'convert(*to, 'euc');
 &jcode'tr(*xx, $from, $to);
 &jcode'convert(*xx, 'sjis');
}

sub jis { $msg = $_[0]; &jcode'convert(*msg, 'jis'); }
