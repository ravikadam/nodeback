select DATE_FORMAT(DATE_ADD(DATE_ADD(sl.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE), '%Y-%m-%d'), count(s.id) 
from sessions as s
	inner join slot as sl on sl.id = s.slot_id
    inner join `user` as st on st.id = s.student_id
where s.tutor_id = 'feb4755d-e43d-11e9-ab04-0a77f6c3d8a8'
	and sl.start_date < '2019-10-23' 
    and st.`name` not in ('Test', 'Chandu', 'Dummy', 'Gaurav Perti', 'Yatish Gupta', 'Hriyansh Gupta', 'Chandu1',
		'Hriyansh')
	and s.`status` = 'end'
group by DATE_FORMAT(DATE_ADD(DATE_ADD(sl.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE), '%Y-%m-%d')
order by DATE_FORMAT(DATE_ADD(DATE_ADD(sl.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE), '%Y-%m-%d')



select s.`status`, count(s.id) 
from sessions as s
	inner join slot as sl on sl.id = s.slot_id
    inner join `user` as st on st.id = s.student_id
where s.tutor_id = 'feb4755d-e43d-11e9-ab04-0a77f6c3d8a8'
	and sl.start_date < '2019-10-23' 
    and st.`name` not in ('Test', 'Chandu', 'Dummy', 'Gaurav Perti', 'Yatish Gupta', 'Hriyansh Gupta', 'Chandu1',
		'Hriyansh')
group by s.`status`