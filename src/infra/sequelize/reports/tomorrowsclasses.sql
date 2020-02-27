select t.`name` as teacher_name, st.`name` as student_name, st.parent_name, st.grade, 
	sc.start_time as class_time, st.mobile, st.email, s.`status`, b.`status`
from sessions as s 				
	inner join slot as sl on sl.id = s.slot_id			
    inner join booking as b on b.session_id = s.id
    inner join `user` as t on t.id = s.tutor_id				
    inner join `user` as st on st.id = s.student_id				
    inner join slot_config as sc on sc.id = sl.slot_config_id				
    -- Change dates in following line
where sl.start_date >= '2019-10-22 18:30:00' and sl.start_date <= '2019-10-23 18:30:00'				
order by teacher_name, class_time	