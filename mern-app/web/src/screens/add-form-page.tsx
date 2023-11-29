import { Button, Input, Alert } from 'antd';
import { useSchedule } from "../actions";
import Layout from "../components/layout"
import "../App.css"

const Screen = () => {
  const { errors ,newSchedule, onChangeAddSchedule, onCreate } = useSchedule();
  return (
    <Layout>
      <div className="add-form-container">
        <h3>Add New Schedule</h3>
        {errors && <Alert message={errors} type="error" />}

        <Input
          value={newSchedule.scheduleDate}
          name="scheduleDate"
          onChange={onChangeAddSchedule}
          style={{ marginTop: 4, marginBottom: 4 }}
          placeholder='Set Schedule'
          type="date"
        />
        <Input
          value={newSchedule.description}
          name="description"
          onChange={onChangeAddSchedule}
          style={{ marginTop: 4, marginBottom: 4 }}
          placeholder='description' type="text"
        />
        <Button onClick={onCreate} type="primary">Submit</Button>
      </div>
    </Layout>
  )
}

export default Screen;
