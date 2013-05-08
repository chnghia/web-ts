
/** dayoffs indexes **/
db.getCollection("dayoffs").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** departments indexes **/
db.getCollection("departments").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** employees indexes **/
db.getCollection("employees").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** rawdata indexes **/
db.getCollection("rawdata").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** rawusers indexes **/
db.getCollection("rawusers").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** timesheets indexes **/
db.getCollection("timesheets").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** timeshifts indexes **/
db.getCollection("timeshifts").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** users indexes **/
db.getCollection("users").ensureIndex({
  "_id": NumberInt(1)
},[
  
]);

/** dayoffs records **/
db.getCollection("dayoffs").insert({
  "_id": ObjectId("5031fdd96ad5ba7c11000008"),
  "name": "30\/4",
  "type": "holiday",
  "occur": "yearly",
  "date": ISODate("2010-04-30T00:00:00.0Z"),
  "created_at": ISODate("2012-08-20T09:05:29.100Z")
});
db.getCollection("dayoffs").insert({
  "_id": ObjectId("503c3f7d6ad5ba5412000001"),
  "name": "monthly",
  "type": "company",
  "occur": "monthly",
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "created_at": ISODate("2012-08-28T03:48:13.734Z")
});
db.getCollection("dayoffs").insert({
  "_id": ObjectId("503c3fdf6ad5ba5412000002"),
  "name": "once",
  "type": "company",
  "occur": "once",
  "date": ISODate("2012-09-01T00:00:00.0Z"),
  "created_at": ISODate("2012-08-28T03:49:51.469Z")
});

/** departments records **/
db.getCollection("departments").insert({
  "_id": ObjectId("50312bed6ad5ba6c19000006"),
  "name": "Accounting",
  "created_at": ISODate("2012-08-19T18:09:49.80Z")
});
db.getCollection("departments").insert({
  "_id": ObjectId("50312d736ad5ba6c19000007"),
  "name": "Planning & Resource",
  "created_at": ISODate("2012-08-19T18:16:19.712Z")
});

/** employees records **/
db.getCollection("employees").insert({
  "_id": ObjectId("503125d76ad5ba6c19000001"),
  "created_at": ISODate("2012-08-19T17:43:51.248Z"),
  "enroll_number": "1",
  "machine_enabled": true,
  "machine_name": "User 1",
  "machine_password": "1234",
  "name": "User 11",
  "timeshift_id": ObjectId("5031bf9d6ad5baec02000003")
});
db.getCollection("employees").insert({
  "_id": ObjectId("503125d76ad5ba6c19000002"),
  "enroll_number": "2",
  "name": "User 2",
  "machine_password": "1234",
  "machine_enabled": true,
  "machine_name": "User 2",
  "created_at": ISODate("2012-08-19T17:43:51.251Z")
});
db.getCollection("employees").insert({
  "_id": ObjectId("503125d76ad5ba6c19000003"),
  "enroll_number": "3",
  "name": "User 3",
  "machine_password": "1234",
  "machine_enabled": true,
  "machine_name": "User 3",
  "created_at": ISODate("2012-08-19T17:43:51.254Z")
});
db.getCollection("employees").insert({
  "_id": ObjectId("503125d76ad5ba6c19000004"),
  "enroll_number": "4",
  "name": "4",
  "machine_password": "1234",
  "machine_enabled": true,
  "machine_name": "4",
  "created_at": ISODate("2012-08-19T17:43:51.256Z")
});

