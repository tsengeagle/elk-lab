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
  -v "$(PWD)/templates/lab/messages.txt:/lab/messages.txt" \
  docker.elastic.co/logstash/logstash:7.3.0 bash
```
```
docker run --rm -it \
  -v "$(PWD)/templates/lab/pipeline_jdbc.conf:/usr/share/logstash/pipeline/pipeline_jdbc.conf" \
  -v "$(PWD)/files/ojdbc8.jar:/jar/ojdbc8.jar" \
  docker.elastic.co/logstash/logstash:7.3.0 bash
```

```
docker run --rm -itd --name logstash-lab -P \
  -v "$(PWD)/templates/lab/pipeline_stdinput.conf:/usr/share/logstash/pipeline/pipeline_stdinput.conf" \
  docker.elastic.co/logstash/logstash:7.3.0
```

## GC

### 2021-03-29T14:36:47.006+0800: 16914.509: [GC pause (G1 Evacuation Pause) (young), 0.0142327 secs]

%{TIMESTAMP_ISO8601:timestamp}: %{NUMBER:jvm_startup}: \[%{DATA:gc_type} \(%{DATA:gc_cause}\) %{DATA:gc_gen}, %{NUMBER:gc_duration} %{DATA:duration_unit}\]

### 2021-03-29T01:00:50.615+0800: 9.198: [GC concurrent-cleanup-end, 0.0000531 secs]

%{TIMESTAMP_ISO8601:timestamp}: %{NUMBER:jvm_startup}: \[%{DATA:gc_type} %{DATA:gc_cause}\, %{NUMBER:gc_duration} .*?\]

### 2021-03-29T10:42:31.724+0800: 2859.226: [GC remark 2021-03-29T10:42:31.724+0800: 2859.226: [Finalize Marking, 0.0007297 secs] 2021-03-29T10:42:31.724+0800: 2859.227: [GC ref-proc, 0.0504597 secs] 2021-03-29T10:42:31.775+0800: 2859.277: [Unloading, 0.0231968 secs], 0.0780050 secs]

%{TIMESTAMP_ISO8601:timestamp}: %{NUMBER:jvm_startup}: \[GC remark %{TIMESTAMP_ISO8601:gc_remark_timestamp}: %{NUMBER:gc_remark_at}: \[Finalize Marking, %{NUMBER:finalize_marking_duration} secs] %{TIMESTAMP_ISO8601:gc_ref_proc_timestamp}: %{NUMBER:gc_ref_proc_at}: \[GC ref-proc, %{NUMBER:gc_ref_proc_duration} secs\]

### 2021-03-29T01:00:52.508+0800: 11.090: [GC cleanup 110M->110M(10000M), 0.0059248 secs]
%{TIMESTAMP_ISO8601:timestamp}: %{NUMBER:jvm_startup}: \[%{DATA:gc_type} %{DATA:gc_cause} %{NUMBER:gc_before}%{DATA:gc_before_unit}->%{NUMBER:gc_after}%{DATA:gc_after_unit}\(%{NUMBER:gc_total}%{DATA:gc_total_unit}\), %{NUMBER:gc_duration} %{DATA:duration_unit}\]
