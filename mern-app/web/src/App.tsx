import './App.css';
import dayjs from 'dayjs';
import { Button, Flex, Input } from 'antd';
import { TABS, useSchedule, useTab } from './actions';

function App() {
  const { tab, onChangeTab } = useTab();
  const { schedules, onDelete, onChangeAddSchedule } = useSchedule();

  return (
    <div className="container">
      <div>
      <header className="tabs">
        <div onClick={() => onChangeTab("list")} className={`tab ${tab ===TABS.LIST ? "active" : ""}`}>List</div>
        <div onClick={() => onChangeTab("add")} className={`tab ${tab ===TABS.ADD ? "active" : ""}`}>Add</div>
        <div onClick={() => onChangeTab("edit")} className={`tab ${tab ===TABS.EDIT ? "active" : ""}`}>Edit</div>
      </header>
      <div className='content'>
        {tab === TABS.LIST && (
          <>
            <h3>Schedule</h3>
            {!!schedules.length && schedules.map(
              ({ scheduleDate, description, _id }) => (
                <div className='items'>
                  <div><b>{description}</b></div>
                  <div>{dayjs(scheduleDate).format('YYYY-MM-DD hh:mm:s')}</div>

                  <Flex style={{ columnGap: 10 }}>
                    <Button onClick={() => onDelete(_id)} style={{ marginTop: 10 }} type="primary">Delete</Button>
                    <Button style={{ marginTop: 10 }} type="primary">Update</Button>
                  </Flex>
                </div>
              )
            )}
          </>
        )}
        {tab === TABS.ADD && (
          <>
            <h3>Add New Schedule</h3>
            <Input name="scheduleDate" onChange={onChangeAddSchedule} style={{ marginTop: 4, marginBottom: 4 }} placeholder='Set Schedule' type="date" />
            <Input name="description" onChange={onChangeAddSchedule} style={{ marginTop: 4, marginBottom: 4 }} placeholder='description' type="text" />
            <Button type="primary">Submit</Button>
          </>
        )}

        {tab === TABS.EDIT && (
          <>
            <h3>Edit</h3>
          </>
        )}
      </div>
      </div>
      
    </div>
  );
}

export default App;
