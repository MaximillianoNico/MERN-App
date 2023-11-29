import dayjs from 'dayjs';
import { Button, Flex, Typography } from 'antd';
import { useSchedule } from "../actions";
import Layout from "../components/layout"
import { useNavigate } from 'react-router-dom';

const Screen = () => {
  const navigate = useNavigate();
  const { schedules, onDelete } = useSchedule();

  return (
    <Layout>
        <h3>Schedule</h3>
        {!!schedules.length ? schedules.map(
          ({ scheduleDate, description, _id }) => (
            <div key={_id} className='items'>
              <div><b>{description}</b></div>
              <div>{dayjs(scheduleDate).format('YYYY-MM-DD hh:mm:s')}</div>

              <Flex style={{ columnGap: 10 }}>
              <Button onClick={() => onDelete(_id)} style={{ marginTop: 10 }} type="primary">Delete</Button>
              <Button onClick={() => navigate(`/update/${_id}`)} style={{ marginTop: 10 }} type="primary">Update</Button>
              </Flex>
            </div>
          )
        ) : (
          <Typography>No Schedule</Typography>
        )}
    </Layout>
  )
}

export default Screen;
