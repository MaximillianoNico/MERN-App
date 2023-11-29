import { Button, Input, Typography, Alert } from 'antd';

import Layout from "../components/layout"
import { useParams } from 'react-router-dom';
import { useSchedule } from '../actions';

const Screen = () => {
  const { errors, newSchedule, onChangeAddSchedule, onUpdate } = useSchedule();
  const params = useParams();
  return (
    <Layout>
      <div className="add-form-container">
        <h3>Update Schedule</h3>
        {errors && <Alert message={errors} type="error" />}

        <div className='divider'></div>
        <Typography>Schedule ID</Typography>
        <Input value={params?.id} disabled name="scheduleId" style={{ marginTop: 4, marginBottom: 4 }} placeholder='Set Schedule' type="text" />

        <div className='divider'></div>
        <Typography>Schedule Date</Typography>
        <Input value={newSchedule.scheduleDate} onChange={onChangeAddSchedule} name="scheduleDate" style={{ marginTop: 4, marginBottom: 4 }} placeholder='Set Schedule' type="date" />

        <div className='divider'></div>
        <Typography>Description</Typography>
        <Input value={newSchedule.description} onChange={onChangeAddSchedule} name="description" style={{ marginTop: 4, marginBottom: 4 }} placeholder='description' type="text" />
        
        <div className='divider'></div>
        <Button onClick={() => onUpdate(params?.id ?? "")} type="primary">Submit</Button>
      </div>
    </Layout>
  )
}

export default Screen;
