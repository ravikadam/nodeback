select st.`name`, DATE_FORMAT(DATE_ADD(DATE_ADD(sl.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE), '%Y-%m-%d') as session_date
, DATE_FORMAT(DATE_ADD(DATE_ADD(sc.updated_at, INTERVAL 5 HOUR), INTERVAL 30 MINUTE), '%Y-%m-%d') as payment_date
, DATEDIFF(sc.updated_at, sl.start_date) AS Sales_Cycle
from sessions as s
	inner join slot as sl on sl.id = s.slot_id
    inner join `user` as st on st.id = s.student_id
    left outer join sessions as s1 on s1.id = s.id and s1.`status` = 'end'
    left outer join student_course as sc on sc.student_id = st.id and sc.`status` = 'PAID'
where st.parent_name not like '%yatish%' and st.parent_name not like '%dummy%' and st.parent_name not like '%chandu ke ch%'
	and st.parent_name not like '%gaurav pert%'    and sc.id is not null
order by DATE_FORMAT(DATE_ADD(DATE_ADD(sl.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE), '%Y-%m-%d') 
