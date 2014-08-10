#!/bin/sh
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR"
pwd
"./DOSBox/DOSBox.app/Contents/MacOS/DOSBox" -conf "./DOSBox/dosbox.conf" "./qb45/qb.exe"