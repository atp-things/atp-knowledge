---
sidebar_position: 3
---

# Bash

## Commands

- chown - change file owner

```bash
# Change file owner
sudo chown -R $USER:$USER ~/.blabla
# Change file permissions
sudo chmod 777 ~/.blabla
```

- Tar - archaive

```bash
# Create tar file
tar -czvf projects.tar.gz $HOME/projects/
tar -czvf ./sphinx/build/html.tar.gz -C ./sphinx/build/html .
# List content
tar -ztvf projects.tar.gz
# Extract tar file
tar -xzvf projects.tar.gz
tar -xvf file.tar.gz
# To a folder
tar -xzvf projects.tar.gz -C ./tmp/
```

- Power manipulation:

  - `sudo reboot` - reboot
  - `sudo shutdown -r` - reboot
  - `sudo shutdown –r 16:15` - reboot at 16:15
  - `sudo shutdown –r +10` - reboot after 10 minutes
  - `sudo shutdown` - shut down

- Hardware info:

  - `lshw` - hardware list
  - `sudo du -h --max-depth=1 /var/lib/docker/` - check folder size
  - `sudo du -hs /var/lib/docker/` - check folder size
  - `htop` - process viewer
  - `top` - process viewer

- `vim`:

  - `i` - insert
  - `o` - open new line
  - [cheat sheet](https://vim.rtorr.com/)

- Disk utilities:

- `df -i --total` - check inodes
- `df -h --total` - check disk usage
- `lsblk` - disk usage
- `du -h --max-depth=1 /var/lib/docker/` - check folder size

- Ubuntu updates:

  - `sudo apt autoremove` - remove unused packages
  - `sudo apt clean` - remove old packages
  - `sudo apt update` - update package list
  - `sudo apt upgrade` - upgrade packages

- Create large dummy file
  - `truncate -s 10G large_file_10GB.iso` - create 10GB file
- Process manipulation

```Bash
sudo systemctl stop <process>
sudo systemctl start <process>
sudo systemctl disable <process>
sudo systemctl enable <process>
```
