
PUT /_template/temp_service_trace
{
    "index_patterns":["service-trace*","my-trace*","my-index-trace*"],
    "mappings":{
        "date_detection": true,
        "numeric_detection": true,
        "properties": {
            "user_dept": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "user_ip": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "user_login_place": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "user_name": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "user_realname": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "svr_id": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "method": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "phase": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "send_time": {
                "type": "date"
            },
            "source_node": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "source_service": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "dest_endpoint": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "dest_service": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "elapsed_time": {
                "type": "text",
                "fields": {
                    "keyword": {
                        "type": "keyword",
                        "ignore_above": 256
                    }
                }
            },
            "host": {
                "properties": {
                    "name": {
                        "type": "text",
                        "fields": {
                            "keyword": {
                                "type": "keyword",
                                "ignore_above": 256
                            }
                        }
                    }
                }
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

GET /my-index-trace-2021.07.05

GET /tp-prod-2021.07.01

GET /my-hello-trace-2021.07.04

GET /service-trace-tp-prod-2021.07.05

PUT /service-trace-tp-prod-2021.07.05/_mapping
{
    "properties": {
        "user_name": {
            "type": "text",
            "fields": {
                "keyword": {
                    "type": "keyword",
                    "ignore_above": 256
                }
            }
        }
    }
}