/** rawdata records **/
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00002d"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-14T00:00:00.0Z"),
  "time": ISODate("2012-08-14T16:30:41.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.40Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00002e"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-14T00:00:00.0Z"),
  "time": ISODate("2012-08-14T16:30:46.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.41Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00002f"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:34:14.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.43Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000030"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:34:17.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.45Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000031"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:34:32.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.46Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000032"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:34:36.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.48Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000033"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:36:15.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.50Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000034"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:36:18.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.52Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000035"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:36:23.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.55Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000036"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:36:26.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.57Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000037"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T11:36:30.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.59Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000038"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T13:19:16.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.60Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000039"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T13:19:20.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.63Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00003a"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T13:19:24.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.65Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00003b"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T13:19:41.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.67Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00003c"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T13:19:44.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.69Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00003d"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T14:06:10.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.70Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00003e"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T14:06:14.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.72Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00003f"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-15T00:00:00.0Z"),
  "time": ISODate("2012-08-15T14:06:23.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.74Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000040"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T01:11:53.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.76Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000041"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T01:11:56.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.78Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000042"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T01:12:02.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.80Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000043"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T01:33:07.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.82Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000044"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T01:33:12.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.83Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000045"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T11:24:55.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.85Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000046"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T11:24:58.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.87Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000047"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T11:25:01.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.89Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000048"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T13:35:26.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.91Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000049"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T13:35:30.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.92Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00004a"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T13:35:35.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.94Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00004b"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T14:23:34.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.96Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00004c"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T14:23:42.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.98Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00004d"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-16T00:00:00.0Z"),
  "time": ISODate("2012-08-16T14:23:48.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.100Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00004e"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-17T00:00:00.0Z"),
  "time": ISODate("2012-08-17T11:47:07.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.102Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00004f"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-17T00:00:00.0Z"),
  "time": ISODate("2012-08-17T11:47:10.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.104Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000050"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-17T00:00:00.0Z"),
  "time": ISODate("2012-08-17T11:47:13.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.106Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000051"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-17T00:00:00.0Z"),
  "time": ISODate("2012-08-17T12:30:26.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.108Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000052"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-17T00:00:00.0Z"),
  "time": ISODate("2012-08-17T12:30:29.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.110Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000053"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-17T00:00:00.0Z"),
  "time": ISODate("2012-08-17T12:30:32.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.111Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000054"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-18T00:00:00.0Z"),
  "time": ISODate("2012-08-18T01:43:30.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.114Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000055"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-18T00:00:00.0Z"),
  "time": ISODate("2012-08-18T01:43:33.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.116Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000056"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-18T00:00:00.0Z"),
  "time": ISODate("2012-08-18T01:43:36.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.118Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000057"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-18T00:00:00.0Z"),
  "time": ISODate("2012-08-18T14:38:09.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.120Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000058"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-18T00:00:00.0Z"),
  "time": ISODate("2012-08-18T14:38:14.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.122Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000059"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-18T00:00:00.0Z"),
  "time": ISODate("2012-08-18T14:38:17.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.124Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000005"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-10T00:00:00.0Z"),
  "time": ISODate("2012-08-10T10:37:51.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.920Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000006"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(3),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-10T00:00:00.0Z"),
  "time": ISODate("2012-08-10T10:38:33.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.927Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000007"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T02:53:44.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.931Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000008"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T02:53:55.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.935Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000009"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T02:54:07.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.939Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f00000a"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(4),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T02:54:29.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.943Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f00000b"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(5),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T02:54:36.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.977Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f00000c"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T02:54:53.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.979Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f00000d"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(0),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T03:12:05.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.981Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f00000e"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T03:21:08.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.983Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f00000f"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T03:23:55.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.985Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000010"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T03:24:00.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.988Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000011"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T03:31:58.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.990Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000012"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(0),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T03:32:58.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.992Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000013"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T04:27:49.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.994Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000014"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T04:27:52.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.996Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000015"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(0),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T08:57:55.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.997Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120916ad5bac01f000016"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T08:58:05.0Z"),
  "created_at": ISODate("2012-08-19T17:21:21.999Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000017"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T09:01:32.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.0Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000018"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(4),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T09:02:40.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.2Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000019"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T09:03:20.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.3Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00001a"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:24:06.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.5Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00001b"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:24:17.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.7Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00001c"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:24:23.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.9Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00001d"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:25:33.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.10Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00001e"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:25:35.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.12Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00001f"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(2),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:25:36.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.13Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000020"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:25:43.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.15Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000021"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:25:51.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.17Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000022"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "time": ISODate("2012-08-11T12:25:57.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.19Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000023"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "time": ISODate("2012-08-12T06:16:25.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.21Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000024"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "time": ISODate("2012-08-12T06:16:39.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.23Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000025"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "time": ISODate("2012-08-12T06:23:30.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.25Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000026"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "time": ISODate("2012-08-12T06:23:32.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.27Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000027"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "time": ISODate("2012-08-12T06:23:42.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.29Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000028"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "time": ISODate("2012-08-12T06:23:50.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.31Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f000029"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "verify_mode": NumberInt(2),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "time": ISODate("2012-08-12T06:23:57.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.33Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00002a"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-14T00:00:00.0Z"),
  "time": ISODate("2012-08-13T18:49:25.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.35Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00002b"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-14T00:00:00.0Z"),
  "time": ISODate("2012-08-13T18:50:20.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.37Z")
});
db.getCollection("rawdata").insert({
  "_id": ObjectId("503120926ad5bac01f00002c"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "verify_mode": NumberInt(1),
  "inout_mode": NumberInt(0),
  "work_code": NumberInt(0),
  "date": ISODate("2012-08-14T00:00:00.0Z"),
  "time": ISODate("2012-08-14T16:30:38.0Z"),
  "created_at": ISODate("2012-08-19T17:21:22.38Z")
});

/** rawusers records **/
db.getCollection("rawusers").insert({
  "_id": ObjectId("503120896ad5bac01f000001"),
  "machine_code": NumberInt(1),
  "enroll_number": "1",
  "name": "User 1",
  "password": "1234",
  "privilege": NumberInt(3),
  "enabled": true,
  "created_at": ISODate("2012-08-19T17:21:13.252Z")
});
db.getCollection("rawusers").insert({
  "_id": ObjectId("503120896ad5bac01f000002"),
  "machine_code": NumberInt(1),
  "enroll_number": "2",
  "name": "User 2",
  "password": "1234",
  "privilege": NumberInt(0),
  "enabled": true,
  "created_at": ISODate("2012-08-19T17:21:13.259Z")
});
db.getCollection("rawusers").insert({
  "_id": ObjectId("503120896ad5bac01f000003"),
  "machine_code": NumberInt(1),
  "enroll_number": "3",
  "name": "User 3",
  "password": "1234",
  "privilege": NumberInt(0),
  "enabled": true,
  "created_at": ISODate("2012-08-19T17:21:13.263Z")
});
db.getCollection("rawusers").insert({
  "_id": ObjectId("503120896ad5bac01f000004"),
  "machine_code": NumberInt(1),
  "enroll_number": "4",
  "name": "4",
  "password": "1234",
  "privilege": NumberInt(0),
  "enabled": true,
  "created_at": ISODate("2012-08-19T17:21:13.268Z")
});

/** system.indexes records **/
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.users",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.employees",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.rawdata",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.rawusers",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.timesheets",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.departments",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.timeshifts",
  "name": "_id_"
});
db.getCollection("system.indexes").insert({
  "v": NumberInt(1),
  "key": {
    "_id": NumberInt(1)
  },
  "ns": "nntimeatt_dev.dayoffs",
  "name": "_id_"
});

/** timesheets records **/
db.getCollection("timesheets").insert({
  "_id": ObjectId("5035b68c6ad5ba901d00000d"),
  "created_at": ISODate("2012-08-23T04:50:20.96Z"),
  "date": ISODate("2012-08-11T00:00:00.0Z"),
  "employee_id": ObjectId("503125d76ad5ba6c19000001"),
  "timeblocks": [
    {
      "_id": ObjectId("503c50356ad5ba601f000001"),
      "type": "ota",
      "t_in": ISODate("2012-08-11T10:00:00.0Z"),
      "t_out": ISODate("2012-08-11T12:24:17.0Z"),
      "duration": NumberInt(144)
    },
    {
      "_id": ObjectId("503c50356ad5ba601f000002"),
      "type": "break",
      "t_in": ISODate("2012-08-11T05:00:00.0Z"),
      "t_out": ISODate("2012-08-11T06:00:00.0Z"),
      "duration": NumberInt(60)
    },
    {
      "_id": ObjectId("503c50356ad5ba601f000003"),
      "type": "working",
      "t_in": ISODate("2012-08-11T02:53:44.0Z"),
      "t_out": ISODate("2012-08-11T10:00:00.0Z"),
      "duration": NumberInt(426)
    }
  ],
  "type": "working"
});
db.getCollection("timesheets").insert({
  "_id": ObjectId("503c50486ad5ba601f000004"),
  "created_at": ISODate("2012-08-28T04:59:52.751Z"),
  "date": ISODate("2012-08-12T00:00:00.0Z"),
  "employee_id": ObjectId("503125d76ad5ba6c19000001"),
  "timeblocks": [
    {
      "_id": ObjectId("503c8d8f6ad5ba9422000003"),
      "type": "working",
      "t_in": ISODate("2012-08-12T06:16:25.0Z"),
      "t_out": ISODate("2012-08-12T06:23:42.0Z"),
      "duration": NumberInt(7)
    }
  ],
  "type": "working"
});
db.getCollection("timesheets").insert({
  "_id": ObjectId("503c50656ad5ba601f000006"),
  "date": ISODate("2012-08-13T00:00:00.0Z"),
  "employee_id": ObjectId("503125d76ad5ba6c19000001"),
  "type": "working",
  "created_at": ISODate("2012-08-28T05:00:21.381Z")
});
db.getCollection("timesheets").insert({
  "_id": ObjectId("503c7e326ad5ba9422000001"),
  "created_at": ISODate("2012-08-28T08:15:47.0Z"),
  "date": ISODate("2012-04-30T00:00:00.0Z"),
  "employee_id": ObjectId("503125d76ad5ba6c19000001"),
  "timeblocks": [
    {
      "_id": ObjectId("503c8d6f6ad5ba9422000002"),
      "type": "holiday",
      "t_in": ISODate("2012-04-30T01:00:00.0Z"),
      "t_out": ISODate("2012-04-30T10:00:00.0Z"),
      "duration": NumberInt(540)
    }
  ]
});

/** timeshifts records **/
db.getCollection("timeshifts").insert({
  "_id": ObjectId("5031bf9d6ad5baec02000003"),
  "begin": "08:00",
  "break_begin": "12:00",
  "break_end": "13:00",
  "created_at": ISODate("2012-08-20T04:39:57.858Z"),
  "early": NumberInt(0),
  "end": "17:00",
  "in_begin": "06:00",
  "in_end": "11:00",
  "late": NumberInt(5),
  "name": "Shift 1",
  "out_begin": "11:01",
  "out_end": "23:00",
  "ratio": NumberInt(1),
  "time_block": NumberInt(30),
  "type": "filo"
});

/** users records **/
db.getCollection("users").insert({
  "_id": ObjectId("502a2953a4ce5a1c0a000002"),
  "email": "user2@example.com",
  "encrypted_password": "$2a$10$khjlmKEtXTYNuXT7VtOHLO5o1yxCEZ5ZYJa55JtVywOE4pJfKeGgG",
  "sign_in_count": NumberInt(0),
  "name": "Second User",
  "updated_at": ISODate("2012-08-14T10:32:51.277Z"),
  "created_at": ISODate("2012-08-14T10:32:51.277Z")
});
db.getCollection("users").insert({
  "_id": ObjectId("502a2953a4ce5a1c0a000001"),
  "created_at": ISODate("2012-08-14T10:32:51.105Z"),
  "current_sign_in_at": ISODate("2012-08-24T02:47:51.327Z"),
  "current_sign_in_ip": "127.0.0.1",
  "email": "user@example.com",
  "encrypted_password": "$2a$10$DEvlGf4hRjrIJcU.97JJIOOq4GywI2SONAveCP4a471P9zQOawzHS",
  "last_sign_in_at": ISODate("2012-08-22T04:06:31.719Z"),
  "last_sign_in_ip": "127.0.0.1",
  "name": "First User",
  "sign_in_count": NumberInt(7),
  "updated_at": ISODate("2012-08-24T02:47:51.427Z")
});
