# elastic search lab

## run with docker

開volumes， `docker volumes ls` 列出所有volumes， `docker volumes inspect <volume name>` 看詳細資訊，得知掛載路徑

## 分詞器

```bash
docker exec -it lab_2 /usr/share/elasticsearch/bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.3.0/elasticsearch-analysis-ik-7.3.0.zip
```
