# elastic search lab

## run with docker

開volumes， `docker volumes ls` 列出所有volumes， `docker volumes inspect <volume name>` 看詳細資訊，得知掛載路徑

## 分詞器

```bash
docker exec -it lab_2 /usr/share/elasticsearch/bin/elasticsearch-plugin install https://github.com/medcl/elasticsearch-analysis-ik/releases/download/v7.3.0/elasticsearch-analysis-ik-7.3.0.zip
```

## lab環境

dco up

* 資料路徑：

```
container/data
```

* 測試資料

```
container/lab_data
```

* 測試logstash設定

```
docker run --rm -it \
  -v "$(PWD)/templates/lab/pipelines.yml:/usr/share/logstash/config/pipelines.yml" \
  -v "$(PWD)/templates/lab/pipeline_process.conf:/usr/share/logstash/pipeline/pipeline_process.conf" \
  -v "$(PWD)/templates/lab/pipeline_access.conf:/usr/share/logstash/pipeline/pipeline_access.conf" \
  -v "$(PWD)/templates/lab/catalina.out:/lab/catalina.out" \
  -v "$(PWD)/templates/lab/access_log.txt:/lab/access_log.txt" \
docker.elastic.co/logstash/logstash:7.3.0 bash
```
```
docker run --rm -it \
  -v "$(PWD)/templates/lab/pipeline_backend.conf:/usr/share/logstash/pipeline/pipeline_backend.conf" \
  -v "$(PWD)/templates/lab/catalina.out:/lab/catalina.out" \
  -v "$(PWD)/templates/lab/access_log.txt:/lab/access_log.txt" \
docker.elastic.co/logstash/logstash:7.3.0 bash
```
