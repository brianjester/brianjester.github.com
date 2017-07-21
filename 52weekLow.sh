#!/bin/bash
# 52weekLow.sh - print out 52 week lows for NASDAQ, NYSE, AMEX
FILE=52weeklows.html
HEADER="<HTML>\
  <HEAD>\
    <link href='https://fonts.googleapis.com/css?family=Advent Pro' rel='stylesheet'>\
    <STYLE>\
      tbody {vertical-align: top;}\
      body {font-family: 'Advent Pro';font-size: 22px;}\
    </STYLE>\
    <TITLE>52 Week Lows: NASDAQ, NYSE, AMEX</TITLE>\
  </HEAD>\
  <BODY>\
<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>\
<ins class='adsbygoogle'\
     style='display:block; text-align:center;'\
     data-ad-format='fluid'\
     data-ad-layout='in-article'\
     data-ad-client='ca-pub-7109249808946513'\
     data-ad-slot='1367692651'></ins>\
<script>\
     (adsbygoogle = window.adsbygoogle || []).push({});\
</script>\
<H1>52 Week Lows</H1><UL>"

FOOTER="</BODY>\
  </HTML>"

NASDAQ=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=NASDAQ&status=LOW" | grep "/symbol" | grep -v title | grep href | sed 's/\<h3/\<br/g'`

NYSE=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=NYSE&status=LOW" | grep "/symbol" | grep -v title | grep href | sed 's/\<h3/\<br/g'`

AMEX=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=AMEX&status=LOW" | grep "/symbol" | grep -v title | grep href | sed 's/\<h3/\<br/g'`

DOC="${HEADER}\
<TABLE>\
<THEAD><TR><TH>NASDAQ<TH>NYSE<TH>AMEX</THEAD>\
<TBODY><TR><TD>${NASDAQ}<TD>${NYSE}<TD>${AMEX}</TBODY>\
</TABLE>\
${FOOTER}"
echo $DOC > $FILE
