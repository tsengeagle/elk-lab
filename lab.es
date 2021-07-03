GET /_cat

GET /_template/*lab*

PUT /_template/temp_lab
{
    "index_patterns": [
        "lab*"
    ],
    "order": 1,
    "version": 0,
    "settings": {
        "number_of_shards": 1,
        "number_of_replicas": 1
    },
    "mappings": {
        "numeric_detection": true,
        "date_detection": true,
        "properties": {
            "service_name": {
                "type": "text"
            },
            "duration": {
                "type": "number"
            }
        }
    }
}

GET /lab_axis2

POST /lab/_doc
{
	"col1":"hello",
	"col2":"world",
	"num1":"3",
	"num2":123
}

GET /lab-axis

GET /lab-axis/_search

POST /lab-axis/_doc
{
	"source":"test",
	"dest":"somewhere",
	"total": 305
}

GET /_cat/indices/lab*


DELETE /lab-axis2

GET /lab-from-py/_search

GET /_cat/indices/my*
