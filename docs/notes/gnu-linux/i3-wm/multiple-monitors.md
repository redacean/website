---
title: Multiple Monitors
---

To configure a new monitor, first start by fetching information about the monitors available by running `xrandr` (package _xorg-xrandr_).

```bash
$ xrandr
Screen 0: minimum 320 x 200, current 1366 x 768, maximum 16384 x 16384
eDP-1 connected primary 1366x768+0+0 (normal left inverted right x axis y axis) 344mm x 193mm
   1366x768      60.00*+  48.01  
<... SNIP ...>
   320x180       59.84    59.32  
DP-1 disconnected (normal left inverted right x axis y axis)
HDMI-1 disconnected (normal left inverted right x axis y axis)
DP-2 disconnected (normal left inverted right x axis y axis)
HDMI-2 disconnected (normal left inverted right x axis y axis)
DP-3 connected (normal left inverted right x axis y axis)
   2560x1440     59.95 +  74.92    49.95  
<... SNIP ...>
   640x480       75.00    60.00    59.94
```

To use an external monitor run:

```bash
$ xrandr --output DP-3 --auto --above eDP-1
```
