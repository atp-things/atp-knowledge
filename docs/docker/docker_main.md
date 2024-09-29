---
sidebar_position: 1
---

# General

## Commands

- `docker ps`
- `docker ps -a`
- `docker build -t <container> .`
- `docker build -f Dockerfile.prod -t <container> .`
- `docker rm --force <id>`
- `docker run --publish 8001:8080 --detach --name api-1 <container>`
- `systemctl restart docker`
- Get current output of container `docker attach [OPTIONS] CONTAINER`
- Kill container `docker kill <container>` or `docker exec -it <container> kill 1`
- Go to container bash `sudo docker exec -it CONTAINER /bin/bash`

### Buildx

- Build and push to dockerhub `docker buildx build -f Dockerfile --platform=linux/amd64,linux/arm64 -t <username>/<container> --push .`

### Restart docker policy

- Set restart always `docker run -d --restart always <docker-image>`
- Update restart `docker update --restart unless-stopped  <docker-container>`
- Update all restarts `docker update --restart unless-stopped $(docker ps -q)`

## Tags

- Run in background `-d`
- Tag `-t`

## Volumes

- List: `docker volume ls`
- Create: `docker volume create -d flocker -o size=20GB my-named-volume`
