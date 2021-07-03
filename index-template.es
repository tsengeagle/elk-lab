
PUT /_template/temp_service_trace
{
    "index_patterns":["service-trace*","my-trace*","my-index-trace*"],
    "mappings":{
        "date_detection": true,
        "numeric_detection": true,
        "properties": {
            "@timestamp": {
                "type": "date"
            },
            "@version": {
                "type": "long"
            },
            "cal_sha_duration": {
                "type": "long"
            },
            "call_duration": {
                "type": "long"
            },
            "call_to_gen_req_duration": {
                "type": "long"
            },
            "dest": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "duplicated_wait_duration": {
                "type": "long"
            },
            "endpoint": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "gen_req_to_sha_duration": {
                "type": "long"
            },
            "gen_request_duration": {
                "type": "long"
            },
            "host": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "init_to_call_duration": {
                "type": "long"
            },
            "log_level": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "log_thread": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "log_timestamp": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "logger": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "message": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "message_sha": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "repeat": {
                "type": "long"
            },
            "request_id": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "request_length": {
                "type": "long"
            },
            "response_length": {
                "type": "long"
            },
            "retry": {
                "type": "long"
            },
            "send_duration": {
                "type": "long"
            },
            "send_to_unmarshall_duration": {
                "type": "long"
            },
            "sha_to_send_duration": {
                "type": "long"
            },
            "source": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "tags": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "total_duration": {
                "type": "long"
            },
            "unmarshall_duration": {
                "type": "long"
            },
            "unmarshall_to_end_duration": {
                "type": "long"
            }
        }
    }
}

GET /_template/temp_service_trace

DELETE /_template/temp_service_trace

GET /my_index_trace

