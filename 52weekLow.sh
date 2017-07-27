#!/bin/bash
# 52weekLow.sh - print out 52 week lows for NASDAQ, NYSE, AMEX
MY_HOME=/Users/bjester.ctr/brianjester
FILE=${MY_HOME}/52weeklows.html
HEADER="<HTML>\
  <HEAD>\
    <link href='https://fonts.googleapis.com/css?family=Advent Pro' rel='stylesheet'>\
    <STYLE>\
      tbody {vertical-align: top;}\
      body {font-family: 'Advent Pro';font-size: 22px;}\
    </STYLE>\
    <TITLE>52 Week Lows: NASDAQ, NYSE, AMEX</TITLE>\
<meta name="msvalidate.01" content="E1FF4444C95449F69EB93EEEC23EC966" />\
  </HEAD>\
  <BODY><H4>\
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
<script>\
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\
  ga('create', 'UA-25680902-2', 'auto');\
  ga('send', 'pageview');\
</script>\
<H1>52 Week Lows: NASDAQ, NYSE, AMEX</H1><UL>"

FOOTER="<script async src='//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'></script>\
<ins class='adsbygoogle'\
     style='display:block; text-align:center;'\
     data-ad-format='fluid'\
     data-ad-layout='in-article'\
     data-ad-client='ca-pub-7109249808946513'\
     data-ad-slot='1367692651'></ins>\
<script>\
     (adsbygoogle = window.adsbygoogle || []).push({});\
</script>\
<H3>References:</H3>\
<H4><p><A HREF="http://www.nasdaq.com/aspx/52-week-high-low.aspx">NASDAQ</A>\
<H4><p><A HREF="http://www.investopedia.com/terms/1/52weekhighlow.asp">Investopedia</A>: A 52-week high-low is the highest and lowest price that a stock has traded at during the previous year. Many traders and investors view the 52-week high or low as an important factor in determining a stock's current value and predicting future price movement.\
<P><A HREF="http://online.wsj.com/mdc/public/page/2_3021-newhinyse-newhighs.html">WSJ</A>\
<P><A HREF="https://www.barchart.com/stocks/highs-lows/summary">barchart</A>\
<P><A HREF="https://www.msn.com/en-us/money/stockscreener/52weeklows?market=USA">msn</A>\
<P><A HREF="http://www.barrons.com/public/page/weeklyhighslows.html">BARRON'S</A> </BODY>\
  </HTML>"

#NASDAQ=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=NASDAQ&status=LOW" | grep "/symbol" | grep -v title | grep href | sed 's/\<h3/\<br/g'`
NASDAQ=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=NASDAQ&status=LOW" | grep symbol -A 2 | grep -v title | egrep -v -- -- | egrep -v "floatL|separated|stock-search"|sed 's/td/h4/g'|sed 's/\<br/\<h4/g'|sed 's/\/h5/h4/g'`

#NYSE=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=NYSE&status=LOW" | grep "/symbol" | grep -v title | grep href | sed 's/\<h3/\<br/g'`
NYSE=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=NYSE&status=LOW" | grep symbol -A 2 | grep -v title | egrep -v -- -- | egrep -v "floatL|separated|stock-search"|sed 's/td/h4/g'|sed 's/\<br/\<h4/g'|sed 's/\/h5/h4/g'`

#AMEX=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=AMEX&status=LOW" | grep "/symbol" | grep -v title | grep href | sed 's/\<h3/\<br/g'`
AMEX=`curl -s "http://www.nasdaq.com/aspx/52-week-high-low.aspx?exchange=AMEX&status=LOW" | grep symbol -A 2 | grep -v title | egrep -v -- -- | egrep -v "floatL|separated|stock-search"|sed 's/td/h4/g'|sed 's/\<br/\<h4/g'|sed 's/\/h5/h4/g'`

DOC="${HEADER}\
<H4>Site updated <mark>daily.</mark></H4>\
<H2>NASDAQ 52-Week Lows</H3>\
<H4>${NASDAQ}\
<HR>\
<H2>NYSE 52-Week Lows</H3>\
<H4>${NYSE}\
<HR>\
<H2>AMEX 52-Week Lows</H3>\
<H4>${AMEX}\
<HR>\
${FOOTER}"
echo $DOC > $FILE
cd ${MY_HOME}
git add ${MY_HOME}
git commit -m "Updated 52 week lows" -- ${MY_HOME}
git push

