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

FOOTER="<HR><P><H3>Definitions: 52-week high\/low</H3><p><A HREF="http://www.investopedia.com/terms/1/52weekhighlow.asp">Investopedia</A>: A 52-week high\/low is the highest and lowest price that a stock has traded at during the previous year. Many traders and investors view the 52-week high or low as an important factor in determining a stock's current value and predicting future price movement.<P><A HREF="http://www.nasdaq.com/aspx/52-week-high-low.aspx">NASDAQ</A>:The New 52-Week High\/Low indicates a stock is trading at its highest or lowest price in the past 52 weeks. This is an important indicator for many investors in determining the current value of a stock or predicting a trend in a stock’s performance. One popular strategy employed by stock traders is to purchase companies hitting new highs. Hover over symbols below for additional index information, including quotes, news, and charts.<P><A HREF="http://online.wsj.com/mdc/public/page/2_3021-newhinyse-newhighs.html">WSJ</A><P><A HREF="https://www.barchart.com/stocks/highs-lows/summary">barchart</A><P><A HREF="https://www.msn.com/en-us/money/stockscreener/52weekhighs">msn</A><P><A HREF="http://www.barrons.com/public/page/weeklyhighslows.html">BARRON'S</A> </BODY>\
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
