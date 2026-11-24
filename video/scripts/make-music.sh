#!/usr/bin/env bash
# 15 saniyəlik orijinal ambient trek: Am(add9) → Fmaj7 pad, yumşaq arpecio, echo.
set -euo pipefail
cd "$(dirname "$0")/.."

OUT=public/ambient.m4a
DUR=15

chord_a="110 164.81 220 261.63 493.88"
chord_b="87.31 130.81 220 329.63 392"

pad() {
  local detune=$1 expr="" gain f
  for f in $chord_a; do
    expr+="+(1/(1+exp((t-7.5)*2)))*(sin(2*PI*$f*t)+sin(2*PI*$f*$detune*t))"
  done
  for f in $chord_b; do
    expr+="+(1-1/(1+exp((t-7.5)*2)))*(sin(2*PI*$f*t)+sin(2*PI*$f*$detune*t))"
  done
  echo "0.045*(${expr:1})*(0.85+0.15*sin(2*PI*0.25*t))"
}

beat=0.625
note="if(lt(t,7.5),if(eq(mod(floor(t/$beat),4),0),880,if(eq(mod(floor(t/$beat),4),1),659.25,if(eq(mod(floor(t/$beat),4),2),987.77,783.99))),if(eq(mod(floor(t/$beat),4),0),698.46,if(eq(mod(floor(t/$beat),4),1),523.25,if(eq(mod(floor(t/$beat),4),2),880,659.25))))"
pluck="0.06*exp(-mod(t,$beat)*7)*sin(2*PI*($note)*t)"

left="$(pad 1.003)+$pluck"
right="$(pad 0.997)+0.8*$pluck"

ffmpeg -loglevel error -y \
  -f lavfi -i "aevalsrc=exprs='$left|$right':s=44100:d=$DUR" \
  -af "lowpass=f=3200,aecho=0.8:0.6:180|330:0.28|0.18,afade=t=in:d=0.4,afade=t=out:st=$((DUR-2)):d=2,loudnorm=I=-18:TP=-2:LRA=7" \
  -t $DUR -ar 44100 -c:a aac -b:a 160k "$OUT"

echo "musiqi: $OUT"
