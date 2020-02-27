select l.caller, count(s.id) as scheduled, count(s2.id) as attended, 
(count(s2.id) / count(s.id))*100 as attended_percent, count(sc.id) as purchased
from sessions as s
	inner join `user` as st on st.id = s.student_id
	inner join leads as l on l.mobile = st.mobile
    inner join slot as sl on sl.id = s.slot_id
    left outer join student_course as sc on sc.student_id = st.id and sc.`status` = 'PAID'
    left outer join sessions as s2 on s2.id = s.id and s.`status` = 'end'
where sl.start_date < '2019-10-23'
group by l.caller