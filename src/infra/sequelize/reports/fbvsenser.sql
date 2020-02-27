-- FB
select st3.`name`, st3.parent_name, st3.mobile, st3.email, DATE_ADD(DATE_ADD(sl2.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE) as slot, s3.`status`
from sessions as s3
inner join `user` as st3 on st3.id = s3.student_id
inner join slot as sl2 on sl2.id = s3.slot_id
inner join 
(select st2.email as email, max(sl.id) as slotId
from sessions as s2
inner join slot as sl on sl.id = s2.slot_id
inner join `user` as st2 on st2.id = s2.student_id
where sl.start_date < '2019-11-06' and sl.start_date > '2019-11-01' and email not in ('gaurav.perti@gmail.com')
and s2.id in (
select distinct(s.id)
from sessions as s
inner join `user` as st on st.id = s.student_id
inner join (
select distinct(substring(mobile, 1, 10)) as mobile
from `user` 
where (otp != 123457 or otp is null) 
    and parent_name not in ('Yatish Gupta', 'Samidha Sudhi', 'Gaurav Perti') and mobile is not null) as fb on fb.mobile = substring(st.mobile, 1, 10))
    group by st2.email ) as fb2 on fb2.slotId = s3.slot_id and fb2.email = st3.email


--Enser
select st3.`name`, st3.parent_name, st3.mobile, st3.email, DATE_ADD(DATE_ADD(sl2.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE) as slot, s3.`status`
from sessions as s3
inner join `user` as st3 on st3.id = s3.student_id
inner join slot as sl2 on sl2.id = s3.slot_id
inner join 
(select st2.email as email, max(sl.id) as slotId
from sessions as s2
inner join slot as sl on sl.id = s2.slot_id
inner join `user` as st2 on st2.id = s2.student_id
where sl.start_date < '2019-11-06' and sl.start_date > '2019-11-01' and st2.email not in ('gaurav.perti@gmail.com') and s2.`status` != 'booked'
and s2.id not in (
select distinct(s.id)
from sessions as s
inner join `user` as st on st.id = s.student_id
inner join (
select distinct(substring(mobile, 1, 10)) as mobile
from `user` 
where (otp != 123457 or otp is null) 
    and parent_name not in ('Yatish Gupta', 'Samidha Sudhi', 'Gaurav Perti') and mobile is not null) as fb on fb.mobile = substring(st.mobile, 1, 10))
    group by st2.email ) as fb2 on fb2.slotId = s3.slot_id and fb2.email = st3.email
