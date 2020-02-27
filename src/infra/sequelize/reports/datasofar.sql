select ost.id as student_id, ost.`name` as student_name, ost.parent_name, ost.grade, substring(ost.mobile, 1, 10) as mobile, ost.email,
    DATE_FORMAT(DATE_ADD(DATE_ADD(osl.start_date, INTERVAL 5 HOUR), INTERVAL 30 MINUTE), '%Y-%m-%d') as session_date,
    sc.`status` as student_status, tu.`name` as teacher,
    case
        when ost.social_id = 'admin' then 0 else 1
    end as from_fb
from `sessions` as os
    inner join `user` as ost on os.student_id = ost.id
    inner join slot as osl on osl.id = os.slot_id
    inner join `user` as tu on tu.id = os.tutor_id
    inner join student_course as sc on sc.student_id = ost.id
inner join
    (select substring(st.mobile, 1, 10) as mobile, max(sl.start_date) as session_date
    from `sessions` as s 
        inner join `user` as st on s.student_id = st.id
        inner join slot as sl on sl.id = s.slot_id
    where sl.start_date < CURDATE() and st.mobile is not null and st.role = 'student' and
        st.parent_name not like '%yatish%' and st.parent_name not like '%dummy%' and st.parent_name not like '%chandu ke ch%'
            and st.parent_name not like '%gaurav pert%'
    group by substring(st.mobile, 1, 10)) as a on a.mobile = substring(ost.mobile, 1, 10) and a.session_date = osl.start_date
