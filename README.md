# Say What Actually Broke

[![Competition](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Tienne0809/actually-broke-entry/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/Tienne0809/actually-broke-entry/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

One line of error-message copy that says what actually broke, in plain words:

> Your file was not saved. Not a glitch: we ran out of disk, said nothing, and the backup you are imagining does not exist.

`main.ts` is a small Node program (only `node:fs` and `node:path`) that writes this exact line to `entry.txt` inside the directory named by `MAKEFUN_OUTPUT_DIR` (default `/output`), creating the directory if needed and adding no trailing newline. `line.txt` holds the same line verbatim.
