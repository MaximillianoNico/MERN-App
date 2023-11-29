import { useEffect, useState } from "react";
import Axios from 'axios';

export const TABS = {
  LIST: 'list',
  ADD: 'add',
  EDIT: 'edit'
}

export const useTab = () => {
  const [tab, setTab] = useState(TABS.LIST);

  const onChangeTab = (tab: string) => setTab(tab);

  return {
    tab,
    onChangeTab
  }
}

export const useSchedule = () => {
  const [schedules, setSchedules] = useState([]);
  const [errors, setErrors] = useState("");
  const [newSchedule, setNewSchedule] = useState({
    description: "",
    scheduleDate: ""
  })

  const GetSchedules = async () => {
    try {
      const response = await Axios.get('http://localhost:8080/api/schedules')

      if (response.status !== 200) throw new Error("Something went wrong");

      setSchedules(response?.data?.data)
    } catch (err) {
      console.log('ERR: ', err)
    }
  }

  useEffect(() => {
    GetSchedules();
  }, []);

  const onDelete = async (id: string) => {
    try {
      await Axios.delete(
        'http://localhost:8080/api/schedules/delete',
        {
          data: {
            username: 'user-1',
            scheduleId: id
          }
        }
      )

      alert('Success Delete');
      GetSchedules();
    } catch (err) {
      alert(err)
    }
  }

  const onCreate = async () => {
    try {

      if (!newSchedule.scheduleDate) {
        setErrors("Schedule date is required");

        return;
      }

      if (!newSchedule.description) {
        setErrors("Description cannot be empty");

        return;
      }
      
      await Axios.post(
        'http://localhost:8080/api/schedules/add',
        {
          username: 'user-1',
          scheduleDate: newSchedule.scheduleDate,
          description: newSchedule.description
        }
      )

      setErrors("");
      alert('Success Add');

      GetSchedules();
    } catch (err) {
      alert(err)
    }
  }

  const onUpdate = async (scheduleId: string) => {
    try {
      if (!newSchedule.description) {
        setErrors("Description cannot be empty");

        return;
      }
      await Axios.put(
        'http://localhost:8080/api/schedules/update',
        {
          username: 'user-1',
          scheduleId: scheduleId,
          scheduleDate: newSchedule.scheduleDate,
          description: newSchedule.description
        }
      )
      
      setErrors("");
      alert('Success Update');

      // Refetch
      GetSchedules();
    } catch (err) {
      alert(err)
    }
  }

  const onChangeAddSchedule = (e: any) => {
    setNewSchedule(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return {
    errors,
    schedules,
    newSchedule,
    onDelete,
    onCreate,
    onUpdate,
    onChangeAddSchedule
  }
}