# i use arch btw

set keyboad layout

```bash
loadkeys uk
```

verify boot mode (should return `64`)

```bash
cat /sys/firmware/efi/fw_platform_size
```

## Network Connection

connect using ethernet

update system clock

```bash
timedatectl
```

## Disk Partitioning

```bash
fdisk /dev/nvme0n1
g # create an empty partition table
n # create new partition
<enter>
<enter>
+1G
yes
```

