---
sidebar_position: 2
---

# Compose

## Commands

- `docker compose up --build`
- `docker compose up -d`
- `docker compose down`
- `docker compose -f docker-compose.yml up --build`
- `docker compose -f docker-compose.yml up -d --build`
- `docker compose -f docker-compose.yml down`

## Restart policy

```
services:
  my-service:
    restart: always | unless-stopped | on-failure[:max-retries] | no
```

## Volumes

```
volumes:
  tmpfs:
    driver: local
    driver_opts:
      o: "size=100m,uid=1000"
      device: tmpfs
      type: tmpfs
```

```
docker volume create --driver local \
--opt type=tmpfs \
--opt device=tmpfs \
--opt o=size=100m,uid=1000 \
foo
```

## Logging

Docker logs are stored in `/var/lib/docker/containers/CONTAINER_ID/CONTAINER_ID-json.log`. You can just delete these logs.
Settings (docker-compose):

```
logging:
    driver: "json-file"
    options:
        max-file: "5"   # number of files or file count
        max-size: "10m" # file size
```

https://docs.docker.com/config/containers/logging/json-file/
