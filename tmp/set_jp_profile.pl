#!/usr/bin/perl

use DB_File;

my $uh = "/usr/home";
my $slash = "/";
my $login= `whoami`;
chomp $login;
our %prefs;

my $prefs_db = $uh . $slash . $login . "/users/" . $login . "/prefs.db";
my $dbm = tie %prefs, 'DB_File', $prefs_db, O_RDWR|O_CREAT, 0640, $DB_HASH
              or die "Cannot open file $prefs_db: $! \n";

$prefs{timeZoneInfo} = "Asia/Tokyo";
$prefs{dateFormat} = "ymd";
$prefs{clientEncoding} = "UTF-8";

undef $dbm;
untie %prefs;




