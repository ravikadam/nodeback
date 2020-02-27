import uidv4 from 'uuid/v4'

const slots = [
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '08:00',
    end_time: '09:00',
    order: -1
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '08:30',
    end_time: '09:30',
    order: 0
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '09:00',
    end_time: '10:00',
    order: 1
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '09:30',
    end_time: '10:30',
    order: 2
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '10:00',
    end_time: '11:00',
    order: 3
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '10:30',
    end_time: '11:30',
    order: 4
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '11:00',
    end_time: '12:00',
    order: 5
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '11:30',
    end_time: '12:30',
    order: 6
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '12:00',
    end_time: '13:00',
    order: 7
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '12:30',
    end_time: '13:30',
    order: 8
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '13:00',
    end_time: '14:00',
    order: 9
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '13:30',
    end_time: '14:30',
    order: 10
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '14:00',
    end_time: '15:00',
    order: 11
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '14:30',
    end_time: '15:30',
    order: 12
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '15:00',
    end_time: '16:00',
    order: 13
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '15:30',
    end_time: '16:30',
    order: 14
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '16:00',
    end_time: '17:00',
    order: 15
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '16:30',
    end_time: '17:30',
    order: 16
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '17:00',
    end_time: '18:00',
    order: 17
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '17:30',
    end_time: '18:30',
    order: 18
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '18:00',
    end_time: '19:00',
    order: 19
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '18:30',
    end_time: '19:30',
    order: 20
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '19:00',
    end_time: '20:00',
    order: 21
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '19:30',
    end_time: '20:30',
    order: 22
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '20:00',
    end_time: '21:00',
    order: 23
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '20:30',
    end_time: '21:30',
    order: 24
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '21:00',
    end_time: '22:00',
    order: 25
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '21:30',
    end_time: '22:30',
    order: 26
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '22:00',
    end_time: '23:00',
    order: 27
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '22:30',
    end_time: '23:30',
    order: 28
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '23:00',
    end_time: '00:00',
    order: 29
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '23:30',
    end_time: '00:30',
    order: 30
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '00:00',
    end_time: '01:00',
    order: 31
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '00:30',
    end_time: '01:30',
    order: 32
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '01:00',
    end_time: '02:00',
    order: 33
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '01:30',
    end_time: '02:30',
    order: 34
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '02:00',
    end_time: '03:00',
    order: 35
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '02:30',
    end_time: '03:30',
    order: 36
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '03:00',
    end_time: '04:00',
    order: 37
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '03:30',
    end_time: '04:30',
    order: 38
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '04:00',
    end_time: '05:00',
    order: 39
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '04:30',
    end_time: '05:30',
    order: 40
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '05:00',
    end_time: '06:00',
    order: 41
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '05:30',
    end_time: '06:30',
    order: 42
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '06:00',
    end_time: '07:00',
    order: 43
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '06:30',
    end_time: '07:30',
    order: 44
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '07:00',
    end_time: '08:00',
    order: 45
  },
  {
    day: 'Monday',
    slot_type: 'BOTH',
    start_time: '07:30',
    end_time: '08:30',
    order: 46
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '08:00',
    end_time: '09:00',
    order: -1
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '08:30',
    end_time: '09:30',
    order: 0
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '09:00',
    end_time: '10:00',
    order: 1
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '09:30',
    end_time: '10:30',
    order: 2
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '10:00',
    end_time: '11:00',
    order: 3
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '10:30',
    end_time: '11:30',
    order: 4
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '11:00',
    end_time: '12:00',
    order: 5
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '11:30',
    end_time: '12:30',
    order: 6
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '12:00',
    end_time: '13:00',
    order: 7
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '12:30',
    end_time: '13:30',
    order: 8
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '13:00',
    end_time: '14:00',
    order: 9
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '13:30',
    end_time: '14:30',
    order: 10
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '14:00',
    end_time: '15:00',
    order: 11
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '14:30',
    end_time: '15:30',
    order: 12
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '15:00',
    end_time: '16:00',
    order: 13
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '15:30',
    end_time: '16:30',
    order: 14
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '16:00',
    end_time: '17:00',
    order: 15
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '16:30',
    end_time: '17:30',
    order: 16
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '17:00',
    end_time: '18:00',
    order: 17
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '17:30',
    end_time: '18:30',
    order: 18
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '18:00',
    end_time: '19:00',
    order: 19
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '18:30',
    end_time: '19:30',
    order: 20
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '19:00',
    end_time: '20:00',
    order: 21
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '19:30',
    end_time: '20:30',
    order: 22
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '20:00',
    end_time: '21:00',
    order: 23
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '20:30',
    end_time: '21:30',
    order: 24
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '21:00',
    end_time: '22:00',
    order: 25
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '21:30',
    end_time: '22:30',
    order: 26
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '22:00',
    end_time: '23:00',
    order: 27
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '22:30',
    end_time: '23:30',
    order: 28
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '23:00',
    end_time: '00:00',
    order: 29
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '23:30',
    end_time: '00:30',
    order: 30
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '00:00',
    end_time: '01:00',
    order: 31
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '00:30',
    end_time: '01:30',
    order: 32
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '01:00',
    end_time: '02:00',
    order: 33
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '01:30',
    end_time: '02:30',
    order: 34
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '02:00',
    end_time: '03:00',
    order: 35
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '02:30',
    end_time: '03:30',
    order: 36
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '03:00',
    end_time: '04:00',
    order: 37
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '03:30',
    end_time: '04:30',
    order: 38
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '04:00',
    end_time: '05:00',
    order: 39
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '04:30',
    end_time: '05:30',
    order: 40
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '05:00',
    end_time: '06:00',
    order: 41
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '05:30',
    end_time: '06:30',
    order: 42
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '06:00',
    end_time: '07:00',
    order: 43
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '06:30',
    end_time: '07:30',
    order: 44
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '07:00',
    end_time: '08:00',
    order: 45
  },
  {
    day: 'Tuesday',
    slot_type: 'BOTH',
    start_time: '07:30',
    end_time: '08:30',
    order: 46
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '08:00',
    end_time: '09:00',
    order: -1
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '08:30',
    end_time: '09:30',
    order: 0
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '09:00',
    end_time: '10:00',
    order: 1
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '09:30',
    end_time: '10:30',
    order: 2
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '10:00',
    end_time: '11:00',
    order: 3
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '10:30',
    end_time: '11:30',
    order: 4
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '11:00',
    end_time: '12:00',
    order: 5
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '11:30',
    end_time: '12:30',
    order: 6
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '12:00',
    end_time: '13:00',
    order: 7
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '12:30',
    end_time: '13:30',
    order: 8
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '13:00',
    end_time: '14:00',
    order: 9
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '13:30',
    end_time: '14:30',
    order: 10
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '14:00',
    end_time: '15:00',
    order: 11
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '14:30',
    end_time: '15:30',
    order: 12
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '15:00',
    end_time: '16:00',
    order: 13
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '15:30',
    end_time: '16:30',
    order: 14
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '16:00',
    end_time: '17:00',
    order: 15
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '16:30',
    end_time: '17:30',
    order: 16
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '17:00',
    end_time: '18:00',
    order: 17
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '17:30',
    end_time: '18:30',
    order: 18
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '18:00',
    end_time: '19:00',
    order: 19
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '18:30',
    end_time: '19:30',
    order: 20
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '19:00',
    end_time: '20:00',
    order: 21
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '19:30',
    end_time: '20:30',
    order: 22
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '20:00',
    end_time: '21:00',
    order: 23
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '20:30',
    end_time: '21:30',
    order: 24
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '21:00',
    end_time: '22:00',
    order: 25
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '21:30',
    end_time: '22:30',
    order: 26
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '22:00',
    end_time: '23:00',
    order: 27
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '22:30',
    end_time: '23:30',
    order: 28
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '23:00',
    end_time: '00:00',
    order: 29
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '23:30',
    end_time: '00:30',
    order: 30
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '00:00',
    end_time: '01:00',
    order: 31
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '00:30',
    end_time: '01:30',
    order: 32
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '01:00',
    end_time: '02:00',
    order: 33
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '01:30',
    end_time: '02:30',
    order: 34
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '02:00',
    end_time: '03:00',
    order: 35
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '02:30',
    end_time: '03:30',
    order: 36
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '03:00',
    end_time: '04:00',
    order: 37
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '03:30',
    end_time: '04:30',
    order: 38
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '04:00',
    end_time: '05:00',
    order: 39
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '04:30',
    end_time: '05:30',
    order: 40
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '05:00',
    end_time: '06:00',
    order: 41
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '05:30',
    end_time: '06:30',
    order: 42
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '06:00',
    end_time: '07:00',
    order: 43
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '06:30',
    end_time: '07:30',
    order: 44
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '07:00',
    end_time: '08:00',
    order: 45
  },
  {
    day: 'Wednesday',
    slot_type: 'BOTH',
    start_time: '07:30',
    end_time: '08:30',
    order: 46
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '08:00',
    end_time: '09:00',
    order: -1
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '08:30',
    end_time: '09:30',
    order: 0
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '09:00',
    end_time: '10:00',
    order: 1
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '09:30',
    end_time: '10:30',
    order: 2
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '10:00',
    end_time: '11:00',
    order: 3
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '10:30',
    end_time: '11:30',
    order: 4
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '11:00',
    end_time: '12:00',
    order: 5
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '11:30',
    end_time: '12:30',
    order: 6
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '12:00',
    end_time: '13:00',
    order: 7
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '12:30',
    end_time: '13:30',
    order: 8
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '13:00',
    end_time: '14:00',
    order: 9
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '13:30',
    end_time: '14:30',
    order: 10
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '14:00',
    end_time: '15:00',
    order: 11
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '14:30',
    end_time: '15:30',
    order: 12
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '15:00',
    end_time: '16:00',
    order: 13
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '15:30',
    end_time: '16:30',
    order: 14
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '16:00',
    end_time: '17:00',
    order: 15
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '16:30',
    end_time: '17:30',
    order: 16
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '17:00',
    end_time: '18:00',
    order: 17
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '17:30',
    end_time: '18:30',
    order: 18
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '18:00',
    end_time: '19:00',
    order: 19
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '18:30',
    end_time: '19:30',
    order: 20
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '19:00',
    end_time: '20:00',
    order: 21
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '19:30',
    end_time: '20:30',
    order: 22
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '20:00',
    end_time: '21:00',
    order: 23
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '20:30',
    end_time: '21:30',
    order: 24
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '21:00',
    end_time: '22:00',
    order: 25
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '21:30',
    end_time: '22:30',
    order: 26
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '22:00',
    end_time: '23:00',
    order: 27
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '22:30',
    end_time: '23:30',
    order: 28
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '23:00',
    end_time: '00:00',
    order: 29
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '23:30',
    end_time: '00:30',
    order: 30
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '00:00',
    end_time: '01:00',
    order: 31
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '00:30',
    end_time: '01:30',
    order: 32
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '01:00',
    end_time: '02:00',
    order: 33
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '01:30',
    end_time: '02:30',
    order: 34
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '02:00',
    end_time: '03:00',
    order: 35
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '02:30',
    end_time: '03:30',
    order: 36
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '03:00',
    end_time: '04:00',
    order: 37
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '03:30',
    end_time: '04:30',
    order: 38
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '04:00',
    end_time: '05:00',
    order: 39
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '04:30',
    end_time: '05:30',
    order: 40
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '05:00',
    end_time: '06:00',
    order: 41
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '05:30',
    end_time: '06:30',
    order: 42
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '06:00',
    end_time: '07:00',
    order: 43
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '06:30',
    end_time: '07:30',
    order: 44
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '07:00',
    end_time: '08:00',
    order: 45
  },
  {
    day: 'Thursday',
    slot_type: 'BOTH',
    start_time: '07:30',
    end_time: '08:30',
    order: 46
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '08:00',
    end_time: '09:00',
    order: -1
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '08:30',
    end_time: '09:30',
    order: 0
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '09:00',
    end_time: '10:00',
    order: 1
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '09:30',
    end_time: '10:30',
    order: 2
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '10:00',
    end_time: '11:00',
    order: 3
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '10:30',
    end_time: '11:30',
    order: 4
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '11:00',
    end_time: '12:00',
    order: 5
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '11:30',
    end_time: '12:30',
    order: 6
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '12:00',
    end_time: '13:00',
    order: 7
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '12:30',
    end_time: '13:30',
    order: 8
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '13:00',
    end_time: '14:00',
    order: 9
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '13:30',
    end_time: '14:30',
    order: 10
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '14:00',
    end_time: '15:00',
    order: 11
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '14:30',
    end_time: '15:30',
    order: 12
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '15:00',
    end_time: '16:00',
    order: 13
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '15:30',
    end_time: '16:30',
    order: 14
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '16:00',
    end_time: '17:00',
    order: 15
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '16:30',
    end_time: '17:30',
    order: 16
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '17:00',
    end_time: '18:00',
    order: 17
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '17:30',
    end_time: '18:30',
    order: 18
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '18:00',
    end_time: '19:00',
    order: 19
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '18:30',
    end_time: '19:30',
    order: 20
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '19:00',
    end_time: '20:00',
    order: 21
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '19:30',
    end_time: '20:30',
    order: 22
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '20:00',
    end_time: '21:00',
    order: 23
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '20:30',
    end_time: '21:30',
    order: 24
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '21:00',
    end_time: '22:00',
    order: 25
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '21:30',
    end_time: '22:30',
    order: 26
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '22:00',
    end_time: '23:00',
    order: 27
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '22:30',
    end_time: '23:30',
    order: 28
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '23:00',
    end_time: '00:00',
    order: 29
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '23:30',
    end_time: '00:30',
    order: 30
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '00:00',
    end_time: '01:00',
    order: 31
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '00:30',
    end_time: '01:30',
    order: 32
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '01:00',
    end_time: '02:00',
    order: 33
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '01:30',
    end_time: '02:30',
    order: 34
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '02:00',
    end_time: '03:00',
    order: 35
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '02:30',
    end_time: '03:30',
    order: 36
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '03:00',
    end_time: '04:00',
    order: 37
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '03:30',
    end_time: '04:30',
    order: 38
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '04:00',
    end_time: '05:00',
    order: 39
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '04:30',
    end_time: '05:30',
    order: 40
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '05:00',
    end_time: '06:00',
    order: 41
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '05:30',
    end_time: '06:30',
    order: 42
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '06:00',
    end_time: '07:00',
    order: 43
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '06:30',
    end_time: '07:30',
    order: 44
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '07:00',
    end_time: '08:00',
    order: 45
  },
  {
    day: 'Friday',
    slot_type: 'BOTH',
    start_time: '07:30',
    end_time: '08:30',
    order: 46
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '08:00',
    end_time: '09:00',
    order: -1
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '08:30',
    end_time: '09:30',
    order: 0
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '09:00',
    end_time: '10:00',
    order: 1
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '09:30',
    end_time: '10:30',
    order: 2
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '10:00',
    end_time: '11:00',
    order: 3
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '10:30',
    end_time: '11:30',
    order: 4
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '11:00',
    end_time: '12:00',
    order: 5
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '11:30',
    end_time: '12:30',
    order: 6
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '12:00',
    end_time: '13:00',
    order: 7
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '12:30',
    end_time: '13:30',
    order: 8
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '13:00',
    end_time: '14:00',
    order: 9
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '13:30',
    end_time: '14:30',
    order: 10
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '14:00',
    end_time: '15:00',
    order: 11
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '14:30',
    end_time: '15:30',
    order: 12
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '15:00',
    end_time: '16:00',
    order: 13
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '15:30',
    end_time: '16:30',
    order: 14
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '16:00',
    end_time: '17:00',
    order: 15
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '16:30',
    end_time: '17:30',
    order: 16
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '17:00',
    end_time: '18:00',
    order: 17
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '17:30',
    end_time: '18:30',
    order: 18
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '18:00',
    end_time: '19:00',
    order: 19
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '18:30',
    end_time: '19:30',
    order: 20
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '19:00',
    end_time: '20:00',
    order: 21
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '19:30',
    end_time: '20:30',
    order: 22
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '20:00',
    end_time: '21:00',
    order: 23
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '20:30',
    end_time: '21:30',
    order: 24
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '21:00',
    end_time: '22:00',
    order: 25
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '21:30',
    end_time: '22:30',
    order: 26
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '22:00',
    end_time: '23:00',
    order: 27
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '22:30',
    end_time: '23:30',
    order: 28
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '23:00',
    end_time: '00:00',
    order: 29
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '23:30',
    end_time: '00:30',
    order: 30
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '00:00',
    end_time: '01:00',
    order: 31
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '00:30',
    end_time: '01:30',
    order: 32
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '01:00',
    end_time: '02:00',
    order: 33
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '01:30',
    end_time: '02:30',
    order: 34
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '02:00',
    end_time: '03:00',
    order: 35
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '02:30',
    end_time: '03:30',
    order: 36
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '03:00',
    end_time: '04:00',
    order: 37
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '03:30',
    end_time: '04:30',
    order: 38
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '04:00',
    end_time: '05:00',
    order: 39
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '04:30',
    end_time: '05:30',
    order: 40
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '05:00',
    end_time: '06:00',
    order: 41
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '05:30',
    end_time: '06:30',
    order: 42
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '06:00',
    end_time: '07:00',
    order: 43
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '06:30',
    end_time: '07:30',
    order: 44
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '07:00',
    end_time: '08:00',
    order: 45
  },
  {
    day: 'Saturday',
    slot_type: 'BOTH',
    start_time: '07:30',
    end_time: '08:30',
    order: 46
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '08:00',
    end_time: '09:00',
    order: -1
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '08:30',
    end_time: '09:30',
    order: 0
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '09:00',
    end_time: '10:00',
    order: 1
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '09:30',
    end_time: '10:30',
    order: 2
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '10:00',
    end_time: '11:00',
    order: 3
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '10:30',
    end_time: '11:30',
    order: 4
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '11:00',
    end_time: '12:00',
    order: 5
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '11:30',
    end_time: '12:30',
    order: 6
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '12:00',
    end_time: '13:00',
    order: 7
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '12:30',
    end_time: '13:30',
    order: 8
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '13:00',
    end_time: '14:00',
    order: 9
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '13:30',
    end_time: '14:30',
    order: 10
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '14:00',
    end_time: '15:00',
    order: 11
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '14:30',
    end_time: '15:30',
    order: 12
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '15:00',
    end_time: '16:00',
    order: 13
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '15:30',
    end_time: '16:30',
    order: 14
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '16:00',
    end_time: '17:00',
    order: 15
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '16:30',
    end_time: '17:30',
    order: 16
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '17:00',
    end_time: '18:00',
    order: 17
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '17:30',
    end_time: '18:30',
    order: 18
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '18:00',
    end_time: '19:00',
    order: 19
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '18:30',
    end_time: '19:30',
    order: 20
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '19:00',
    end_time: '20:00',
    order: 21
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '19:30',
    end_time: '20:30',
    order: 22
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '20:00',
    end_time: '21:00',
    order: 23
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '20:30',
    end_time: '21:30',
    order: 24
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '21:00',
    end_time: '22:00',
    order: 25
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '21:30',
    end_time: '22:30',
    order: 26
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '22:00',
    end_time: '23:00',
    order: 27
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '22:30',
    end_time: '23:30',
    order: 28
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '23:00',
    end_time: '00:00',
    order: 29
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '23:30',
    end_time: '00:30',
    order: 30
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '00:00',
    end_time: '01:00',
    order: 31
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '00:30',
    end_time: '01:30',
    order: 32
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '01:00',
    end_time: '02:00',
    order: 33
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '01:30',
    end_time: '02:30',
    order: 34
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '02:00',
    end_time: '03:00',
    order: 35
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '02:30',
    end_time: '03:30',
    order: 36
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '03:00',
    end_time: '04:00',
    order: 37
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '03:30',
    end_time: '04:30',
    order: 38
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '04:00',
    end_time: '05:00',
    order: 39
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '04:30',
    end_time: '05:30',
    order: 40
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '05:00',
    end_time: '06:00',
    order: 41
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '05:30',
    end_time: '06:30',
    order: 42
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '06:00',
    end_time: '07:00',
    order: 43
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '06:30',
    end_time: '07:30',
    order: 44
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '07:00',
    end_time: '08:00',
    order: 45
  },
  {
    day: 'Sunday',
    slot_type: 'BOTH',
    start_time: '07:30',
    end_time: '08:30',
    order: 46
  }
]

module.exports = userId => {
  return slots.map(slot => {
    return {
      day: slot.day,
      type: slot.slot_type,
      order: slot.order,
      start_time: slot.start_time,
      end_time: slot.end_time,
      id: uidv4(),
      slot_config_type: 'day_wise',
      created_by: userId,
      updated_by: userId,
      created_at: new Date(),
      updated_at: new Date()
    }
  })
}
