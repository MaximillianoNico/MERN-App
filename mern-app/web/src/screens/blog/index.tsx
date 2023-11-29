import { Typography, Card, Input } from "antd"
import { SearchOutlined } from '@ant-design/icons';
import Layout from "../../components/layout"
import { useAction } from "./actions";

const Screen = () => {
  const { search ,content, onSearch } = useAction();
  return (
    <Layout>
      <Typography.Title>
        Blog
      </Typography.Title>
      <div style={{ margin: '20px 0px'}}>
        <Input onChange={onSearch} placeholder="" prefix={<SearchOutlined />} />
      </div>
      {search && (
        <Typography.Title level={4}>
          {content.length} result for {search}
        </Typography.Title>
      )}
      <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', columnGap: 10, rowGap: 10 }}>
        {!!content?.length && content.map(
          ({ content, title }) => (
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
              <Card.Meta title={title} description={content} />
            </Card>
          )
        )}
      </div>
    </Layout>
  )
}

export default Screen;